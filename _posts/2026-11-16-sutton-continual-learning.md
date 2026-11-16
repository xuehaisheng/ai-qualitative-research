---
title: "「学習は、ただの学習だ」：サットンが語る、止まったAIと学び続けるAI"
date: 2026-11-16 09:00:00 +0900
title_en: "“It's just learning”: Sutton on AI that has stopped learning and AI that keeps learning"
summary_en: "Notes on a 2026 interview with Rich Sutton and Khurram Javed: the bitter lesson and LLMs, why synthetic data cannot capture a big world, squirrels that don't go to school, a cure for catastrophic forgetting, and what this means for qualitative researchers."
author: 薛海升
key: sutton-continual-learning
order: 8
wiki: [continual-learning, step-size-optimization, catastrophic-forgetting, context-learning, llm, world-model]
summary_ja: "強化学習の基礎を築いたサットンと、共同創業者ジャヴェドへの2026年のインタビューを紹介する。苦い教訓と大規模言語モデル、合成データでは捉えられない「大きな世界」、学校に行かないリス、破滅的忘却を治す方法、そして質的研究者として考えたこと。"
topic: "AIの理解"
related_notes: ["understanding", "predictions", "ai-history"]
sort_date: 20261116
---

2026年8月、ベンチャーキャピタルのSequoia Capitalのポッドキャスト「Training Data」に、リチャード・サットンとクラム・ジャヴェドが出演した（Sequoia Capital, 2026）。サットンは強化学習の基礎を築いた研究者で、2019年のエッセイ「苦い教訓」でも知られる。ジャヴェドはアルバータ大学でのサットンの教え子で、二人は新しい研究所Oak Labを立ち上げた。目指すのは、自分の経験から学び続けるAIである。

一時間近い対話の中から、質的研究者にも関わりそうな点を拾っておく。

## 変なのは分野の方だ

サットンは、自分の考えが過激だと言われることに、冗談まじりに反論する。自分はふつうに考えているだけで、変なのはここ数年の分野の方だ、と。AIブームの前なら、わざわざ「継続学習」と呼ぶ必要はなかった。学習とは、行動して学ぶことを続けるものであり、特別な段階ではないからである。サットンの言葉では、それは「ただの学習」である。

いまの大規模言語モデルは、大量のデータで学習したあと、重みを固定して使われる。会話の中で利用者について覚えたり、資料を読んで答えたりはする。しかしサットンは、モデルが人と話している間も「重みはまったく変わらない」と指摘する。それで博士レベルの専門性を作れると考える方が変だ、というのである（[継続学習]({{ '/literacy/continual-learning/' | relative_url }})）。

## 苦い教訓と、大規模言語モデル

サットンは、「苦い教訓」をおよそ次のように要約する。AI研究がくり返してきたように、人間の知識に気を取られてはいけない。探索や学習のように、計算資源とともに伸びる方法に集中せよ。凝ったアルゴリズムは必要だが、それは人間の入力に頼らず、計算が増えるほど伸びるものでなければならない。

では、大規模言語モデルは苦い教訓に合っているのか。サットンの答えは「良い例でもあり、悪い例でもある」である。インターネットを飲み込んで計算とともに大きくなれたという点では、良い例である。しかし、インターネットは有限で、世界はそこに蓄えられたものよりずっと大きい。人間の知識に頼りすぎて、最後にはそれに足を引っ張られる、という点では悪い例になりうる。

## 合成データは「大きな間違い」

インターネットのデータが尽きつつあるので、AI企業はAIに作らせた合成データで学習させようとしている。サットンはこれを「大きな間違い」と言い切る。

その理由が「大きな世界仮説」である。世界は、どのエージェントの心よりもはるかに複雑である。世界の中には、ほかのエージェント（ほかの人の心）も含まれているからである。合成データを作るのは結局小さなプログラムであり、それが作るのは小さな世界にすぎない。どんな合成データが良いかを決めるのも、人間の専門家である。サットンは、目の前の相手の心の中で何が起きているかは自分にとって大事だが、他人の心について合成データを作る方法はない、と言う。

私たちが出会うのは、この巨大な世界のごく一部である。だから、その一部に合わせた近似を、そのつど学び続けるしかない。

## 事前の知識と学習は、敵ではない

サットンは学習ばかりを重視し、事前の知識を軽んじる人だと思われがちである。しかし本人は、事前の知識と学習は本来「友だち」であるべきだと言う。すでに持っている知識に新しい知識が加わり、それがまた次の事前の知識になる。心とはそういうものである。ただ、実際には両者は敵どうしになってきた。人間の知識を愛する人たちが、学習を軽んじてきたからである。

## リスは学校に行かない

人間や動物の学び方から何を学べるか、という質問に、サットンは「教師あり学習で学ぶ動物はいない」と答える。教師あり学習とは、正解の例を見せて学ばせる方法である。私たちは、筋肉をどう動かすかの正解例を誰からも教わらない。

聞き手が「でも学校は教師あり学習だ」と返すと、サットンは、学校で学ぶのは学びのごく一部だと言う。私たちは、見ること、歩くこと、世界の仕組みを、学校の外で学んでいる。そして「リスは学校に行かない」。学校は人類にとってもごく最近のものであり、知能の本質ではない。聞き手は、リスは木から跳ぶのはうまいが数学の定理は証明できない、と食い下がる。サットンは、リスは鳥のエサ箱にどんな障害をつけても入り込む、と笑って答える。

聞き手が、人類一万年の知識は学校で速く学べると言うと、サットン側も、文化から学ぶことは大事だと認めた。そのうえで、文化から学ぶことも経験の一部として扱えばよい、という立場をとる。

## 破滅的忘却は「治せる」

学び続けるAIを作るとき、最大の壁は[破滅的忘却]({{ '/literacy/catastrophic-forgetting/' | relative_url }})である。一つの例でモデル全体を更新すると、それまでの知識が壊れてしまう。いまは、多くの利用者から集めた大量のデータでまとめて更新することで、これを避けている。しかし、一人の利用者が自分の版のモデルに何かを教えたい、という場面では使えない。

ジャヴェドとサットンは、これは「治せる」と言う。一つは、重みごとに一度に動く量（ステップサイズ）を変え、それをモデル自身に学ばせることである。大部分の重みはごく小さいステップサイズを持つので、新しい例で学んでも壊れない。もう一つは、新しい部品を試しに作って役に立つかを確かめる「生成と検証」で、学び続ける力を保つことである（[ステップサイズの最適化]({{ '/literacy/step-size-optimization/' | relative_url }})）。ただし、いまある大規模言語モデルに後からこの方法を当てはめることはできない。知識と同時に学び方も学ぶので、最初から学習し直す必要がある。

ジャヴェドは、大手のAI企業はいま「局所最適」にはまっていると言う。新しいやり方に移ると、良くなる前にいったん悪くなる。いまのやり方で規模を大きくし続けられる企業には、その賭けはしにくい。

サットンは最後に、大規模言語モデルは言語の巧みな使い方における、予想外の大きなブレイクスルーだと認めている。そのうえで、それは知能の2割か4分の1ほどにすぎない、と付け加える。

## 質的研究者として考えたこと

まず、「大きな世界」という考え方である。世界は、どんなモデルよりも複雑である。だから、自分がいる世界の一部に合わせて、学び続けるしかない。これは、フィールドに身を置き、そこで出会うものに合わせて問いを更新していく質的研究の姿勢に近い。私たちは以前、データの収集や分析を自動化すると、研究者が現場もデータも知らないまま研究が進んでしまうことを、「human out of the loop（脱人間化）」の問題と呼んだ。サットンは、AIについても、経験から学び続けることを知能の中心に置いている。

他人の心について合成データは作れない、という指摘も気になった。最近は、AIに架空の協力者を演じさせ、インタビューの回答を作らせる研究もある。サットンの言い方を借りれば、それは小さなプログラムが作る小さな世界である。他者の心を知りたい質的研究にとって、これは大事な警告だと思う。

実際的なことも一つある。いまの生成AIは、使っても成長しない。前の会話で教えたことを、モデル自体が覚えているわけではない。必要な資料は、そのつど渡す必要がある。そして、渡した資料の規則がきちんと使われるとも限らない（[テキストの中で学ぶ]({{ '/literacy/context-learning/' | relative_url }})）。

## 参考文献

- Dohare, S., Hernandez-Garcia, J. F., Lan, Q., Rahman, P., Mahmood, A. R., & Sutton, R. S. (2024). [Loss of plasticity in deep continual learning.](https://doi.org/10.1038/s41586-024-07711-7) *Nature*, 632(8026), 768–774.
- Sequoia Capital. (2026). *[Rich Sutton and Khurram Javed: Why AI models stop learning, and how to start it again](https://sequoiacap.com/podcast/rich-sutton-and-khurram-javed-why-ai-models-stop-learning-and-how-to-start-it-again)* [Podcast episode]. Training Data, Episode 98.
- Silver, D., & Sutton, R. S. (2025). *[Welcome to the era of experience](https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf)*.
- Sutton, R. S. (2019). *The bitter lesson*.

<!--EN-->

In August 2026, Rich Sutton and Khurram Javed appeared on “Training Data,” a podcast by the venture capital firm Sequoia Capital (Sequoia Capital, 2026). Sutton laid the foundations of reinforcement learning and is known for his 2019 essay “The Bitter Lesson.” Javed is his former student from the University of Alberta, and the two have founded a new research lab, Oak Lab. Their goal is AI that keeps learning from its own experience.

From the nearly hour-long conversation, here are the points that seem relevant to qualitative researchers.

## The field is the strange one

Sutton half-jokingly pushes back when people call his views radical. He is thinking in the ordinary way, he says; it is the field of the last few years that is strange. Before the AI boom, nobody needed to say “continual” learning, because learning means continuing to act and learn; it is not a special phase. In his words, it is just learning.

Today's large language models are trained on large amounts of data and then used with fixed weights. They do remember things about users within conversations and answer by reading materials. But Sutton points out that even while a model talks with people, its weights “never change.” It is strange, he says, to think one could build PhD-level expertise out of something like that ([continual learning]({{ '/literacy/continual-learning/' | relative_url }})).

## The bitter lesson and large language models

Sutton summarizes the bitter lesson roughly like this: do not get distracted by human knowledge, as AI research has done again and again; focus on methods that scale with computation, such as search and learning. Fancy algorithms are still needed, but they have to scale with computation rather than with human input.

Are large language models consistent with the bitter lesson? Sutton's answer is that they are both a positive and a negative example. They are a positive example in that they could drink in the internet and grow with computation. But the internet is finite, and the world is far bigger than what is stored there. They may become a negative example, of relying too much on human knowledge until it holds us back.

## Synthetic data is “a big mistake”

With internet data running out, AI companies are trying to train on synthetic data generated by AI. Sutton calls this a big mistake.

The reason is the “big world hypothesis”: the world is vastly more complex than the mind of any agent, because the world contains other agents, other people's minds. Synthetic data is generated by what is in the end a small program, and it makes only a small world. It is also human experts who decide what good synthetic data is. Sutton says that what is going on in the mind of the person in front of him matters to him, and there is no way to make synthetic data about other people's minds.

We only ever meet a small part of this immense world, so we have to keep learning approximations tuned to that part.

## Prior knowledge and learning are not enemies

Sutton is often seen as someone who values only learning and dismisses prior knowledge. But he says that prior knowledge and learning should be friends. New knowledge is added to what we already know, and that becomes the next prior knowledge; that is what a mind is. In practice, though, the two have been enemies, because those who loved human knowledge wanted to minimize learning.

## Squirrels don't go to school

Asked what we can learn from how humans and animals learn, Sutton answers that no animal learns by supervised learning, that is, by being shown examples of correct answers. Nobody gives us correct examples of how to move our muscles.

When the interviewer replies that school is supervised learning, Sutton says school is a tiny fraction of what we learn. We learn to see, to walk, and how the world works outside school. And squirrels don't go to school. School is a very recent thing even for humans and is not the essence of intelligence. The interviewer presses that squirrels are great at jumping from trees but cannot prove math theorems. Sutton laughs that squirrels always get into your bird feeder, whatever obstacles you put in the way.

When the interviewer notes that we can learn ten thousand years of human knowledge quickly at school, Sutton's side agrees that learning from culture matters, and treats exposure to culture as part of a system's experience.

## Catastrophic forgetting is “curable”

The biggest obstacle to building AI that keeps learning is [catastrophic forgetting]({{ '/literacy/catastrophic-forgetting/' | relative_url }}). If you update the whole model with one example, earlier knowledge is destroyed. Today this is avoided by updating with large batches of data collected from many users. But that does not work when one user wants to teach their own version of the model something.

Javed and Sutton say this is curable. One part is to give each weight its own step size, how far it moves at once, and have the model learn these step sizes itself. Most weights end up with tiny step sizes, so they are not destroyed when learning a new example. The other part is “generate and test,” trying out new units and checking whether they help, to keep the ability to learn ([step-size optimization]({{ '/literacy/step-size-optimization/' | relative_url }})). However, the method cannot simply be applied afterward to an existing large language model. Because it learns how to learn along with the knowledge, the model has to be trained from scratch.

Javed says the big AI companies are stuck in a “local minimum.” Moving to a new approach makes things worse before they get better, and companies that can keep scaling the current approach find that bet hard to make.

At the end, Sutton acknowledges that large language models are a great and unexpected breakthrough in the skillful use of language. He adds that this is only about a fifth or a quarter of intelligence.

## What I thought about as a qualitative researcher

One is the idea of a “big world.” The world is more complex than any model, so we can only keep learning, tuned to the part of the world we are in. This is close to the stance of qualitative research, which places itself in the field and keeps updating its questions in response to what it meets there. We earlier called it the “human out of the loop” problem when automating data collection and analysis lets research proceed without the researcher knowing the field or the data. Sutton puts continual learning from experience at the center of intelligence for AI as well.

The point that there can be no synthetic data about other people's minds also stayed with me. Recently, some studies have AI play fictional participants and generate interview answers. In Sutton's terms, that is a small world made by a small program. For qualitative research, which wants to understand other people's minds, I think this is an important warning.

There is also a practical point. Today's generative AI does not grow through use. The model itself does not remember what you taught it in an earlier conversation. You need to give it the necessary materials each time, and the rules in those materials will not necessarily be applied correctly ([context learning]({{ '/literacy/context-learning/' | relative_url }})).

## References

- Dohare, S., Hernandez-Garcia, J. F., Lan, Q., Rahman, P., Mahmood, A. R., & Sutton, R. S. (2024). [Loss of plasticity in deep continual learning.](https://doi.org/10.1038/s41586-024-07711-7) *Nature*, 632(8026), 768–774.
- Sequoia Capital. (2026). *[Rich Sutton and Khurram Javed: Why AI models stop learning, and how to start it again](https://sequoiacap.com/podcast/rich-sutton-and-khurram-javed-why-ai-models-stop-learning-and-how-to-start-it-again)* [Podcast episode]. Training Data, Episode 98.
- Silver, D., & Sutton, R. S. (2025). *[Welcome to the era of experience](https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf)*.
- Sutton, R. S. (2019). *The bitter lesson*.
