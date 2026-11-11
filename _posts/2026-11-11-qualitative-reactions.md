---
title: "質的研究者は、生成AIにどう反応してきたか：期待・拒否・攻防・その先"
date: 2026-11-11 09:00:00 +0900
author: 薛海升
series: ai-literacy-2026
order: 8
summary_ja: "2023年からの3年あまりで、質的研究者の反応は大きく揺れた。AIと人間の分析を比べる研究、フランケンシュタイン論文、419名の拒否声明、それへの反論、GPT-5時代の比較研究までを、四つの段階に分けてたどる。"
---

「質的研究×生成AI」の関連論文は、Web of Scienceに収録されたものだけで、2022年の329本から2025年には4,075本へ、約12倍に増えた（薛・梶原・豐田, 2026）。量が増えただけでなく、議論の向きも大きく揺れた。この記事では、その動きを四つの段階に分けてたどる。

<figure>
  <a href="{{ '/assets/img/notes/wos-growth.svg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/notes/wos-growth.svg' | relative_url }}" alt="2022年の329本と2025年の4,075本を比べた棒グラフ"></a>
  <figcaption>図1　「質的研究×生成AI」関連論文の数（Web of Science）。</figcaption>
</figure>

<figure>
  <a href="{{ '/assets/img/notes/four-stages.svg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/notes/four-stages.svg' | relative_url }}" alt="期待と比較、拒否、攻防、その先の四つの段階"></a>
  <figcaption>図2　質的研究者の反応の四つの段階。段階ははっきり入れ替わるのではなく、重なっている。</figcaption>
</figure>

## 第1段階（2023〜2024年）：期待と比較

最初の反応は素朴なものだった。生成AIは言葉を扱う。質的データも言葉である。だから、コーディングやテーマ分析にも使えるのではないか、というものである。

ただし、自動コーディング自体は新しくない。ChatGPT以前から、NVivoやATLAS.tiには、キーワードや感情を自動で分類する機能があった。生成AIで、それがテーマ分析にまで広がった。

この時期に最も多かったのは、AIと人間の分析を比べる研究である。私たちが行った文献のスクリーニングでも、140篇のうち最多の31篇がこの型だった（暫定的な分類）。代表的な研究を挙げる。

| 研究 | データとモデル | 結果 |
|---|---|---|
| Prescott et al.（2024）JMIR AI | HIV支援のSMS文40件。ChatGPT・Bard | 帰納的テーマの71%が一致。コード単位の一致は37〜47%。所要時間は約20分と約570分 |
| Sakaguchi et al.（2025）JMIR | 日本の病院での面接30件。ChatGPT-4 | 記述的なテーマは一致率80%超。文化や感情の解釈が要るテーマは約30% |
| Mizumoto & Teng（2025）RMAL | 日本の大学生143名の自由記述。複数のモデル | 最も良いモデルでもκ=0.68で、強い一致の基準（0.8）に届かず |
| Bennis & Mouwafaq（2025）BMC Med Inform | 回答448件。9つのモデル | 一部のモデルは専門家の分析と完全に一致（Jaccard係数1.00） |
| Lockwood et al.（2026）School Psychology | 自由記述60名分。ChatGPT-4と初心者 | 結果は人間とおおむね似ていて、ずっと速い。ただし過程が見えず、一部のコードが不明瞭 |

結果はばらばらである。そして、どの研究も「人間の分析を正解として、AIがどれだけ近づくか」を測っている。この比べ方そのものが質的研究にとって妥当なのかは、次の段階で問われることになる。

## 第2段階（2025年）：拒否

### フランケンシュタイン論文

2025年9月、ジョウジーらは、AIでテーマ分析を実際に試した論文を『PLOS ONE』に発表した（Jowsey et al., 2025）。分析データを公開している健康分野の研究を5本探し、学習に使われない設定のMicrosoft Copilotに、同じデータを各3回分析させた。そのうえで、元の論文の人間による分析と比べた。

<figure>
  <a href="{{ '/assets/img/notes/frankenstein.svg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/notes/frankenstein.svg' | relative_url }}" alt="58%、79%、2〜3頁の三つの数字"></a>
  <figcaption>図3　ジョウジーらの比較で分かったこと（Jowsey et al., 2025）。</figcaption>
</figure>

Copilotが示した引用のうち、平均58%はデータに存在しない、捏造されたものだった。人間の研究者の引用がデータどおり正確だった割合は、平均79%だった。つまり、人間の論文にも誤りはあった。また、Copilotのテーマと引用は、データの最初の2〜3ページからばかり取られていた。結論は、現在のCopilotはテーマ分析には勧められない、というものである。

### 419名の拒否声明

同じ年の12月、「再帰的質的研究での生成AIの使用を拒否する」という声明が『Qualitative Inquiry』に出た（Jowsey, Braun, Clarke, Lupton, & Fine, 2025）。32か国419名の質的研究者の立場として出されたもので、著者には、再帰的テーマ分析を体系化したブラウンとクラークも含まれる。

拒否の理由は三つある。

1. 生成AIは、言葉から意味を作ることができない。
2. 再帰的テーマ分析などは、主観をもち、ある立場に位置づいた研究者が行う「人間の研究実践」である。
3. 環境への負荷と、有害な内容を取り除く労働者（多くはグローバル・サウスにいる）の搾取という、社会と環境の正義の問題がある。

拒否は、制度にも入り始めた。APAの『Qualitative Psychology』誌は2026年1月、データの収集や分析にAIを使った論文は掲載しない、という方針を示した（Levitt, 2026）。

## 第3段階（2026年）：攻防

### 「拒否を拒否する」反論

2026年に入ると、拒否声明への反論が相次いだ。

- **フリーゼら（Friese et al., 2026, QI）**：全面的な拒否は、方法の発展を閉ざす。研究者が主導すれば、AIはCAQDAS（NVivoやMAXQDAなどの質的データ分析ソフト）と同じく、正当な分析の支援になる。この反論には、22か国の112名が賛同者として名を連ねた。
- **デ・パオリ（De Paoli, 2026, QI）**：方法論の議論に見えて、実は哲学的な前提による禁止である。教条になりかねず、議論と革新を妨げる。同じ年の別の論文（SSCR）では、「原理的にできるか」ではなく、「人とAIの協働で、人間に匹敵する分析ができるか」を実証で問うべきだとした。
- **イブラヒムら（Ibrahim, Nelson, & Voyer, 2026, QI）**：生成AIは一枚岩ではない。文脈と全体性への注意は、質的な認識論と合う部分がある。必要なのは「技術的リフレクシビティ」である。
- **グリーンハル（Greenhalgh, 2026, QI）**：拒否声明の懸念には同意する。しかし全面拒否は正当化されない。採用か拒否かの二分法を超えて、「誰が解釈の権威をもつか」を問うべきである。
- **メンドーサとキランタン（Mendoza & Quilantang, 2026, QRJ）**：媒介は反省性の条件そのものである。AIとの「生産的な摩擦」が判断を鋭くする。周縁にいる研究者への公正も考えるべきである。
- **シベオニら（Sibeoni et al., 2026, QHR）**：分野は、否認・怒り・取引・抑うつ・受容という「喪の過程」の中にある。拒否も美化もせず、共に働く実践を探るべきである。
- **ゴー（Goh, 2026, Times Higher Education）**：拒否は理性ではなく、アイデンティティの防衛である。資源の少ない研究機関の力を削る。ただし、筆者はAIで質的分析を行うサービスの経営者であり、利害関係がある。

### 拒否に近い立場、慎重な立場

反論と並んで、拒否に近い、あるいは慎重な立場の論考も出ている。

- **ネグエンとウェルチ（Nguyen & Welch, 2025, Business & Society）**：AIを研究者と研究対象のあいだに置くと、意味のある知が生まれる条件そのものが歪む。
- **デューク（Duke, 2026, Human Organization）**：AIに頼ると、「薄い記述」で十分だとされ、分析の技能が失われる。参加者との約束も迂回される。
- **ロバーツら（Roberts, Baker, & Andrew, 2024）**：AIの人間らしさは、こちらが意図を投影した錯覚である。確信に満ちた口調、幻覚、迎合、責任を負えないことが問題になる。
- **マッタら（Matta et al., 2026, IJQM）**：中間の立場。AIは「解釈の保守化」と「解釈の枯渇」を招く。人の解釈、テキストマイニング、AIを組み合わせて補い合うべきである。

ここまでの攻防を、私は四つの争点にまとめている。①AIは意味を作れるか、②反省性は誰のものか、③誰が解釈の権威をもつか、④環境・労働・データの正義、である。

## 第4段階（2026年〜）：その先

### 比較研究はつづく

拒否声明のあとも、比較研究は止まっていない。そして、同じ年に正反対に見える結果が並んでいる。

ヒルらは、デジタル健康支援についてのフォーカスグループ1回分（7名、約1.2万語）を、ChatGPT-5、Claude 4 Sonnet、QualiGPTと、盲検化された人間の分析者2名に分析させた（Hill et al., 2026）。専門家3名の合議を基準にすると、演繹的コーディングの一致率はAIが93.5%、人間が92.7%で、AIは人間に劣らなかった。ただし、帰納的分析で劣らなかったのはChatGPT-5だけで、誤り率は12.4%だった。結論は「代わりではなく、補助として」である。

ファン・デン・ベルクモルテルらは、オランダの地方紙317記事（コロナ禍の看護師についての記事）を、GPT-5やGemini 2.5 Proと人間でコーディングした（van den Berkmortel et al., 2026）。GPT-5と人間の一致はα=0.49で、人間どうしの0.70に届かなかった。著者らは、AIは「書かれているか」をコードし、人は「解釈上の重み」を優先する、とまとめている。

何を「正解」とするかで、結論は変わる。比べ方そのものを問う必要は、今も残っている。

### 二分法を超えて

拒否か受容かという攻防の下で、研究者たちはAIをどのように描いてきたのか。私たちはこの問いを、2024〜2026年の方法論的な論考28篇の質的メタ統合で調べた。結果は、AIを描く四つのメタファー（似姿・レンズ・手・秤）にまとまった。詳しくは[AIと一緒に質的メタ統合をやってみた]({{ '/articles/meta-synthesis-with-ai/' | relative_url }})に書いた。

## 参考文献

- Bennis, I., & Mouwafaq, S. (2025). Advancing AI-driven thematic analysis in qualitative research: A comparative study of nine generative models on cutaneous leishmaniasis data. *BMC Medical Informatics and Decision Making*. https://doi.org/10.1186/s12911-025-02961-5
- Friese, Nguyen-Trung, Powell, & Morgan. (2026). Beyond binary positions: Making space for critical and reflexive GenAI integration in qualitative research. *Qualitative Inquiry*.
- Jowsey, T., Braun, V., Clarke, V., Lupton, D., & Fine, M. (2025). We reject the use of generative artificial intelligence for reflexive qualitative research. *Qualitative Inquiry*.
- Jowsey, T., et al. (2025). Frankenstein, thematic analysis and generative artificial intelligence. *PLOS ONE, 20*(9), e0330217.
- Levitt, H. M. (2026). A consideration of the ethics and methodological integrity of generative artificial intelligence in qualitative research: Guidelines for Qualitative Psychology. *Qualitative Psychology*. https://doi.org/10.1037/qup0000353
- Lockwood, et al. (2026). Human versus machine: A comparative analysis of qualitative coding by humans and ChatGPT-4. *School Psychology, 41*(2), 161–172. https://doi.org/10.1037/spq0000715
- Mizumoto, A., & Teng, M. F. (2025). Large language models fall short in classifying learners' open-ended responses. *Research Methods in Applied Linguistics, 4*(2), 100210. https://doi.org/10.1016/j.rmal.2025.100210
- Nguyen, D. C., & Welch, C. (2025). Engaged and responsible scholarship: Why qualitative researchers should not embrace GenAI. *Business & Society*.
- Prescott, et al. (2024). Comparing the efficacy and efficiency of human and generative AI: Qualitative thematic analyses. *JMIR AI, 3*, e54482. https://doi.org/10.2196/54482
- Sakaguchi, K., Sakama, R., & Watari, T. (2025). Evaluating ChatGPT in qualitative thematic analysis with human researchers in the Japanese clinical context and its cultural interpretation challenges: Comparative qualitative study. *Journal of Medical Internet Research, 27*, e71521. https://doi.org/10.2196/71521
- 薛・梶原・豐田（2026）. 質的研究者は生成AIをどう論じるか. 日本質的心理学会第23回大会 ポスター発表.

本文で触れたそのほかの論考（掲載誌と年）：De Paoli（2026, *Qualitative Inquiry*; 2026, *Social Science Computer Review*）、Duke（2026, *Human Organization*）、Goh（2026, *Times Higher Education*）、Greenhalgh（2026, *Qualitative Inquiry*）、Hill et al.（2026, *PLOS Digital Health*）、Ibrahim, Nelson, & Voyer（2026, *Qualitative Inquiry*）、Matta et al.（2026, *International Journal of Qualitative Methods*）、Mendoza & Quilantang（2026, *Qualitative Research Journal*）、Roberts, Baker, & Andrew（2024）、Sibeoni et al.（2026, *Qualitative Health Research*）、van den Berkmortel et al.（2026, *JMIR*）。
