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

トークンは、AIの「量」を数える単位でもある。AIが一度に読める量（[コンテキスト]({{ '/literacy/context/' | relative_url }})の長さ）も、利用料金も、トークンで数える。たとえば答えを表や図のあるウェブページ（HTML）で出してもらうと、文字だけの答えより多くのトークンを使う。その代わり、人には分かりやすくなる。

<!--EN-->

The explanation “generative AI predicts the next word” is not wrong. To be a little more precise, generative AI predicts the next **token**. A token is the unit in which AI processes text, roughly a word or part of a word. The AI predicts the next token one at a time and strings them together into text.

Tokens are also the unit for counting AI's “amounts”. How much an AI can read at once (the length of its [context]({{ '/literacy/context/' | relative_url }})) and the usage fee are both counted in tokens. For example, asking for an answer as a web page (HTML) with tables and figures uses more tokens than a text-only answer. In return, it is easier for people to understand.
