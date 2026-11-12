---
title: "RNN（再帰型ニューラルネットワーク）"
key: rnn
en: "Recurrent neural network"
category: basics
order: 3
summary: "文を一語ずつ順番に処理するニューラルネットワーク。Transformer以前の、言語処理の主流だった。"
summary_en: "A neural network that processes a sentence one word at a time. The mainstream in language processing before the Transformer."
related: [attention, transformer]
articles: [ai-history]
---

2010年代半ばまで、言葉を扱うAIの主流はRNN（再帰型ニューラルネットワーク）だった。人が本を一行ずつ読むように、文を一語ずつ順番に処理する。

このやり方には弱点が二つあった。一つ目は遅いことである。前の語を読み終えないと次の語に進めないので、計算を同時に進められない。二つ目は忘れやすいことである。「今日、本を一冊買った。午前は図書館へ、午後はカフェへ行き、夜になってようやくそれを読み始めた。」のように文が長くなると、「それ」が「本」を指すことを見失いやすい。

この二つの弱点を解いたのが、[Attention]({{ '/literacy/attention/' | relative_url }})を中心にした[Transformer]({{ '/literacy/transformer/' | relative_url }})である。

<!--EN-->

Until the mid-2010s, the mainstream AI for language was the RNN (recurrent neural network). Like a person reading a book line by line, it processes a sentence one word at a time, in order.

This approach had two weaknesses. The first is that it is slow: it cannot move to the next word until it has finished the previous one, so calculations cannot run at the same time. The second is that it forgets easily. In a long sentence such as “Today I bought a book. In the morning I went to the library, in the afternoon to a café, and only at night did I finally start reading it”, it easily loses track of the fact that “it” refers to “book”.

The [Transformer]({{ '/literacy/transformer/' | relative_url }}), built around [attention]({{ '/literacy/attention/' | relative_url }}), solved both weaknesses.
