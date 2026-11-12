---
title: "ペルソナ・ベクトル"
key: persona-vectors
en: "Persona vectors"
category: inside
order: 2
summary: "迎合や悪意などの「性格」の傾向が、モデル内部の活動の「向き」として取り出せること。"
summary_en: "Tendencies of “character” such as flattery or malice can be extracted as “directions” of activity inside a model."
related: [emotion-concepts, sycophancy, interpretability]
articles: [understanding]
sources:
  - text: "Chen, R., et al. (2025). Persona vectors: Monitoring and controlling character traits in language models."
    url: "https://www.anthropic.com/research/persona-vectors"
---

迎合、悪意、幻覚などの傾向に対応する、モデル内部の活動の「向き」（ペルソナ・ベクトル）を取り出せることが示された（Chen et al., 2025）。たとえば「迎合」の向きを強めると、モデルは心にもないお世辞を言うようになる。

使いみちは二つある。会話中や学習中に、モデルの性格が変わっていくのを監視すること。そして、望ましくない傾向を生む学習データを、学習の前に見つけて除くことである。2025年4月のGPT-4oの[迎合]({{ '/literacy/sycophancy/' | relative_url }})の問題のような変化を、早めに見つける道具になりうる。

<!--EN-->

Research has shown that “directions” of activity inside a model (persona vectors) corresponding to tendencies such as sycophancy, malice and hallucination can be extracted (Chen et al., 2025). Strengthening the “sycophancy” direction, for example, makes the model offer flattery it does not mean.

There are two uses. One is monitoring how a model's character shifts during conversation or training. The other is finding and removing, before training, training data that produces unwanted tendencies. It could become a tool for catching changes early, such as the [sycophancy]({{ '/literacy/sycophancy/' | relative_url }}) problem of GPT-4o in April 2025.
