---
title: "蒸留"
key: distillation
en: "Distillation"
category: usage
order: 10
summary: "強いモデルの出力を使って、別のモデルを学習させること。"
related: [open-weight, llm]
articles: [predictions]
---

蒸留とは、強いモデルの出力を使って、別のモデルを学習させることである。強いモデルから弱いモデルに「教える」技術と言ってもよい。

{% include slide.html src="s29.jpg" cap="蒸留のパラドックス：誰が、誰から「盗んだ」のか。" %}

2026年2月、Anthropicは、中国の3社（DeepSeek、月之暗面、MiniMax）が約2.4万の偽アカウントで1600万回以上やりとりし、Claudeの能力を抜き取ったと告発し、「蒸留攻撃」と呼んだ。一方、そのAnthropic自身も、2025年9月の著作権訴訟で、海賊版約700万冊の保存が侵害とされ、15億ドルで和解している。同じ「他者から学ぶ」でも、何が正当で、何が盗みなのかが問われている。詳しくは[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})に書いた。
