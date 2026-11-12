---
title: "世界モデル"
key: world-model
en: "World model"
category: basics
order: 11
summary: "画面と動作から次の瞬間を予測するモデル。言葉ではなく、世界がどう動くかを学ぼうとする。"
summary_en: "A model that predicts the next moment from the screen and actions. It tries to learn how the world moves, not language."
related: [llm, rsi, multimodal]
articles: [ai-history, understanding]
sources:
  - text: "LeCun, Y. (2022). A path towards autonomous machine intelligence. OpenReview."
---

世界モデルは、画面と動作から、次の瞬間に何が起きるかを予測するモデルである。ものを離したら落ちる、といった世界の物理的なルールを学ぼうとする。GoogleのGenieやNVIDIAのCosmosなどがある。

{% include figure.html src="fig-chatgpt-stages.jpg" cap="ChatGPT以後の六つの段階。帯が右端まで伸びているのは、前の段階が消えずに積み重なることを表す。点線は、まだ製品になっていない支線（世界モデル）。" %}

ルカン（2022）は、言葉の予測を中心にしたLLMには限界があり、世界を予測するモデル（JEPA）を学んで、計画を立てられるようにすべきだと論じてきた。

世界モデルは2024〜25年に大きな話題になった。うまくいけば大きな展開になるはずだが、2026年時点ではまだ日常の製品にはなっていない。そのため、ChatGPT以後の流れの中では「支線」として描いている。

<!--EN-->

A world model predicts what will happen in the next moment from the screen and actions. It tries to learn the physical rules of the world, such as that something falls when you let go of it. Examples include Google's Genie and NVIDIA's Cosmos.

{% include figure.html src="fig-chatgpt-stages-en.jpg" cap="Six stages after ChatGPT. Each band runs to the right edge because earlier stages do not disappear but pile up. The dotted band is a branch that has not yet become a product (world models)." %}

LeCun (2022) has argued that LLMs centered on predicting words have limits, and that models should learn to predict the world (JEPA) so that they can plan.

World models were a hot topic in 2024–25. If they succeed, it should be a big development, but as of 2026 they have not yet become everyday products. So in the developments after ChatGPT, I draw them as a “branch”.
