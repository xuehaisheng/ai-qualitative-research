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

リチャード・サットンは、強化学習の基礎を築いた研究者であり、2019年のエッセイ「苦い教訓」でも知られている。現在の生成AIブームに対して、根本的な疑問を投げかけてきた研究者の一人でもある。その中心にあるのは、「いまのAIは、使われている間に学ばない」という批判である。本稿では、最近の発言と論文に基づいて、彼の主張を整理していきたい。

{% include figure.html src="fig-sutton-podcast.jpg" cap="Sequoia Capitalのポッドキャスト「Training Data」の収録の様子。左から二人目がサットン。出典：Sequoia Capital（2026）。" alt="ポッドキャストの収録風景。緑の壁の部屋で、4人が丸いテーブルを囲んで話している。左から二人目がサットン。" %}

## 使われている間、AIは学ばない

現在の大規模言語モデルは、大量のデータによる学習を終えた後、重みを固定した状態で利用される。会話の中で利用者に関する情報を覚えたり、提示された資料を参照して回答したりすることはできる。しかし、サットンが「重みはまったく変わらない」と述べるように、対話の最中に重みが更新されるわけではない。彼は、こうした仕組みから博士レベルの専門性が生まれると考えることに、疑問を呈している。

サットンは、行動を通して学び続けることを、学習そのものとして捉えている。その立場からすれば、学習を特定の段階に限ることの方に問題がある。AIブーム以前には、わざわざ「継続学習」と呼ぶ必要もなかったものを、彼は「ただの学習」と表現する。現在の分野でこのような呼び分けが必要とされていること自体が、彼の批判の対象になっている（[継続学習]({{ '/literacy/continual-learning/' | relative_url }})）。

## 人間が書いたデータには限りがある

サットンによる「苦い教訓」は、人間の知識を組み込むことにとらわれず、探索や学習のように、計算資源の増加に伴って性能が伸びる方法に集中すべきだという主張として整理できる。この観点から見ると、大規模言語モデルには、教訓に沿う側面と、そこから外れる側面の両方がある。インターネット上のデータを取り込み、計算資源とともに拡大してきた点は、前者にあたる。しかし、インターネット上の情報には限りがあり、世界はそこに記述された範囲を超えている。そのため、人間が蓄積した知識への依存が、やがて発展を制約する可能性もあるという。

この点については、OpenAIの共同創業者で元チーフサイエンティストのイリヤ・サツケヴァーも、2024年12月のNeurIPSでの講演で言及している。計算資源は増え続けるが、データは同じようには増えない。彼の言葉では、「インターネットは一つしかない（We have but one internet）」からである。サツケヴァーは、AIの学習データを化石燃料にたとえ、掘り尽くせば尽きてしまう資源として説明した。

{% include figure.html src="fig-sutskever-neurips.jpg" cap="NeurIPS 2024で講演するサツケヴァー。出典：NeurIPS 2024（Vancouver）の講演映像。" alt="ステージの演台で、両手を広げて話すサツケヴァー。演台にはノートパソコンとマイクがある。" %}

インターネット上のデータが尽きかける中で、AI企業は、AI自身に生成させた合成データを学習に用いようとしている。サットンは、この方向を「大きな間違い」と批判する。彼によれば、世界には他者の心も含まれるため、どのエージェントの心よりも複雑である。一方、合成データを生成するプログラムは小さく、そこから作られる世界も限られている。目の前にいる相手の心の中で何が起きているかは重要であっても、その心についての合成データを作る方法はない。そのため、AIには、実際に出会う世界の一部から学び続けることが必要だという。

## リスは学校に行かない、猫にもまだ及ばない

サットンは、正解例を提示する教師あり学習を、学びの中心には位置づけていない。例えば、人間は筋肉をどう動かすかについて、正解例を一つずつ教えられるわけではない。見ることや歩くこと、世界がどのように動くかについても、学校の外で学んでいる。彼が「リスは学校に行かない」と述べるのは、このような学習を指している。鳥のエサ箱に障害を設けても、リスはそこに入り込む方法を見つけ出すのである。

ヤン・ルカンも、異なる角度から同様の問題を指摘してきた。2018年には「いま必要なのは、機械を飼い猫のレベルにすることだ」と書き、2023年にも、人間レベルのAIに先立って、猫や犬のレベルに達する必要があると述べている。猫は言葉を話さなくても、ものが落ちることや、自分が跳べる距離を理解している。ルカンは、言葉の予測を学ぶだけでは、こうした理解が得られないと考えている（[世界モデル]({{ '/literacy/world-model/' | relative_url }})）。この批判は、AIが人間の書いた文字に依存し、世界の中で行動しながら学んでいないという点で、サットンの問題意識と重なる。

## 忘れずに学び続けるには

AIを利用中にも学習させる場合には、新しいことを覚えるたびに、それまでに学んだことを忘れるという問題が生じる（[破滅的忘却]({{ '/literacy/catastrophic-forgetting/' | relative_url }})）。現在は、多くの利用者から得たデータをまとめて更新することで、この問題を避けている。

サットンと、その教え子で共同創業者でもあるクラム・ジャヴェドは、この問題は解決できると述べている。具体的には、それぞれの重みを一度にどれだけ動かすかを変え、その調整自体をモデルに学習させる。大部分の重みの変化が小さく抑えられるため、新しい例を学んでも、それまでの学習内容が壊れにくくなる。さらに、新しい部品を試しに作り、その有用性を確かめることで、学ぶ力自体を保つという方法もある（[ステップサイズの最適化]({{ '/literacy/step-size-optimization/' | relative_url }})、Dohare et al., 2024）。ただし、これらを既存の大規模言語モデルに後から適用することはできず、最初から学習し直す必要がある。二人はそのための研究所としてOak Labを設立した。ジャヴェドによれば、大手AI企業は「局所最適」にとどまっており、一時的に性能が下がる新しい方法への移行が難しいという。

## Talk is cheap

こうした批判には、同意する人も多いのではないかと思う。文字を中心に学習したモデルが、利用されながら学び続けられないことは、実際に使う中でも感じられる。ルカンも、2025年にMetaを離れた後、世界モデルの開発を目指すAMI Labsを設立し、2026年3月には10億ドルを超える資金を集めた。

ただし、現時点では、いずれの陣営も、大規模言語モデルに代わる研究の流れを作り出したとは言い難い。この1年にも大規模言語モデルの性能は向上し、研究や仕事で利用される範囲も拡大してきた。サットン自身も、言語を巧みに用いる能力については、予想外の大きなブレイクスルーであったと認めている。そのうえで、これは知能の2割か4分の1ほどにあたると付け加えている。ここで、Linuxの開発者であるリーナス・トーバルズが2000年にメーリングリストに書いたとされる、「Talk is cheap. Show me the code.」という言葉を思い出す。批判の妥当性に加えて、実際に学び続けるAIが動くことを示せるかどうかが、今後問われると考えられる。

## 質的研究者として考えたこと

それでも、サットンの「大きな世界」という捉え方には、質的研究と通じる感覚があると思う。世界がどのようなモデルよりも複雑であるならば、自分が関わる世界の一部から、学び続ける必要がある。フィールドに身を置き、そこでの出会いに応じて問いを更新していくことは、質的研究において続けられてきたことである。私たちも以前、データ収集や分析の自動化に伴い、研究者が現場やデータを十分に知らないまま研究を進めてしまう問題を、「human out of the loop（脱人間化）」として論じた。

また、他者の心について合成データは作れないという指摘も、気になる点である。近年では、AIに架空の研究協力者を演じさせ、インタビューの回答を生成させる研究もある。サットンの表現を借りれば、その回答が表しているのは、小さなプログラムによって作られた小さな世界である。

実際の利用に関しても、確認しておきたい点がある。現在の生成AIでは、利用を重ねても、前の会話で伝えた内容がモデル自体に学習されるわけではない。そのため、必要な資料は、そのつど提示する必要がある。さらに、資料を提示した場合でも、そこに書かれた規則が適切に用いられるとは限らないことにも、留意しておきたい（[テキストの中で学ぶ]({{ '/literacy/context-learning/' | relative_url }})）。

## 参考文献

- Dohare, S., Hernandez-Garcia, J. F., Lan, Q., Rahman, P., Mahmood, A. R., & Sutton, R. S. (2024). [Loss of plasticity in deep continual learning.](https://doi.org/10.1038/s41586-024-07711-7) *Nature*, 632(8026), 768–774.
- LeCun, Y. [@ylecun]. (2018, December 8). *Right now, we need to get machines to the level of a house cat* [Post]. X. （発言の時期と内容は [Quote Investigator (2024)](https://quoteinvestigator.com/2024/07/13/cat-ai/) による）
- LeCun, Y. [@ylecun]. (2023, February 5). *Before we reach Human-Level AI (HLAI), we will have to reach Cat-Level & Dog-Level AI* [Post]. X.
- McKay, C. (2024, December 13). *[Ilya Sutskever signals the end of current AI training methods, predicts major shift in model development](https://www.maginative.com/article/ilya-sutskever-signals-the-end-of-current-ai-training-methods-predicts-major-shift-in-model-development/)*. Maginative.
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

Ilya Sutskever, an OpenAI co-founder and its former chief scientist, made the same point in his NeurIPS talk in December 2024. Compute keeps growing, but data does not, because “we have but one internet.” He compared training data to the fossil fuel of AI: a resource that is gone once it has been dug up.

{% include figure.html src="fig-sutskever-neurips.jpg" cap="Sutskever speaking at NeurIPS 2024. Source: video of the NeurIPS 2024 talk (Vancouver)." alt="Sutskever at a lectern on stage, speaking with both hands spread. A laptop and a microphone are on the lectern." %}

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
- McKay, C. (2024, December 13). *[Ilya Sutskever signals the end of current AI training methods, predicts major shift in model development](https://www.maginative.com/article/ilya-sutskever-signals-the-end-of-current-ai-training-methods-predicts-major-shift-in-model-development/)*. Maginative.
- Sequoia Capital. (2026). *[Rich Sutton and Khurram Javed: Why AI models stop learning, and how to start it again](https://sequoiacap.com/podcast/rich-sutton-and-khurram-javed-why-ai-models-stop-learning-and-how-to-start-it-again)* [Podcast episode]. Training Data, Episode 98.
- Silver, D., & Sutton, R. S. (2025). *[Welcome to the era of experience](https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf)*.
- SiliconANGLE. (2026, March 10). *[Yann LeCun's new startup AMI Labs raises $1.03B to train world models](https://siliconangle.com/2026/03/10/yann-lecuns-new-startup-ami-labs-raises-1-03b-train-world-models/)*.
- Sutton, R. S. (2019). *The bitter lesson*.
