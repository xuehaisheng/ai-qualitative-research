---
title: "ハルシネーション（幻覚）"
key: hallucination
en: "Hallucination"
category: quirks
order: 1
summary: "AIが自信をもって述べる誤り。存在しない文献や判例を作ってしまうこともある。"
related: [lost-in-the-middle, rag, sycophancy, lean]
articles: [ai-history, understanding, qualitative-reactions]
sources:
  - text: "OpenAI. (2025). Why language models hallucinate."
    url: "https://openai.com/index/why-language-models-hallucinate/"
  - text: "Zhou, L., et al. (2024). Larger and more instructable language models become less reliable. Nature."
    url: "https://www.nature.com/articles/s41586-024-07930-y"
---

ハルシネーション（幻覚）は、AIが自信をもって述べる誤りである。知らないことも、もっともらしく作ってしまう。2023年には、ニューヨークの弁護士がChatGPTに調べさせた判例を裁判所に提出したが、その判例は存在せず、制裁金5000ドルを科された（Mata v. Avianca事件）。

{% include slide.html src="s43.jpg" cap="なぜ、もっともらしく間違えるのか。" %}

OpenAI（2025）は、学習と評価のしかたに一因があると説明している。たとえば「わが家の犬の誕生日は？」と聞かれたとする。「分からない」と答えれば、必ず0点になる。でも当てずっぽうで「10月30日」と答えれば、365分の1の確率で1点もらえる。正答率だけで採点するかぎり、当てずっぽうの方が得をする。改善案は、自信のある誤答を「分からない」より重く減点することである。昔のアメリカの共通試験（SAT）が、誤答を減点していたのと同じ考え方である。

Zhouら（2024）の研究では、モデルが大きく、指示に従うよう調整されるほど、「分からない」という答えが減り、もっともらしい誤答が増えた。しかも、人間の確認者もそれを見分けにくくなっていた。人間にとって簡単な作業がAIにとって難しい場合もあれば、その逆もある。AIは、人間と同じ知能になるとは限らない。

質的研究への含意ははっきりしている。AIが出したコードや引用が「それらしい」ことは、正しさの保証にならない。ジョウジーら（Jowsey et al., 2025）の比較では、Copilotが示した引用の平均58%が、データに存在しない捏造だった。
