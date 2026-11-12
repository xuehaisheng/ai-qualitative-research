---
title: "推論モデル"
key: reasoning-model
en: "Reasoning model"
category: basics
order: 9
summary: "答える前に、内部で長い「思考の連鎖」を書いてから答えるモデル。"
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
