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

少し余談になるが、「猿から人へ」の進化を表す図から始めたい。左端の猿が徐々に背筋を伸ばし、右端で人間になるという図は、多くの人が一度は見たことがあると思う。しかし、この図の受けとられ方には、大きな誤解が含まれている。そして、AIのモデルについても、これと似たことが起きているように思われる。

{% include figure.html src="fig-march-of-progress.jpg" cap="左：折りたたむと6体（ザリンジャー画『Early Man』Time-Life, 1965年）。中：広げると15体。右：ダーウィンのノートB（1837年）の「I think」の枝分かれ。下：AIのモデルを一列に並べると。" %}

## 実は、6体ではなかった

この図は「進歩の行進（March of Progress）」として知られている。もとは1965年にTime-Life社が刊行した科学読み物『Early Man』の折り込みページであり、ルドルフ・ザリンジャーが描いたものである。原題は「The Road to Homo Sapiens（ホモ・サピエンスへの道）」であった。

一般によく知られている6体の姿は、折り込みをたたんだときに見える部分にあたる。ページをすべて広げると、そこには15体が並んでいる。それぞれの姿は画家によって別々に描かれ、のちに一つの折り込みページに配置された。

ただし、原書の説明文を見ると、それぞれの種の関係はより複雑に説明されている。例えば、オレオピテクスは「人類の家系図の、ありそうな脇枝」とされており、生存していた時代が重なる種も含まれている。この点から、原図に付された説明そのものが、広く流布した「猿から人へ」という一直線の進化を主張していたとは言えない。娘の回想によれば、ザリンジャー自身も、一列に並べることによって、人間が猿から一直線に進化してきたと受けとられるのではないかと懸念していたという。

それでも、横一列に配置された図は、見る人の理解に強く働きかけたと考えられる。説明文を読む前に、図の配置から一本の進歩の道を読みとってしまうのである。

一方、ダーウィン自身が描いた図では、異なる関係が表されている。1837年のノートBには、「I think」という言葉とともに、枝分かれする図が描かれている。そこでは、種が枝分かれし、それぞれの方向に伸びていく過程が示されている。私たちがふだん「進化」と聞いて思い浮かべるものが、これらの図のどちらに近いのか、考えてみる必要があると思う。

## AIのモデルを一列に並べると

ここでこの図を取り上げたのは、AIのモデルの捉え方にも、同様の問題があると考えるからである。GPT-3.5、GPT-4、GPT-4o、GPT-5という順に並べると、数字が大きくなるにつれて能力も高まる、一本の線として理解しやすくなる。

確かに、ベンチマークによって数値化される性能は向上している。しかし、人間らしさと呼ばれる側面についても、同じ方向に変化しているとは限らない。

実際の利用場面では、話し方や創造性、慎重さ、温かさ、適した仕事などに、モデルごとの違いが見られる。

そのため、ある側面で「上」と評価されるモデルが、別の側面でも同じ評価になるとは限らない。モデル間の順序は、何を測定するかによって変わると考えられる。

## #Keep4o：唯一まだ人間らしく感じられるモデル

こうした違いが利用者の反応として明確に現れた事例に、GPT-4oをめぐる一連の出来事がある。

2025年8月のGPT-5の公開時には、GPT-4oなどの旧モデルが一斉に外された。これに対し、インターネット上では「4oを返して」という声が上がった。その理由の一つに、話し方に人間らしさを感じるというものがあった。[OpenAIは、一部の有料利用者からGPT-4oの話し方や温かさを好み、移行に時間がほしいという声が寄せられたとして、GPT-4oを一時的に戻した](https://openai.com/index/retiring-gpt-4o-and-older-models/)。

その後、[GPT-4oは2026年2月13日にChatGPTから引退した](https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models)。利用者の中には、このモデルと「恋愛関係にあった」と語る人もいた。こうした反発を分析した[ライの論文（Lai, 2026）](https://arxiv.org/abs/2602.00773)では、次の利用者の声が題名に用いられている。

> “Please, don’t kill the only model that still feels human.”
> （唯一まだ人間らしく感じられるモデルを、殺さないで）

モデルを一列に並べて捉えると、GPT-4oはGPT-5に先立つ、すでに追い越された段階として位置づけられる。しかし、日々このモデルと対話していた人々にとっては、他のモデルで置き換えることが難しい相手であった。その関係は、別の枝の上にあるものとして捉えた方が理解しやすいと思われる。数値で示される「性能」と、数値化しにくい「人間らしさ」との関係を、同じ物差しだけで理解することには限界があるのだと思う。

また、人間らしさを感じさせるモデルは、4oに限られていたわけではない。GPT-4oとGPT-5のあいだにはGPT-4.5というモデルもあり、人間らしさや感情知能の高さが指摘されていた。ただし、コストが高すぎたため、広く利用されるには至らなかった。現在のモデルについても、能力が高まる一方で、話し方が冷たく感じられたり、利用者の発言をすぐに修正したりする場面がある。こうした経験からも、番号に沿った性能の向上と、人間らしさの変化とは、分けて考える必要があると思われる。

一列に並べられた図を見る際には、「何を測ったら、この順番になるのか」という点に立ち戻ることができると思う。

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
