---
title: "継続学習"
key: continual-learning
en: "Continual learning"
category: basics
order: 13
summary: "使われながら、新しい経験から学び続けること。いまのAIは学習を終えると重みが固定され、使っても成長しない。"
summary_en: "Learning continually from new experience while in use. Today's AI has fixed weights after training and does not grow through use."
related: [step-size-optimization, catastrophic-forgetting, context-learning, llm, world-model, rsi]
articles: [sutton-continual-learning, understanding]
sources:
  - text: "Silver, D., & Sutton, R. S. (2025). Welcome to the era of experience."
    url: "https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf"
  - text: "Dohare, S., Hernandez-Garcia, J. F., Lan, Q., Rahman, P., Mahmood, A. R., & Sutton, R. S. (2024). Loss of plasticity in deep continual learning. Nature, 632(8026), 768–774."
    url: "https://doi.org/10.1038/s41586-024-07711-7"
  - text: "Kirkpatrick, J., Pascanu, R., Rabinowitz, N., et al. (2017). Overcoming catastrophic forgetting in neural networks. Proceedings of the National Academy of Sciences, 114(13), 3521–3526."
    url: "https://doi.org/10.1073/pnas.1611835114"
---

継続学習（continual learning）とは、AIが使われながら、新しい経験から学び続けることである。いまの大規模言語モデルは、大量のデータで一度に学習したあと、重みを固定して使われる。会話の中で教えたことは、その会話が終われば消える。メモリ機能も、外に保存したメモを読み込み直しているだけで、モデル自体は変わらない。強化学習の基礎を築いたサットンは、これを今のAIの大きな欠点と見ている（Silver & Sutton, 2025）。

学び続けさせるのは難しい。新しいことを学ぶと古いことを忘れる（[破滅的忘却]({{ '/literacy/catastrophic-forgetting/' | relative_url }})）。学び続けるうちに、新しいことを学ぶ柔軟さそのものも失われていく（Dohare et al., 2024）。対策の中心は、すべての重みを同じように動かさないことである。前の知識にとって大事な重みほど変わりにくくする方法（Kirkpatrick et al., 2017）や、重みごとの動かしやすさをモデル自身に学ばせる方法（[ステップサイズの最適化]({{ '/literacy/step-size-optimization/' | relative_url }})）が研究されている。

いまの生成AIは、使っても成長しない。前の会話で教えたことをモデルが覚えているとは期待せず、必要な資料は毎回渡す（[テキストの中で学ぶ]({{ '/literacy/context-learning/' | relative_url }})）。

<!--EN-->

Continual learning means that an AI keeps learning from new experience while it is being used. Today's large language models are trained once on large amounts of data and then used with fixed weights. What you teach a model in a conversation disappears when the conversation ends. Memory features only reload notes saved outside the model; the model itself does not change. Richard Sutton, one of the founders of reinforcement learning, sees this as a major weakness of today's AI (Silver & Sutton, 2025).

Keeping a model learning is hard. Learning something new can make it forget what it knew ([catastrophic forgetting]({{ '/literacy/catastrophic-forgetting/' | relative_url }})), and with continued learning it can also lose the flexibility to learn new things at all (Dohare et al., 2024). The main remedy is not to change all weights in the same way. Researchers have made weights harder to change the more important they were for earlier knowledge (Kirkpatrick et al., 2017), and have had the model learn how easily each weight should move ([step-size optimization]({{ '/literacy/step-size-optimization/' | relative_url }})).

Today's generative AI does not grow through use. Do not expect the model to remember what you taught it in an earlier conversation; give it the materials it needs each time ([context learning]({{ '/literacy/context-learning/' | relative_url }})).
