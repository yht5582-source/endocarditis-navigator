import {organisms} from './data.js';
export const initialState = {hf:'unknown',unstable:'unknown',abscess:'unknown',persistent:'unknown',embolism:'unknown',neuro:'unknown',vegetation:'',valve:'unknown',side:'unknown',cied:'unknown',cultures:'unknown',echo:'unknown',diagnosis:'unknown',organism:'unknown',allergy:'unknown',susceptibility:'unknown',penMIC:'',cefMIC:'',renal:'unknown',crcl:'',weight:'',height:'',ufh:'unknown',interactions:'unknown',metastatic:'unknown',surgery:'unknown',cleared:'unknown',negativeDate:'',surgeryDate:'',duration:'',ivDays:'',daysPost:'',afebrile:'',crp:'',crpPeak:'',wbc:'',teeDays:'',teeSafe:'unknown',absorb:'unknown',adherence:'unknown',otherIV:'unknown',followup:'unknown',sourceControl:'unknown'};
const num=(s,k)=>s[k]!==''&&s[k]!=null&&Number.isFinite(Number(s[k]))?Number(s[k]):null;
const has=(s,k)=>s[k]&&s[k]!=='unknown';
export function surgical(s){
 const messages=[];let level='review';
 if(s.hf==='refractory'||s.unstable==='yes'){level='emergency';messages.push('立即聯絡心臟外科／加護團隊。瓣膜功能障礙造成難治肺水腫或心因性休克時，評估 <24 小時緊急手術；其他休克同時處理敗血症與感染源。不要等待抗生素療程完成。');}
 if(s.abscess==='yes'||s.persistent==='yes'||s.hf==='symptomatic'||s.embolism==='yes'){if(level!=='emergency')level='urgent';messages.push('儘速由心內膜炎團隊評估感染源控制與手術。侵犯性感染、治療下持續菌血症、心衰竭或反覆栓塞屬重要觸發條件；合適者 AHA 偏好 48–72 小時，ESC 急迫手術通常 3–5 天。先核對有效抗生素、導管／遠端膿瘍與菌血症持續天數。');}
 const v=num(s,'vegetation');
 if(v!==null&&v>=10&&s.side==='left')messages.push('左側贅生物 ≥10 mm：結合活動度、瓣膜位置、病原、既往栓塞與手術風險評估，大小本身不等於自動手術。');
 if(v!==null&&v>20&&s.side==='right')messages.push('右側贅生物 >20 mm：特別合併反覆肺栓塞、持續菌血症或呼吸衰竭時评估手術；高風險且藥物失敗者在專業中心討論 PMA。');
 if(s.neuro==='bleed'||s.neuro==='major'){messages.push('重大缺血／顱內出血：神經科與神經外科共同評估影像、嚴重度及預後。穩定者常延後 2–4 週；心衰竭、失控感染或高栓塞風險時可個別考慮早期手術，不以固定等待期取代決策。');}
 if(s.neuro==='small')messages.push('小型缺血性中風且影像無出血、神經功能良好：有明確心臟適應症時通常不必延後。評估感染性動脈瘤與神經預後。');
 if(s.neuro==='coma')messages.push('昏迷：先判斷腦損傷、可逆性、鎮靜及代謝原因；AHA 對昏迷病人的心臟手術持否定立場，但網頁不能代替神經預後／無效醫療評估。');
 if(['bleed','major','small','coma'].includes(s.neuro))messages.push('立即腦 CT／MRI。疑感染性動脈瘤需 CTA／MRA，陰性但高度懷疑時討論 DSA。IE 相關缺血性中風不使用靜脈溶栓；大血管阻塞可由中風團隊評估機械取栓，仍有出血風險。');
 if(s.cied==='yes')messages.push('CIED：確認囊袋、導線與瓣膜。確診裝置感染須完整移除；瓣膜 IE 即使導線無贅生物，也應討論完整移除、依賴度、感染病原與操作風險。');
 if(s.valve==='prosthetic')messages.push('PVE／TAVR：轉介有經驗的瓣膜中心。人工瓣膜本身不是所有病人立即手術的唯一依據；注意功能異常、脫離、膿瘍及持續感染。');
 const missing=['hf','unstable','abscess','persistent','embolism','neuro'].filter(k=>!has(s,k));
 if(!messages.length)messages.push(missing.length?'急症資料尚未完整；未知不能當成陰性。先補齊血行動力學、神經狀態及感染源控制資料。':'目前輸入未顯示明確緊急／急迫觸發條件；仍需連續評估心衰竭、菌血症及栓塞。');
 return {level,messages,missing};
}
export function diagnostic(s){
 const messages=['抗生素前從周邊採集血液培養（通常 3 套）；不因等待採血而延誤休克治療。治療後每 24–48 小時追蹤至轉陰，記錄首次轉陰採樣日期。'];
 if(s.cultures!=='yes')messages.push('補齊培養套數、採樣時間、先前抗生素、病原與藥敏。培養陰性時依暴露史與感染科討論 Coxiella／Bartonella 血清學、T. whipplei 等 PCR、瓣膜組織培養／分子檢查；亦評估非感染性贅生物。');
 messages.push('TTE 是第一線。人工瓣膜、CIED、TTE 陰性但高度懷疑、併發症或左側 IE 通常需 TEE；高品質且明確的孤立右側 NVE 可例外。');
 if(s.echo==='negative'||s.echo==='inconclusive')messages.push('若臨床高度懷疑，5–7 天內重複 TTE／TEE。PVE 可加 FDG-PET/CT；瓣周侵犯／膿瘍可用心臟 CT。陰性影像不單獨排除 IE。');
 if(s.diagnosis!=='confirmed')messages.push('尚未由臨床團隊確診；以下病原方案只供假設性比較。依 2023 Duke–ISCVID 完整判讀，不用單一贅生物或菌血症自動確診。');
 return messages;
}
export function regimen(s){
 let title='先完成病原與藥敏評估',drugs=[],notes=[],weeks=null;
 const p=s.valve==='prosthetic',knownValve=['native','prosthetic'].includes(s.valve);
 const renalUnsafe=s.renal!=='stable'||num(s,'crcl')===null||num(s,'crcl')<60;
 const allergy=s.allergy!=='none';
 if(['mssa','mrsa'].includes(s.organism)){
  title=s.organism==='mssa'?'MSSA／敏感 CoNS':'MRSA／抗藥 CoNS';weeks=knownValve?(p?6:4):null;
  if(s.organism==='mssa'&&!allergy)drugs=['Oxacillin／nafcillin 2 g IV q4h（12 g/day）','或 cefazolin 2 g IV q8h（6 g/day）'];
  else if(s.organism==='mssa'){drugs=['過敏型態未確認：先由感染科／藥師評估是否可用 cefazolin 或其他 β-lactam；嚴重立即型／SCAR 不直接套用。','無法使用 β-lactam 時討論 vancomycin 或 daptomycin。'];}
  else drugs=['Vancomycin：以 AUC／血中濃度調整，不能使用固定 mg/kg/day 通則','或 daptomycin 8–12 mg/kg IV q24h（參考範圍；高劑量由感染科決定）'];
  if(s.organism==='mrsa')notes.push('AHA Table 1 另列 ceftaroline 600 mg q8h、linezolid 600 mg q12h；多為仿單外／特殊替代，救援或合併策略需感染科決策，不視為與首選同等強度證據。');
  if(p)notes.push('不常規加 gentamicin（AHA 已達共識）。Rifampin 未達共識；若團隊採用，菌血症清除且有效治療 5–7 天後才開始，參考 300 mg q8h，檢查肝毒性與交互作用。');
  notes.push('AHA 2026：NVE 4 週、PVE 6 週；ESC 2023 葡萄球菌 NVE 常採 4–6 週。複雜左側感染、轉移灶與感染源控制不足時由團隊選較長療程。');
 }
 if(s.organism==='strep'){
  title='VGS／S. gallolyticus';weeks=knownValve?(p?6:4):null;
  const pen=num(s,'penMIC'),cef=num(s,'cefMIC');
  if(allergy)drugs=['先釐清 β-lactam 過敏；無法使用時由感染科評估 vancomycin（濃度導向）等替代。'];
  else if(pen===null||cef===null){drugs=['尚不足以選定方案：補 penicillin MIC、ceftriaxone MIC 與實驗室 S／I／R 判讀。'];}
  else if(pen<0.12&&s.susceptibility==='yes'&&cef<=0.5){drugs=['Penicillin G 24 million U/day IV，分 4–6 次或持續輸注','或 ceftriaxone 2 g IV q24h'];notes.push('不常規合併 gentamicin；本工具不產生 2 週短療程。');}
  else if(pen>=0.25&&pen<=2&&cef<=0.5&&s.susceptibility==='yes'){drugs=['Ceftriaxone 2 g IV q24h，可由團隊選擇單藥'];notes.push('依 AHA 正文與 SPILF／AEPEI 的敏感 MIC 邏輯。仍需感染科確認病原與實驗室判讀。');}
  else if(pen>=4&&s.susceptibility==='yes'&&cef<=0.5){drugs=['AHA 列 ceftriaxone 2 g IV q24h＋前 2 週 gentamicin；或 vancomycin'];notes.push('高度抗藥方案需感染科／微生物室核對。CKD／AKI／透析不自動給 gentamicin 劑量，需評估替代、TDM 及腎耳毒性。');}
  else{drugs=['MIC／敏感性邊界或 ceftriaxone >0.5 mg/L：停止自動單藥建議，感染科＋微生物室共同決定 β-lactam／合併／替代方案。'];notes.push('原文 Table 2 與正文 MIC 有不一致；不以 >0.5 mg/L 自動判定 ceftriaxone 单藥適用。');}
  notes.push('S. gallolyticus 感染需評估大腸病變並安排大腸鏡。');
 }
 if(s.organism==='faecalis'){
  title='E. faecalis';weeks=6;
  if(!allergy&&s.susceptibility==='yes')drugs=['Ampicillin 2 g IV q4h ＋ ceftriaxone 2 g IV q12h'];
  else drugs=['先核對 ampicillin／vancomycin 藥敏、β-lactam 過敏及抗藥機制，由感染科制定替代方案（AHA 列 vancomycin、linezolid 或高劑量 daptomycin）。'];
  notes.push('需合併治療；ceftriaxone 在此為協同用藥，不能單獨治療腸球菌。偏好雙 β-lactam 減少 aminoglycoside 腎毒性。評估大腸病變／大腸鏡。');
 }
 if(s.organism==='vre'){title='VRE E. faecium';weeks=6;drugs=['Linezolid 600 mg IV／PO q12h','或 daptomycin 10–12 mg/kg IV q24h ＋ β-lactam（依藥敏／協同資料選 ampicillin、ceftaroline 或 ertapenem）'];notes.push('感染科需核對 daptomycin MIC、濃度與抗藥機制。POET 未納入；不自動推薦口服／長效藥。Oritavancin 體外 VanA 活性不代表 VRE IE 已有足夠臨床證據。');}
 if(s.organism==='hacek'){title='HACEK';weeks=knownValve?(p?6:4):null;drugs=['Ceftriaxone 2 g IV q24h（敏感時優先）'];notes.push('Ampicillin 僅在確認敏感且無 β-lactamase 時考慮；嚴重過敏可依藥敏討論 fluoroquinolone。口服 levofloxacin 僅限團隊個別選擇，無 RCT；不由 POET 檢核判定。');if(allergy)drugs=['β-lactam 過敏須核對類型與藥敏，再由感染科決定 ceftriaxone 或 fluoroquinolone 替代。'];}
 if(s.organism==='pseudo'){title='P. aeruginosa';weeks=6;drugs=['敏感的抗綠膿 β-lactam：cefepime 2 g IV q8h／piperacillin–tazobactam 4.5 g q6h／meropenem 1 g q8h','合併 tobramycin 或 fluoroquinolone，由感染科依 MIC 決定'];notes.push('至少 6 週、早期外科評估。Gentamicin 不列為綠膿選項；合併治療時間、口服延續均缺乏充分證據，不能直接全改口服 levofloxacin。β-lactam 輸注時間依院內方案。');if(allergy)drugs=['β-lactam 過敏／多重抗藥：停止預設方案，由感染科依完整 MIC、過敏評估與可用新藥制定治療。'];}
 if(s.organism==='candida'){title='Candida';drugs=['Liposomal／lipid amphotericin B 3–5 mg/kg IV q24h ± flucytosine 25 mg/kg PO q6h','或 micafungin 150 mg IV q24h（IE 高劑量）'];notes.push('早期手術／清創＋抗黴菌。IDSA：術後至少 6 週，併發症更長；PVE 長期抑制。轉 azole 需菌血症清除、臨床改善及藥敏支持；不能以一般細菌總療程計算。');}
 if(s.organism==='aspergillus'){title='Aspergillus';drugs=['Voriconazole IV：6 mg/kg q12h ×2 劑，之後 4 mg/kg q12h','或 lipid amphotericin B 3–5 mg/kg IV q24h'];notes.push('早期手術＋抗黴菌；TDM、交互作用與肝毒性監測。腎功能不佳需評估 IV voriconazole 載體，口服吸收良好時討論口服。置換後可考慮終身抗黴菌，不提供固定停藥日。');}
 if(['unknown','other'].includes(s.organism))notes.push('急性／院內 IE 經驗治療需涵蓋葡萄球菌、鏈球菌與腸球菌，並依 PVE 植入時間、院內／社區、先前抗生素及在地抗藥性調整；嚴重者可能需涵蓋革蘭陰性菌。請感染科制定院內方案，取得結果後立即降階。');
 if(s.susceptibility!=='yes')notes.unshift('藥敏未確認：不能把以下藥物視為已可用的處方。');
 if(renalUnsafe)notes.unshift('腎功能／透析安全閘：以上為正常腎功能成人參考方案，並非此病人的劑量；多種藥物需調整。先完成第 4 步，由藥師核定。');
 return {title,drugs,notes,weeks,renalUnsafe};
}
export function safety(s){
 const messages=[];
 if(s.renal==='unknown'||s.allergy==='unknown')messages.push('必補：腎功能趨勢、透析模式及過敏型態。未知時不能生成個別劑量。');
 if(s.renal==='aki')messages.push('AKI：creatinine 未達穩態，CrCl／eGFR 不可靠；依尿量、連續腎功能、治療濃度與清除方式反覆調整。負荷與維持劑量分開決策。');
 if(['hd','pd','crrt'].includes(s.renal))messages.push({hd:'HD：補透析日期、時長、high-flux、殘餘功能與採血時間。透析後給藥／補充需依藥物清除與濃度安排；vancomycin 以透析前濃度 15–20 mg/L 作 AUC 的實務替代，非所有病人固定週三次劑量。',pd:'PD：補 CAPD／APD、殘餘功能與交換方案。IE 是全身感染，不能套腹膜炎腹腔內給藥處方。',crrt:'CRRT：補模式、effluent mL/kg/h、實際運轉／中斷、濾器與殘餘功能。不能套 HD 或 eGFR 的維持劑量；使用 TDM 與藥師動態調整。'}[s.renal]);
 if(s.renal==='stable'){const c=num(s,'crcl');messages.push(c===null?'补穩態藥物劑量用 CrCl（mL/min），不要直接把標準化 eGFR 當成 CrCl。':`輸入藥物劑量用 CrCl ${c} mL/min：仍需確認估算法、體重與 creatinine 穩態。`);}
 if(['mrsa','vre','strep'].includes(s.organism)||s.allergy!=='none')messages.push('Vancomycin 用於嚴重 MRSA：AUC24 400–600 mg·h/L（假設 MIC 1 mg/L），儘早監測；AKI／透析需專用模型或濃度導向，不能把這目標直接外推為所有病原。');
 messages.push('Ampicillin、cefazolin、cefepime、meropenem、piperacillin–tazobactam、daptomycin、fluoroquinolone 與 flucytosine 等需按腎清除／透析調整。Cefepime 注意神經毒性；gentamicin／tobramycin 注意腎耳毒性及濃度。');
 messages.push('至少追蹤 CBC、腎肝功能、電解質及培養；daptomycin 加 CPK（腎病／statin／症狀時更密集）；linezolid 加血小板、血球與血清素交互作用，腎病較易血小板下降；amphotericin 加 K／Mg／腎毒性，flucytosine 加濃度與骨髓抑制。');
 if(s.ufh==='yes')messages.unshift('Oritavancin 安全阻擋：給藥後 120 小時禁用靜脈 UFH。若 HD／CRRT／ECMO 需 UFH，不應自動採用 oritavancin；不能只改用 anti-Xa 就忽略禁忌。');
 else messages.push('Oritavancin：aPTT 假性延長 ≤120 小時、PT／INR ≤12 小時、ACT ≤24 小時；每次給藥後 120 小時禁用靜脈 UFH。');
 if(s.interactions!=='no')messages.push('補完整用藥清單：rifampin 會影響 warfarin／DOAC、免疫抑制劑及 linezolid；azole、moxifloxacin、linezolid 需檢查 QT、血清素與其他交互作用。');
 return messages;
}
export function timeline(s){
 const r=regimen(s),notes=[];
 if(['candida','aspergillus'].includes(s.organism))return {end:null,days:null,notes:['黴菌病例不自動計算停藥日期；術後最低療程及長期抑制由感染科與外科確認。']};
 if(s.cleared!=='yes')return {end:null,days:null,notes:['尚未證實菌血症清除；不能建立可靠療程終點。首次陰性採樣需後續培養支持。']};
 if(r.weeks===null)return {end:null,days:null,notes:['瓣膜／病原資料不足；未能确定基準療程。']};
 const requested=num(s,'duration'),weeks=requested??r.weeks;
 if(requested!==null&&requested<r.weeks)return {end:null,days:null,notes:[`輸入 ${weeks} 週短於本路徑基準 ${r.weeks} 週；本工具不支援縮短療程。`]};
 if(!s.negativeDate)return {end:null,days:null,notes:['補首次轉陰血液培養的採樣日期。']};
 const day=86400000,start=Date.parse(s.negativeDate+'T00:00:00Z');
 if(!Number.isFinite(start))return {end:null,days:null,notes:['首次陰性日期格式不正確。']};
 let last=start+(weeks*7-1)*day;
 if(s.surgery==='unknown')return {end:null,days:null,notes:['補是否在本療程內接受瓣膜手術，才能檢核術後最低療程。']};
 if(s.surgery==='yes'){
  if(!s.surgeryDate)return {end:null,days:null,notes:['補瓣膜手術日期；需同時完成總療程及術後至少 14 天。']};
  const op=Date.parse(s.surgeryDate+'T00:00:00Z');if(!Number.isFinite(op)||op<start)return {end:null,days:null,notes:['手術早於轉陰或日期無效：需團隊個別核定，不套自動術後算法。']};
  last=Math.max(last,op+14*day);notes.push('採 AHA 2026 累計療程＋術後至少 14 個完整日。保守計數：手術日為術後第 0 天。ESC 對瓣膜培養陽性仍有重啟療程規則，請團隊選定依據。');
 }
 notes.push(`採 AHA 2026 ${weeks} 週參考；首次陰性採樣日為第 1 天。治療中斷／非有效藥物日數不能算入。`);
 const date=new Date(last).toISOString().slice(0,10);
 if(s.metastatic!=='no'||s.sourceControl!=='yes')return {end:null,days:null,notes:[...notes,`標準算法落在 ${date}，但轉移性感染／感染源控制尚未排除，禁止將其當作停藥日。`]};
 return {end:date,days:Math.round((last-start)/day)+1,notes:[...notes,'這是最早複評日期，仍需無復發菌血症、感染源控制及團隊核定後才停藥。']};
}
export function oral(s){
 const checks=[];
 const row=(label,status,detail)=>checks.push({label,status,detail});
 row('POET 病原', ['mssa','strep','faecalis'].includes(s.organism)?'pass':s.organism==='unknown'?'missing':'fail','穩定左側：MSSA／CoNS、鏈球菌、E. faecalis；MRSA／VRE／其他病原不自動外推');
 row('腎功能資料已確認',s.renal==='unknown'||s.renal==='stable'&&num(s,'crcl')===null?'missing':'pass','腎病／透析口服藥仍需藥師個別核定劑量');
 row('左側且已確診',s.side==='left'&&s.diagnosis==='confirmed'?'pass':s.side==='unknown'||s.diagnosis==='unknown'?'missing':'fail','POET 左側 IE 的適用範圍');
 const iv=num(s,'ivDays'),post=num(s,'daysPost');
 row('有效 IV ≥10 天',iv===null?'missing':iv>=10?'pass':'fail','只計適當有效抗生素');
 row('若手術，術後 ≥7 天',s.surgery==='no'?'pass':s.surgery!=='yes'||post===null?'missing':post>=7?'pass':'fail','尚未做手術者不需等待此項');
 const f=num(s,'afebrile');row('至少 3 天無發燒',f===null?'missing':f>=3?'pass':'fail','不能只看目前一次體溫');
 const crp=num(s,'crp'),peak=num(s,'crpPeak');row('CRP <20 或 <高峰 25%',crp===null?'missing':crp<20||peak!==null&&peak>0&&crp<peak*.25?'pass':peak===null?'missing':'fail','單位 mg/L；mg/dL 請乘 10');
 const wbc=num(s,'wbc');row('WBC <15×10⁹/L',wbc===null?'missing':wbc<15?'pass':'fail','即 <15,000/µL');
 const tee=num(s,'teeDays');row('轉換前 2 天內安全 TEE',tee===null||s.teeSafe==='unknown'?'missing':tee<=2&&s.teeSafe==='yes'?'pass':'fail','無進展、膿瘍或新手術適應症，記錄贅生物');
 const bmi=num(s,'weight')!==null&&num(s,'height')>0?num(s,'weight')/(num(s,'height')/100)**2:null;
 row('BMI ≤40',bmi===null?'missing':bmi<=40?'pass':'fail',bmi===null?'補體重與身高':`BMI ${bmi.toFixed(1)}`);
 for(const [k,label,wanted] of [['cleared','血培養轉陰','yes'],['sourceControl','感染源控制完成','yes'],['susceptibility','可用口服藥且藥敏已確認','yes'],['absorb','可吸收／耐受口服藥','yes'],['adherence','能可靠服藥','yes'],['otherIV','無其他需 IV 的感染','no'],['followup','可密切門診追蹤','yes'],['unstable','血行動力學穩定','no'],['abscess','無未處理心臟膿瘍','no'],['hf','無心衰竭急迫手術條件','none'],['persistent','無持續菌血症','no'],['embolism','無反覆栓塞急迫條件','no'],['neuro','無重大神經併發症','none'],['metastatic','無未處理轉移感染','no'],['interactions','已排除重要交互作用','no'],['allergy','無阻擋候選方案的過敏','none']])row(label,!has(s,k)?'missing':s[k]===wanted?'pass':'fail','轉換前由團隊確認');
 const status=checks.some(c=>c.status==='fail')?'blocked':checks.some(c=>c.status==='missing')?'incomplete':'candidate';
 return {checks,status,bmi};
}
export function continuation(s){
 const o=oral(s);const messages=[];
 if(o.status==='candidate'){
  messages.push('符合本工具的保守 POET 初篩，可與感染科討論口服延續；仍需對「兩個實際選用藥物」確認 MIC、吸收、交互作用、可取得性及依從性，不能直接轉換。');
  if(s.organism==='mssa')messages.push('MSSA 口服範例（正常腎功能）：dicloxacillin 1 g QID＋rifampin 600 mg BID；或 linezolid 600 mg BID＋rifampin／fusidic acid。Fusidic acid 可取得性與毒性需核對；rifampin 口服延續劑量不同於 PVE 輔助方案。');
  if(['strep','faecalis'].includes(s.organism))messages.push('口服雙藥範例（正常腎功能）：amoxicillin 1 g QID＋rifampin 600 mg BID；E. faecalis 亦可討論 amoxicillin＋moxifloxacin 400 mg QD；替代含 linezolid 600 mg BID 的雙藥由感染科決定。腎病、QT 與交互作用需核定。');
  messages.push('多數 AHA 委員偏好 POET 雙藥；單藥尚無共識。Linezolid＋rifampin 可降低濃度，若可行監測 trough 2–8 mg/L。');
 }else messages.push(o.status==='blocked'?'目前有不符合／高風險條件，繼續住院／IV 評估，不自動推薦口服。':'資料未完整，不能判定可轉口服；逐項補齊下方檢核。');
 messages.push('OPAT：需要病人已穩定、感染源控制、輸注與管路照護可行、定期抽血及心內膜炎團隊追蹤。達成口服條件不等於 OPAT 必然可行，反之亦然。');
 if(['mssa','mrsa','strep','faecalis'].includes(s.organism)){
  if(s.cleared==='yes'&&s.sourceControl==='yes'&&s.unstable==='no')messages.push('長效 dalbavancin 可在特定穩定病例由團隊個別討論（IE 仿單外）；文獻常見 1500 mg day 1／8 或 day 1／15。腎病需核對方案及 TDM；PVE，尤其未開刀 E. faecalis，不設自動推薦。DOTS 不支持直接外推左側 IE。');
  else messages.push('長效注射：尚未證實穩定／轉陰／感染源控制完成，不推薦轉換。');
 }
 if(s.ufh==='yes')messages.push('Oritavancin 不列候選：病人需靜脈 UFH，給藥後 120 小時為禁忌。');
 messages.push('延續期至少定期（通常每週）追蹤 CBC、腎肝功能與藥物特定毒性，腎病／不穩定者更密集。完成療程時建立 TTE 基準與心臟／感染科追蹤；若再發燒或寒顫，抗生素前重新採血培養並評估復發。口腔衛生與高風險牙科處置預防另按院內規範。');
 messages.push('SAT：僅限手術適應症存在但無法手術、感染人工材料保留、黴菌等特定情境；完成初始治療後由團隊選藥、追蹤復發／毒性並定期重新評估，不能取代可行手術。');
 return messages;
}
export function summary(s){
 const r=regimen(s),t=timeline(s),o=oral(s),u=surgical(s);
 return ['感染性心內膜炎治療導航 v1.0｜2026-10-10','臨床決策輔助；待感染科／心臟科／外科／藥師核定。',`病原：${organisms[s.organism]}；瓣膜：${s.valve}；側別：${s.side}；腎功能模式：${s.renal}`,`診斷：${s.diagnosis}；血培養清除：${s.cleared}；首次陰性：${s.negativeDate||'待補'}`,`手術優先度：${u.level}`,...u.messages,'\n診斷',...diagnostic(s),'\n病原治療（正常腎功能成人參考，不是個別處方）',r.title,...r.drugs,...r.notes,'\n安全檢核',...safety(s),'\n療程',t.end?`最早複評日期：${t.end}`:'暫不提供停藥日期',...t.notes,'\n延續治療',`口服狀態：${o.status}`,...o.checks.filter(x=>x.status!=='pass').map(x=>`${x.status==='missing'?'待補':'未通過'}：${x.label}`),...continuation(s),'\n依據：AHA 2026 DOI 10.1161/CIR.0000000000001466；ESC 2023 DOI 10.1093/eurheartj/ehad193；IDSA 黴菌與 vancomycin 指引；ORBACTIV 仿單。'].join('\n');
}
