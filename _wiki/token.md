---
title: "トークン"
key: token
en: "Token"
category: basics
order: 1
summary: "AIが文章を処理するときの単位。単語や、文字の一部にあたる。"
summary_en: "The unit in which AI processes text, roughly a word or part of a word."
related: [llm, context, transformer]
articles: [ai-history]
---

「生成AIは、次の言葉を予測する」という説明は間違いではない。少し厳密に言うと、生成AIは次の**トークン**を予測している。トークンは、AIが文章を処理するときの単位で、単語や、文字の一部にあたる。AIは、次に来るトークンを一つずつ予測し、それをつなげて文章を作る。

AIが文字ではなくトークンを見ていることは、意外な間違いの原因になる。「blueberryにrはいくつあるか」と聞くと、AIはよく数え間違えてきた。AIには「blue」「berry」のようなかたまりしか見えず、一文字ずつの並びは見えていないからである。「9.9と9.11はどちらが大きいか」で「9.11」と答えてしまうのも、似た理由による。「9.11」は「9」「.」「11」のように切られるので、11と9を比べて、11の方が大きいと判断してしまう。

トークンは、AIの「量」を数える単位でもある。AIが一度に読める量（[コンテキスト]({{ '/literacy/context/' | relative_url }})の長さ）も、利用料金も、トークンで数える。

<!--EN-->

The explanation “generative AI predicts the next word” is not wrong. To be a little more precise, generative AI predicts the next **token**. A token is the unit in which AI processes text, roughly a word or part of a word. The AI predicts the next token one at a time and strings them together into text.

The fact that AI sees tokens rather than letters causes some surprising mistakes. Asked "How many r's are in blueberry?", AI has often miscounted, because it sees only chunks like "blue" and "berry," not the sequence of individual letters. Answering "9.11" to "Which is larger, 9.9 or 9.11?" has a similar cause. "9.11" is split into pieces like "9", ".", and "11", so the model compares 11 with 9 and judges 11 to be larger.

Tokens are also the unit for counting AI's “amounts”. How much an AI can read at once (the length of its [context]({{ '/literacy/context/' | relative_url }})) and the usage fee are both counted in tokens.
