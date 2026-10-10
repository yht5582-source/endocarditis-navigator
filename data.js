export const sources = [
 ['AHA 2026','DeSimone et al. Circulation，2026-09-08；Table 1–5 與爭議議題。科學聲明，無正式 COR／LOE。','https://www.iscvid.org/wp-content/uploads/2026/09/2026-AHA-IE-Dx-Tx-Management-DeSimone-Circulation-Sept-8-2026.pdf'],
 ['ESC 2023','Delgado et al. European Heart Journal. DOI: 10.1093/eurheartj/ehad193；手術、影像與 OPAT。','https://doi.org/10.1093/eurheartj/ehad193'],
 ['POET','Iversen et al. NEJM 2019. DOI: 10.1056/NEJMoa1808312；穩定左側 IE 的口服轉換 RCT。','https://pubmed.ncbi.nlm.nih.gov/30152252/'],
 ['DOTS','Turner et al. JAMA 2025. DOI: 10.1001/jama.2025.12543；非左側 IE 的複雜 S. aureus 菌血症研究。','https://pmc.ncbi.nlm.nih.gov/articles/PMC12351474/'],
 ['Vancomycin 2020','ASHP／IDSA／PIDS／SIDP：嚴重 MRSA 感染 AUC 導向監測。','https://www.idsociety.org/practice-guideline/vancomycin/'],
 ['IDSA Candida','2016 念珠菌指引；心內膜炎術後至少 6 週及長期抑制。','https://www.idsociety.org/practice-guideline/candidiasis/'],
 ['IDSA Aspergillus','2016 麴菌指引；早期手術、抗黴菌與長期／終身療程考量。','https://www.idsociety.org/practice-guideline/aspergillosis/'],
 ['ORBACTIV 仿單','Oritavancin：給藥後 120 小時禁用靜脈 UFH；凝血檢驗干擾。','https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff09a726-9f9b-4e30-b509-396781293220'],
 ['SPILF／AEPEI','2025 法國立場聲明；依第三代 cephalosporin MIC 選擇鏈球菌方案。','https://doi.org/10.1016/j.idnow.2024.105011'],
 ['Duke–ISCVID 2023','Fowler et al. Clinical Infectious Diseases；診斷準則。','https://doi.org/10.1093/cid/ciad271'],
 ['AHA BCNE 2025','血液培養陰性 IE 的暴露史、血清學與分子檢查。','https://doi.org/10.1161/JAHA.124.040218']
];
export const organisms = {unknown:'尚未鑑定／培養陰性',mssa:'MSSA／methicillin 敏感 CoNS',mrsa:'MRSA／methicillin 抗藥 CoNS',strep:'VGS／S. gallolyticus',faecalis:'Enterococcus faecalis',vre:'VRE Enterococcus faecium',hacek:'HACEK',pseudo:'Pseudomonas aeruginosa',candida:'Candida',aspergillus:'Aspergillus',other:'其他／多菌感染'};
export const corrections = [
 ['聲明真實性','AHA 2026 是正式發表的科學聲明；不等於具有正式建議等級的臨床指引。共識標示也不是可信度唯一指標，仍需看研究設計與適用族群。','AHA 2026 e1–3'],
 ['葡萄球菌 NVE 4 週','Table 1 確實列 4 週，PVE 6 週；不能把所有複雜病例一律縮到 4 週。ESC 2023 的 4–6 週框架、轉移感染與感染源控制仍要納入。','AHA 2026 Table 1；ESC 2023'],
 ['鏈球菌 MIC 矛盾','Table 2 寫 penicillin >0.25–2 mg/L 且 ceftriaxone >0.5 mg/L 仍用單藥，與正文引用法國聲明有差異。保留矛盾註記；ceftriaxone >0.5 或未確定敏感時不自動推薦單藥。MIC 0.12–0.25 的邊界亦需微生物室確認。','AHA 2026 Table 2／e16；SPILF／AEPEI'],
 ['口服轉換日數','依 Table 5／POET：適當 IV ≥10 天，若手術則術後 ≥7 天；另需完整穩定條件。AHA 正文提到 ESC「術後 10 天」與 ESC 原文不同，不沿用。','AHA 2026 Table 5；ESC Figure 9'],
 ['術後至少 14 天','需完成原訂總療程並確保術後 ≥14 天，不代表所有病例總共只需 14 天。AHA 2026 不因切下瓣膜培養／PCR 陽性自動重算；ESC 2023 對瓣膜培養陽性仍有重啟療程規則，須呈現差異。黴菌不套用此計算。','AHA 2026 e17；ESC 2023 §7.1'],
 ['黴菌不是固定 6 週','Candida：術後至少 6 週，膿瘍或其他併發症更長；PVE 常需長期抑制。Aspergillus：手術加抗黴菌，置換後考慮終身療程，不能提供自動停藥日期。','IDSA Candida／Aspergillus'],
 ['長效注射的證據界線','DOTS 不等於已證明左側 IE／PVE 的有效性；排除左側 IE 與保留感染人工材料。皮膚／骨感染的 oritavancin 治癒率不能當成 IE 治癒率。IE 使用仍為仿單外。','DOTS；AHA 2026 e13–15'],
 ['E. faecalis 復發率','8%（PVE 15%）是 E. faecalis IE 的背景復發資料，不能直接說是 dalbavancin 的復發率。未開刀 PVE 使用長效藥另有風險訊號。','AHA 2026 e13／15'],
 ['手術時機與神經事件','難治心衰竭／肺水腫／休克可能需 <24 小時手術，不能等 48–72 小時。PVE 或贅生物 >10 mm 並非單一自動開刀條件。出血需個別決策；昏迷需判斷原因與可逆性，不由網頁宣告永不手術。','ESC 2023；AHA 2026 e18–19'],
 ['腦血管影像與取栓','有神經症狀須腦部影像；懷疑感染性動脈瘤時 CTA／MRA，必要時 DSA。不能將 CTA／MRA 變成所有 IE 的普遍強制檢查，也不能說 MT 無出血風險；IE 相關中風不使用靜脈溶栓。','ESC 2023 §9'],
 ['CIED 與 SAT','CIED-IE 應完整移除；瓣膜 IE 即使無導線病變仍須討論移除與操作風險。SAT 的觀察性數值不證明因果降復發，不能取代可行手術。','AHA 2026 e19–21'],
 ['腎臟安全增補','固定 vancomycin 30 mg/kg/day 不能直接套用 AKI、HD 或 CRRT。補入 AUC／濃度監測、β-lactam 調整、aminoglycoside 腎耳毒性及 oritavancin–UFH 禁忌。','Vancomycin 2020；ORBACTIV 仿單']
];
export const samples = {
 stable:{name:'穩定 MSSA 左側 NVE',state:{hf:'none',unstable:'no',abscess:'no',persistent:'no',embolism:'no',neuro:'none',vegetation:'8',valve:'native',side:'left',cied:'no',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'mssa',allergy:'none',susceptibility:'yes',renal:'stable',crcl:'85',weight:'65',height:'165',ufh:'no',interactions:'no',metastatic:'no',surgery:'no',cleared:'yes',ivDays:'14',afebrile:'4',crp:'12',crpPeak:'100',wbc:'9',teeDays:'1',teeSafe:'yes',absorb:'yes',adherence:'yes',otherIV:'no',followup:'yes',sourceControl:'yes',daysPost:'',duration:'4'}},
 renal:{name:'HD、E. faecalis 人工瓣膜',state:{hf:'none',unstable:'no',abscess:'unknown',persistent:'yes',embolism:'no',neuro:'none',vegetation:'12',valve:'prosthetic',side:'left',cied:'yes',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'faecalis',allergy:'none',susceptibility:'yes',renal:'hd',weight:'60',height:'160',ufh:'yes',interactions:'unknown',metastatic:'unknown',surgery:'no',cleared:'no',ivDays:'8',afebrile:'1',crp:'80',crpPeak:'120',wbc:'18',teeDays:'5',teeSafe:'unknown',absorb:'yes',adherence:'yes',otherIV:'unknown',followup:'unknown',sourceControl:'no'}},
 urgent:{name:'MRSA、休克與腦出血',state:{hf:'refractory',unstable:'yes',abscess:'yes',persistent:'yes',embolism:'yes',neuro:'bleed',vegetation:'18',valve:'native',side:'left',cied:'no',cultures:'yes',echo:'positive',diagnosis:'confirmed',organism:'mrsa',allergy:'none',susceptibility:'yes',renal:'aki',crcl:'25',weight:'70',height:'170',ufh:'unknown',interactions:'unknown',metastatic:'yes',surgery:'no',cleared:'no',ivDays:'3',afebrile:'0',crp:'160',crpPeak:'180',wbc:'22',teeDays:'1',teeSafe:'no',absorb:'unknown',adherence:'unknown',otherIV:'yes',followup:'unknown',sourceControl:'no'}}
};
