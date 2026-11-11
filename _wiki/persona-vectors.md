---
title: "ペルソナ・ベクトル"
key: persona-vectors
en: "Persona vectors"
category: inside
order: 2
summary: "迎合や悪意などの「性格」の傾向が、モデル内部の活動の「向き」として取り出せること。"
related: [emotion-concepts, sycophancy, interpretability]
articles: [understanding]
sources:
  - text: "Chen, R., et al. (2025). Persona vectors: Monitoring and controlling character traits in language models."
---

迎合、悪意、幻覚などの傾向に対応する、モデル内部の活動の「向き」（ペルソナ・ベクトル）を取り出せることが示された（Chen et al., 2025）。たとえば「迎合」の向きを強めると、モデルは心にもないお世辞を言うようになる。

使いみちは二つある。会話中や学習中に、モデルの性格が変わっていくのを監視すること。そして、望ましくない傾向を生む学習データを、学習の前に見つけて除くことである。2025年4月のGPT-4oの[迎合]({{ '/literacy/sycophancy/' | relative_url }})の問題のような変化を、早めに見つける道具になりうる。
