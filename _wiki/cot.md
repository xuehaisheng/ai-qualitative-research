---
title: "CoT（思考の連鎖）"
key: cot
en: "Chain-of-Thought"
category: basics
order: 10
summary: "答えだけでなく、途中の推論の過程を書かせながら考えさせる技法。"
related: [reasoning-model, prompt, interpretability]
sources:
  - text: "Wei, J., et al. (2022). Chain-of-thought prompting elicits reasoning in large language models."
    url: "https://arxiv.org/abs/2201.11903"
---

CoT（Chain-of-Thought、思考の連鎖）は、AIに答えだけを出させるのではなく、途中の推論の過程を書かせながら考えさせる技法である。Weiらは、これを “a series of intermediate reasoning steps”（中間的な推論のステップの連なり）と説明している（Wei et al., 2022）。

最初はプロンプトの工夫として広まった。その後、この考え方をモデルの学習そのものに取り込んだのが[推論モデル]({{ '/literacy/reasoning-model/' | relative_url }})である。

ただし、AIが書き出した「思考」が、内部で実際に起きている計算の記録とは限らない。この点は[解釈可能性]({{ '/literacy/interpretability/' | relative_url }})の研究で示されている。
