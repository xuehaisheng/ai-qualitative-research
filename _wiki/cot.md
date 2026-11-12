---
title: "CoT（思考の連鎖）"
key: cot
en: "Chain-of-Thought"
category: basics
order: 10
summary: "答えだけでなく、途中の推論の過程を書かせながら考えさせる技法。"
summary_en: "A technique that has the model write out its intermediate reasoning, not just the answer."
related: [reasoning-model, prompt, interpretability]
sources:
  - text: "Wei, J., et al. (2022). Chain-of-thought prompting elicits reasoning in large language models."
    url: "https://arxiv.org/abs/2201.11903"
---

CoT（Chain-of-Thought、思考の連鎖）は、AIに答えだけを出させるのではなく、途中の推論の過程を書かせながら考えさせる技法である。Weiらは、これを “a series of intermediate reasoning steps”（中間的な推論のステップの連なり）と説明している（Wei et al., 2022）。

最初はプロンプトの工夫として広まった。その後、この考え方をモデルの学習そのものに取り込んだのが[推論モデル]({{ '/literacy/reasoning-model/' | relative_url }})である。

ただし、AIが書き出した「思考」が、内部で実際に起きている計算の記録とは限らない。この点は[解釈可能性]({{ '/literacy/interpretability/' | relative_url }})の研究で示されている。

<!--EN-->

CoT (chain-of-thought) is a technique that has an AI think while writing out its intermediate reasoning, rather than giving only the answer. Wei and colleagues describe it as “a series of intermediate reasoning steps” (Wei et al., 2022).

It first spread as a prompting trick. Later, [reasoning models]({{ '/literacy/reasoning-model/' | relative_url }}) built the idea into the training of the model itself.

However, the “thoughts” an AI writes out are not necessarily a record of the computation actually happening inside. Research on [interpretability]({{ '/literacy/interpretability/' | relative_url }}) has shown this.
