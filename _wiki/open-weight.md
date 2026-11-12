---
title: "オープンウェイト"
key: open-weight
en: "Open-weight model"
category: usage
order: 9
summary: "学習済みのモデルの中身（重み）が公開されていて、誰でもダウンロードして動かせるモデル。"
summary_en: "A model whose trained internals (weights) are published, so anyone can download and run it."
related: [reasoning-model, distillation]
articles: [ai-history, predictions, other-fields]
sources:
  - text: "DeepSeek-AI. (2025). DeepSeek-R1."
    url: "https://arxiv.org/abs/2501.12948"
---

オープンウェイトのモデルは、学習済みのモデルの中身（重み）が公開されていて、誰でもダウンロードし、自分のサーバーに置き、調整できるモデルである。独占されず、誰でも使えて、自分でいじることもできる。2025年1月のDeepSeek-R1が代表例である。

公開モデルが安全の面で有利か不利かは、企業や研究者のあいだで意見が分かれている。Anthropicは公開モデルの禁止を主張したことはないとしつつ、[蒸留]({{ '/literacy/distillation/' | relative_url }})の取り締まりやチップの輸出規制を求めている。数学の分野では、中身を確かめられるオープンソースの数学用モデルを使うべきだ、という提案も出ている。

<!--EN-->

An open-weight model is one whose trained internals (weights) are published, so anyone can download it, run it on their own server and adjust it. It is not monopolized; anyone can use it and modify it. DeepSeek-R1, released in January 2025, is a typical example.

Companies and researchers disagree on whether open models help or hurt safety. Anthropic says it has never called for banning open models, while calling for crackdowns on [distillation]({{ '/literacy/distillation/' | relative_url }}) and for chip export controls. In mathematics, some have proposed using open-source mathematical models whose internals can be checked.
