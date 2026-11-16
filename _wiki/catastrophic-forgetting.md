---
title: "破滅的忘却"
key: catastrophic-forgetting
en: "Catastrophic forgetting"
category: quirks
order: 8
summary: "特定の分野のデータで追加学習させると、その分野には強くなるが、もともとできていた常識や推論を忘れてしまうことがある。"
summary_en: "When a model is further trained on data from one field, it may get better in that field but forget common sense and reasoning it could handle before."
related: [llm, open-weight, self-supervised, context-learning, hallucination]
articles: []
sources:
  - text: "McCloskey, M., & Cohen, N. J. (1989). Catastrophic interference in connectionist networks: The sequential learning problem. Psychology of Learning and Motivation, 24, 109–165."
    url: "https://doi.org/10.1016/S0079-7421(08)60536-8"
  - text: "Kirkpatrick, J., Pascanu, R., Rabinowitz, N., et al. (2017). Overcoming catastrophic forgetting in neural networks. Proceedings of the National Academy of Sciences, 114(13), 3521–3526."
    url: "https://doi.org/10.1073/pnas.1611835114"
  - text: "Luo, Y., Yang, Z., Meng, F., Li, Y., Zhou, J., & Zhang, Y. (2025). An empirical study of catastrophic forgetting in large language models during continual fine-tuning. arXiv:2308.08747v5."
    url: "https://arxiv.org/abs/2308.08747"
---

大規模言語モデルは、何でもいくらでも覚えていけるわけではない。すでに学習を終えたモデルに、特定の分野のデータを追加で学習させることを、ファインチューニング（追加学習）という。医療や法律、カウンセリングなど、ある分野に特化したAIを作るときによく使われる。ところが、追加学習をすると、その分野では成績が上がる一方で、もともとできていた常識的な判断や論理的な推論が、急にできなくなることがある。これを破滅的忘却（catastrophic forgetting）と呼ぶ。

たとえるなら、モデルはスポンジのようなものである。スポンジが吸える水の量には限りがある。いっぱいになったスポンジにさらに水を注ぐと、どこかから水があふれ出る。あふれ出たのが、たとえば四則演算のような基本の力かもしれない。どの力があふれるかは、前もってはわからない。

仕組みとしては、モデルの知識や能力が、数十億個の数値（パラメータ）に重ね合わせて記録されていることによる。新しい分野に合わせてこの数値を書き換えると、同じ数値に支えられていた別の力まで変わってしまう。この現象は、1989年にはすでにニューラルネットワークで報告されていた（McCloskey & Cohen, 1989）。古いものの大事な部分を守りながら新しいことを学ばせる方法も研究されているが（Kirkpatrick et al., 2017）、完全な解決には至っていない。大規模言語モデルでも、10億から70億パラメータのモデルに次々と追加学習させると、分野の知識、推論、読解の力が落ちることが確かめられている（Luo et al., 2025）。

質的研究にとっての意味は二つある。一つは、「◯◯に特化したAI」をそのまま信用しないことである。専門分野の質問にうまく答えても、基本的な推論で間違えることがある。もう一つは、自分のデータでモデルを追加学習させようと考えるときである。そのデータには強くなっても、ほかの力が落ちていないかを、あわせて確かめる必要がある。多くの場合、追加学習するより、必要な資料をそのつど渡す方が安全である（ただし、渡した資料の規則がきちんと使われるとは限らない。[テキストの中で学ぶ]({{ '/literacy/context-learning/' | relative_url }})を参照）。

<!--EN-->

Large language models cannot keep learning anything and everything without limit. Further training an already trained model on data from a particular field is called fine-tuning. It is often used to build AI specialized for fields such as medicine, law, or counseling. But fine-tuning can raise performance in that field while suddenly making the model unable to do common-sense judgments or logical reasoning it could handle before. This is called catastrophic forgetting.

Think of the model as a sponge. A sponge can only hold so much water. If you keep pouring water into a full sponge, water spills out somewhere. What spills out might be a basic skill such as simple arithmetic, and you cannot tell in advance which skill it will be.

The mechanism is that a model's knowledge and abilities are stored overlapping in billions of numbers (parameters). When those numbers are rewritten for a new field, other abilities that relied on the same numbers change too. The phenomenon was reported in neural networks as early as 1989 (McCloskey & Cohen, 1989). Methods have been studied to protect the important parts of what was learned while learning something new (Kirkpatrick et al., 2017), but the problem is not fully solved. In large language models, too, continual fine-tuning of models with 1 to 7 billion parameters has been shown to reduce domain knowledge, reasoning, and reading comprehension (Luo et al., 2025).

For qualitative research this means two things. First, do not simply trust an AI "specialized for X." It may answer questions in its field well and still make mistakes in basic reasoning. Second, if you are thinking of fine-tuning a model on your own data, check not only that it got better on that data but also that other abilities have not dropped. In many cases it is safer to give the model the materials it needs each time than to fine-tune it (though the rules in those materials will not necessarily be applied correctly; see [Context learning]({{ '/literacy/context-learning/' | relative_url }})).
