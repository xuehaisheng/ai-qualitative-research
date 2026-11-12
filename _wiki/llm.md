---
title: "大規模言語モデル（LLM）"
key: llm
en: "Large language model"
category: basics
order: 2
summary: "大量の文章で学習し、次のトークンを予測することで文章を作るAIのモデル。ChatGPT、Claude、Geminiの中身である。"
summary_en: "An AI model trained on vast amounts of text that writes by predicting the next token. It is what runs inside ChatGPT, Claude and Gemini."
related: [token, transformer, self-supervised, gpt]
articles: [ai-history, understanding]
---

大規模言語モデル（LLM）は、ネット上の文章や本など、大量の文章で学習したAIのモデルである。文章の続きを予測する、という単純な課題を、桁違いの規模で学習している。ChatGPT、Claude、Geminiといったサービスの中身は、このLLMである。

いまのLLMは、ほぼすべてが2017年に提案された[Transformer]({{ '/literacy/transformer/' | relative_url }})という設計の上に作られている。学習のしかたは[自己教師あり学習]({{ '/literacy/self-supervised/' | relative_url }})で、まず大量の文章で事前学習し、そのあと人の評価などを使って、答え方を調整する。

LLMが流暢に話せることは、考えられることと同じなのか。この問いについては、[AIは「理解」しているのか]({{ '/articles/understanding/' | relative_url }})で取り上げた。

<!--EN-->

A large language model (LLM) is an AI model trained on vast amounts of text, such as web pages and books. It learns a simple task, predicting how a text continues, at an enormous scale. Services such as ChatGPT, Claude and Gemini run on LLMs.

Almost all of today's LLMs are built on a design called the [Transformer]({{ '/literacy/transformer/' | relative_url }}), proposed in 2017. They learn through [self-supervised learning]({{ '/literacy/self-supervised/' | relative_url }}): first pre-training on vast amounts of text, then adjusting how they answer using human ratings and other methods.

Is an LLM's ability to speak fluently the same as an ability to think? I took up this question in [Does AI “understand”?]({{ '/articles/understanding/' | relative_url }}).
