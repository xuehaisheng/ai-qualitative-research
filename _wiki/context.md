---
title: "コンテキスト"
key: context
en: "Context / Context engineering"
category: usage
order: 2
summary: "AIが一度に見られる情報の全体。指示、それまでの会話、添付した資料などが含まれる。"
summary_en: "Everything an AI can see at once: instructions, the conversation so far, attached files and more."
related: [prompt, skills, harness, lost-in-the-middle, token]
articles: [ai-history, meta-synthesis-with-ai]
---

コンテキストは、AIが一度に見られる情報の全体である。指示、それまでの会話、添付した資料などが含まれる。

2025年6月ごろから、「プロンプトよりコンテキストエンジニアリングだ」と言われるようになった。どう聞くかより、何を見せるかが大事、という考え方である。AIが一度に読める量は百万[トークン]({{ '/literacy/token/' | relative_url }})ほどにまで増え、本を丸ごと渡せるようになった。ところが、その中に関係のない情報や矛盾した情報まで入れると、AIは混乱する。「最新の生成AIについて調べて」と頼んでも古い情報を引っ張ってくるのは、必要のない情報が混ざっているからである。何を入れ、何を入れないかを決めることが大事になった。

長いコンテキストには、真ん中を見落としやすいというクセもある（[Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})）。インタビューを何人分も一度に渡すより、一人分ずつ分けて渡した方が、分析の精度は上がる。

<!--EN-->

Context is everything an AI can see at once. It includes instructions, the conversation so far, attached files and more.

From around June 2025, people began to say “context engineering, not prompting”: what you show the model matters more than how you ask. The amount an AI can read at once has grown to about a million [tokens]({{ '/literacy/token/' | relative_url }}), enough to hand over a whole book. But if irrelevant or contradictory information goes in too, the AI gets confused. When you ask it to “look up the latest generative AI” and it brings back old information, it is because unneeded information is mixed in. Deciding what to put in and what to leave out has become important.

Long contexts also have a quirk: the middle is easily missed ([Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})). Rather than handing over several people's interviews at once, giving them one person at a time makes the analysis more accurate.
