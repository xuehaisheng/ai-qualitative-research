---
title: "ハルシネーション（幻覚）"
key: hallucination
en: "Hallucination"
category: quirks
order: 1
summary: "AIが自信をもって述べる誤り。存在しない文献や判例を作ってしまうこともある。"
summary_en: "Errors an AI states with confidence. It may even invent references or court cases that do not exist."
related: [lost-in-the-middle, rag, sycophancy, lean]
articles: [ai-history, understanding, qualitative-reactions]
sources:
  - text: "OpenAI. (2025). Why language models hallucinate."
    url: "https://openai.com/index/why-language-models-hallucinate/"
  - text: "Zhou, L., et al. (2024). Larger and more instructable language models become less reliable. Nature."
    url: "https://www.nature.com/articles/s41586-024-07930-y"
---

ハルシネーション（幻覚）は、AIが自信をもって述べる誤りである。知らないことも、もっともらしく作ってしまう。2023年には、ニューヨークの弁護士がChatGPTに調べさせた判例を裁判所に提出したが、その判例は存在せず、制裁金5000ドルを科された（Mata v. Avianca事件）。

OpenAI（2025）は、学習と評価のしかたに一因があると説明している。たとえば「わが家の犬の誕生日は？」と聞かれたとする。「分からない」と答えれば、必ず0点になる。でも当てずっぽうで「10月30日」と答えれば、365分の1の確率で1点もらえる。正答率だけで採点するかぎり、当てずっぽうの方が得をする。改善案は、自信のある誤答を「分からない」より重く減点することである。昔のアメリカの共通試験（SAT）が、誤答を減点していたのと同じ考え方である。

実際に、簡単な事実を問う問題集（SimpleQA）で、新旧二つのモデルを比べた結果がある。正答率はほとんど変わらない。違うのは、分からないときに「分からない」と言うかどうかで、その差が誤答の多さにそのまま出ている。

| SimpleQAでの結果 | 新しいモデル（gpt-5-thinking-mini） | 古いモデル（o4-mini） |
|---|---|---|
| 「分からない」と答えた | 52% | 1% |
| 正答 | 22% | 24% |
| 誤答 | 26% | 75% |

出典：OpenAI（2025）、GPT-5 System Card。

Zhouら（2024）の研究では、モデルが大きく、指示に従うよう調整されるほど、「分からない」という答えが減り、もっともらしい誤答が増えた。しかも、人間の確認者もそれを見分けにくくなっていた。人間にとって簡単な作業がAIにとって難しい場合もあれば、その逆もある。AIは、人間と同じ知能になるとは限らない。

質的研究でも同じことが起きる。ジョウジーら（Jowsey et al., 2025）の比較では、Copilotが示した引用の平均58%が、データに存在しない捏造だった。だから私は、AIに分析させるときは、引用ごとに原文へのリンクを付けさせている。クリックすると原文の該当箇所が光るようにしておけば、本当にそう書いてあるかを、自分ですぐ確かめられる。

<!--EN-->

A hallucination is an error that an AI states with confidence. It makes up plausible answers even when it does not know. In 2023, a New York lawyer submitted court cases that ChatGPT had found for him; the cases did not exist, and he was fined 5,000 dollars (Mata v. Avianca).

OpenAI (2025) explains that part of the cause lies in how models are trained and evaluated. Suppose the model is asked “When is my dog's birthday?” Answering “I don't know” always scores zero. A random guess such as “October 30” has a 1 in 365 chance of scoring a point. As long as grading is by accuracy alone, guessing pays. The proposed fix is to penalize confident wrong answers more than “I don't know”, the same idea as the old American SAT, which deducted points for wrong answers.

There is an actual comparison of a newer and an older model on a set of simple factual questions (SimpleQA). Accuracy is almost the same. The difference is whether the model says “I don't know” when it does not know, and that difference shows up directly in the number of wrong answers.

| SimpleQA results | Newer model (gpt-5-thinking-mini) | Older model (o4-mini) |
|---|---|---|
| Answered “I don't know” | 52% | 1% |
| Correct | 22% | 24% |
| Wrong | 26% | 75% |

Source: OpenAI (2025), GPT-5 System Card.

In a study by Zhou et al. (2024), the larger a model was and the more it was tuned to follow instructions, the fewer “I don't know” answers it gave and the more plausible wrong answers. Human checkers also found these harder to spot. Some tasks that are easy for humans are hard for AI, and the reverse is also true. AI will not necessarily become the same kind of intelligence as humans.

The same happens in qualitative research. In the comparison by Jowsey et al. (2025), on average 58% of the quotations Copilot gave were fabrications that did not exist in the data. So when I have AI analyze data, I have it attach a link to the original text for each quotation. If clicking it highlights the passage in the source, I can check right away whether it really says that.
