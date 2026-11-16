---
title: "テキストの中で学ぶ"
key: context-learning
en: "Context learning"
category: quirks
order: 7
summary: "資料の中から情報を見つけられても、資料に書かれた規則を理解して使えるとは限らない。規則がAIの常識と食い違うと、とくに難しい。"
summary_en: "Finding information in a document does not mean being able to understand and apply the rules written there, especially when those rules conflict with what the AI already knows."
related: [context, lost-in-the-middle, rag, hallucination, reasoning-model]
articles: []
sources:
  - text: "Dou, S., Zhang, M., Yin, Z., et al. (2026). CL-bench: A benchmark for context learning. arXiv:2602.03587."
    url: "https://arxiv.org/abs/2602.03587"
---

いまのAIは、長い資料の中から特定の情報を探し出すのが得意になった。資料の中に紛れ込ませた一文を探させるテスト（「干し草の山から針を探す」テスト）では、最先端のモデルはほぼ満点を取る。しかし、資料の中で情報を見つけられることと、資料に書かれた規則を理解して、そのとおりに使えることは別のことである。

ドウら（Dou et al., 2026）は、この「資料から新しい知識を学び、それを使って課題を解く力」を、コンテキスト学習（context learning）と呼んで測った。用意したのは、専門家が作った500の資料と1,899の課題である。資料には、架空の法律、書き換えた数学の定義、新しいゲームのルール、業務の手順書、整理されていない実験データなど、AIが事前の学習で見たことのない知識が入っている。資料を渡さないと、課題はほとんど解けない（GPT-5.1で0.9%）。資料を渡しても、10のモデルの平均正解率は17.2%で、最も高いGPT-5.1（High）でも23.7%だった。

失敗の多くは二つの型に分かれた。一つは、資料にある知識を使わず、事前の学習で身につけた常識で答えてしまうもの（無視）。もう一つは、資料の知識を使ってはいるが、当てはまる範囲や例外を取り違えるもの（誤用）である。GPT-5.1（High）では、失敗した答えのうち55.3%に無視が、61.5%に誤用が含まれていた。資料が長くなるほど成績は下がり、推論の量を増やしても、伸びは2.5ポイントほどにとどまった。

資料の規則を無視して常識で答えるのだから、この問題は、資料の規則がAIの常識と食い違うときにいちばん目立つ。質的研究では、コードブックの定義、理論に固有の用語、協力者がその土地で使っている言葉の意味など、一般的な意味とは違う「その研究だけの規則」をAIに渡すことが多い。AIがその定義を正しく引用できても、その定義に従って分析しているとは限らない。定義を渡したうえで、AIの出力がその定義どおりになっているか、一般的な意味に引き戻されていないかを、人間が確かめる必要がある。

<!--EN-->

Today's AI has become good at finding specific information in long documents. In tests that hide one sentence inside a long input ("needle in a haystack" tests), frontier models score almost perfectly. But finding information in a document is not the same as understanding the rules written there and applying them correctly.

Dou et al. (2026) called the ability to learn new knowledge from a given document and use it to solve a task "context learning," and set out to measure it. They built 500 expert-written documents with 1,899 tasks. The documents contain knowledge the models could not have seen in pre-training: fictional laws, rewritten mathematical definitions, new game rules, operating procedures, and messy experimental data. Without the documents, the tasks are almost unsolvable (0.9% for GPT-5.1). Even with them, the ten models solved 17.2% of tasks on average, and the best, GPT-5.1 (High), solved only 23.7%.

Most failures fell into two types. In one, the model ignores the knowledge in the document and answers from the common sense it learned in pre-training. In the other, it uses the document's knowledge but gets wrong where it applies or misses the exceptions. For GPT-5.1 (High), 55.3% of failed answers involved ignoring the context and 61.5% involved misusing it. Performance fell as documents got longer, and increasing the amount of reasoning raised scores by only about 2.5 points.

Because the model falls back on common sense instead of the document's rules, the problem is most visible when those rules conflict with what the AI already "knows." In qualitative research, we often give AI rules that belong only to our study and differ from everyday meanings: codebook definitions, terms specific to a theory, or what participants mean by words used in their own community. Even if the AI quotes a definition correctly, that does not mean it is analyzing according to it. After giving the definitions, a human needs to check whether the AI's output actually follows them, or has drifted back to the everyday meaning.
