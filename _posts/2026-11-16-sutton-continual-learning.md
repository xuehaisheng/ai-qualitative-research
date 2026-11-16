---
title: "「学習は、ただの学習だ」：サットンが語る、止まったAIと学び続けるAI"
date: 2026-11-16 09:00:00 +0900
title_en: "“It's just learning”: Sutton on AI that has stopped learning and AI that keeps learning"
summary_en: "Rich Sutton's complaint about today's generative AI is that it does not learn once it is in use. His arguments about finite human data, squirrels that don't go to school, and how to learn without forgetting, alongside LeCun's cat, and the gap between persuasive criticism and a working alternative."
author: 薛海升
key: sutton-continual-learning
order: 8
wiki: [continual-learning, step-size-optimization, catastrophic-forgetting, world-model, context-learning, llm]
summary_ja: "強化学習の基礎を築いたサットンが、いまの生成AIに抱く不満は「使われている間に学ばない」ことである。人間のデータの限界、学校に行かないリス、忘れずに学び続ける方法をめぐる主張を、ルカンの猫の話とあわせて整理し、説得力のある批判と、それに代わる技術との距離を考える。"
topic: "AIの理解"
related_notes: ["understanding", "predictions", "ai-history"]
sort_date: 20261116
---

リチャード・サットンは、強化学習の基礎を築いた研究者で、2019年のエッセイ「苦い教訓」でも知られる。いまの生成AIブームに対して、彼はもっとも根本的な不満を述べてきた一人である。その不満を一言でまとめると、「いまのAIは、使われている間に学ばない」となる。ここでは、彼の最近の発言と論文から、その主張を整理する。

{% include figure.html src="fig-sutton-podcast.jpg" cap="Sequoia Capitalのポッドキャスト「Training Data」の収録の様子。左から二人目がサットン。出典：Sequoia Capital（2026）。" alt="ポッドキャストの収録風景。緑の壁の部屋で、4人が丸いテーブルを囲んで話している。左から二人目がサットン。" %}

## 使われている間、AIは学ばない

いまの大規模言語モデルは、大量のデータで学習したあと、重みを固定して使われる。会話の中で利用者について覚えたり、渡された資料を読んで答えたりはする。しかしサットンによれば、人と話している間も「重みはまったく変わらない」。そういうものから博士レベルの専門性を作れると考える方が変だ、と彼は言う。

サットンにとって、学習とは、行動して学ぶことを続けることであり、特別な段階ではない。AIブームの前なら、わざわざ「継続学習」と呼ぶ必要もなかった。彼はそれを「ただの学習」と呼ぶ。そう呼び分けなければならない今の分野の方が変なのだ、というのが彼の言い分である（[継続学習]({{ '/literacy/continual-learning/' | relative_url }})）。

## 人間が書いたデータには限りがある

サットンは「苦い教訓」を、およそ次のようにまとめる。人間の知識に気を取られず、探索や学習のように、計算資源が増えるほど伸びる方法に集中せよ。大規模言語モデルは、この教訓の良い例でもあり、悪い例でもある。インターネットを飲み込み、計算とともに大きくなれた点では良い例である。しかし、インターネットは有限で、世界はそこに書かれたものよりずっと大きい。人間の知識に頼りすぎて、最後にはそれに足を引っ張られる点では、悪い例になりうる。

インターネットのデータが尽きかけたので、AI企業はAIに作らせた合成データで学習させようとしている。サットンはこれを「大きな間違い」と言う。世界は、どのエージェントの心よりもはるかに複雑である。世界には、ほかの人の心も含まれているからである。合成データを作るのは結局小さなプログラムで、それが作るのは小さな世界にすぎない。目の前の相手の心の中で何が起きているかは大事だが、他人の心について合成データを作る方法はない。だからAIは、自分が出会う世界の一部から、学び続けるしかない。

## リスは学校に行かない、猫にもまだ及ばない

サットンは、正解の例を見せて学ばせる教師あり学習を、学びの中心とは見ていない。私たちは、筋肉をどう動かすかの正解例を誰からも教わらない。見ること、歩くこと、世界の仕組みを、学校の外で学んでいる。彼の言葉では「リスは学校に行かない」。リスは、鳥のエサ箱にどんな障害をつけても入り込む方法を見つけ出す。

ヤン・ルカンも、別の角度から似たことを言い続けてきた。2018年の時点で「いま必要なのは、機械を飼い猫のレベルにすることだ」と書き、2023年には、人間レベルのAIの前に、まず猫や犬のレベルのAIに達する必要があると述べている。猫は言葉を話さないが、ものが落ちることも、跳べる距離も知っている。言葉の予測だけを学んだAIには、その種の理解が欠けている、というのがルカンの見方である（[世界モデル]({{ '/literacy/world-model/' | relative_url }})）。サットンと同じく、いまのAIが人間の書いた文字に頼り、世界の中で行動して学んでいないことへの不満である。

## 忘れずに学び続けるには

使われながら学ばせると、新しいことを覚えるたびに古いことを忘れる（[破滅的忘却]({{ '/literacy/catastrophic-forgetting/' | relative_url }})）。いまは、多くの利用者のデータをまとめて更新することで、これを避けている。

サットンと、彼の教え子で共同創業者のクラム・ジャヴェドは、これは治せると言う。重みごとに一度に動く量を変え、それ自体をモデルに学ばせる。大部分の重みは小さくしか動かないので、新しい例で学んでも壊れない。あわせて、新しい部品を試しに作って役に立つかを確かめ、学ぶ力そのものを保つ（[ステップサイズの最適化]({{ '/literacy/step-size-optimization/' | relative_url }})、Dohare et al., 2024）。ただし、いまある大規模言語モデルに後から当てはめることはできず、最初から学習し直す必要がある。二人はそのために新しい研究所Oak Labを立ち上げた。ジャヴェドは、大手のAI企業は「局所最適」にはまっていて、いったん性能が落ちる新しいやり方には移りにくいと言う。

## Talk is cheap

二人の批判には、同意する人が多いと思う。文字を中心に学んだモデルが、使われながら学べないことは、使っていれば誰でも感じる。ルカンも2025年にMetaを離れ、世界モデルを作るAMI Labsを立ち上げて、2026年3月に10億ドルを超える資金を集めた。

ただ、いまのところ、どちらの陣営も、大規模言語モデルに代わる研究の流れを作り出したとは言えない。この1年の間にも大規模言語モデルは伸び続け、研究でも仕事でも使われる範囲が広がった。サットン自身、大規模言語モデルは言語の巧みな使い方における予想外の大きなブレイクスルーだと認めている（そのうえで、それは知能の2割か4分の1ほどだと付け加える）。Linuxを作ったリーナス・トーバルズが2000年にメーリングリストで書いたとされる言葉を借りれば、「Talk is cheap. Show me the code.」である。批判がどれだけ正しくても、学び続けるAIが実際に動いて見せるまでは、主張の段階にとどまる。

## 質的研究者として考えたこと

それでも、サットンの「大きな世界」という考え方は、質的研究の感覚に近い。世界はどんなモデルよりも複雑なので、自分がいる世界の一部に合わせて、学び続けるしかない。フィールドに身を置き、出会うものに合わせて問いを更新していくのは、質的研究がずっとやってきたことである。私たちは以前、データの収集や分析を自動化すると、研究者が現場もデータも知らないまま研究が進んでしまうことを、「human out of the loop（脱人間化）」の問題と呼んだ。

他人の心について合成データは作れない、という指摘も気になった。最近は、AIに架空の協力者を演じさせ、インタビューの回答を作らせる研究もある。サットンの言い方を借りれば、それは小さなプログラムが作る小さな世界である。

実際的なことも一つある。いまの生成AIは、使っても成長しない。前の会話で教えたことを、モデル自体が覚えているわけではない。必要な資料は、そのつど渡す必要がある。そして、渡した資料の規則がきちんと使われるとも限らない（[テキストの中で学ぶ]({{ '/literacy/context-learning/' | relative_url }})）。

## 参考文献

- Dohare, S., Hernandez-Garcia, J. F., Lan, Q., Rahman, P., Mahmood, A. R., & Sutton, R. S. (2024). [Loss of plasticity in deep continual learning.](https://doi.org/10.1038/s41586-024-07711-7) *Nature*, 632(8026), 768–774.
- LeCun, Y. [@ylecun]. (2018, December 8). *Right now, we need to get machines to the level of a house cat* [Post]. X. （発言の時期と内容は [Quote Investigator (2024)](https://quoteinvestigator.com/2024/07/13/cat-ai/) による）
- LeCun, Y. [@ylecun]. (2023, February 5). *Before we reach Human-Level AI (HLAI), we will have to reach Cat-Level & Dog-Level AI* [Post]. X.
- Sequoia Capital. (2026). *[Rich Sutton and Khurram Javed: Why AI models stop learning, and how to start it again](https://sequoiacap.com/podcast/rich-sutton-and-khurram-javed-why-ai-models-stop-learning-and-how-to-start-it-again)* [Podcast episode]. Training Data, Episode 98.
- Silver, D., & Sutton, R. S. (2025). *[Welcome to the era of experience](https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf)*.
- SiliconANGLE. (2026, March 10). *[Yann LeCun's new startup AMI Labs raises $1.03B to train world models](https://siliconangle.com/2026/03/10/yann-lecuns-new-startup-ami-labs-raises-1-03b-train-world-models/)*.
- Sutton, R. S. (2019). *The bitter lesson*.

<!--EN-->

Richard Sutton laid the foundations of reinforcement learning and is known for his 2019 essay “The Bitter Lesson.” Of the critics of today's generative AI boom, his complaint is one of the most fundamental. In one sentence: today's AI does not learn while it is being used. This note sets out that argument from his recent remarks and papers.

{% include figure.html src="fig-sutton-podcast.jpg" cap="Recording of Sequoia Capital's podcast “Training Data.” Sutton is second from the left. Source: Sequoia Capital (2026)." alt="A podcast recording: four people talk around a round table in a room with green walls. Sutton is second from the left." %}

## AI does not learn while in use

Today's large language models are trained on large amounts of data and then used with fixed weights. They do remember things about users within a conversation and answer from materials they are given. But according to Sutton, even while they talk with people, their weights “never change.” It is strange, he says, to think you could build PhD-level expertise out of something like that.

For Sutton, learning means continuing to act and learn; it is not a special phase. Before the AI boom, nobody needed to say “continual” learning. He calls it just learning, and in his view a field that needs the label is the strange one ([continual learning]({{ '/literacy/continual-learning/' | relative_url }})).

## Human-written data runs out

Sutton summarizes the bitter lesson roughly like this: do not get distracted by human knowledge; focus on methods, such as search and learning, that keep improving as computation grows. Large language models are both a positive and a negative example of the lesson. They are a positive example because they drank in the internet and grew with computation. But the internet is finite, and the world is far bigger than what is written there. They may become a negative example of relying on human knowledge until it holds us back.

With internet data running low, AI companies are trying to train on synthetic data generated by AI. Sutton calls this a big mistake. The world is vastly more complex than the mind of any agent, because the world contains other people's minds. Synthetic data is produced by what is in the end a small program, which makes only a small world. What is going on in the mind of the person in front of you matters, and there is no way to make synthetic data about other people's minds. So an AI can only keep learning from the part of the world it meets.

## Squirrels don't go to school, and AI is not yet a cat

Sutton does not see supervised learning, learning from examples of correct answers, as the center of learning. Nobody gives us correct examples of how to move our muscles. We learn to see, to walk, and how the world works outside school. In his words, squirrels don't go to school. A squirrel finds a way into your bird feeder whatever obstacles you put in the way.

Yann LeCun has said something similar from another angle for years. In 2018 he wrote that right now we need to get machines to the level of a house cat, and in 2023 that before human-level AI we will have to reach cat-level and dog-level AI. A cat does not speak, but it knows that things fall and how far it can jump. In LeCun's view, AI that has learned only to predict language lacks that kind of understanding ([world model]({{ '/literacy/world-model/' | relative_url }})). Like Sutton, he objects that today's AI relies on what humans have written and does not learn by acting in the world.

## Learning without forgetting

If a model learns while in use, it forgets old things each time it learns something new ([catastrophic forgetting]({{ '/literacy/catastrophic-forgetting/' | relative_url }})). Today this is avoided by updating in large batches pooled from many users.

Sutton and his former student and cofounder Khurram Javed say this is curable. Give each weight its own amount of movement per update, and have the model learn those amounts. Most weights move only a little, so learning a new example does not break them. In addition, try out new units and keep the ones that help, which preserves the ability to learn ([step-size optimization]({{ '/literacy/step-size-optimization/' | relative_url }}); Dohare et al., 2024). This cannot be added afterward to an existing large language model; the model has to be trained from scratch. The two founded a new lab, Oak Lab, to do this. Javed says the big AI companies are stuck in a “local minimum” and find it hard to move to a new approach whose performance first gets worse.

## Talk is cheap

I think many people agree with their criticism. Anyone who uses these models can feel that a model trained mainly on text cannot learn while in use. LeCun, too, left Meta in 2025, founded AMI Labs to build world models, and raised more than a billion dollars in March 2026.

So far, though, neither camp can be said to have started a line of research that replaces large language models. Over the past year large language models have kept improving and spread further into research and work. Sutton himself acknowledges that they are a great and unexpected breakthrough in the skillful use of language (while adding that this is only a fifth or a quarter of intelligence). To borrow the line Linux creator Linus Torvalds is said to have written on a mailing list in 2000, “Talk is cheap. Show me the code.” However right the criticism is, it stays at the level of argument until AI that keeps learning actually runs.

## What I thought about as a qualitative researcher

Even so, Sutton's idea of a “big world” is close to how qualitative research feels. The world is more complex than any model, so we can only keep learning, tuned to the part of the world we are in. Placing oneself in the field and updating questions in response to what one meets is what qualitative research has always done. We earlier called it the “human out of the loop” problem when automating data collection and analysis lets research proceed without the researcher knowing the field or the data.

The point that there can be no synthetic data about other people's minds also stayed with me. Recently, some studies have AI play fictional participants and generate interview answers. In Sutton's terms, that is a small world made by a small program.

There is also a practical point. Today's generative AI does not grow through use. The model itself does not remember what you taught it in an earlier conversation. You need to give it the necessary materials each time, and the rules in those materials will not necessarily be applied correctly ([context learning]({{ '/literacy/context-learning/' | relative_url }})).

## References

- Dohare, S., Hernandez-Garcia, J. F., Lan, Q., Rahman, P., Mahmood, A. R., & Sutton, R. S. (2024). [Loss of plasticity in deep continual learning.](https://doi.org/10.1038/s41586-024-07711-7) *Nature*, 632(8026), 768–774.
- LeCun, Y. [@ylecun]. (2018, December 8). *Right now, we need to get machines to the level of a house cat* [Post]. X. (Date and wording as documented by [Quote Investigator (2024)](https://quoteinvestigator.com/2024/07/13/cat-ai/))
- LeCun, Y. [@ylecun]. (2023, February 5). *Before we reach Human-Level AI (HLAI), we will have to reach Cat-Level & Dog-Level AI* [Post]. X.
- Sequoia Capital. (2026). *[Rich Sutton and Khurram Javed: Why AI models stop learning, and how to start it again](https://sequoiacap.com/podcast/rich-sutton-and-khurram-javed-why-ai-models-stop-learning-and-how-to-start-it-again)* [Podcast episode]. Training Data, Episode 98.
- Silver, D., & Sutton, R. S. (2025). *[Welcome to the era of experience](https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf)*.
- SiliconANGLE. (2026, March 10). *[Yann LeCun's new startup AMI Labs raises $1.03B to train world models](https://siliconangle.com/2026/03/10/yann-lecuns-new-startup-ami-labs-raises-1-03b-train-world-models/)*.
- Sutton, R. S. (2019). *The bitter lesson*.
