---
title: "質的研究者は、AIにどう反応したか：期待・拒否・攻防・その先"
date: 2026-11-11 09:00:00 +0900
title_en: "How have qualitative researchers responded to AI? Expectation, rejection, contestation and beyond"
summary_en: "From early hopes and comparison studies, through the 419-signatory rejection statement and the responses to it, to studies in the GPT-5 era: four overlapping stages in how qualitative researchers have reacted to generative AI."
author: 薛海升
key: qualitative-reactions
order: 4
wiki: [hallucination, lost-in-the-middle, caqdas, sycophancy]
summary_ja: "「言葉が分かるなら、分析にも使えるはず」という期待から、419名の拒否声明、それを拒否する反論、GPT-5時代の比較研究まで。質的研究者の反応を四つの段階に分けてたどる。"
topic: "質的研究"
related_notes: ["meta-synthesis-with-ai", "understanding", "other-fields"]
updated: "2026-11-12 00:00:00 +0900"
sort_date: 20261112
---

言葉を扱うAIの登場は、質的研究の中心的な営みに直接関わる。そのため、NLPや数学で見られたような「分野の危機」が、質的研究でも感じられていても不思議ではない（[他の分野は、AIにどう反応したか]({{ '/articles/other-fields/' | relative_url }})）。そこで私は、質的研究者が実際にどのように反応してきたのかを調べた。本稿で取り上げる文献の多くは、私たちが行った質的メタ統合（薛・梶原・豐田, 2026）で収集したものである。文献の一覧は、[AI×質的研究の文献]({{ '/papers/' | relative_url }})にまとめている。

これまでの反応は、おおよそ四つの段階に整理できる。

1. **期待と比較**（2023〜2024年）：言葉を扱えるAIを分析にも利用できるのではないかという期待から、AIと人間の分析を比較する研究が急増した。
2. **拒否**（2025年）：9月にフランケンシュタインを題名に含む比較研究が発表され、12月には419名による拒否声明が出された。
3. **攻防**（2026年）：拒否声明に反論する論考と、拒否に近い、あるいは慎重な立場の論考が相次いだ。
4. **その先**（2026年〜）：比較研究が引き続き行われるとともに、受容と拒否の二分法を超える議論も進められている。

ただし、これらは明確に入れ替わる段階ではなく、互いに重なり合っている。

## 第1段階（2023〜2024年）：期待と比較

「質的研究×生成AI」に関連する論文は、Web of Science収録分だけでも、2022年の329本から2025年の4,075本へと、約12倍に増加した。

当初の反応には、素朴な期待が見られた。生成AIが言葉を扱い、質的データも言葉からなるのであれば、コーディングやテーマ分析に利用できるのではないか、という考え方である。とりわけ、ラベルを付けていくコーディングは労働集約的な作業であり、AIによってその負担を軽減できることが期待された。

ただし、自動コーディング自体は、生成AIによって初めて登場したものではない。ChatGPT以前から、NVivoやATLAS.tiなどの[質的データ分析ソフト]({{ '/literacy/caqdas/' | relative_url }})には、キーワードや感情を自動分類する機能があった。生成AIの登場によって、その対象がテーマ分析にまで広がったのである。

### 結果は、ばらばら

この時期に多く見られたのは、AIによる分析と人間による分析を比較する研究である。私たちのスクリーニングでも、題目と抄録によって絞り込んだ140篇のうち、暫定的な分類では31篇が該当し、最も多かった。ただし、主な研究を並べてみると、結果は一様ではない。

| 研究 | データとモデル | 結果 |
|---|---|---|
| [Prescott et al. (2024)](https://doi.org/10.2196/54482) | HIV支援のSMS文40件。ChatGPT、Bard | 帰納的テーマの71%が一致。コード単位の一致は37〜47%。所要時間は約20分と約570分 |
| [Sakaguchi et al. (2025)](https://doi.org/10.2196/71521) | 日本の病院での面接30件。ChatGPT-4 | 記述的なテーマは80%以上一致。文化や感情の解釈が要るテーマは約30% |
| [Mizumoto & Teng (2025)](https://doi.org/10.1016/j.rmal.2025.100210) | 日本の大学生143名の自由記述。複数のLLM | 最も良いモデルでもκ=0.68。強い一致の基準（0.8）に届かない |
| [Bennis & Mouwafaq (2025)](https://doi.org/10.1186/s12911-025-02961-5) | 回答448件。9つの生成AI | 一部のモデルは専門家の分析と完全に一致（Jaccard係数1.00） |
| [Lockwood et al. (2026)](https://doi.org/10.1037/spq0000715) | 教員60名の自由記述。ChatGPT-4と初心者の人間 | 結果はおおむね似ていて、AIはずっと速い。ただし過程が見えず、一部のコードが不明瞭 |

これらの研究では、人間の分析を正解とし、AIの分析がどこまで近づくかを測定している。この比較のあり方について、私は少し疑問を持っている。質的研究では、同じデータを用いても、AさんとBさんが行う研究の結果は異なるはずである。そのため、一致しないこと自体が、直ちに問題になるとは言えないと思う。人間の分析を「正解」とする比較が、質的研究にとって妥当であるかどうかは、次の段階で争点となっていく。

## 第2段階（2025年）：拒否

### フランケンシュタインのテーマ分析

2025年9月、ジョウジーらは、実際にAIを用いてテーマ分析を試みた研究を『PLOS ONE』に発表した。題名に含まれる「フランケンシュタイン」は、善意の科学者が作ったものが、作り手の予想を超えた結果をもたらすことへの警告として読むことができる。

この研究では、分析データを公開している健康分野の研究5本を選び、Microsoft Copilotに各データを3回ずつ分析させ、原論文の人間による分析と比較した。その結果、Copilotが提示した引用のうち、平均58%がデータに存在しない捏造であった。一方、人間の研究者が用いた引用も、データと正確に一致する割合は平均79%であり、人間の論文にも誤りが見られた。また、Copilotのテーマや引用は、データの最初の2〜3ページに偏っていた。著者らは、現在のCopilotをテーマ分析に用いることは推奨できないと結論づけている。

ただし、この結果を読む際には、利用したモデルや分析時期を考慮する必要があると思う。実際の分析はおそらく2024年に行われており、モデルの性能も、それほど高いものではなかった。また、長いデータを一度に提示している点も関わる。AIには、長い資料の冒頭と末尾に比べて、中ほどの情報を捉えにくい特徴がある（[Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})）。引用が冒頭の数ページに集中した結果には、この特徴が表れていると考えられる。

### 「再帰的質的研究での生成AIの使用を、拒否する」

同年12月には、『Qualitative Inquiry』に「再帰的質的研究での生成AIの使用を拒否する」という声明が掲載された（Jowsey et al., 2025）。非常に強い立場を示す表現である。声明は32か国419名の質的研究者の立場として出され、著者には、再帰的テーマ分析を体系化したブラウンとクラークも含まれていた。

声明に示された理由は、三つにまとめられる。

1. **意味を作れない**：生成AIには、言葉から意味を作り出すことができないとされる。
2. **人間の研究実践**：再帰的テーマ分析などは、主観を持ち、特定の立場に位置づけられた研究者による「人間の研究実践」である。そこにAIが加われば、その実践自体が異なるものになるという。
3. **社会と環境の正義**：AIの訓練には大量の電力と水が必要である。また、有害な内容を除去する作業の多くを、グローバル・サウスの労働者が担っていることも問題とされる。

三つ目については、私自身の見方も記しておきたい。環境負荷に関しては、電力や水に関わる技術の進歩によって、当時指摘されていたほど深刻ではなくなっている可能性もある。一方で、英語を話せることを理由に、グローバル・サウスの人々に低賃金でAIへのフィードバックを担わせるという、搾取の構造があることは確かだと思う。

こうした拒否の立場は、制度にも反映され始めている。APAの『Qualitative Psychology』誌は2026年1月、文献レビュー、方法の記述、データの収集・分析、分析結果の記述、解釈などにAIを用いた論文は掲載しないという[方針](https://www.apa.org/pubs/journals/qua/ai-policy)を示した（[Levitt, 2026](https://doi.org/10.1037/qup0000353)）。また、引用や参考文献の探索においても、AIを唯一の、主要な、または未検証の情報源として用いることを禁じている。翻訳については、原語の原稿の提出や人間による確認を求める一方、単語の選択や文単位の修正は、これらの禁止事項とは区別して扱っている。

## 第3段階（2026年）：攻防

### 「拒否を拒否する」

2026年に入ると、この拒否声明に対する反論が相次いで発表された。拒否という立場そのものを、改めて問い直す論考である。

- **フリーゼら**（[Friese et al., 2026](https://doi.org/10.1177/10778004261429393)）：全面的な拒否は、方法の発展の可能性を閉ざすと論じている。研究者の主導の下では、AIもCAQDAS（NVivoやMAXQDAなどの質的データ分析ソフト）と同様に、正当な分析支援として利用できるという。この反論には、22か国112名が賛同者として名を連ねた。
- **デ・パオリ**（[De Paoli, 2026b](https://doi.org/10.1177/10778004261425137)）：拒否声明は、方法論上の議論のように見えて、哲学的な前提に基づく禁止であり、教条化して議論や革新を妨げるおそれがあると論じている。また、同年の別の論文（[De Paoli, 2026a](https://doi.org/10.1177/08944393261451707)）では、チューリングの「計算機械と知能」を参照し、「機械に原理的に分析ができるか」という問いから、「人とAIが協働して、人間の分析者に匹敵する分析ができるか」という実証的な問いへの転換を提案した。
- **イブラヒムら**（[Ibrahim et al., 2026](https://doi.org/10.1177/10778004261456208)）：生成AIを一様なものとして扱うことに疑問を呈している。文脈や全体性に注意を向ける性質には、質的な認識論と重なる側面もあり、「技術的リフレクシビティ」が必要だとする。
- **グリーンハル**（[Greenhalgh, 2026](https://doi.org/10.1177/10778004261429383)）：拒否声明の懸念には同意しつつも、全面的な拒否までは正当化されないと述べている。採用と拒否の二分法を超えて、「誰が解釈の権威をもつか」を問うことを提案している。
- **メンドーサとキランタン**（[Mendoza & Quilantang, 2026](https://doi.org/10.1108/QRJ-11-2025-0428)）：媒介されること自体が反省性の条件であり、AIとの「生産的な摩擦」によって判断が鋭くなると論じている。また、周縁に位置する研究者に対する公正も考慮する必要があるという。
- **シベオニら**（[Sibeoni et al., 2026](https://doi.org/10.1177/10497323261417237)）：現在の分野を、否認・怒り・取引・抑うつ・受容という「喪の過程」に位置づけている。拒否にも美化にも偏らず、AIと共に働く実践を探ることを求めている。
- **ゴー**（[Goh, 2026](https://www.timeshighereducation.com/opinion/qualitative-researchers-ai-rejection-based-identity-not-reason), Times Higher Education）：拒否の背景には、理性よりもアイデンティティの防衛があり、資源の少ない研究機関の力を削ぐと論じている。ただし、筆者は、AIを用いた質的分析サービス（Evidano、旧AILYZE）の創業者かつCEOであり、この議論に利害関係を持つ。

この議論については、私自身も疑問に思うことがある。419名の署名が集まったとしても、それをもって、他の質的研究者すべてが従うべき立場となるのだろうか。

シベオニらが用いる「喪の過程」は、心理学の研究者にとってなじみのある枠組みだと思う。この枠組みに沿えば、多くの人は、まだAIを認めたくないという「怒り」の段階にいるのかもしれない。

また、公正の問題も考慮する必要がある。十分な資金がある研究室では、複数の分析者を雇うことができるが、資金が乏しい場合には、AIの利用によって作業の負担を大きく減らせる。全面的な拒否は、結果として、資源の少ない研究者を排除することにつながらないだろうか。さらに、AIに自分の分析への反論を提示させ、その検討を通して自分の解釈を相対化するという利用方法も考えられる。

### 拒否に近い立場、慎重な立場

こうした反論と並行して、拒否に近い立場や、慎重な検討を求める論考も発表されている。

- **ネグエンとウェルチ**（[Nguyen & Welch, 2026](https://doi.org/10.1177/00076503251386539)）：研究者と研究対象のあいだにAIを介在させることによって、意味のある知が生まれる条件そのものが歪められると論じている。
- **デューク**（[Duke, 2026](https://doi.org/10.1080/00187259.2025.2546439)）：AIへの依存により、「薄い記述」が「十分」として受け入れられ、分析技能が失われると懸念している。また、参加者との約束が迂回されることも問題にしている。
- **ロバーツら**（[Roberts et al., 2024](https://doi.org/10.1016/j.cpa.2024.102722)）：AIに感じる人間らしさは、利用者が意図を投影することから生じる錯覚だとしている。そのうえで、確信に満ちた口調や幻覚、[迎合]({{ '/literacy/sycophancy/' | relative_url }})、責任を担えないことを問題として挙げている。
- **マッタら**（[Matta et al., 2026](https://doi.org/10.1177/16094069261456950)）：中間的な立場から、AIが「解釈の保守化」や「解釈の枯渇」を招くことを指摘している。そのため、人間の解釈、テキストマイニング、AIを組み合わせ、互いに補うことを提案している。

私は、ここまでの議論を、①AIは意味を作れるか、②反省性は誰のものか、③誰が解釈の権威を持つか、④環境・労働・データの正義、という四つの争点に整理している。

## 第4段階（2026年〜）：その先

### 比較研究はつづく

拒否声明が出された後も、比較研究は続けられている。ただし、同じ年の研究にも、正反対に見える結果が示されている。

ヒルらは、デジタル健康支援をテーマとする患者・市民のフォーカスグループ1回分（7名、約1.2万語）について、ChatGPT-5、Claude 4 Sonnet、QualiGPTと、盲検化された人間の分析者2名による分析を比較した（[Hill et al., 2026](https://doi.org/10.1371/journal.pdig.0001189)）。専門家3名の合議を基準とした演繹的コーディングの一致率は、AIが93.5%、人間が92.7%であり、AIは人間に劣らなかった。一方、帰納的分析で同様の結果が得られたのはChatGPT-5のみで、誤り率は12.4%であった。また、注目する側面にも違いがあり、人間は人間関係や感情の水準で問題を捉えるのに対し、AIは仕組みや手続きの問題として捉える傾向が見られた。著者らの結論は、「代わりではなく、補助として」というものである。

ファン・デン・ベルクモルテルらは、コロナ禍の看護師に関するオランダの地方紙317記事を対象として、GPT-5やGemini 2.5 Proと人間によるコーディングを比較した（van den Berkmortel et al., 2026）。GPT-5と人間の一致度はα=0.49であり、人間同士の0.70には達しなかった。著者らは、AIが「書かれているか」をコードするのに対し、人間は「解釈上の重み」を優先すると説明している。このように、同じ時期の研究であっても、何を基準に評価するかによって、結論は大きく異なる。

### 攻防の下で、AIはどう描かれてきたか

受容と拒否をめぐる議論の中で、研究者たちはAIをどのようなものとして描いてきたのだろうか。私たちは、2024〜2026年の方法論的な論考28篇から、AIの描かれ方に関する213ユニットを抽出し、四つのメタファーにまとめた。具体的には、AIを人に似たものとして描くか、道具として描くかという「似姿」、AIを通して何が見え、何が見えなくなるかという「レンズ」、何を任せ、何を手放さないかという「手」、何を大切にし、何を差し出すかという「秤」である。研究者たちは、これら四つの問いのあいだを行き来しながら、AIを論じていると考えられる。

この研究を、AIを利用しながらどのように進めたかについては、[AIと一緒に、メタ統合をやってみた]({{ '/articles/meta-synthesis-with-ai/' | relative_url }})で説明している。

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

<!--EN-->

AI that works with language enters the very center of qualitative research. It would not have been strange for the kind of “crisis of the field” that NLP and mathematics went through to reach qualitative research too ([How did other fields react to AI?]({{ '/articles/other-fields/' | relative_url }})). What actually happened? I looked into it. Much of the literature discussed here was collected in our qualitative meta-synthesis (Xue, Kajiwara & Toyoda, 2026). The full list is on the [Literature]({{ '/papers/' | relative_url }}) page.

The reactions fall roughly into four stages.

1. **Expectation and comparison** (2023–2024): if it understands language, it should work for analysis too. Studies comparing AI and human analysis multiplied.
2. **Rejection** (2025): the Frankenstein comparison study in September, the 419-signatory rejection statement in December.
3. **Contestation** (2026): rebuttals that rejected the rejection, and essays taking cautious positions, followed one after another.
4. **Beyond** (2026–): comparison studies continue, and the debate moves past the binary.

The stages do not replace each other cleanly; they overlap.

## Stage 1 (2023–2024): expectation and comparison

Papers on “qualitative research × generative AI” indexed in Web of Science alone grew from 329 in 2022 to 4,075 in 2025, about twelvefold.

The first reaction was simple. Generative AI handles language. Qualitative data is language too. So perhaps it could be used for coding and thematic analysis. Coding is labor-intensive work of attaching labels, so the hope was that it would become easier.

Automatic coding itself is not new, though. Even before ChatGPT, [qualitative data analysis software]({{ '/literacy/caqdas/' | relative_url }}) such as NVivo and ATLAS.ti had features that classified keywords and sentiment automatically. Generative AI extended this to thematic analysis.

### The results are all over the place

The most common studies in this period compared AI and human analysis. In our screening too, of the 140 papers narrowed down by title and abstract, the largest group, 31, was of this type (a provisional classification). Line up the main studies and the results are all over the place.

| Study | Data and models | Results |
|---|---|---|
| [Prescott et al. (2024)](https://doi.org/10.2196/54482) | 40 SMS messages for HIV support. ChatGPT, Bard | 71% of inductive themes matched. Code-level agreement 37–47%. About 20 minutes versus about 570 minutes |
| [Sakaguchi et al. (2025)](https://doi.org/10.2196/71521) | 30 interviews at a Japanese hospital. ChatGPT-4 | Over 80% agreement on descriptive themes. About 30% on themes requiring cultural or emotional interpretation |
| [Mizumoto & Teng (2025)](https://doi.org/10.1016/j.rmal.2025.100210) | Open-ended answers from 143 Japanese university students. Several LLMs | Even the best model reached only κ = 0.68, short of the mark for strong agreement (0.8) |
| [Bennis & Mouwafaq (2025)](https://doi.org/10.1186/s12911-025-02961-5) | 448 responses. Nine generative AI models | Some models matched the expert analysis perfectly (Jaccard 1.00) |
| [Lockwood et al. (2026)](https://doi.org/10.1037/spq0000715) | Open-ended answers from 60 faculty. ChatGPT-4 and a novice human | Results broadly similar, and AI much faster. But its process could not be seen, and some codes were unclear |

Every one of these studies treats the human analysis as the right answer and measures how close AI gets. I have some doubts about this. The results of qualitative research are supposed to differ from person to person. A study done by A and a study done by B will differ even with the same data. Perhaps they do not need to agree. Whether this way of comparing, which treats human analysis as the “right answer”, is valid for qualitative research would be questioned in the next stage.

## Stage 2 (2025): rejection

### Frankenstein thematic analysis

In September 2025, Jowsey and colleagues published a paper in PLOS ONE that actually tried thematic analysis with AI. Its title includes “Frankenstein”, which can be read as a warning: something made by a well-meaning scientist brings results its maker did not foresee.

The method: they found five health studies that had published their analysis data, had Microsoft Copilot analyze each dataset three times, and compared the results with the human analysis in the original papers. On average 58% of the quotations Copilot gave did not exist in the data; they were fabricated. The human researchers' quotations were accurate to the data 79% of the time on average, so the human papers had errors too. And Copilot's themes and quotations were taken almost entirely from the first two or three pages of the data. The conclusion: the current Copilot cannot be recommended for thematic analysis.

Still, I think this result should be read with some discount. The analysis was probably actually done in 2024, and the model used was not especially capable. Moreover, they handed over long data all at once. AI can read the beginning and end of long material but is weak in the middle ([Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})). Quotations clustering in the first few pages is exactly that showing up.

### “We reject the use of generative AI for reflexive qualitative research”

In December of the same year, a statement titled “We reject the use of generative artificial intelligence for reflexive qualitative research” appeared in Qualitative Inquiry (Jowsey et al., 2025). These are very strong words. It was issued as the position of 419 qualitative researchers from 32 countries, and its authors include Braun and Clarke, who systematized reflexive thematic analysis.

There are three reasons.

1. **It cannot make meaning**: generative AI cannot make meaning from words.
2. **A human research practice**: reflexive thematic analysis and similar approaches are “human research practices” carried out by researchers who have subjectivity and are situated in a position. Mix AI in, and it becomes something else.
3. **Social and environmental justice**: training AI uses large amounts of electricity and water. And much of the work of removing harmful content is done by workers in the Global South.

On the third, let me add my own view. The environmental burden may no longer be as serious as was said at the time, since technology for power and water has advanced. On the other hand, there really is a structure of exploitation in which people in the Global South are made to give AI feedback for low wages simply because they can speak English.

Rejection also began to enter institutions. In January 2026, the APA journal Qualitative Psychology set out a [policy](https://www.apa.org/pubs/journals/qua/ai-policy) that it will not publish papers that used AI for literature reviews, describing methods, collecting and analyzing data, reporting results, interpretation and so on ([Levitt, 2026](https://doi.org/10.1037/qup0000353)). It also prohibits using AI as the sole, primary or unverified source when searching for citations and references. For translation it requires submitting the manuscript in the original language or human checking, and it distinguishes word choice and sentence-level editing from these prohibitions.

## Stage 3 (2026): contestation

### “Rejecting the rejection”

From 2026, rebuttals to the rejection statement followed one after another: essays that reject the rejection.

- **Friese and colleagues** ([Friese et al., 2026](https://doi.org/10.1177/10778004261429393)): wholesale rejection closes off methodological development. When researchers lead, AI can be a legitimate analytic aid, as CAQDAS (qualitative data analysis software such as NVivo and MAXQDA) is. This rebuttal too was signed by 112 supporters from 22 countries.
- **De Paoli** ([De Paoli, 2026b](https://doi.org/10.1177/10778004261425137)): it looks like a methodological argument, but it is actually a ban based on philosophical premises. It risks becoming dogma and blocks debate and innovation. In another paper the same year ([De Paoli, 2026a](https://doi.org/10.1177/08944393261451707)), following Turing's “Computing Machinery and Intelligence”, he argued that we should ask empirically not “can a machine in principle analyze?” but “can humans and AI working together produce analyses that match human analysts?”
- **Ibrahim and colleagues** ([Ibrahim et al., 2026](https://doi.org/10.1177/10778004261456208)): generative AI is not monolithic. Its attention to context and wholeness fits parts of qualitative epistemology. What is needed is “technological reflexivity”.
- **Greenhalgh** ([Greenhalgh, 2026](https://doi.org/10.1177/10778004261429383)): she shares the concerns of the rejection statement, but wholesale rejection is not justified. We should go beyond the binary of adoption or rejection and ask “who holds interpretive authority?”
- **Mendoza and Quilantang** ([Mendoza & Quilantang, 2026](https://doi.org/10.1108/QRJ-11-2025-0428)): mediation is itself a condition of reflexivity. “Productive friction” with AI sharpens judgment. Fairness to researchers at the margins should be considered too.
- **Sibeoni and colleagues** ([Sibeoni et al., 2026](https://doi.org/10.1177/10497323261417237)): the field is in a “grieving process” of denial, anger, bargaining, depression and acceptance. We should neither reject nor glorify AI, but look for practices of working with it.
- **Goh** ([Goh, 2026](https://www.timeshighereducation.com/opinion/qualitative-researchers-ai-rejection-based-identity-not-reason), Times Higher Education): rejection is a defense of identity, not reason. It weakens less-resourced institutions. Note, however, that the author is founder and CEO of a service that performs qualitative analysis with AI (Evidano, formerly AILYZE), and has a stake.

Here I also have a thought. Just because 419 signatures were gathered, does that mean all other qualitative researchers have to follow?

Sibeoni and colleagues' “grieving process” is, I think, a familiar framework for psychology researchers. Many people may now be at the “anger” stage: the stage of not wanting to accept AI.

The point about fairness matters too. A well-funded lab can hire several analysts. Without funding, using AI is far easier. Wouldn't wholesale rejection itself shut out researchers with fewer resources? There is also a way of using AI as a tool for relativizing your own interpretation, by having it argue against your analysis.

### Positions close to rejection, and cautious positions

Alongside the rebuttals, essays taking positions close to rejection, or cautious ones, have also appeared.

- **Nguyen and Welch** ([Nguyen & Welch, 2026](https://doi.org/10.1177/00076503251386539)): placing AI between researchers and what they study distorts the very conditions under which meaningful knowledge arises.
- **Duke** ([Duke, 2026](https://doi.org/10.1080/00187259.2025.2546439)): relying on AI makes “thin description” count as “enough” and erodes analytic skill. The commitments made to participants are also bypassed.
- **Roberts and colleagues** ([Roberts et al., 2024](https://doi.org/10.1016/j.cpa.2024.102722)): AI's humanness is an illusion created by our projecting intent onto it. A confident tone, hallucination, [sycophancy]({{ '/literacy/sycophancy/' | relative_url }}) and the inability to take responsibility are the problems.
- **Matta and colleagues** ([Matta et al., 2026](https://doi.org/10.1177/16094069261456950)): a middle position. AI invites “interpretive conservatism” and “interpretive depletion”. Human interpretation, text mining and AI should be combined so they make up for one another.

I sum up the contest so far as four points of dispute: ① can AI make meaning, ② whose is reflexivity, ③ who holds interpretive authority, and ④ environmental, labor and data justice.

## Stage 4 (2026–): beyond

### Comparison studies continue

Comparison studies have not stopped since the rejection statement. And in the same year, results that look like opposites sit side by side.

Hill and colleagues had ChatGPT-5, Claude 4 Sonnet, QualiGPT and two blinded human analysts analyze one focus group of patients and members of the public on digital health support (7 people, about 12,000 words) ([Hill et al., 2026](https://doi.org/10.1371/journal.pdig.0001189)). Against a consensus of three experts, deductive coding agreement was 93.5% for AI and 92.7% for humans, so AI was non-inferior. In inductive analysis, however, only ChatGPT-5 was non-inferior, with an error rate of 12.4%. What they paid attention to also differed: the human analysts framed problems at the level of relationships and feelings, while AI tended to frame them as problems of systems and procedures. The conclusion: “as an adjunct, not a replacement”.

Van den Berkmortel and colleagues had GPT-5, Gemini 2.5 Pro and humans code 317 articles in a Dutch regional newspaper (about nurses during COVID-19) (van den Berkmortel et al., 2026). Agreement between GPT-5 and humans was α = 0.49, short of the 0.70 between humans. The authors sum it up: AI codes “whether it is mentioned”; people prioritize “interpretive weight”. Even among studies from the same period, the conclusion varies a lot depending on the standard used.

### How AI has been portrayed beneath the contest

Beneath the contest over rejection or acceptance, how have researchers portrayed AI? From 28 methodological essays published in 2024–2026, we extracted 213 units describing AI and grouped them into four metaphors: “likeness”, whether AI is portrayed as like a person or as a tool; “lens”, what becomes visible and invisible through AI; “hand”, what to delegate and what not to let go of; and “scale”, what to value and what to give up. Researchers move back and forth among these four questions.

How we carried out this study with AI is in [Doing a meta-synthesis with AI]({{ '/articles/meta-synthesis-with-ai/' | relative_url }}).

## References

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
- Xue, H., Kajiwara, S., & Toyoda, H. (2026). How do qualitative researchers discuss generative AI? A new attempt at qualitative meta-synthesis [Poster presentation, in Japanese]. 23rd Annual Meeting of the Japanese Association of Qualitative Psychology.
