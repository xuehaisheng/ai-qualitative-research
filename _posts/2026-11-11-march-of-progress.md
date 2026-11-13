---
title: "一列に並べると、「進歩」に見えてしまう：進化の図とAIモデル"
date: 2026-11-11 09:00:00 +0900
title_en: "Lined up in a row, it looks like “progress”: the evolution figure and AI models"
summary_en: "The famous “march of progress” actually showed 15 figures, not 6. Lining models up from GPT-3.5 to GPT-5 creates the same illusion, and #Keep4o shows the gap between measurable performance and human-likeness."
author: 薛海升
key: march-of-progress
order: 2
wiki: [sycophancy, gpt]
summary_ja: "「猿から人へ」の進化の図は、実は6体ではなく15体だった。一列に並べた視覚の力は、見る人に一本の進歩の道を読みとらせてしまう。GPT-3.5からGPT-5への並びも同じである。#Keep4oの出来事から、数量化される「性能」と数量化されにくい「人間らしさ」の違いを考える。"
topic: "AIの理解"
related_notes: ["understanding", "ai-history", "qualitative-reactions"]
sort_date: 20261112
updated: "2026-11-12 00:00:00 +0900"
---

ちょっと余談から始めたい。「猿から人へ」の進化の図は、皆さんも一度は見たことがあると思う。左端の猿が少しずつ背筋を伸ばし、右端で人間になる。この図には、実は結構大きな誤解がある。そして、同じことがAIのモデルにも起きているように思う。

{% include figure.html src="fig-march-of-progress.jpg" cap="左：折りたたむと6体（ザリンジャー画『Early Man』Time-Life, 1965年）。中：広げると15体。右：ダーウィンのノートB（1837年）の「I think」の枝分かれ。下：AIのモデルを一列に並べると。" %}

## 実は、6体ではなかった

この図は「進歩の行進（March of Progress）」と呼ばれる。もとは1965年にTime-Life社が出した科学読み物『Early Man』の折り込みページで、画家はルドルフ・ザリンジャー、原題は「The Road to Homo Sapiens（ホモ・サピエンスへの道）」である。

よく知られているのは6体の姿だが、それは折りたたんだときに見える部分にすぎない。全部広げると15体が並ぶ。画家は一体ずつ別々に描き、のちに一つの折り込みに並べられた。

原書の説明文をよく読むと、話はもっと複雑である。たとえばオレオピテクスは「人類の家系図の、ありそうな脇枝」とされ、生きていた時代が重なる種もある。つまり原図の説明は、流布した「猿から人へ」とは違い、一直線の進化を主張していたわけではなかった。娘の回想によれば、ザリンジャー本人も、こうして一列に並べると、人間が猿から一直線に進化してきたと思われるのではないかと心配していたという。

それでも、横一列の視覚の力は強かった。見る人は、説明文を読む前に、一本の進歩の道を読みとってしまう。

ダーウィン自身が描いた図は、これとは違う。1837年のノートBに、ダーウィンは「I think」と書き添えて、枝分かれの図を描いた。種は一本の線の上を進むのではなく、枝分かれしながら、それぞれの方向に伸びていく。ふだん私たちが思い浮かべる「進化」は、どちらの図に近いだろうか。

## AIのモデルを一列に並べると

なぜこの話をするかというと、AIのモデルでも同じことが起きているからである。GPT-3.5、GPT-4、GPT-4o、GPT-5と並べると、数字が大きくなるほど能力も上がる、一本の線に見える。

たしかに、ベンチマークで数値化される性能は上がっている。しかし、人間らしさのほうは、同じように進化しているとは限らない。

実際に使ってみると、モデルごとに、話し方、創造性、慎重さ、温かさ、向いている仕事が違う。

ある面で「上」のモデルが、別の面でも「上」とは限らない。どれが上かは、何を測るかで変わる。

## #Keep4o：唯一まだ人間らしく感じられるモデル

このことがはっきり表に出たのが、GPT-4oをめぐる出来事である。

2025年8月にGPT-5が公開されたとき、GPT-4oなどの旧モデルが一斉に外された。すると、ネット上で「4oを返して」という声が上がった。話し方に人間らしさを感じる、というのが理由だった。[OpenAIは、一部の有料利用者からGPT-4oの話し方や温かさを好み、移行に時間がほしいという声があったとして、GPT-4oを一時的に戻した](https://openai.com/index/retiring-gpt-4o-and-older-models/)。

[GPT-4oは2026年2月13日にChatGPTから引退した](https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models)。「恋愛関係にあった」と語る利用者もいた。この反発を分析した[ライの論文（Lai, 2026）](https://arxiv.org/abs/2602.00773)は、利用者の次の声を題名にしている。

> “Please, don’t kill the only model that still feels human.”
> （唯一まだ人間らしく感じられるモデルを、殺さないで）

一列の図で見れば、GPT-4oはGPT-5の一つ前の、追い越された段階にすぎない。でも、そのモデルと毎日話していた人にとっては、別の枝の上にいる、替えのきかない相手だった。数字で測れる「性能」と、数字にしにくい「人間らしさ」は、同じ物差しでは測れないのだと思う。

人間らしさを感じさせたのは、4oだけではない。GPT-4oとGPT-5のあいだには、GPT-4.5というモデルもあった。人間らしく、感情知能が高いと言われていたが、コストが高すぎて、あまり多くの人には使われなかった。いまのモデルは、能力は上がっている一方で、話し方が冷たく、こちらの言うことをすぐ修正してくる、ということがよくある。番号が大きくなるほど性能は上がっていても、人間らしさは同じようには進化していないのかもしれない。

一列に並んだ図を見たときには、「何を測ったら、この順番になるのか」と問い直すことができると思う。

## 参考文献

- Darwin, C. (1837). *Notebook B: Transmutation of species*.
- Lai, H. (2026). "Please, don't kill the only model that still feels human": Understanding the #Keep4o backlash. *arXiv*. https://arxiv.org/abs/2602.00773
- Zallinger, R. (1965). The road to Homo sapiens [Illustration]. In F. C. Howell, *Early man*. Time-Life Books.

<!--EN-->

I want to start with a digression. Most of you have probably seen the “ape to human” evolution figure at least once. The ape at the left edge gradually straightens up and becomes a human at the right edge. This figure carries a fairly big misunderstanding. And I think the same thing is happening with AI models.

{% include figure.html src="fig-march-of-progress-en.jpg" cap="Left: folded, 6 figures (Zallinger, Early Man, Time-Life, 1965). Center: unfolded, 15 figures. Right: the branching “I think” sketch in Darwin's Notebook B (1837). Bottom: AI models lined up in a row." %}

## It was not actually six figures

This figure is called the “March of Progress”. It was originally a fold-out page in Early Man, a popular science book published by Time-Life in 1965. The artist was Rudolph Zallinger, and the original title was “The Road to Homo Sapiens”.

The well-known version has six figures, but that is only the part you see when the page is folded. Fully unfolded, 15 figures stand in a row. The artist painted each one separately, and they were later lined up on a single fold-out.

Read the original captions closely and the story is more complicated. Oreopithecus, for example, is described as a “likely side branch of the human family tree”, and some species lived at overlapping times. In other words, unlike the popular “ape to human” image, the original captions did not claim a straight line of evolution. According to his daughter, Zallinger himself worried that lining the figures up this way would make people think humans evolved from apes in a straight line.

Even so, the visual power of a single row was strong. Viewers read a single road of progress into it before they read the captions.

The figure Darwin drew himself is different. In Notebook B in 1837, Darwin wrote “I think” and sketched a branching diagram. Species do not advance along one line; they branch and grow in their own directions. Which of the two figures is closer to what we usually picture as “evolution”?

## Lining up AI models

Why tell this story? Because the same thing is happening with AI models. Line up GPT-3.5, GPT-4, GPT-4o and GPT-5, and it looks like one line where a bigger number means more ability.

It is true that performance measured by benchmarks has gone up. But human-likeness has not necessarily evolved in the same way.

When you actually use them, the models differ in how they talk, how creative they are, how careful they are, how warm they are, and what work they suit.

A model that is “higher” in one respect is not necessarily “higher” in another. Which one is higher depends on what you measure.

## #Keep4o: the only model that still feels human

This came out clearly in what happened around GPT-4o.

When GPT-5 was released in August 2025, GPT-4o and other older models were removed all at once. Voices rose online: “Give us back 4o.” The reason was that people felt a human quality in how it talked. [OpenAI temporarily brought GPT-4o back, saying some paying users preferred its way of talking and its warmth and wanted time to transition](https://openai.com/index/retiring-gpt-4o-and-older-models/).

[GPT-4o was retired from ChatGPT on February 13, 2026](https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models). Some users said they had been in a romantic relationship with it. [A paper by Lai (2026)](https://arxiv.org/abs/2602.00773) analyzing the backlash takes its title from one user's words:

> “Please, don't kill the only model that still feels human.”

Seen in the single-row figure, GPT-4o is just the stage before GPT-5, one that has been overtaken. But for people who talked with that model every day, it was an irreplaceable partner on a different branch. I think measurable “performance” and hard-to-quantify “human-likeness” cannot be measured with the same ruler.

4o was not the only model that felt human. Between GPT-4o and GPT-5 there was also GPT-4.5. It was said to be human-like and emotionally intelligent, but it was too costly and not many people used it. Today's models are more capable, yet they often talk coldly and are quick to correct what you say. Performance may rise as the number gets bigger, but human-likeness may not be evolving the same way.

When you see a figure lined up in a row, I think you can ask again: “what would you have to measure to get this order?”

## References

- Darwin, C. (1837). *Notebook B: Transmutation of species*.
- Lai, H. (2026). "Please, don't kill the only model that still feels human": Understanding the #Keep4o backlash. *arXiv*. https://arxiv.org/abs/2602.00773
- Zallinger, R. (1965). The road to Homo sapiens [Illustration]. In F. C. Howell, *Early man*. Time-Life Books.
