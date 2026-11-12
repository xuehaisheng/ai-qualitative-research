---
title: "自己教師あり学習と事前学習"
key: self-supervised
en: "Self-supervised learning / Pre-training"
category: basics
order: 6
summary: "文章の次の語を隠して当てる、という課題で、大量の文章から学ぶこと。正解は文章の中にあるので、人がラベルをつけなくてよい。"
summary_en: "Learning from vast amounts of text through the task of hiding the next word and guessing it. The answer is already in the text, so no human labels are needed."
related: [transformer, gpt, llm]
articles: [ai-history]
---

以前の多くのAIは、人が正解をつけたデータで学んでいた。これを教師あり学習という。「この映画、最高だった」という文に、人が「肯定」というラベルを一件ずつつける。翻訳なら、人が対訳を用意する。人手がかかるので、データの量には限りがあった。

「文章の次の語を隠して当てる」という課題なら、正解は文章の中にもともと書いてある。「今日、本を一冊［　］。」の答えは「買った」で、人がラベルをつける必要はない。だから、ネット上の膨大な文章を、そのまま教材にできる。AIが自分で自分の先生になる、と言ってもよい。これを自己教師あり学習という。

この方法で、まず大量の文章から学ぶことを**事前学習**という。そのあと目的に合わせて調整する。2018年のGPTやBERTが、[Transformer]({{ '/literacy/transformer/' | relative_url }})とこの学習を組み合わせ、このやり方を広めた。[GPT]({{ '/literacy/gpt/' | relative_url }})のP（Pre-trained）は、事前学習のPである。

正確を期すと、この考え方自体はword2vec（2013年）などにもあった。また、2017年のTransformerの原論文は翻訳の研究で、人が作った対訳データを使っていた。

<!--EN-->

Many earlier AIs learned from data in which humans had marked the right answers. This is called supervised learning. For a sentence like “This movie was the best”, a person attaches the label “positive”, one item at a time. For translation, people prepare parallel texts. Because it takes human labor, the amount of data was limited.

With the task “hide the next word in a text and guess it”, the answer is already written in the text. The answer to “Today I [ ] a book.” is “bought”, and no one needs to label it. So the vast amount of text on the web can be used as teaching material as it is. You could say the AI becomes its own teacher. This is called self-supervised learning.

Learning first from vast amounts of text in this way is called **pre-training**. The model is then adjusted for its purpose. In 2018, GPT and BERT combined the [Transformer]({{ '/literacy/transformer/' | relative_url }}) with this kind of learning and spread the approach. The P in [GPT]({{ '/literacy/gpt/' | relative_url }}) (Pre-trained) is the P of pre-training.

To be precise, the idea itself was already present in word2vec (2013) and elsewhere. And the original 2017 Transformer paper was a study of translation that used human-made parallel data.
