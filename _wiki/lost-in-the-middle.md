---
title: "Lost in the Middle"
key: lost-in-the-middle
en: "Lost in the Middle"
category: quirks
order: 2
summary: "長い資料の真ん中にある情報を見落としやすいこと。最初と最後はよく使われる。"
summary_en: "Information in the middle of a long input is easily missed, while the beginning and end are used well."
related: [context, multi-turn, nondeterminism, hallucination]
articles: [qualitative-reactions, meta-synthesis-with-ai]
sources:
  - text: "Liu, N. F., et al. (2024). Lost in the middle: How language models use long contexts. Transactions of the Association for Computational Linguistics."
    url: "https://aclanthology.org/2024.tacl-1.9/"
---

多くの文書から答えを探す課題で、答えが入力の最初や最後にあるときより、真ん中にあるときの方が成績が落ちる。この現象は「Lost in the Middle」と呼ばれる（Liu et al., 2024）。

質的分析では、長いトランスクリプトの中盤の語りが、分析から抜け落ちるおそれがある。ジョウジーら（Jowsey et al., 2025）の比較で、Copilotの引用がデータの最初の2〜3ページに偏っていたのも、これと同じ方向の現象である。長いデータを一気に渡すより、分けて渡す方がよい。インタビューなら、一人分ずつ別のAI（サブエージェント）に分析させると、精度が上がる。

<!--EN-->

In tasks that search many documents for an answer, performance drops when the answer is in the middle of the input rather than at the beginning or end. This is called “Lost in the Middle” (Liu et al., 2024).

In qualitative analysis, accounts in the middle of a long transcript may drop out of the analysis. In the comparison by Jowsey et al. (2025), Copilot's quotations clustered in the first two or three pages of the data, a phenomenon in the same direction. It is better to split long data than to hand it over all at once. For interviews, having a separate AI (a subagent) analyze each person's interview improves accuracy.
