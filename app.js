import {sources,corrections,samples} from './data.js';
import {initialState,surgical,diagnostic,regimen,safety,timeline,oral,continuation,summary} from './engine.js';
import {organisms} from './data.js';
let state={...initialState},step=0;
const $=id=>document.getElementById(id);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tri=[['unknown','尚未確認'],['no','否'],['yes','是']];
const yes=[['unknown','尚未確認'],['yes','是／已完成'],['no','否／未完成']];
const select=(key,label,options,hint='',full=false)=>({key,label,options,hint,full});
const number=(key,label,hint='',max=1000,min=0)=>({key,label,type:'number',hint,max,min});
const date=(key,label,hint='')=>({key,label,type:'date',hint});
const steps=[
 {title:'急症與手術',short:'急迫性',sub:'先排除不能等待的情境。',fields:[
 select('hf','瓣膜病變相關心衰竭',[['unknown','尚未確認'],['none','無'],['symptomatic','有症狀／嚴重逆流'],['refractory','難治肺水腫／心因性休克']]),select('unstable','血行動力學不穩／休克',tri),select('abscess','心臟膿瘍／廔管／瓣周侵犯',tri),select('persistent','有效治療下仍持續菌血症',tri,'確認有效治療天數；48–72 小時仍陽性即須重新評估。'),select('embolism','反覆栓塞／高栓塞風險',tri),select('neuro','神經狀態',[['unknown','尚未確認'],['none','無神經併發症'],['small','小型缺血、無出血／明顯缺損'],['major','重大缺血性中風'],['bleed','顱內出血／出血性轉化'],['coma','昏迷']]),number('vegetation','最大贅生物（mm）','輸入影像測量；另需團隊判斷活動度與位置。',100)]},
 {title:'確認診斷與解剖',short:'診斷',sub:'將培養、影像與臨床判斷放在同一個脈絡。',fields:[
 select('valve','感染發生時的瓣膜',[['unknown','尚未確認'],['native','原生瓣膜 NVE'],['prosthetic','人工瓣膜／TAVR PVE']],'NVE 治療途中置換瓣膜，不自動改成 PVE 處方。'),select('side','感染側別',[['unknown','尚未確認'],['left','左側'],['right','孤立右側'],['both','雙側']]),select('cied','有 CIED（節律器／ICD）',tri),select('cultures','已完成足量血液培養',yes),select('echo','超音波結果',[['unknown','尚未檢查／未知'],['positive','支持 IE'],['negative','未見病灶'],['inconclusive','不明確']]),select('diagnosis','臨床團隊的診斷狀態',[['unknown','尚未分類'],['suspected','疑似／possible IE'],['confirmed','已確診 IE']],'依完整 2023 Duke–ISCVID 及臨床評估，非此工具自動確診。')]},
 {title:'依病原選擇治療',short:'病原治療',sub:'先核對藥敏，再討論最合適的靜脈方案。',fields:[
 select('organism','病原',Object.entries(organisms),'未鑑定與培養陰性者走診斷／經驗治療評估。',true),select('susceptibility','候選主藥的敏感性已確認',yes,'單一「是」不取代完整 MIC 報告，轉口服仍需逐藥核對。'),select('allergy','β-lactam 過敏',[['unknown','尚未釐清'],['none','無已知過敏'],['mild','非嚴重延遲型／須評估'],['severe','立即型嚴重過敏或 SCAR']]),number('penMIC','Penicillin MIC（mg/L）','鏈球菌必填；以微生物室標準判讀。',128),number('cefMIC','Ceftriaxone MIC（mg/L）','鏈球菌必填；>0.5 不自動建議單藥。',128)]},
 {title:'腎功能與用藥安全',short:'腎臟安全',sub:'參考劑量轉成處方前，必須完成個別化核定。',fields:[
 select('renal','目前腎功能／腎臟替代治療',[['unknown','尚未確認'],['stable','穩定腎功能（含穩定 CKD）'],['aki','AKI／creatinine 變動中'],['hd','間歇 HD／HHD'],['pd','PD（CAPD／APD）'],['crrt','CRRT／PIRRT：需另核處方']]),number('crcl','藥物劑量用 CrCl（mL/min）','穩態時填；不是直接複製 eGFR mL/min/1.73m²。',250),number('weight','體重（kg）','用於 BMI 及體重劑量檢核；體液過多需另判乾體重。',300,1),number('height','身高（cm）','供口服轉換 BMI 檢核。',250,50),select('ufh','需要靜脈 UFH（含體外循環）',tri,'HD／CRRT／ECMO 也須確認。'),select('interactions','仍有未解決的重要交互作用',tri,'核對 warfarin／DOAC、免疫抑制劑、statin、血清素與 QT 藥物。')]},
 {title:'療程與感染源控制',short:'療程',sub:'計算最早複評日期，並確認哪些情況需要延長。',fields:[
 select('cleared','菌血症已清除',yes,'首次陰性培養需後續無再陽性支持。'),date('negativeDate','首次陰性血培養採样日期','首次陰性採樣日為累計有效療程第 1 天。'),select('surgery','本療程內接受瓣膜手術',tri),date('surgeryDate','瓣膜手術日期','手術日視為術後第 0 天；AHA 最低再治療 14 個完整日。'),number('duration','團隊選定總療程（週）','空白採 AHA 基準；若填入不得短於基準。黴菌不自動計算。',52,1),select('metastatic','有／未排除轉移性感染灶',tri,'如脊椎感染、脾膿瘍、腦膿瘍；需個別療程。'),select('sourceControl','感染源控制已完成',yes,'手術、導管／装置移除、引流等按個案需要完成。')]},
 {title:'出院與延續治療',short:'轉換與追蹤',sub:'逐項檢核 POET 條件，通過後仍需感染科確認實際組合。',fields:[
 number('ivDays','適當 IV 治療已完成天數','有效抗生素 ≥10 天。',365),number('daysPost','若已手術，術後天數','需 ≥7 天；未手術者免填。',365),number('afebrile','連續無發燒天數','至少 3 天。',365),number('crp','目前 CRP（mg/L）','若原值 mg/dL，乘 10 後填入。',1000),number('crpPeak','CRP 高峰（mg/L）','用來計算目前值是否 <高峰 25%。',1000),number('wbc','WBC（×10⁹/L）','例如 9000/µL 填 9。',300),number('teeDays','距安全 TEE 的天數','轉換前 2 天內；必須是 TEE，非僅 TTE。',365),select('teeSafe','TEE 無進展、膿瘍或新手術適應症',yes),select('absorb','能吸收並耐受口服藥',yes),select('adherence','病人能可靠按時服藥',yes),select('otherIV','同時有其他需 IV 治療的感染',tri),select('followup','已安排密切追蹤與抽血',yes)]}
];
function fieldHTML(f){
 if(step===2&&['penMIC','cefMIC'].includes(f.key)&&state.organism!=='strep')return '';
 const id=f.key,value=state[id];
 return `<div class="field ${f.full?'full':''}"><label for="${id}">${esc(f.label)}</label>${f.options?`<select id="${id}" name="${id}" ${f.hint?`aria-describedby="hint-${id}"`:''}>${f.options.map(([v,t])=>`<option value="${esc(v)}" ${value===v?'selected':''}>${esc(t)}</option>`).join('')}</select>`:`<input id="${id}" name="${id}" type="${f.type}" value="${esc(value)}" ${f.type==='number'?`min="${f.min}" max="${f.max}" step="any" inputmode="decimal"`:''} ${f.hint?`aria-describedby="hint-${id}"`:''}>`}${f.hint?`<small id="hint-${id}">${esc(f.hint)}</small>`:''}</div>`;
}
const list=xs=>`<ul>${xs.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
function invalid(){
 const result=[];
 for(const def of steps.flatMap(x=>x.fields)){
  const v=state[def.key];if(def.type==='number'&&v!==''&&(!Number.isFinite(Number(v))||Number(v)<def.min||Number(v)>def.max))result.push(`${def.label} 請填 ${def.min}–${def.max}。`);
  if(def.type==='date'&&v&&v>new Date().toISOString().slice(0,10))result.push(`${def.label} 不應是未來日期。`);
 }
 if(state.crp!==''&&state.crpPeak!==''&&Number(state.crp)>Number(state.crpPeak))result.push('目前 CRP 超過高峰，請確認高峰資料。');
 if(state.surgery==='yes'&&state.ivDays!==''&&state.daysPost!==''&&Number(state.daysPost)>Number(state.ivDays))result.push('術後天數超過已完成 IV 天數，請確認是否有口服治療或資料錯置；此工具以初始 IV 轉換評估。');
 return result;
}
function update(){
 const bad=invalid();$('inputErrors').innerHTML=bad.map(x=>`<p>${esc(x)}</p>`).join('');
 const u=surgical(state),r=regimen(state),t=timeline(state),o=oral(state);
 $('globalAlert').innerHTML=u.level==='emergency'?'<div class="notice danger"><b>立即處理：有休克／難治心衰竭觸發條件</b>現在就聯絡心臟外科、感染科及加護團隊；不要等到流程最後一步。</div>':u.level==='urgent'?'<div class="notice"><b>有感染源控制／急迫手術评估條件</b>請在推導抗生素同時啟動心內膜炎團隊討論。</div>':'';
 if(bad.length){$('reason').innerHTML='<div class="notice danger">輸入值不合理，請先修正。暫停顯示此病例的治療推導。</div>';$('summary').textContent='資料需要修正：\n'+bad.join('\n');$('download').disabled=true;$('print').disabled=true;return;}
 $('download').disabled=false;$('print').disabled=false;
 let html='';
 if(step===0)html=list(u.messages)+`<p class="reference">依據：ESC 2023 §8–9；AHA 2026 e18–19。${u.missing.length?'仍有 '+u.missing.length+' 項急症資料待補。':''}</p>`;
 if(step===1)html=list(diagnostic(state))+'<p class="reference">依據：Duke–ISCVID 2023；AHA BCNE 2025；ESC 2023 診斷流程。</p>';
 if(step===2)html=`<h3>${esc(r.title)}</h3><p class="reference">成人正常腎功能參考；需藥敏與藥師核定，不是病人實際處方。</p>${r.drugs.map(x=>`<div class="drug">${esc(x)}</div>`).join('')}${list(r.notes)}<p class="reference">依據：AHA 2026 Table 1–4；ESC 2023；IDSA 黴菌指引。基準週數：${r.weeks??'個別化'}。</p>`;
 if(step===3)html=list(safety(state))+'<p class="reference">依據：Vancomycin 2020；ORBACTIV 仿單；AHA 2026。透析個別劑量需院內藥師核定。</p>';
 if(step===4)html=`<div class="notice ${t.end?'good':''}"><b>${t.end?'最早複評日期：'+esc(t.end):'目前不提供停藥日期'}</b>${t.end?`${t.days} 個累計日；日期不等於停藥指示。`:'先補齊必要資訊，或由團隊制定特殊療程。'}</div>${list(t.notes)}<p class="reference">依據：AHA 2026 e17；ESC 2023 §7.1（兩者術後規則不同）。</p>`;
 if(step===5)html=`<div class="notice ${o.status==='candidate'?'good':''}"><b>${{candidate:'可進入團隊口服評估',blocked:'目前不宜依本路徑轉口服',incomplete:'資料不足，不能判定'}[o.status]}</b>本工具採比最低 POET 條件更保守的感染源控制與安全初篩。</div>${list(continuation(state))}<table class="checklist"><thead><tr><th scope="col">條件</th><th scope="col">結果</th><th scope="col">判斷依據</th></tr></thead><tbody>${o.checks.map(x=>`<tr><td>${esc(x.label)}</td><td class="${x.status}">${{pass:'通過',fail:'未通過',missing:'待補'}[x.status]}</td><td>${esc(x.detail)}</td></tr>`).join('')}</tbody></table><p class="reference">依據：AHA 2026 Table 5；POET；DOTS；ORBACTIV。通過僅代表可以評估，並非處方。</p>`;
 $('reason').innerHTML=html;$('summary').textContent=summary(state);
}
function render(){
 $('steps').innerHTML=steps.map((x,i)=>`<li><button data-step="${i}" ${i===step?'class="current" aria-current="step"':''}><span>${i+1}</span><span>${x.short}</span></button></li>`).join('');
 $('stepNumber').textContent=String(step+1).padStart(2,'0');$('stepTitle').textContent=steps[step].title;$('stepSubtitle').textContent=steps[step].sub;
 $('fields').className='fields';$('fields').innerHTML=steps[step].fields.map(fieldHTML).join('');$('back').disabled=step===0;$('next').textContent=step===5?'查看整合摘要':'下一步';update();
}
$('fields').addEventListener('input',e=>{if(!e.target.name)return;state[e.target.name]=e.target.value;if(e.target.name==='organism'){render();}else update();});
$('fields').addEventListener('submit',e=>e.preventDefault());
$('steps').addEventListener('click',e=>{const b=e.target.closest('[data-step]');if(b){step=Number(b.dataset.step);render();}});
$('back').addEventListener('click',()=>{if(step>0){step--;render();}});
$('next').addEventListener('click',()=>{if(step<5){step++;render();document.querySelector('.stepTitle').scrollIntoView({block:'start'});}else document.querySelector('.summary').scrollIntoView({block:'start'});});
$('sample').addEventListener('change',e=>{if(!samples[e.target.value])return;state={...initialState,...samples[e.target.value].state};if(e.target.value==='stable')state.negativeDate='2026-09-27';step=0;$('demo').textContent='教學資料，非真實病人';render();});
$('reset').addEventListener('click',()=>{state={...initialState};step=0;$('sample').value='';$('demo').textContent='';render();});
$('download').addEventListener('click',()=>{const blob=new Blob([summary(state)],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='IE-treatment-summary.txt';a.click();URL.revokeObjectURL(url);});
$('print').addEventListener('click',()=>window.print());
for(const [nav,view] of [['guideNav','guide'],['correctionNav','correctionView'],['sourceNav','sourceView']])$(nav).addEventListener('click',()=>{for(const n of ['guideNav','correctionNav','sourceNav'])$(n).classList.toggle('active',n===nav);for(const v of ['guide','correctionView','sourceView'])$(v).hidden=v!==view;});
$('correctionRows').innerHTML='<p><a href="docs/clinical-guide.md" download="感染性心內膜炎修訂治療指引.md">下載修訂後治療指引</a></p>'+corrections.map(([t,d,s])=>`<article class="correction"><h3>${esc(t)}</h3><div><p>${esc(d)}</p><small>依據：${esc(s)}</small></div></article>`).join('');
$('sourceRows').innerHTML=sources.map(([t,d,u])=>`<article class="source"><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)} ↗</a><p>${esc(d)}</p></article>`).join('');render();
