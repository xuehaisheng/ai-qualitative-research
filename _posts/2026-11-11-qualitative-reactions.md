---
title: "質的研究者は、AIにどう反応したか：期待・拒否・攻防・その先"
date: 2026-11-11 09:00:00 +0900
author: 薛海升
key: qualitative-reactions
order: 4
wiki: [hallucination, lost-in-the-middle, caqdas, sycophancy]
summary_ja: "「言葉が分かるなら、分析にも使えるはず」という期待から、419名の拒否声明、それを拒否する反論、GPT-5時代の比較研究まで。質的研究者の反応を四つの段階に分けてたどる。"
---

言葉を扱うAIは、質的研究の中心に直接入ってくる。NLPや数学が経験したような「分野の危機」が、質的研究にも来ていてもおかしくなかった（[他の分野は、AIにどう反応したか]({{ '/articles/other-fields/' | relative_url }})）。実際はどうだったのか。私は調べてみた。ここで扱う文献の多くは、私たちの質的メタ統合（薛・梶原・豐田, 2026）で集めたものである。文献の一覧は[AI×質的研究の文献]({{ '/papers/' | relative_url }})にまとめている。

反応は、おおまかに四つの段階に分けられる。

1. **期待と比較**（2023〜2024年）：言葉が分かるなら、分析にも使えるはず。AIと人間の分析を比べる研究が急増した。
2. **拒否**（2025年）：9月にフランケンシュタインの比較研究、12月に419名の拒否声明。
3. **攻防**（2026年）：拒否を拒否する反論と、慎重な立場の論考が相次いだ。
4. **その先**（2026年〜）：比較研究はつづき、二分法を超える議論へ。

段階ははっきり入れ替わるわけではなく、重なり合っている。

## 第1段階（2023〜2024年）：期待と比較

「質的研究×生成AI」の関連論文は、Web of Scienceに収録されたものだけで、2022年の329本から2025年には4,075本へ、約12倍に増えた。

最初の反応は素朴なものだった。生成AIは言葉を扱う。質的データも言葉である。だから、コーディングやテーマ分析にも使えるのではないか。コーディングは、ラベルをつけていく労働集約的な作業なので、それが楽になるのではないか、という期待である。

ただし、自動コーディング自体は新しくない。ChatGPT以前から、NVivoやATLAS.tiといった[質的データ分析ソフト]({{ '/literacy/caqdas/' | relative_url }})には、キーワードや感情を自動で分類する機能があった。生成AIで、それがテーマ分析にまで広がった。

### 結果は、ばらばら

この時期に最も多かったのは、AIと人間の分析を比べる研究である。私たちのスクリーニングでも、題目と抄録で絞った140篇のうち、最多の31篇がこの型だった（暫定的な分類）。主な研究を並べると、結果はばらばらである。

| 研究 | データとモデル | 結果 |
|---|---|---|
| Prescott et al. (2024) | HIV支援のSMS文40件。ChatGPT、Bard | 帰納的テーマの71%が一致。コード単位の一致は37〜47%。所要時間は約20分と約570分 |
| Sakaguchi et al. (2025) | 日本の病院での面接30件。ChatGPT-4 | 記述的なテーマは80%以上一致。文化や感情の解釈が要るテーマは約30% |
| Mizumoto & Teng (2025) | 日本の大学生143名の自由記述。複数のLLM | 最も良いモデルでもκ=0.68。強い一致の基準（0.8）に届かない |
| Bennis & Mouwafaq (2025) | 回答448件。9つの生成AI | 一部のモデルは専門家の分析と完全に一致（Jaccard係数1.00） |
| Lockwood et al. (2026) | 教員60名の自由記述。ChatGPT-4と初心者の人間 | 結果はおおむね似ていて、AIはずっと速い。ただし過程が見えず、一部のコードが不明瞭 |

どの研究も、人間の分析を正解として、AIがどれだけ近づくかを測っている。ここに私は少し疑問がある。質的研究の結果は、もともと人によって違うはずである。Aさんがやった研究と、Bさんがやった研究は、同じデータでもやはり違う。一致しなくてもいいのではないか。人間の分析を「正解」とするこの比べ方そのものが、質的研究にとって妥当なのかは、次の段階で問われることになる。

## 第2段階（2025年）：拒否

### フランケンシュタインのテーマ分析

2025年9月、ジョウジーらは、AIでテーマ分析を実際に試した論文を『PLOS ONE』に発表した。題名には「フランケンシュタイン」が入っている。善意の科学者が作ったものが、作り手の予想しなかった結果をもたらす、という警告として読める。

方法は、分析データを公開している健康分野の研究を5本探し、Microsoft Copilotに同じデータを各3回分析させ、元の論文の人間による分析と比べる、というものである。Copilotが示した引用のうち、平均58%はデータに存在しない、捏造されたものだった。人間の研究者の引用がデータどおり正確だった割合は平均79%で、人間の論文にも誤りがあった。そしてCopilotのテーマと引用は、データの最初の2〜3ページからばかり取られていた。結論は、現在のCopilotはテーマ分析には勧められない、というものである。

ただ、この結果は少し割り引いて読む必要があると思う。実際に分析したのはおそらく2024年で、使ったモデルもそれほど性能のよいものではなかった。しかも、長いデータを一気に渡している。AIは長い資料の冒頭と終わりは読めても、真ん中が弱い（[Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})）。引用が最初の数ページに偏ったのは、まさにその現れである。

### 「再帰的質的研究での生成AIの使用を、拒否する」

同じ年の12月、「再帰的質的研究での生成AIの使用を拒否する」という声明が『Qualitative Inquiry』に出た（Jowsey et al., 2025）。すごく強い言葉である。32か国419名の質的研究者の立場として出されたもので、著者には、再帰的テーマ分析を体系化したブラウンとクラークも含まれる。

理由は三つある。

1. **意味を作れない**：生成AIは、言葉から意味を作ることができない。
2. **人間の研究実践**：再帰的テーマ分析などは、主観をもち、ある立場に位置づいた研究者が行う「人間の研究実践」である。そこにAIが混ざると、もう別のものになる。
3. **社会と環境の正義**：AIの訓練には大量の電力や水を使う。また、有害な内容を取り除く作業は、多くがグローバル・サウスの労働者に担われている。

三つ目について、私の見方を書いておく。環境への負荷は、電力や水の技術が進んでいるので、当時言われていたほど深刻ではなくなっているかもしれない。一方で、英語を話せるというだけで、グローバル・サウスの人々に低賃金でAIのフィードバックをさせるという搾取の構造は、たしかにある。

拒否は、制度にも入り始めた。APAの『Qualitative Psychology』誌は2026年1月、データの収集や分析にAIを使った論文は掲載しない、という方針を示した（Levitt, 2026）。ただし、禁止されているのはデータの収集と分析で、文章の言い回しを直すような使い方まで禁じているわけではない。

## 第3段階（2026年）：攻防

### 「拒否を拒否する」

2026年に入ると、拒否声明への反論が相次いだ。拒否することを拒否する、という論考である。

- **フリーゼら**（Friese et al., 2026）：全面的な拒否は、方法の発展を閉ざす。研究者が主導すれば、AIはCAQDAS（NVivoやMAXQDAなどの質的データ分析ソフト）と同じく、正当な分析の支援になる。この反論にも、22か国の112名が賛同者として名を連ねた。
- **デ・パオリ**（De Paoli, 2026b）：方法論の議論に見えて、実は哲学的な前提による禁止である。教条になりかねず、議論と革新を妨げる。同じ年の別の論文（De Paoli, 2026a）では、チューリングの「計算機械と知能」にならい、「機械に原理的に分析ができるか」ではなく、「人とAIが協働して、人間の分析者に匹敵する分析ができるか」を実証で問うべきだとした。
- **イブラヒムら**（Ibrahim et al., 2026）：生成AIは一枚岩ではない。文脈と全体性に注意を向ける性質は、質的な認識論と合う部分がある。必要なのは「技術的リフレクシビティ」である。
- **グリーンハル**（Greenhalgh, 2026）：拒否声明の懸念には同意する。しかし全面拒否は正当化されない。採用か拒否かの二分法を超えて、「誰が解釈の権威をもつか」を問うべきである。
- **メンドーサとキランタン**（Mendoza & Quilantang, 2026）：媒介は、反省性の条件そのものである。AIとの「生産的な摩擦」が判断を鋭くする。周縁にいる研究者への公正も考えるべきである。
- **シベオニら**（Sibeoni et al., 2026）：分野は、否認・怒り・取引・抑うつ・受容という「喪の過程」の中にある。拒否も美化もせず、共に働く実践を探るべきである。
- **ゴー**（Goh, 2026, Times Higher Education）：拒否は理性ではなく、アイデンティティの防衛である。資源の少ない研究機関の力を削る。ただし、筆者はAIで質的分析を行うサービス（Evidano、旧AILYZE）の創業者でCEOであり、利害関係がある。

シベオニらの「喪の過程」は、心理学の研究者にはなじみ深い枠組みだと思う。いま、多くの人は「怒り」の段階にいるのかもしれない。AIを認めたくない、という段階である。

公正の論点も大事である。資金のある研究室なら、分析者を何人も雇える。資金がなければ、AIを使った方がずっと楽である。全面的に拒否するなら、それ自体が、資源の少ない研究者を締め出すことにならないか。また、AIに自分の分析への反論を出してもらい、自分の解釈を相対化する道具として使う、という使い方もありうる。

### 拒否に近い立場、慎重な立場

反論と並んで、拒否に近い、あるいは慎重な立場の論考も出ている。

- **ネグエンとウェルチ**（Nguyen & Welch, 2026）：AIを研究者と研究対象のあいだに置くと、意味のある知が生まれる条件そのものが歪む。
- **デューク**（Duke, 2026）：AIに頼ると、「薄い記述」が「十分」とされ、分析の技能が失われる。参加者との約束も迂回される。
- **ロバーツら**（Roberts et al., 2024）：AIの人間らしさは、こちらが意図を投影した錯覚である。確信に満ちた口調、幻覚、[迎合]({{ '/literacy/sycophancy/' | relative_url }})、責任を負えないことが問題になる。
- **マッタら**（Matta et al., 2026）：中間の立場。AIは「解釈の保守化」と「解釈の枯渇」を招く。人の解釈、テキストマイニング、AIを組み合わせて補い合うべきである。

ここまでの攻防を、私は四つの争点にまとめている。①AIは意味を作れるか、②反省性は誰のものか、③誰が解釈の権威をもつか、④環境・労働・データの正義、である。

## 第4段階（2026年〜）：その先

### 比較研究はつづく

拒否声明のあとも、比較研究は止まっていない。そして、同じ年に正反対に見える結果が並んでいる。

ヒルらは、デジタル健康支援についての患者・市民のフォーカスグループ1回分（7名、約1.2万語）を、ChatGPT-5、Claude 4 Sonnet、QualiGPTと、盲検化された人間の分析者2名に分析させた（Hill et al., 2026）。専門家3名の合議を基準にすると、演繹的コーディングの一致率はAIが93.5%、人間が92.7%で、AIは人間に劣らなかった。ただし、帰納的分析で劣らなかったのはChatGPT-5だけで、誤り率は12.4%だった。結論は「代わりではなく、補助として」である。

ファン・デン・ベルクモルテルらは、オランダの地方紙317記事（コロナ禍の看護師についての記事）を、GPT-5やGemini 2.5 Proと人間でコーディングした（van den Berkmortel et al., 2026）。GPT-5と人間の一致はα=0.49で、人間どうしの0.70に届かなかった。著者らは、AIは「書かれているか」をコードし、人は「解釈上の重み」を優先する、とまとめている。同じ時期の研究でも、何を基準にするかで、結論はかなり違ってくる。

### 攻防の下で、AIはどう描かれてきたか

拒否か受容かという攻防の下で、研究者たちはAIをどのように描いてきたのか。私たちは、2024〜2026年の方法論的な論考28篇から、AIの描き方を213ユニット抽出し、四つのメタファーにまとめた。AIを人に似たものとして描くか道具として描くかという「似姿」、AIを通すと何が見え何が見えなくなるかという「レンズ」、何を任せ何を手放さないかという「手」、何を大切にし何を差し出すかという「秤」である。研究者たちは、この四つの問いを行き来している。

この研究をAIとどう進めたかは、[AIと一緒に、メタ統合をやってみた]({{ '/articles/meta-synthesis-with-ai/' | relative_url }})に書いた。

## 参考文献

- De Paoli, S. (2026a). Can machines perform a qualitative data analysis? Reading the debate with Alan Turing. *Social Science Computer Review*. https://doi.org/10.1177/08944393261451707
- De Paoli, S. (2026b). Why we should reject to reject the use of generative artificial intelligence in qualitative analysis: A response to Jowsey, Braun, Clarke, Lupton, and Fine (2025). *Qualitative Inquiry*. https://doi.org/10.1177/10778004261425137
- Duke, M. R. (2026). Artificial intelligence and the end(s) of qualitative data analysis. *Human Organization, 85*(1), 8–10. https://doi.org/10.1080/00187259.2025.2546439
- Friese, S., Nguyen-Trung, K., Powell, S., & Morgan, D. L. (2026). Beyond binary positions: Making space for critical and reflexive GenAI integration in qualitative research. *Qualitative Inquiry*. https://doi.org/10.1177/10778004261429393
- Goh, J. (2026, January 16). Qualitative researchers' AI rejection is based on identity, not reason. *Times Higher Education*. https://www.timeshighereducation.com/opinion/qualitative-researchers-ai-rejection-based-identity-not-reason
- Greenhalgh, T. (2026). Reflexive qualitative research and generative AI: A call to go beyond the binary. *Qualitative Inquiry*. https://doi.org/10.1177/10778004261429383
- Hill, C., Dahil, A., Simpson, G., Hardisty, D., Keast, J., Pinn, C. K., & Dambha-Miller, H. (2026). Large language models for thematic analysis in healthcare research: A blinded mixed-methods comparison with human analysts. *PLOS Digital Health, 5*(4), e0001189. https://doi.org/10.1371/journal.pdig.0001189
- Ibrahim, E. I., Nelson, L. K., & Voyer, A. (2026). Should generative AI be used in reflexive qualitative research? *Qualitative Inquiry*. https://doi.org/10.1177/10778004261456208
- Jowsey, T., Braun, V., Clarke, V., Lupton, D., & Fine, M. (2025). We reject the use of generative artificial intelligence for reflexive qualitative research. *Qualitative Inquiry*. https://doi.org/10.1177/10778004251401851
- Jowsey, T., Stapleton, P., Campbell, S., Davidson, A., McGillivray, C., Maugeri, I., Lee, M., & Keogh, J. (2025). Frankenstein, thematic analysis and generative artificial intelligence: Quality appraisal methods and considerations for qualitative research. *PLOS ONE, 20*(9), e0330217. https://doi.org/10.1371/journal.pone.0330217
- Levitt, H. M. (2026). A consideration of the ethics and methodological integrity of generative artificial intelligence in qualitative research: Guidelines for Qualitative Psychology. *Qualitative Psychology*. https://doi.org/10.1037/qup0000353
- Matta, C., Nordmark, S., & Masiello, I. (2026). AI could undermine qualitative research. Luckily, we have a plan. *International Journal of Qualitative Methods, 25*. https://doi.org/10.1177/16094069261456950
- Mendoza, K. P. R., & Quilantang, R. F. (2026). In relation, not replacement: A reflexive case for generative AI in qualitative research. *Qualitative Research Journal*. https://doi.org/10.1108/QRJ-11-2025-0428
- Mizumoto, A., & Teng, M. F. (2025). Large language models fall short in classifying learners' open-ended responses. *Research Methods in Applied Linguistics, 4*(2), 100210. https://doi.org/10.1016/j.rmal.2025.100210
- Nguyen, D. C., & Welch, C. (2026). Engaged and responsible scholarship: Why qualitative researchers should not embrace GenAI. *Business & Society, 65*(7), 1787–1792. https://doi.org/10.1177/00076503251386539
- Prescott, M. R., Yeager, S., Ham, L., Rivera Saldana, C. D., Serrano, V., Narez, J., Paltin, D., Delgado, J., Moore, D. J., & Montoya, J. (2024). Comparing the efficacy and efficiency of human and generative AI: Qualitative thematic analyses. *JMIR AI, 3*, e54482. https://doi.org/10.2196/54482
- Roberts, J., Baker, M., & Andrew, J. (2024). Artificial intelligence and qualitative research: The promise and perils of large language model (LLM) "assistance." *Critical Perspectives on Accounting, 99*, 102722. https://doi.org/10.1016/j.cpa.2024.102722
- Sakaguchi, K., Sakama, R., & Watari, T. (2025). Evaluating ChatGPT in qualitative thematic analysis with human researchers in the Japanese clinical context and its cultural interpretation challenges: Comparative qualitative study. *Journal of Medical Internet Research, 27*, e71521. https://doi.org/10.2196/71521
- Sibeoni, J., Verneuil, L., Manolios, E., Meunier, J.-P., Ponsard, C., Mathé, J., & Revah-Lévy, A. (2026). AI and qualitative health research: Working through a necessary grieving process. *Qualitative Health Research*. https://doi.org/10.1177/10497323261417237
- van den Berkmortel, B., Westra, D., Gifford, R., & van de Baan, F. C. (2026). Analyzing nurse sentiment in a Dutch regional newspaper during the COVID-19 pandemic: Comparative content analysis of GPT-5, Gemini 2.5 Pro, and human coding. *Journal of Medical Internet Research, 28*, e98374. https://doi.org/10.2196/98374
- 薛海升・梶原佐保・豐田隼（2026）. 質的研究者は生成AIをどう論じるか. 日本質的心理学会第23回大会 ポスター発表.

