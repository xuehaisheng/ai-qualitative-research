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
change_note: "出典リンクを追加。"
change_note_en: "Added source links."
sort_date: 20261112
---

生成AIは言葉を扱う。だから、言葉や知識を扱う分野ほど、早く、強い影響を受けてきた。質的研究の話に入る前に、ほかの分野がどう反応したかを見ておきたい。自然言語処理（NLP）、プログラミング、数学の三つである。

## NLP：「小手先の技」が、一つの分野を一変させた

自然言語処理（NLP）は、コンピュータに人間の言葉を扱わせる研究分野である。『Quanta Magazine』は2025年4月、この分野の研究者たちに当時をふり返ってもらう口述史をまとめた[（Quanta Magazine, 2025）](https://www.quantamagazine.org/when-chatgpt-broke-an-entire-field-an-oral-history-20250430/)。

2017年、[Transformer]({{ '/literacy/transformer/' | relative_url }})の発表を聞いた研究者の多くは、これを「ただの小手先の技（hacks）だ」と受け止めた。ブラウン大学のパヴリックは当時の受け止めをそうふり返り、テキサス大学のムーニーは「概念的に間違っている」と思ったという。一方で、「転換点だ」と感じた学生もいた。

2018年、Transformerを使ったBERTが記録を次々と塗り替えた。「みんながBERTの論文を書いていた」と言われ、「BERT学（BERTology）」と呼ばれるほど研究が集中した。別の方向に進もうとしていた研究は、次々と放棄された。

2020年のGPT-3では、学生が何年もかけた課題が、すぐに再現されてしまう状況になった。ペンシルベニア大学のカリソン＝バーチは、これを「キャリアの存在危機」と表現している。

そして2022年のChatGPTである。ある研究者は、公開から一日で多くの研究課題が「消えた」と言う。別の研究者は、消えたのは個々のテーマではなく、分野のカテゴリーごとだったと述べている。これをやればもういい、という状態になってしまった。

### 博士論文のテーマが、一夜で消えた

いちばん影響を受けたのは学生だった。カリソン＝バーチは「博士課程の学生たちが、文字通り、互いの支援グループを作った」と言い、ダガンは「研究の途中にいた学生は、大きく方向転換するしかなかった」と言う。ムーニーの指導学生の一人は、本当の研究は企業にあるのではないかと考え、退学を考えたという。

その後、分野は大きく向きを変え、LLMそのものを研究する方向へ進んだ。ボウマンは「分野が完全に向きを変えた、と感じた」と言い、ダガンは「2023年の終わりには、NLPというより『AI』の分野のように感じられた」と言う。マイケルは「今の私は、AIアラインメント（AIを人間の価値観に合わせる研究）の研究者だ」と言っている。

研究の途中で自分のテーマがなくなったら、と考えると、私なら絶望すると思う。

## プログラミング：反対の声は残る。それでも、ほとんどの人が使っている

プログラミングでは、批判の声は今もある。「パターン認識にすぎない」「もっともらしくでっち上げる」という批判はよく聞かれる。九割が正しくても、残りの一割が間違っていれば困る。間違いを探すのが地獄になる、という声もある。

Linuxを作ったリーナス・トーバルズは、2025年11月の講演で、コードを細かく読まずにAIに任せて作る「[バイブコーディング]({{ '/literacy/vibe-coding/' | relative_url }})」について、入門にはよいが、保守の点では「恐ろしい考えかもしれない」と述べた。

体感と実際がずれることも分かってきた。METRの実験では、熟練のオープンソース開発者16名が、自分の大きなプロジェクトの実際の課題246件に取り組んだ。課題ごとに、AIを使うか使わないかをランダムに割り当てると、AIを使ったときの作業は19%遅くなった。ところが本人たちは、20%速くなったと感じていた[（METR, 2025）](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)。AIだけでなく、人間も「幻覚」を見るということである。2025年の調査でも、66%の開発者が「ほぼ正しいが、少し違う」AIの解答に困っていると答えている。

それでも、利用は広がっている。Stack Overflowの開発者調査では、[2025年に84%が「AIツールを使っている、または使う予定」と答えた](https://survey.stackoverflow.co/2025/)。[2026年の調査](https://survey.stackoverflow.co/2026/ai/data/ai-freq)では、AIを使う開発者の73%が毎日使っていた。同時に、93%が「出典が示されないとAIの出力は信頼できない」と答えている（Stack Overflow, 2025, 2026）。批判と利用が、同じ人の中に同時にある。ちなみに私も、開発にはかなりAIを使っている。

## 数学：証明が、洪水のようにやってきた

数学では、2026年の夏から秋にかけて、AI企業による証明の発表が続いた。

- **8月**：Anthropicは、[未公開のClaudeが、ゼータ関数の非自明な零点の3分の2以上が臨界線上にあることを証明したと発表し](https://www.anthropic.com/research/riemann-zeta)、[Lean]({{ '/literacy/lean/' | relative_url }})での証明をGitHubで公開した。リーマン予想そのものの証明を試みて、それは失敗した。その途中で得られた関連する結果である。リーマン予想が67%証明された、という意味ではない。
- **9月**：OpenAIは、[ナビエ–ストークス方程式の難問を証明したと発表した](https://openai.com/index/navier-stokes-solution/)。2000年にクレイ数学研究所が賞金100万ドルをかけた七つの「ミレニアム懸賞問題」の一つである。約1万のAIエージェントを88時間動かした結果だという。証明はLeanで検証されたが、人間には何をしているのかが分からない。10月、複数の専門家グループが166ページの証明を読み込むと、OpenAIが説明していた方法とは違うアプローチだった。約1万のモデルがそれぞれ何に貢献したのかは、誰にも分からない。クレイ数学研究所が審査している。誰の功績なのか、剽窃ではないのかをめぐる争いもあった。その経緯は[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})に書いた。
- **10月**：OpenAIは、[内部モデルによる722本の原稿をGitHubで一括公開した](https://openai.com/index/sharing-ai-progress-in-mathematics/)。約半分はLeanで検証済みだったが、1日で3本を撤回した。公開時点で、OpenAIの研究者も全部は読めていなかった。私に言わせれば、ひどいことをしている。

受け入れる動きもある。数学のためのAIの道具づくりを支援するAI for Math基金（2024年12月）や、arXivが受け付けないAI生成の結果に、引用できる番号を与える非営利のアーカイブ[Hexagon（2026年10月）](https://terrytao.wordpress.com/2026/10/06/hexagon/)である。助言グループの一員であるウッドは、これを「人間の理解の過程の、終わりではなく始まりだ」と言う。

### 「ベンチマークにされた数学」への反発

一方で、強い反発も起きた。[フィールズ賞受賞者25名の宣言（2026年9月）](https://terrytao.wordpress.com/2026/09/11/a-severe-misalignment-of-ai-in-mathematics/)は、未解決問題がAI企業の性能の見せ場にされていると批判し、両者の目的が「深刻にずれている」とした。問題を解くことは、数学の目的である「理解」の手段にすぎない。AI企業がやっているのは、人間の知識の生産に貢献することではなく、性能の見せ場づくりではないか、という批判である。

反発の論点は四つにまとめられる。一つ目は、数学がベンチマークにされていること。二つ目は、査読の前に大量に公開されること。作った側も全部は読めておらず、読めないほど書き方の悪い原稿もあった。三つ目は、知の系譜が途切れることである。引用が十分でなく、まるで真空から作り出したかのような原稿が出てくる。これまでの人の知見を生かして新しく発展させる、という知の生産のやり方とは違う。宣言は、深刻な帰属と剽窃の問題が生じるとしている。四つ目は、証明は増えても理解は増えないことである。機械が検証した結果があふれても、それを消化し、説明し、受け継ぐのは人間の仕事である。数学者たちは、お金をもらっているわけでもないのに、なぜAIが生成したものを読まなければいけないのか、と言っている。

テレンス・タオは、公開前の原稿の山を[「有毒な廃棄物」](https://observer.co.uk/news/science-technology/article/terence-tao-ai-turns-beautiful-mathematics-into-toxic-waste)と呼び、公開後に「処理済みの廃棄物かもしれない」と言い直した。ただし、全面的に反対しているわけではない。提案されているのは、中身を確かめられる、自分たちで動かせるオープンソースの数学用モデルを使うこと、そして、問題を解くことを中心から外し、解かれたものを理解することを業績にする[「Math 2.0」](https://terrytao.wordpress.com/2026/10/10/math-2-0/)である。

## では、質的研究は？

言葉は、質的研究の分析対象である。インタビュー、語り、記録というデータの多くは言葉である。同時に、言葉は分析の媒介でもある。コード、カテゴリー、解釈、論文という分析の道具と成果も、言葉である。

だとすれば、NLPや数学より先に「分野の危機」が来ていても、おかしくなかった。皆さんは感じているだろうか。私はすごく感じている。2023年の時点で、これはやばい、と思っていた。

実際はどうだったのか。私は調べてみた。その結果は、[質的研究者は、AIにどう反応したか]({{ '/articles/qualitative-reactions/' | relative_url }})に書いた。

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
