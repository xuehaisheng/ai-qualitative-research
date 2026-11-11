---
title: "Transformer"
key: transformer
en: "Transformer"
category: basics
order: 5
summary: "Attentionを中心にしたAIのモデルの設計。2017年に提案され、ChatGPT、Claude、Geminiはみなこの仕組みの子孫である。"
related: [attention, rnn, self-supervised, gpt, llm]
articles: [ai-history, other-fields]
sources:
  - text: "Vaswani, A., et al. (2017). Attention is all you need. NIPS 2017."
    url: "https://arxiv.org/abs/1706.03762"
  - text: "Levy, S. (2024, March). 8 Google employees invented modern AI. Here's the inside story. WIRED."
---

Transformerは、[Attention]({{ '/literacy/attention/' | relative_url }})を中心にしたAIのモデルの設計である。Googleのヴァスワニら8名が、2017年の論文「Attention Is All You Need」で提案した。2026年までに被引用数は25万回を超え、21世紀で最も引用された論文の一つになっている。いわば、いまの生成AIの「諸悪の根源」である。

Transformerが画期的だった理由は二つある。一つは、[RNN]({{ '/literacy/rnn/' | relative_url }})のように一語ずつ読む必要がなく、計算を並列に進められること。もう一つは、それによって[自己教師あり学習]({{ '/literacy/self-supervised/' | relative_url }})を桁違いの規模で行えるようになったことである。論文の基本モデルは、GPU8枚で12時間学習しただけで、当時最高の翻訳モデルを上回った。

名前は、著者の一人ウスコライトがつけた。情報を「変換する」仕組みだからである。[GPT]({{ '/literacy/gpt/' | relative_url }})の「T」は、このTransformerのTである。

成り立ちの物語は[生成AIの簡単な歴史]({{ '/articles/ai-history/' | relative_url }})に書いた。
