/* 教學內容：示範病例（虛構）、考題、心智圖。e 頁碼指 AHA 2026（Circulation 2026;154:e00）。
   病例的工具判讀由 engine.js 即時計算；expect 與考題中可計算的答案由 tests/teach.test.js 交叉檢查。 */
/*CASES-START*/
export const cases=[
 {id:'poet',title:'第 14 天穩定的 MSSA 二尖瓣 IE',tag:'口服轉換',
  story:'61 歲男性，蜂窩性組織炎後 MSSA 菌血症，TEE 見二尖瓣 8 mm 贅生物。Cefazolin 治療後第 2 天血培養轉陰，首次陰性採樣 2026-09-07。今天為有效 IV 第 14 天：無發燒 4 天、CRP 12 mg/L（高峰 100）、WBC 9、昨日 TEE 無進展或膿瘍。BMI 23.5，CrCl 85 mL/min，無過敏；病人希望回家。',
  think:'現在可以討論轉口服嗎？要補什麼才算真的可以開藥？',
  state:{hf:'none',unstable:'no',abscess:'no',persistent:'no',embolism:'no',neuro:'none',vegetation:'8',valve:'native',side:'left',cied:'no',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'mssa',allergy:'none',susceptibility:'yes',renal:'stable',crcl:'85',weight:'68',height:'170',ufh:'no',interactions:'no',cleared:'yes',negativeDate:'2026-09-07',surgery:'no',metastatic:'no',sourceControl:'yes',ivDays:'14',afebrile:'4',crp:'12',crpPeak:'100',wbc:'9',teeDays:'1',teeSafe:'yes',absorb:'yes',adherence:'yes',otherIV:'no',followup:'yes'},
  expect:{level:'review',title:'MSSA',weeks:4,oral:'candidate',end:'2026-10-04',days:28},
  points:['Table 5 的條件逐項成立：有效 IV ≥10 天、無發燒 ≥3 天、CRP <20 mg/L 或 <高峰 25%、WBC <15×10⁹/L、轉換前 2 天內 TEE 無進展。工具通過只代表可進入團隊討論。','AHA 多數委員偏好 POET 的雙藥（如 dicloxacillin 1 g QID＋rifampin 600 mg BID）；單藥未達共識。實際兩個藥都要有藥敏，並查 rifampin 交互作用。','POET 招募時約 80% 病人不符納入條件，PVE 僅約 26%、PWID 僅 5 人；適用範圍不宜放寬解讀。固定劑量在重度肥胖有不足風險。','4 週從首次陰性採樣日累計，算出的是最早複評日，不是停藥指令。'],
  source:'AHA 2026 e10–11、Table 1、Table 5；POET'},
 {id:'gallolyticus',title:'S. gallolyticus：Penicillin MIC 0.5',tag:'MIC 判讀',
  story:'72 歲女性，貧血與體重下降，血培養三套 S. gallolyticus，TEE 見主動脈瓣 7 mm 贅生物。Penicillin MIC 0.5 mg/L、ceftriaxone MIC 0.25 mg/L。CrCl 78 mL/min。首次陰性 2026-09-10，今為 IV 第 8 天，臨床穩定。團隊討論是否要加 gentamicin。',
  think:'需要 gentamicin 嗎？還有哪個檢查不能漏？',
  state:{hf:'none',unstable:'no',abscess:'no',persistent:'no',embolism:'no',neuro:'none',vegetation:'7',valve:'native',side:'left',cied:'no',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'strep',allergy:'none',susceptibility:'yes',penMIC:'0.5',cefMIC:'0.25',renal:'stable',crcl:'78',weight:'55',height:'155',ufh:'no',interactions:'no',cleared:'yes',negativeDate:'2026-09-10',surgery:'no',metastatic:'no',sourceControl:'yes',ivDays:'8',afebrile:'6',crp:'30',crpPeak:'90',wbc:'8',teeDays:'6',teeSafe:'yes',absorb:'yes',adherence:'yes',otherIV:'no',followup:'yes'},
  expect:{level:'review',title:'VGS',weeks:4,oral:'blocked',end:'2026-10-07',days:28,drug:/Ceftriaxone 2 g IV q24h，可由團隊選擇單藥/},
  points:['Penicillin 中度（MIC 0.25–2）且 ceftriaxone MIC ≤0.5：AHA 對 ceftriaxone 單藥達成共識，不需加 gentamicin。','注意原文不一致：Table 2 印「ceftriaxone MIC >0.5」，正文引用的法國聲明是 ≤0.5 才用單藥；>0.5 者為 amoxicillin／ampicillin 4–6 週＋前 2 週 gentamicin。工具採正文邏輯，遇 >0.5 即停止自動單藥。','證據有限：GAMES 中 β-lactam 單藥住院死亡 OR 1.01，但 1 年死亡風險較高（OR 2.96；P=0.028），觀察性資料。','S. gallolyticus 應安排大腸鏡。口服條件尚未通過，其中 IV 僅第 8 天（需 ≥10 天）。'],
  source:'AHA 2026 Table 2、e16–17'},
 {id:'tavr',title:'TAVR 後 E. faecalis 菌血症',tag:'影像・PVE',
  story:'84 歲男性，TAVR 後 10 個月，低燒與倦怠。血培養 E. faecalis 多套陽性、未找到其他感染源。TTE 與 TEE 皆因支架陰影「不明確」。18F-FDG-PET/CT 見人工瓣周局部高攝取，團隊判定確診 PVE。CrCl 42 mL/min（穩定）。首次陰性 2026-09-14，今為 IV 第 8 天，血行動力學穩定，高手術風險。',
  think:'影像陰性能排除嗎？方案與療程？家屬問能否出院打長效針？',
  state:{hf:'none',unstable:'no',abscess:'no',persistent:'no',embolism:'no',neuro:'none',vegetation:'',valve:'prosthetic',side:'left',cied:'no',cultures:'yes',echo:'inconclusive',diagnosis:'confirmed',organism:'faecalis',allergy:'none',susceptibility:'yes',renal:'stable',crcl:'42',weight:'62',height:'165',ufh:'no',interactions:'no',cleared:'yes',negativeDate:'2026-09-14',surgery:'no',metastatic:'no',sourceControl:'yes',ivDays:'8',afebrile:'5',crp:'28',crpPeak:'70',wbc:'9',teeDays:'6',teeSafe:'yes',absorb:'yes',adherence:'yes',otherIV:'no',followup:'yes'},
  expect:{level:'review',title:'E. faecalis',weeks:6,oral:'blocked',end:'2026-10-25',days:42,renalUnsafe:true,drug:/Ampicillin 2 g IV q4h ＋ ceftriaxone 2 g IV q12h/},
  points:['TAVR IE 中 TTE、TEE 敏感度都下降；腸球菌是 TAVR IE 最主要病原。Gram 陽性球菌持續菌血症又無其他來源，就要積極找 TAVR IE，可由團隊討論 CCTA、FDG-PET/CT 或 WBC SPECT/CT。','E. faecalis 用 ampicillin＋ceftriaxone，NVE 與 PVE 皆 6 週。單藥復發率高（法國多中心 46.2%，合併治療 4.3–14.7%）。CrCl 42 需藥師調整，工具不產生此病人的劑量。','未開刀的人工瓣膜 E. faecalis IE 使用長效 lipoglycopeptide 可能增加復發，不宜輕易轉換。E. faecalis IE 的復發背景本來就高（8%，PVE 15%），這不是長效藥的數字。','E. faecalis IE 與大腸病灶相關，大腸鏡合理。TAVR IE 目前處理原則與其他 PVE 相同，explant 應在有經驗中心評估。'],
  source:'AHA 2026 e5–6、Table 3、e13、e15–17'},
 {id:'shock',title:'MRSA 主動脈瓣穿孔併肺水腫',tag:'緊急手術',
  story:'55 歲女性，中心靜脈導管移除後一週，呼吸困難、低血壓需升壓藥。血培養 MRSA。TEE：主動脈瓣 16 mm 贅生物、瓣葉穿孔、重度逆流、主動脈根部膿瘍。Cr 持續上升，尿量減少；腦部 MRI 無中風或出血。抗生素第 3 天，血培養仍陽性。',
  think:'可以先打完抗生素或等 48–72 小時嗎？',
  state:{hf:'refractory',unstable:'yes',abscess:'yes',persistent:'yes',embolism:'no',neuro:'none',vegetation:'16',valve:'native',side:'left',cied:'no',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'mrsa',allergy:'none',susceptibility:'yes',renal:'aki',weight:'58',height:'160',ufh:'yes',interactions:'unknown',cleared:'no',surgery:'no',metastatic:'unknown',sourceControl:'no',ivDays:'3',afebrile:'0',crp:'180',crpPeak:'180',wbc:'22',teeDays:'0',teeSafe:'no',absorb:'unknown',adherence:'unknown',otherIV:'no',followup:'unknown'},
  expect:{level:'emergency',title:'MRSA',weeks:4,oral:'blocked',end:null,renalUnsafe:true},
  points:['難治肺水腫／心因性休克屬緊急手術情境（ESC <24 小時），不能等 48–72 小時，更不用等療程完成。手術本身就是感染源控制；完成抗生素並非手術前提。','AHA 列 vancomycin、daptomycin 8–12 mg/kg、ceftaroline 或 linezolid。AKI 下 creatinine 非穩態，CrCl 不可靠，vancomycin 以濃度導向調整，不能套 30 mg/kg/day。','最終是否開刀由心外決定；此例 MRI 無出血，沒有神經學理由延後。','MRSA 不在 POET 隨機族群內，血培養未清除也不能建立療程終點。'],
  source:'AHA 2026 Table 1、e17–19；ESC 2023；Vancomycin 2020'},
 {id:'stroke',title:'小型栓塞中風後的早期手術與術後療程',tag:'中風・術後計數',
  story:'47 歲男性，MSSA 二尖瓣前葉 14 mm 活動贅生物，抗生素第 3 天仍有新的脾與腦栓塞。腦 MRI：數個小皮質梗塞、無出血、神經學檢查正常；MRA 未見感染性動脈瘤。首次陰性 2026-09-05。2026-09-16 接受二尖瓣置換，切下瓣膜培養陽性。今天術後第 5 天，CrCl 90 mL/min。主治問：是否改人工瓣方案並重算 4 週？',
  think:'小型中風要延後手術嗎？術後要改方案、重新計時嗎？',
  state:{hf:'none',unstable:'no',abscess:'no',persistent:'no',embolism:'yes',neuro:'small',vegetation:'14',valve:'native',side:'left',cied:'no',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'mssa',allergy:'none',susceptibility:'yes',renal:'stable',crcl:'90',weight:'74',height:'175',ufh:'no',interactions:'no',cleared:'yes',negativeDate:'2026-09-05',surgery:'yes',surgeryDate:'2026-09-16',metastatic:'no',sourceControl:'yes',ivDays:'18',daysPost:'5',afebrile:'4',crp:'45',crpPeak:'150',wbc:'11',teeDays:'5',teeSafe:'yes',absorb:'yes',adherence:'yes',otherIV:'no',followup:'yes'},
  expect:{level:'urgent',title:'MSSA',weeks:4,oral:'blocked',end:'2026-10-02',days:28},
  points:['小型中風、影像無出血且無神經缺損：手術可不延後。心臟手術前應以 CT／MR 血管攝影排除感染性動脈瘤。','術前有效療程可計入：4 週總療程（至 10-02）且術後至少 14 天（至 09-30），兩者取較晚者。不重新計時；若手術較晚，則由 14 天下限決定日期。','AHA：切下瓣膜培養或分子檢查陽性不改變術後療程；ESC 2023 對瓣膜培養陽性有不同規則，團隊需選定依據並記錄。','葡萄球菌 NVE 術後續用單藥合理（已達共識）：回溯性資料顯示改合併方案有較多復發、死亡與不良事件。','口服條件尚未通過，例如術後僅 5 天（需 ≥7）、TEE 已 5 天（需 2 天內）。'],
  source:'AHA 2026 e17–19'},
 {id:'pwid',title:'注射藥物使用者的三尖瓣巨大贅生物',tag:'右側 IE・長效針',
  story:'29 歲男性，近期仍注射海洛因，居無定所。MSSA 菌血症、三尖瓣 24 mm 贅生物、多發肺部敗血性栓塞。Cefazolin 第 5 天血培養轉陰（首次陰性 2026-09-20）。目前氧合穩定，今為 IV 第 12 天，肺部病灶是否已治療完全尚未確認。不願裝 PICC，要求儘快離院。',
  think:'要開刀嗎？POET 口服適用嗎？還有什麼選項與全人照護？',
  state:{hf:'none',unstable:'no',abscess:'no',persistent:'no',embolism:'yes',neuro:'none',vegetation:'24',valve:'native',side:'right',cied:'no',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'mssa',allergy:'none',susceptibility:'yes',renal:'stable',crcl:'110',weight:'60',height:'172',ufh:'no',interactions:'no',cleared:'yes',negativeDate:'2026-09-20',surgery:'no',metastatic:'unknown',sourceControl:'yes',ivDays:'12',afebrile:'6',crp:'35',crpPeak:'200',wbc:'10',teeDays:'6',teeSafe:'yes',absorb:'yes',adherence:'no',otherIV:'no',followup:'no'},
  expect:{level:'urgent',title:'MSSA',weeks:4,oral:'blocked',end:null,message:/右側贅生物 >20 mm/},
  points:['右側 IE 手術適應症：持續菌血症、持續肺栓塞、治療 7 天後肺膿瘍、或贅生物 >2 cm；可行時瓣膜修補優於置換。高手術風險且藥物失敗者，可在有經驗中心討論 PMA（無 RCT）。','POET 僅限左側 IE，且本例依從與追蹤有疑慮，故工具不通過。','Table 5 的長效注射適用：初步治療有反應、但因無 IV 通路、居住不穩或近期注射藥物而無法傳統 OPAT。Dalbavancin 1500 mg d1、d8（DOTS 含右側 IE）；IE 仍屬仿單外。','算法落點 10-17 不等於停藥日，因轉移性感染灶尚未排除。','成癮醫學是心內膜炎團隊的一員；另篩檢 HIV、B／C 肝炎與性傳染病，並處理居住與交通障礙。'],
  source:'AHA 2026 e13、Table 5、e18、e20–21；DOTS'},
 {id:'hd',title:'血液透析、節律器與抗藥 CoNS 瓣膜 IE',tag:'腎臟・CIED',
  story:'68 歲男性，HD 每週 3 次（透析用 UFH），DDD 節律器 6 年。Methicillin 抗藥 S. epidermidis 三套血培養陽性；TEE 見二尖瓣 9 mm 贅生物，導線與囊袋無異常。Vancomycin 治療後首次陰性 2026-09-18，今為第 12 天。節律器尚未處理。團隊想以 oritavancin 減少住院。',
  think:'導線看起來乾淨，還要拔嗎？Oritavancin 可行嗎？',
  state:{hf:'none',unstable:'no',abscess:'no',persistent:'no',embolism:'no',neuro:'none',vegetation:'9',valve:'native',side:'left',cied:'yes',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'mrsa',allergy:'none',susceptibility:'yes',renal:'hd',weight:'66',height:'168',ufh:'yes',interactions:'no',cleared:'yes',negativeDate:'2026-09-18',surgery:'no',metastatic:'no',sourceControl:'no',ivDays:'12',afebrile:'7',crp:'24',crpPeak:'90',wbc:'8',teeDays:'6',teeSafe:'yes',absorb:'yes',adherence:'yes',otherIV:'no',followup:'yes'},
  expect:{level:'review',title:'MRSA',weeks:4,oral:'blocked',end:null,renalUnsafe:true,message:/CIED/,safety:/120 小時禁用靜脈 UFH/},
  points:['瓣膜 IE 即使導線與囊袋無異常，AHA 仍偏好完整移除裝置；丹麥全國資料顯示移除者 6 個月再入院、再菌血症與死亡較低。實際決定仍需評估依賴度與操作風險。','Oritavancin 給藥後 120 小時禁用靜脈 UFH，並干擾 aPTT（≤120 h）、PT／INR（≤12 h）、ACT（≤24 h）。規律透析用 UFH 的病人不應自動採用。','HD 下 vancomycin 以透析前濃度 15–20 mg/L 為實務替代；日期、時長、高通量與殘餘功能都要補。','Dalbavancin 於腎衰竭可考慮 TDM。感染源未控制（裝置仍在）時，工具不給複評日期。'],
  source:'AHA 2026 e15、e19–20、Table 1；ORBACTIV 仿單；Vancomycin 2020'},
 {id:'candida',title:'人工瓣膜 Candida IE，無法手術',tag:'黴菌・SAT',
  story:'76 歲女性，機械主動脈瓣，近期腹部手術併 TPN。C. albicans 血症，TEE 見人工瓣 15 mm 贅生物，無瓣周膿瘍或心衰竭。嚴重肺病與衰弱，外科評估手術風險過高，病人也拒絕手術。CrCl 65 mL/min。治療後血培養轉陰（首次陰性 2026-09-22）。',
  think:'何時能停藥？療程可以照細菌性 PVE 算嗎？',
  state:{hf:'none',unstable:'no',abscess:'no',persistent:'no',embolism:'no',neuro:'none',vegetation:'15',valve:'prosthetic',side:'left',cied:'no',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'candida',allergy:'none',susceptibility:'yes',renal:'stable',crcl:'65',weight:'50',height:'155',ufh:'no',interactions:'yes',cleared:'yes',negativeDate:'2026-09-22',surgery:'no',metastatic:'no',sourceControl:'no',ivDays:'10',afebrile:'4',crp:'40',crpPeak:'110',wbc:'10',teeDays:'6',teeSafe:'yes',absorb:'yes',adherence:'yes',otherIV:'no',followup:'yes'},
  expect:{level:'review',title:'Candida',weeks:null,oral:'blocked',end:null,drug:/flucytosine 25 mg\/kg PO q6h/},
  points:['初始：lipid amphotericin B 3–5 mg/kg＋flucytosine 25 mg/kg q6h，或 micafungin 150 mg q24h。內外科合併處置是改善預後的關鍵。','清除念珠菌血症、臨床改善並有藥敏後，可考慮轉口服 azole；無法手術者，完成初始治療後常轉為長期抑制（SAT），有時終身。','黴菌 PVE 死亡率 >50%、復發率可達 36%。AHA Table 4 列 6 週，IDSA 為術後至少 6 週且併發症更長，所以工具不自動給停藥日。','SAT 不能取代可行手術；本例是因風險過高且病人拒絕。需早期追蹤復發與藥物不良反應。Azole 需查交互作用與肝毒性，amphotericin 監測 K／Mg／腎功能。'],
  source:'AHA 2026 Table 4、e20–21；IDSA Candida'}
];
/*CASES-END*/

/* 選項順序固定，正解 A–D 各 5 題；a 為正解索引。 */
/*QUIZ-START*/
export const quiz=[
 {lv:'基礎',q:'疑似 IE，第一線影像檢查是？',o:['經胸超音波（TTE）','18F-FDG-PET/CT','心臟 CT','心臟 MRI'],a:0,why:'超音波是首選，TTE 為初始篩檢：特異度 >90%，但敏感度約 40–66%，後續依風險決定 TEE。',src:'AHA 2026 e4–5'},
 {lv:'基礎',q:'人工瓣膜病人疑似 IE，TTE 陰性。下一步？',o:['視為排除，改找其他感染源','一週後再做 TTE 即可','仍做 TEE','直接做腦部 MRI'],a:2,why:'人工瓣膜或 CIED 病人即使 TTE 陰性或不明確，仍應做 TEE。TEE 對瓣周併發症的敏感度明顯較高。',src:'AHA 2026 e4'},
 {lv:'基礎',q:'AHA 2026 中，MSSA 原生瓣與人工瓣 IE 的療程分別是？',o:['都是 2 週','4 週與 6 週','都是 6 週','6 週與 8 週'],a:1,why:'NVE 4 週、PVE 6 週，指菌血症清除後累計的病原導向治療。2015 版為一律 6 週。',src:'AHA 2026 Table 1'},
 {lv:'基礎',q:'青黴素敏感 E. faecalis IE，AHA 寫作小組偏好的初始方案？',o:['Ceftriaxone＋vancomycin 合併','Ampicillin 單藥','Daptomycin 單藥','Ampicillin＋ceftriaxone'],a:3,why:'需合併治療，偏好 ampicillin 2 g q4h＋ceftriaxone 2 g BID。此處 ceftriaxone 是協同用藥，單藥復發率高。',src:'AHA 2026 Table 3、e16'},
 {lv:'基礎',q:'哪組病原的 IE，AHA 認為安排大腸鏡是合理的？',o:['S. gallolyticus 與 E. faecalis','S. aureus 與 CoNS','HACEK 與 P. aeruginosa','Candida 與 Aspergillus'],a:0,why:'兩者都與大腸良惡性病灶相關，已達共識。',src:'AHA 2026 e17'},
 {lv:'基礎',q:'穩定左側 MSSA IE：有效 IV 12 天、無發燒 4 天、CRP 18 mg/L、WBC 11、BMI 26、5 天前 TEE 無異常。哪項尚未符合 POET 條件？',o:['IV 天數','無發燒天數','CRP','TEE 時間'],a:3,why:'TEE 須在轉換前 2 天內完成。其餘皆符合：IV ≥10 天、無發燒 ≥3 天、CRP <20 mg/L、WBC <15×10⁹/L。',src:'AHA 2026 Table 5'},
 {lv:'基礎',q:'使用 oritavancin 後，多久內禁用靜脈 UFH？',o:['12 小時','24 小時','120 小時','14 天'],a:2,why:'120 小時。此藥造成 aPTT 假性延長可達 120 小時、PT／INR 12 小時、ACT 24 小時。',src:'AHA 2026 e15；ORBACTIV 仿單'},
 {lv:'基礎',q:'IE 病人出現神經症狀，AHA 偏好的腦部影像是？',o:['頭部 X 光','腦部 MRI','FDG-PET/CT','腰椎穿刺'],a:1,why:'MRI 對小型栓塞、膿瘍與微出血較 CT 敏感；FDG-PET/CT 因腦部生理性高攝取，不適合偵測腦栓塞。',src:'AHA 2026 e7、e9'},
 {lv:'基礎',q:'葡萄球菌 PVE 加 gentamicin，AHA 的共識是？',o:['前 2 週常規併用','僅 MRSA 併用','腎功能正常者併用','風險大於可能效益'],a:3,why:'已達共識不常規使用。Rifampin 則未達共識，需團隊討論；若用，等菌血症清除且治療 5–7 天後再開始。',src:'AHA 2026 e16、Table 1'},
 {lv:'基礎',q:'已確立活動期手術適應症，且無重大中風或腦出血，AHA 偏好何時手術？',o:['48–72 小時內','完成 2 週抗生素後','完成全部療程後','6 週後'],a:0,why:'早期手術（48–72 小時）受偏好；完成抗生素不是手術前提。難治肺水腫／休克則需更緊急處理。',src:'AHA 2026 e17–19'},
 {lv:'高階',q:'VGS 左側 NVE：penicillin MIC 1 mg/L、ceftriaxone MIC 1 mg/L。依 AHA 正文引用的法國聲明，應選？',o:['Ceftriaxone 單藥 4 週，不加 gentamicin','Penicillin G 單藥 4 週，不加 gentamicin','Ampicillin 4–6 週＋前 2 週 gentamicin','Ceftriaxone 單藥 2 週，不加 gentamicin'],a:2,why:'第三代 cephalosporin MIC >0.5 走 amoxicillin／ampicillin 加 gentamicin。Table 2 印「>0.5 用單藥」與正文衝突，工具在此停止自動單藥，交感染科與微生物室判定。',src:'AHA 2026 Table 2、e16；SPILF／AEPEI'},
 {lv:'高階',q:'MSSA NVE，首次陰性 2026-09-01，計畫 4 週（首次陰性日為第 1 天）。2026-09-24 換瓣。依 AHA，最早複評日是？',o:['2026-09-28','2026-10-08','2026-10-22','2026-11-05'],a:1,why:'總療程至 09-28，但術後需至少 14 天（術日為第 0 天，至 10-08），取較晚者。重新計 4 週則為錯誤的「restart the clock」。',src:'AHA 2026 e17'},
 {lv:'高階',q:'血培養陰性、高度懷疑 IE 且已切下瓣膜。AHA 建議的做法？',o:['等血培養滿 6 週再決定是否送檢','瓣膜同時送培養、病理與分子檢查','瓣膜只做病理，不必培養或分子檢查','僅靠血清學，瓣膜組織不必保留'],a:1,why:'血培養陰性 IE 的瓣膜組織可先用分子檢查快速鑑定，並同時做培養與病理。可行時保存抗生素前血漿，以備血培養 72 小時陰性時做宏基因體定序。',src:'AHA 2026 e7'},
 {lv:'高階',q:'MSSA NVE 第 12 天換人工瓣，術後抗生素如何調整最符合 AHA？',o:['續用原單藥方案','改加 rifampin＋gentamicin','重算 6 週 PVE 療程','停藥改 SAT'],a:0,why:'已達共識：葡萄球菌 NVE 術後續用單藥合理；回溯性資料中合併方案的復發、1 年死亡與不良事件較多（研究有限制）。',src:'AHA 2026 e18'},
 {lv:'高階',q:'栓塞中風併腦內出血，無休克、無膿瘍、無膿毒持續，再栓塞風險不高。手術時機？',o:['72 小時內手術，不需神經科評估','1 週內完成手術以降低再栓塞','通常延後至少 2 週，較佳 4 週','永遠不可手術，只能藥物治療到底'],a:2,why:'出血或重大缺血性中風通常延後 2–4 週（同段亦寫 3–4 週）。但血行動力學不穩、敗血症、膿瘍或高栓塞風險時，可個別考慮早期手術。',src:'AHA 2026 e19'},
 {lv:'高階',q:'IE 併大血管阻塞缺血性中風，發作 2 小時，CT 無出血。最適當的再灌流考量？',o:['立即靜脈溶栓','由中風團隊評估機械取栓','溶栓後加肝素','再灌流一律禁止'],a:1,why:'靜脈溶栓與出血及死亡增加相關，不使用。機械取栓是可行選項：AHA 指其似未造成出血併發症，但資料有限，且可能增加血管痙攣與內皮損傷。',src:'AHA 2026 e19；ESC 2023 §9.1'},
 {lv:'高階',q:'關於長效 lipoglycopeptide，下列何者正確？',o:['DOTS 已證實左側 IE 非劣性','E. faecalis 復發率 8% 是 dalbavancin 的療效數據','Dalbavancin 對 VanA 腸球菌有效','未開刀人工瓣 E. faecalis IE 可能增加復發'],a:3,why:'AHA 明列此風險訊號。DOTS 是複雜 S. aureus 菌血症（含右側 IE）；8%（PVE 15%）是 E. faecalis IE 的背景復發率；dalbavancin 對 VanA 無活性。',src:'AHA 2026 e13、e15；DOTS'},
 {lv:'高階',q:'關於 18F-FDG-PET/CT，下列何者正確？',o:['疑似 PVE、超音波陰性但高度懷疑時可做第二線','NVE 敏感度高，應列為所有病人的常規檢查','最適合偵測感染性腦動脈瘤','BioGlue 不會造成偽陽性'],a:0,why:'PVE 敏感度與特異度報告可 >80–90%。NVE 敏感度低；腦部生理性攝取高；BioGlue、近期手術等可偽陽性。',src:'AHA 2026 e7–8'},
 {lv:'高階',q:'P. aeruginosa IE 合併治療，為何 AHA 2026 不列 gentamicin？',o:['腎毒性明顯高於其他所有 aminoglycoside 藥物','無法穿透贅生物且口服吸收差','CLSI 折點更新後，野生型不視為可治療','與 cefepime 併用時有明確拮抗作用'],a:2,why:'CLSI M100 第 32、33 版更新後，野生型株用 gentamicin 無法治療。AHA 列 tobramycin 8 mg/kg 或 fluoroquinolone，至少 6 週並早期外科評估。',src:'AHA 2026 Table 4'},
 {lv:'高階',q:'下列何者最符合 AHA 對長期抑制（SAT）的立場？',o:['病人偏好時可取代無禁忌的手術','術後菌血症持續 1–2 天即應長期使用','所有 PVE 完成療程後都應常規終身使用','有手術適應症但風險過高者合理使用'],a:3,why:'SAT 在無法手術者研究最多，復發率仍約 7–12.5%。不能取代可行手術；術後短暫菌血症本身不是適應症；黴菌與分枝桿菌 IE 也常考慮。',src:'AHA 2026 e20–21'}
];
/*QUIZ-END*/

/* 心智圖：左診斷、右治療，內容需與 engine.js、docs/clinical-guide.md 同步人工更新。 */
/*MAP-START*/
export const map={
 root:'感染性心內膜炎',sub:'成人 · AHA 2026 為主',
 left:{title:'診斷',branches:[
  {t:'何時懷疑',i:['發燒＋新雜音、栓塞現象','Gram 陽性持續菌血症無來源','人工瓣、CIED、PWID、先前 IE','TAVR 後症狀可不明顯']},
  {t:'微生物',i:['抗生素前採血培養（通常 3 套）','2023 Duke–ISCVID 簡化採血時間與部位','追蹤至轉陰，記錄首次陰性日','可行時保存抗生素前血漿']},
  {t:'超音波',i:['TTE 第一線：敏感度 40–66%','人工瓣／CIED：TEE，即使 TTE 陰性','仍高度懷疑：1 週內重複','轉口服前 2 天內 TEE']},
  {t:'進階影像',i:['PVE 第二線：FDG-PET/CT','瓣周、膿瘍、術前冠脈：CCT','無 PET：WBC SPECT/CT（僅 ESC 列準則）','TAVR／TPVR：多模式影像']},
  {t:'診斷準則',i:['2023 Duke–ISCVID：敏感度較高','新增分子檢查、PET、CCT','E. faecalis 列典型病原','CIED 為次要準則']},
  {t:'培養陰性',i:['查先前抗生素與暴露史','Coxiella、Bartonella 血清學','瓣膜：培養＋病理＋分子檢查','考慮非感染性贅生物']},
  {t:'全身評估',i:['神經症狀：腦 MRI','手術前：排除感染性動脈瘤','胸腹 CT：有症狀者','S. gallolyticus／E. faecalis：大腸鏡']}
 ]},
 right:{title:'治療',branches:[
  {t:'團隊與手術',i:['心內膜炎團隊共同決策','休克／難治肺水腫：緊急（<24 h）','適應症確立：48–72 h','右側：>2 cm、持續感染；PMA 僅選擇性']},
  {t:'中風與時機',i:['小中風無缺損：不延後','出血／重大缺血：2–4 週，個別例外','不做靜脈溶栓；取栓可評估','昏迷：不宜手術，先判可逆性']},
  {t:'病原方案',i:['MSSA：oxacillin／cefazolin','MRSA：vancomycin／daptomycin','VGS：penicillin／ceftriaxone，依 MIC','E. faecalis：ampicillin＋ceftriaxone','HACEK：ceftriaxone','綠膿：β-lactam＋tobramycin／FQ','黴菌：內外科合併']},
  {t:'療程',i:['由首次陰性日累計','葡萄球菌／VGS／HACEK：NVE 4、PVE 6 週','腸球菌、綠膿：6 週','術後至少 14 天，不重新計時','完成療程才手術且無活動感染：不追加']},
  {t:'連續期',i:['POET：IV ≥10 天、術後 ≥7 天','無燒 ≥3 天、CRP、WBC、TEE','排除 BMI >40、吸收差、依從差','長效針：無法 OPAT 者，IE 仿單外','MRSA、VRE 不自動外推']},
  {t:'腎臟與藥物',i:['AKI：CrCl 不可靠','HD／PD／CRRT：藥師核定','Vancomycin：AUC／濃度','Oritavancin：120 h 禁 UFH','Rifampin：交互作用']},
  {t:'裝置與追蹤',i:['CIED：完整移除','瓣膜 IE 無導線病灶仍偏好移除','SAT：無法手術、黴菌等，不取代手術','完成時 TTE 基準','再發燒：抗生素前重採血']}
 ]}
};
/*MAP-END*/
