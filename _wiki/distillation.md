---
title: "蒸留"
key: distillation
en: "Distillation"
category: usage
order: 10
summary: "強いモデルの出力を使って、別のモデルを学習させること。"
summary_en: "Training one model on the outputs of a stronger model."
related: [open-weight, llm]
articles: [predictions]
sources:
  - text: "Anthropic. (2026). Detecting and preventing distillation attacks."
    url: "https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks"
---

蒸留とは、強いモデルの出力を使って、別のモデルを学習させることである。強いモデルから弱いモデルに「教える」技術と言ってもよい。

2026年2月、Anthropicは、中国の3社（DeepSeek、月之暗面、MiniMax）が約2.4万の偽アカウントで1600万回以上やりとりし、Claudeの能力を抜き取ったと告発し、「蒸留攻撃」と呼んだ。一方、そのAnthropic自身も、2025年9月の著作権訴訟で、海賊版約700万冊の保存が侵害とされ、15億ドルで和解している。同じ「他者から学ぶ」でも、何が正当で、何が盗みなのかが問われている。詳しくは[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})に書いた。

<!--EN-->

Distillation means training one model on the outputs of a stronger model. You could call it a technique in which a strong model “teaches” a weaker one.

In February 2026, Anthropic accused three Chinese companies (DeepSeek, Moonshot AI and MiniMax) of extracting Claude's capabilities through more than 16 million exchanges from about 24,000 fake accounts, and called it a “distillation attack”. Anthropic itself, however, settled a copyright lawsuit in September 2025 for 1.5 billion dollars, after its storage of about 7 million pirated books was found to infringe. Both are “learning from others”; the question is what counts as legitimate and what counts as theft. I wrote more in [Whose predictions should we trust, and why?]({{ '/articles/predictions/' | relative_url }}).
