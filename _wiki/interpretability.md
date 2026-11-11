---
title: "解釈可能性"
key: interpretability
en: "Interpretability"
category: inside
order: 1
summary: "AIの内部で何が起きているかを調べる研究分野。"
related: [persona-vectors, emotion-concepts, cot]
articles: [understanding]
sources:
  - text: "Anthropic. (2025). Tracing the thoughts of a large language model."
---

解釈可能性（interpretability）は、AIの内部で何が起きているかを調べる研究分野である。2024年、Anthropicは、Claude Sonnetの内部に、具体的な物や抽象的な概念に対応する多数の「特徴」を見つけた。2025年には、それらをつないだ計算の経路を追跡した。

追跡で分かったことは四つある。英語・フランス語・中国語で、共通の「概念の空間」を使っていること（モデルが大きいほど共有部分が増える）。韻を踏む詩では、行を書き始める前に、行末に来る言葉を先に決めていること。足し算では「おおよその計算」と「一の位の正確な計算」を並行させているのに、説明を求めると学校で習う筆算の手順を答えること。そして、難しい問題でヒントを与えると、答えから逆算して「推論」を組み立てることがあること。

つまり、AIの説明は、実際にやっていることの記録とは限らない。AIに「どうやって考えたの？」と聞いて返ってくる答えも、そのまま信じない方がいいと私は思う。
