---
title: "継続学習"
key: continual-learning
en: "Continual learning"
category: basics
order: 13
summary: "使われながら新しい経験から学び続けること。いまのAIは学習を終えると重みが固定され、使っても成長しない。基本を支える重みは守り、それ以外を動かすことが鍵になる。"
summary_en: "Learning continually from new experience while in use. Today's AI has fixed weights after training and does not grow through use. The key is to protect the weights that support the basics and let the others change."
related: [step-size-optimization, catastrophic-forgetting, context-learning, llm, world-model, rsi]
articles: [sutton-continual-learning, understanding]
sources:
  - text: "Sequoia Capital. (2026). Rich Sutton and Khurram Javed: Why AI models stop learning, and how to start it again [Podcast episode]. Training Data, Episode 98."
    url: "https://sequoiacap.com/podcast/rich-sutton-and-khurram-javed-why-ai-models-stop-learning-and-how-to-start-it-again"
  - text: "Silver, D., & Sutton, R. S. (2025). Welcome to the era of experience."
    url: "https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf"
  - text: "Dohare, S., Hernandez-Garcia, J. F., Lan, Q., Rahman, P., Mahmood, A. R., & Sutton, R. S. (2024). Loss of plasticity in deep continual learning. Nature, 632(8026), 768–774."
    url: "https://doi.org/10.1038/s41586-024-07711-7"
  - text: "Kirkpatrick, J., Pascanu, R., Rabinowitz, N., et al. (2017). Overcoming catastrophic forgetting in neural networks. Proceedings of the National Academy of Sciences, 114(13), 3521–3526."
    url: "https://doi.org/10.1073/pnas.1611835114"
  - text: "Elsayed, M., & Mahmood, A. R. (2024). Addressing loss of plasticity and catastrophic forgetting in continual learning. International Conference on Learning Representations (ICLR 2024). arXiv:2404.00781."
    url: "https://arxiv.org/abs/2404.00781"
---

継続学習（continual learning）とは、AIが使われながら、新しい経験から学び続けることである。いまの大規模言語モデルは、大量のデータで一度に学習したあと、重みを固定して使われる。会話の中で教えたことは、その会話が終われば消える。メモリ機能は、外に保存したメモを次の会話で読み込み直しているだけで、モデル自体は変わらない。

強化学習の基礎を築いたリチャード・サットンは、これを今のAIの大きな欠点と見てきた。シルバーとサットン（Silver & Sutton, 2025）は、次のAIは人間が書いたデータよりも、自ら行動して得る経験から学び続けることで伸びていくと主張した。2026年のインタビューでは、サットンはもっとはっきり言っている（Sequoia Capital, 2026）。AIブームの前なら、わざわざ「継続」学習と呼ぶ必要はなかった。学習はいつも続くものだからである。そう呼ばなければならない今の分野の方が変なのだ、と。いまの大規模言語モデルは、人と話している間も「重みはまったく変わらない」。サットンはまた、「リスは学校に行かない」とも言う。動物は、正解の例を見せられて学ぶのではなく、自分で動き、その結果から学んでいる。

ただし、学び続けるのは簡単ではない。新しいことを学ぶと、古いことを忘れてしまう（[破滅的忘却]({{ '/literacy/catastrophic-forgetting/' | relative_url }})）。反対の問題もある。サットンらの研究（Dohare et al., 2024）は、ふつうの深層学習で学び続けさせると、新しいことを学ぶ柔軟さ（可塑性）がだんだん失われ、最後には浅いネットワークと変わらなくなることを示した。あまり使われていない部分をときどき作り直すと、学ぶ力が保たれた。

そこで鍵になるのが、すべての重みを同じように動かさない、という考え方である。基本的な概念を支える大事な重みはほとんど動かさず、重要度の低い重みは大きく動かして、新しいことを覚えさせる。サットンらは、重みごとの動かしやすさを経験から学ばせる方法を提案している（[ステップサイズの最適化]({{ '/literacy/step-size-optimization/' | relative_url }})）。カークパトリックら（Kirkpatrick et al., 2017）も、前の課題にとって大事な重みほど変わりにくくした。エルサイードとマフムード（Elsayed & Mahmood, 2024）は、役に立っている部分は守り、あまり役に立っていない部分は大きめに揺さぶることで、忘却と学ぶ力の衰えを同時に抑えようとした。

質的研究にとっての意味は、いまのところ単純である。いまの生成AIは、使っても成長しない。前の会話で教えたことを、モデルが覚えていると期待してはいけない。必要な資料は毎回渡す必要がある（[テキストの中で学ぶ]({{ '/literacy/context-learning/' | relative_url }})）。継続学習ができるAIが実現すれば、研究者のフィールドノートや分析の積み重ねから学ぶ共同研究者に近づくかもしれない。そのときは、AIが何をどう学んだのかを確かめることが、今よりずっと難しくなる。

<!--EN-->

Continual learning means that an AI keeps learning from new experience while it is being used. Today's large language models are trained once on large amounts of data, and then their weights are fixed. What you teach a model in a conversation disappears when the conversation ends. Memory features only reload notes saved outside the model into the next conversation; the model itself does not change.

Richard Sutton, one of the founders of reinforcement learning, has long seen this as a major weakness of today's AI. Silver and Sutton (2025) argued that the next AI will grow less through human-written data than by learning continually from experience it gains by acting. In a 2026 interview Sutton put it more bluntly (Sequoia Capital, 2026). Before the AI boom, nobody needed to say "continual" learning, because learning always continues; in his view, a field that needs the label is the strange one. Today's large language models, even while talking with people, have weights that "never change." Sutton also says that "squirrels don't go to school": animals are not shown examples of correct answers; they learn by acting themselves and from the results.

Learning continually is not easy, though. Learning something new can make a model forget what it knew ([catastrophic forgetting]({{ '/literacy/catastrophic-forgetting/' | relative_url }})). There is also the opposite problem. Research by Sutton and colleagues (Dohare et al., 2024) showed that when standard deep learning keeps learning, it gradually loses the flexibility to learn new things (plasticity), and in the end does no better than a shallow network. Occasionally re-initializing rarely used parts kept the ability to learn.

The key idea is not to change all weights in the same way. The important weights that support basic concepts are barely moved, while less important weights are changed more, so that the model can learn new things. Sutton and colleagues propose learning, from experience, how easily each weight should move ([step-size optimization]({{ '/literacy/step-size-optimization/' | relative_url }})). Kirkpatrick et al. (2017) likewise made weights harder to change the more important they were for earlier tasks. Elsayed and Mahmood (2024) protected the parts that are useful and shook up the less useful parts more strongly, aiming to curb both forgetting and the loss of the ability to learn.

For qualitative research, the implication is simple for now. Today's generative AI does not grow through use. Do not expect the model to remember what you taught it in an earlier conversation; you need to give it the necessary materials each time (see [Context learning]({{ '/literacy/context-learning/' | relative_url }})). If AI that learns continually arrives, it may come closer to a collaborator that learns from a researcher's accumulated field notes and analyses. Checking what it has learned, and how, will then become much harder than it is now.
