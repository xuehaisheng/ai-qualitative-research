---
title: "推論モデル"
key: reasoning-model
en: "Reasoning model"
category: basics
order: 9
summary: "答える前に、内部で長い「思考の連鎖」を書いてから答えるモデル。"
summary_en: "A model that writes a long internal “chain of thought” before answering."
related: [cot, open-weight, agent]
articles: [ai-history]
sources:
  - text: "OpenAI. (2024). Learning to reason with LLMs."
    url: "https://openai.com/index/learning-to-reason-with-llms/"
  - text: "DeepSeek-AI. (2025). DeepSeek-R1."
    url: "https://arxiv.org/abs/2501.12948"
---

推論モデルは、すぐに答えるのではなく、答える前に内部で長い「思考の連鎖」（[CoT]({{ '/literacy/cot/' | relative_url }})）を書いてから答えるモデルである。考えてから答える、と言ってもよい。

2024年9月のOpenAIのo1で、数学の正答率が急に上がった。2025年1月には、中国のDeepSeekが推論モデルDeepSeek-R1を公開した。R1のRはReasoning（推論）のRである。R1は誰でもダウンロードして動かせる[オープンウェイト]({{ '/literacy/open-weight/' | relative_url }})のモデルで、安く作れたという報道から、1週間後にはNVIDIAの時価総額が1日で約5900億ドル減った。

<!--EN-->

A reasoning model does not answer right away; before answering, it writes a long internal “chain of thought” ([CoT]({{ '/literacy/cot/' | relative_url }})). You could say it thinks before it answers.

With OpenAI's o1 in September 2024, accuracy on mathematics jumped. In January 2025, China's DeepSeek released the reasoning model DeepSeek-R1; the R stands for Reasoning. R1 is an [open-weight]({{ '/literacy/open-weight/' | relative_url }}) model anyone can download and run. After reports that it had been built cheaply, NVIDIA's market value fell by about 590 billion dollars in a single day a week later.
