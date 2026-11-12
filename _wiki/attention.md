---
title: "Attention（注意機構）"
key: attention
en: "Attention"
category: basics
order: 4
summary: "ある語を処理するときに、文中の全部の語を一度に見て、どの語が大事かに重みをつける仕組み。"
summary_en: "A mechanism that, when processing one word, looks at every word in the text at once and weights how important each one is."
related: [transformer, rnn, self-supervised]
articles: [ai-history]
sources:
  - text: "Vaswani, A., et al. (2017). Attention is all you need. NIPS 2017."
    url: "https://arxiv.org/abs/1706.03762"
---

Attention（注意機構）は、ある語を処理するときに、文中の全部の語を一度に見て、どの語が大事かに重みをつける仕組みである。

{% include figure.html src="fig-attention.jpg" cap="「それ」を処理するとき、文中のすべての語に注目の度合いを割り振る。最も高いのは「本」。数値は説明のための仮の値。" %}

「今日、本を一冊買った。……夜になってようやくそれを読み始めた。」という文で「それ」を処理するとき、Attentionは文中のすべての語に重みをつける。この例では、「本」にいちばん大きな重みがつく。

[RNN]({{ '/literacy/rnn/' | relative_url }})と違い、順番に読む必要がないので、たくさんの計算を同時に進められる。これはGPU（並列計算が得意な計算装置）と相性がよかった。2017年の論文「Attention Is All You Need」は、このAttentionだけで十分だと主張し、[Transformer]({{ '/literacy/transformer/' | relative_url }})を提案した。

<!--EN-->

Attention is a mechanism that, when processing one word, looks at every word in the text at once and weights how important each one is.

{% include figure.html src="fig-attention-en.jpg" cap="When processing “it”, attention assigns a weight to every word in the text. “book” gets the highest. The numbers are illustrative." %}

Take the text “Today I bought a book. … Only at night did I finally start reading it.” When processing “it”, attention assigns a weight to every word. In this example, “book” gets the largest weight.

Unlike an [RNN]({{ '/literacy/rnn/' | relative_url }}), it does not need to read in order, so many calculations can run at the same time. This suited GPUs (processors good at parallel computation). The 2017 paper “Attention Is All You Need” argued that attention alone is enough and proposed the [Transformer]({{ '/literacy/transformer/' | relative_url }}).
