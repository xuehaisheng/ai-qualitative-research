---
title: "他の分野は、AIにどう反応したか：NLP・プログラミング・数学"
date: 2026-11-11 09:00:00 +0900
title_en: "How did other fields react to AI? NLP, programming and mathematics"
summary_en: "Research topics in NLP disappeared overnight; most programmers use AI every day despite lingering objections; mathematics has been hit by a flood of AI-generated proofs. Before turning to qualitative research, we look at three fields that work with language and knowledge."
author: 薛海升
key: other-fields
order: 3
wiki: [transformer, vibe-coding, lean, hallucination]
summary_ja: "研究テーマが一夜で消えたNLP。反対の声は残るのに、ほとんどの人が毎日使っているプログラミング。証明が洪水のようにやってきた数学。言葉や知識を扱う三つの分野の反応をたどり、では質的研究はどうだったのかを問う。"
topic: "AIの理解"
related_notes: ["qualitative-reactions", "predictions", "understanding"]
updated: "2026-11-12 00:00:00 +0900"
sort_date: 20261112
---

生成AIは言葉を扱うため、言葉や知識を対象とする分野には、早い段階から強い影響が及んできた。質的研究における議論を取り上げる前に、こうした分野でどのような反応が生じたかを確認しておきたい。ここでは、自然言語処理（NLP）、プログラミング、数学の三つを見ていく。

## NLP：「小手先の技」が、一つの分野を一変させた

自然言語処理（NLP）は、コンピュータによって人間の言葉を扱うことを研究する分野である。『Quanta Magazine』は2025年4月に、この分野の研究者が当時の経験を振り返る口述史を公開した[（Quanta Magazine, 2025）](https://www.quantamagazine.org/when-chatgpt-broke-an-entire-field-an-oral-history-20250430/)。

2017年の[Transformer]({{ '/literacy/transformer/' | relative_url }})の発表に対して、多くの研究者は「ただの小手先の技（hacks）だ」と受けとめたという。ブラウン大学のパヴリックは、当時をそのように振り返っている。また、テキサス大学のムーニーは「概念的に間違っている」と考えたという。一方で、学生の中には、これを「転換点だ」と感じた人もいた。

その後、2018年には、Transformerを用いたBERTが次々に記録を更新した。「みんながBERTの論文を書いていた」と言われるように、研究はBERTに集中し、「BERT学（BERTology）」とも呼ばれた。その過程で、別の方向を目指していた研究が次々と放棄されていった。

2020年にGPT-3が登場すると、学生が何年もかけて取り組んだ課題が、短時間で再現されるようになった。ペンシルベニア大学のカリソン＝バーチは、この経験を「キャリアの存在危機」と表現している。

さらに、2022年にはChatGPTが公開された。ある研究者によれば、公開から一日で多くの研究課題が「消えた」という。また、別の研究者は、個々のテーマにとどまらず、分野のカテゴリー全体が失われたと述べている。それまで取り組んできた課題が、ChatGPTを使えば済むものとして捉えられるようになったのである。

### 博士論文のテーマが、一夜で消えた

こうした変化の影響を特に強く受けたのは、学生であった。カリソン＝バーチは「博士課程の学生たちが、文字通り、互いの支援グループを作った」と述べ、ダガンも「研究の途中にいた学生は、大きく方向転換するしかなかった」と語っている。ムーニーの指導学生の一人は、研究の中心が企業に移っているのではないかと考え、退学を検討したという。

その後、分野全体は、大規模言語モデルそのものを研究する方向へと大きく転換した。ボウマンは「分野が完全に向きを変えた、と感じた」と述べ、ダガンは「2023年の終わりには、NLPというより『AI』の分野のように感じられた」と語っている。また、マイケルは、自分の現在の立場を「今の私は、AIアラインメント（AIを人間の価値観に合わせる研究）の研究者だ」と説明している。

研究の途中で、それまで取り組んできたテーマが失われることを、自分の立場に置き換えて考えてみると、私も絶望するのではないかと思う。

## プログラミング：反対の声は残る。それでも、ほとんどの人が使っている

プログラミングの分野では、現在もAIへの批判が見られる。例えば、「パターン認識にすぎない」「もっともらしくでっち上げる」といった指摘がある。九割が正しくても、残る一割に誤りがあれば、そのまま利用することは難しい。また、その誤りを探す作業に、大きな負担がかかるという声もある。

Linuxの開発者であるリーナス・トーバルズも、2025年11月の講演で、生成されたコードを細かく読まずにAIに任せる「[バイブコーディング]({{ '/literacy/vibe-coding/' | relative_url }})」に言及している。彼は、入門としての有用性を認めながらも、保守の観点からは「恐ろしい考えかもしれない」と述べた。

また、利用者の実感と、実際の作業時間とのずれも示されている。METRの実験では、熟練したオープンソース開発者16名が、自分の大規模なプロジェクトにおける実際の課題246件に取り組んだ。課題ごとにAIを利用するかどうかを無作為に割り当てたところ、AI利用時には作業が19%遅くなった。しかし、本人たちは20%速くなったと感じていた[（METR, 2025）](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)。この結果は、AIの出力だけでなく、その効果を判断する人間の認識にも、「幻覚」と呼びたくなるようなずれが生じることを示している。2025年の調査でも、66%の開発者が「ほぼ正しいが、少し違う」AIの回答に困っていると答えている。

こうした問題が指摘される一方で、利用は広がっている。Stack Overflowの開発者調査では、[2025年に84%が「AIツールを使っている、または使う予定」と回答した](https://survey.stackoverflow.co/2025/)。また、[2026年の調査](https://survey.stackoverflow.co/2026/ai/data/ai-freq)では、AIを利用する開発者の73%が毎日使っていた。同時に、93%が「出典が示されないとAIの出力は信頼できない」と答えている（Stack Overflow, 2025, 2026）。これらの結果からは、同じ人の中で、批判的な認識と実際の利用が併存していることがうかがえる。私自身も、開発の際にはAIをかなり利用している。

## 数学：証明が、洪水のようにやってきた

数学の分野でも、2026年の夏から秋にかけて、AI企業が証明を発表する動きが相次いだ。

- **8月**：Anthropicは、[未公開のClaudeが、ゼータ関数の非自明な零点の3分の2以上が臨界線上にあることを証明したと発表し](https://www.anthropic.com/research/riemann-zeta)、[Lean]({{ '/literacy/lean/' | relative_url }})による証明をGitHubで公開した。この結果は、リーマン予想そのものの証明を試みて失敗した過程で得られた、関連する結果である。そのため、リーマン予想の67%が証明されたという意味にはならない。
- **9月**：OpenAIは、[ナビエ–ストークス方程式の難問を証明したと発表した](https://openai.com/index/navier-stokes-solution/)。これは、2000年にクレイ数学研究所が賞金100万ドルを設けた、七つの「ミレニアム懸賞問題」の一つである。同社によれば、約1万のAIエージェントを88時間動かした結果であるという。Leanでの検証は行われたが、人間には証明が何をしているのかが分からない状態であった。10月に複数の専門家グループが166ページの証明を読み込んだところ、OpenAIの説明とは異なるアプローチであったことが分かった。約1万のモデルがそれぞれどのように貢献したのかは、誰にも分からない。クレイ数学研究所による審査が行われている。また、功績の帰属や剽窃の有無をめぐる争いも生じた。この経緯は、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})で取り上げている。
- **10月**：OpenAIは、[内部モデルが作成した722本の原稿をGitHubで一括公開した](https://openai.com/index/sharing-ai-progress-in-mathematics/)。約半分はLeanで検証されていたものの、1日で3本が撤回された。公開時点では、同社の研究者もすべてを読めていなかったという。私は、こうした公開の仕方には、かなり問題があると考えている。

一方で、こうした結果を受け入れるための取り組みも進められている。例えば、2024年12月には、数学のためのAIツール開発を支援するAI for Math基金が設けられた。また、[Hexagon（2026年10月）](https://terrytao.wordpress.com/2026/10/06/hexagon/)は、arXivが受け付けないAI生成の結果に、引用可能な番号を与える非営利のアーカイブである。助言グループに参加するウッドは、この取り組みを「人間の理解の過程の、終わりではなく始まりだ」と述べている。

### 「ベンチマークにされた数学」への反発

これに対して、強い反発も生じている。[フィールズ賞受賞者25名による宣言（2026年9月）](https://terrytao.wordpress.com/2026/09/11/a-severe-misalignment-of-ai-in-mathematics/)では、未解決問題がAI企業の性能を示す場にされていると批判され、数学とAI企業の目的は「深刻にずれている」と指摘された。この立場では、問題を解くことは、数学が目指す「理解」のための手段として位置づけられる。AI企業の取り組みが、人間の知識の生産にどのように貢献しているのか、単に性能を示すためのものになっていないかが問われている。

こうした反発の論点は、四つに整理できる。一つ目は、数学がベンチマークとして扱われることである。二つ目は、査読前に大量の原稿が公開されることである。作成した側でもすべてを読めておらず、書き方の問題から読み解くことが難しい原稿もあった。三つ目は、知の系譜が途切れることである。引用が不十分なまま、先行する知見とは無関係に結果が生まれたかのように提示されることは、これまでの知見を受け継いで発展させる知識生産のあり方と異なる。宣言でも、深刻な帰属と剽窃の問題が生じると指摘されている。四つ目は、証明の数が増えても、それに伴って理解が深まるとは限らないことである。機械による検証済みの結果が増えても、それを読み解き、説明し、受け継ぐ作業は人間が担う。数学者たちからは、報酬もない中で、なぜAIの生成した原稿を読まなければならないのかという声が上がっている。

テレンス・タオは、公開前の原稿の山を[「有毒な廃棄物」](https://observer.co.uk/news/science-technology/article/terence-tao-ai-turns-beautiful-mathematics-into-toxic-waste)と呼び、公開後には「処理済みの廃棄物かもしれない」と表現し直した。ただし、彼がAIの利用全般に反対しているわけではない。内容を確認でき、自分たちで動かせるオープンソースの数学用モデルを利用することが提案されている。また、[「Math 2.0」](https://terrytao.wordpress.com/2026/10/10/math-2-0/)では、問題を解くことに中心を置くあり方を見直し、解かれた結果を理解することを業績として評価する方向が示されている。

## では、質的研究は？

質的研究では、言葉が分析の対象となる。インタビューや語り、記録など、扱うデータの多くが言葉から構成されている。同時に、言葉は分析を行うための媒介でもある。コードやカテゴリー、解釈、論文など、分析のための道具と、そこから生まれる成果も、言葉によって作られる。

このような特徴を考えると、NLPや数学よりも先に、質的研究において「分野の危機」が感じられていても不思議ではないと思う。読んでいる皆さんは、どのように感じているだろうか。私自身は、2023年の時点で、この変化は質的研究に深く関わる、かなり大きな問題だと感じていた。

そこで、質的研究者が実際にどのように反応してきたのかを調べることにした。その結果は、[質的研究者は、AIにどう反応したか]({{ '/articles/qualitative-reactions/' | relative_url }})で紹介している。

## 参考文献

- METR. (2025). *Measuring the impact of early-2025 AI on experienced open-source developer productivity*.
- Quanta Magazine. (2025, April). When ChatGPT broke an entire field: An oral history.
- Stack Overflow. (2025). *2025 Developer Survey*.
- Stack Overflow. (2026). *2026 Developer Survey*.

数学の出来事とフィールズ賞受賞者25名の宣言（2026年9月11日）は、各社の発表と報道による（2026年10月時点）。

<!--EN-->

Generative AI works with language. So the fields that deal with language and knowledge have felt its effects soonest and most strongly. Before turning to qualitative research, I want to look at how other fields reacted: natural language processing (NLP), programming and mathematics.

## NLP: “hacks” that transformed a whole field

Natural language processing (NLP) is the research field that gets computers to handle human language. In April 2025, Quanta Magazine put together an oral history in which researchers in the field looked back on that time [(Quanta Magazine, 2025)](https://www.quantamagazine.org/when-chatgpt-broke-an-entire-field-an-oral-history-20250430/).

In 2017, when the [Transformer]({{ '/literacy/transformer/' | relative_url }}) was announced, many researchers took it as “just hacks”. That is how Pavlick at Brown University recalls the reaction at the time, and Mooney at the University of Texas says he thought it was “conceptually wrong”. Some students, though, felt it was a turning point.

In 2018, BERT, built on the Transformer, broke one record after another. “Everyone was writing BERT papers,” people said, and research concentrated so heavily that it was called “BERTology”. Research heading in other directions was abandoned one project after another.

With GPT-3 in 2020, problems students had spent years on could be reproduced right away. Callison-Burch at the University of Pennsylvania calls this a “career existential crisis”.

And then came ChatGPT in 2022. One researcher says many research problems “disappeared” within a day of its release. Another says what disappeared was not individual topics but whole categories of the field. It became a situation where you could just do this and be done.

### Dissertation topics vanished overnight

Students were hit hardest. Callison-Burch says “PhD students literally formed support groups for one another”, and Dagan says “students in the middle of their research had no choice but to change direction drastically.” One of Mooney's students wondered whether real research was now happening at companies, and thought about dropping out.

After that, the field turned sharply toward studying LLMs themselves. Bowman says “it felt like the field had completely changed direction”, and Dagan says “by the end of 2023 it felt less like NLP and more like the field of ‘AI’.” Michael says, “I am now an AI alignment researcher” (alignment: research on matching AI to human values).

If my own topic disappeared in the middle of my research, I think I would despair.

## Programming: objections remain, yet almost everyone uses it

In programming, critical voices remain. You often hear that it is “just pattern recognition” or that it “makes things up plausibly”. Even if 90% is right, the remaining 10% being wrong is a problem. Some say hunting for the mistakes becomes hell.

Linus Torvalds, who created Linux, said in a talk in November 2025 that “[vibe coding]({{ '/literacy/vibe-coding/' | relative_url }})”, building things by leaving it to AI without reading the code closely, is fine for getting started but “may be a horrible idea” for maintenance.

It has also become clear that how it feels and what actually happens can diverge. In an experiment by METR, 16 experienced open-source developers worked on 246 real tasks from their own large projects. When AI use was randomly assigned task by task, work with AI was 19% slower. Yet the developers themselves felt they had been 20% faster [(METR, 2025)](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/). Humans, not just AI, “hallucinate”. In a 2025 survey, too, 66% of developers said they struggle with AI answers that are “almost right, but not quite”.

Even so, use keeps spreading. In the Stack Overflow developer survey, [84% said in 2025 that they use or plan to use AI tools](https://survey.stackoverflow.co/2025/). In [the 2026 survey](https://survey.stackoverflow.co/2026/ai/data/ai-freq), 73% of developers who use AI used it every day. At the same time, 93% said they cannot trust AI output without sources (Stack Overflow, 2025, 2026). Criticism and use coexist in the same people. I, for one, use AI a lot for development.

## Mathematics: proofs arrived like a flood

In mathematics, AI companies announced one proof after another from summer to autumn 2026.

- **August**: Anthropic announced that [an unreleased Claude had proved that more than two-thirds of the nontrivial zeros of the zeta function lie on the critical line](https://www.anthropic.com/research/riemann-zeta), and published the proof in [Lean]({{ '/literacy/lean/' | relative_url }}) on GitHub. It had tried to prove the Riemann hypothesis itself and failed; this was a related result obtained along the way. It does not mean the Riemann hypothesis was 67% proved.
- **September**: OpenAI [announced that it had proved a hard problem on the Navier–Stokes equations](https://openai.com/index/navier-stokes-solution/), one of the seven Millennium Prize Problems for which the Clay Mathematics Institute offered a million dollars in 2000. It reportedly came from running about 10,000 AI agents for 88 hours. The proof was verified in Lean, but humans cannot tell what it is doing. In October, when several groups of experts worked through the 166-page proof, it turned out to take a different approach from the one OpenAI had described. No one knows what each of the roughly 10,000 models contributed. The Clay Mathematics Institute is reviewing it. There was also a dispute over whose credit it is and whether it is plagiarism; I wrote about it in [Whose predictions should we trust, and why?]({{ '/articles/predictions/' | relative_url }}).
- **October**: OpenAI [published 722 manuscripts by an internal model on GitHub all at once](https://openai.com/index/sharing-ai-progress-in-mathematics/). About half were verified in Lean, but three were withdrawn within a day. At the time of release, even OpenAI's researchers had not read them all. If you ask me, this is a terrible thing to do.

There are also moves to accept it: the AI for Math Fund (December 2024), which supports building AI tools for mathematics, and [Hexagon (October 2026)](https://terrytao.wordpress.com/2026/10/06/hexagon/), a nonprofit archive that gives citable numbers to AI-generated results arXiv does not accept. Wood, a member of its advisory group, calls it “not the end but the beginning of the process of human understanding”.

### Pushback against “mathematics turned into a benchmark”

At the same time, strong pushback arose. [A declaration by 25 Fields Medalists (September 2026)](https://terrytao.wordpress.com/2026/09/11/a-severe-misalignment-of-ai-in-mathematics/) criticized open problems being turned into showcases for AI companies' performance, and called the two sides' aims “severely misaligned”. Solving problems is only a means to understanding, which is the aim of mathematics. The criticism is that what AI companies are doing is not contributing to the production of human knowledge but staging performance showcases.

The points of the pushback come down to four. First, mathematics is being turned into a benchmark. Second, results are released in bulk before peer review; even their makers had not read them all, and some manuscripts were too badly written to read. Third, the lineage of knowledge is broken: manuscripts appear without adequate citation, as if created from a vacuum. This differs from the way knowledge is produced, by building on what others have found. The declaration says serious problems of attribution and plagiarism arise. Fourth, proofs multiply but understanding does not. Even if machine-verified results pile up, digesting, explaining and passing them on is human work. Mathematicians are asking why they should have to read what AI generated when no one is even paying them.

Terence Tao called the pile of pre-release manuscripts [“toxic waste”](https://observer.co.uk/news/science-technology/article/terence-tao-ai-turns-beautiful-mathematics-into-toxic-waste), and after release rephrased it as “perhaps processed waste”. He is not opposed across the board, however. What is being proposed is to use open-source mathematical models whose internals can be checked and which mathematicians can run themselves, and [“Math 2.0”](https://terrytao.wordpress.com/2026/10/10/math-2-0/), which takes solving problems out of the center and counts understanding what has been solved as an achievement.

## So what about qualitative research?

Language is what qualitative research analyzes. Much of its data, interviews, narratives and records, is language. At the same time, language is also the medium of analysis. The tools and products of analysis, codes, categories, interpretations and papers, are language too.

If so, it would not have been strange for a “crisis of the field” to reach qualitative research before NLP or mathematics. Do you feel it? I feel it strongly. Already in 2023, I thought this was serious.

What actually happened? I looked into it. The results are in [How have qualitative researchers responded to AI?]({{ '/articles/qualitative-reactions/' | relative_url }})

## References

- METR. (2025). *Measuring the impact of early-2025 AI on experienced open-source developer productivity*.
- Quanta Magazine. (2025, April). When ChatGPT broke an entire field: An oral history.
- Stack Overflow. (2025). *2025 Developer Survey*.
- Stack Overflow. (2026). *2026 Developer Survey*.

The events in mathematics and the declaration by 25 Fields Medalists (September 11, 2026) are based on the companies' announcements and news reports (as of October 2026).
