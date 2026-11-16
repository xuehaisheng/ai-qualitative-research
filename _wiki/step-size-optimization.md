---
title: "ステップサイズの最適化"
key: step-size-optimization
en: "Step-size optimization"
category: basics
order: 14
summary: "重みごとに「一度にどれだけ動かすか」を変え、それ自体も学習させる。大事な重みはほとんど動かさず、新しいことは動かしてよい重みで覚える。"
summary_en: "Giving each weight its own step size, how far it moves in one update, and learning those step sizes too. Important weights barely move, and new things are learned in weights that are free to change."
related: [continual-learning, catastrophic-forgetting, llm, self-supervised]
articles: [sutton-continual-learning]
sources:
  - text: "Sequoia Capital. (2026). Rich Sutton and Khurram Javed: Why AI models stop learning, and how to start it again [Podcast episode]. Training Data, Episode 98."
    url: "https://sequoiacap.com/podcast/rich-sutton-and-khurram-javed-why-ai-models-stop-learning-and-how-to-start-it-again"
  - text: "Sutton, R. S. (1992). Adapting bias by gradient descent: An incremental version of delta-bar-delta. Proceedings of the Tenth National Conference on Artificial Intelligence (AAAI-92), 171–176."
    url: "https://mlanthology.org/aaai/1992/sutton1992aaai-adapting"
  - text: "Dohare, S., Hernandez-Garcia, J. F., Lan, Q., Rahman, P., Mahmood, A. R., & Sutton, R. S. (2024). Loss of plasticity in deep continual learning. Nature, 632(8026), 768–774."
    url: "https://doi.org/10.1038/s41586-024-07711-7"
  - text: "Elsayed, M., & Mahmood, A. R. (2024). Addressing loss of plasticity and catastrophic forgetting in continual learning. International Conference on Learning Representations (ICLR 2024). arXiv:2404.00781."
    url: "https://arxiv.org/abs/2404.00781"
---

AIは、間違えるたびに重み（モデルの中の数値）を少しずつ直して学ぶ。一回の学習で重みをどれだけ動かすかを、ステップサイズ（学習率）という。ふつうは、すべての重みに同じステップサイズを使う。

リチャード・サットンとクラム・ジャヴェドは、これを重みごとに変えるべきだと言う（Sequoia Capital, 2026）。速く動く重みもあれば、ゆっくりしか動かない重みもある。しかも、どの重みをどれだけ動かすかは、人が決めるのではなく、経験からモデル自身に学ばせる（メタ学習、つまり「学び方を学ぶ」）。そうすると、ネットワークの大部分の重みはごく小さいステップサイズを持つようになる。新しい例で学んでも、それらの重みはほとんど動かないので、それまでの知識が壊れない。変化は「ちょうどいい場所」にだけ起きる。サットン自身、1992年に、入力ごとに学習率を経験に合わせて変える方法（IDBD）を提案していた（Sutton, 1992）。

サットンらは、これにもう一つの仕組みを組み合わせる。新しい部品（ユニット）を試しに作り、役に立つかを確かめる「生成と検証」である。ふつうの学習（誤差逆伝播）では、ランダムな初期値は最初に一度与えられるだけで、学び続けるうちにその多様さが使い果たされ、新しいことを学ぶ力（可塑性）が落ちていく。そこで、あまり使われていないユニットを少しずつ新しく作り直し、多様さを注ぎ続ける（Dohare et al., 2024）。

この二つがそろえば、[破滅的忘却]({{ '/literacy/catastrophic-forgetting/' | relative_url }})は「治せる」とサットンらは言う。ただし、いまある大規模言語モデルにこの方法を後から当てはめることはできない。知識と同時に「学び方」も学ぶ必要があるので、最初から学習し直すことになる。人の学びにたとえれば、九九はほとんど動かさずに、新しいことを覚える余地は空けておく、ということになる。

<!--EN-->

AI learns by adjusting its weights (the numbers inside the model) a little each time it makes a mistake. How far a weight moves in one learning step is called the step size (learning rate). Usually the same step size is used for every weight.

Rich Sutton and Khurram Javed argue that this should differ from weight to weight (Sequoia Capital, 2026). Some weights should move quickly and others only slowly. And how far each weight should move is not set by people but learned by the model itself from experience (meta-learning, that is, learning how to learn). Most weights in the network then end up with tiny step sizes. When the model learns from a new example, those weights barely move, so earlier knowledge is not destroyed; change happens only in the right places. Sutton himself proposed in 1992 a method (IDBD) that adapts the learning rate for each input according to experience (Sutton, 1992).

They combine this with a second mechanism: "generate and test," which creates new parts (units) on a trial basis and checks whether they help. In ordinary learning (backpropagation), random initial values are given only once, at the start. As learning continues, that variety gets used up and the ability to learn new things (plasticity) declines. So rarely used units are gradually re-created, continually injecting variety (Dohare et al., 2024).

With these two together, Sutton and colleagues say, [catastrophic forgetting]({{ '/literacy/catastrophic-forgetting/' | relative_url }}) is curable. But the method cannot simply be applied afterward to an existing large language model. Because the model must learn how to learn at the same time as it learns knowledge, it has to be trained from scratch. In terms of human learning, it is like leaving the multiplication table almost untouched while keeping room to learn new things.
