---
title: "Transformerはどこから来たのか：2017年の論文と、その前後"
date: 2026-11-11 09:00:00 +0900
author: 薛海升
series: ai-literacy-2026
order: 1
summary_ja: "ChatGPTもClaudeもGeminiも、2017年の一本の論文から始まった。RNNとAttentionの違い、自己教師あり学習、GPTの「T」までを一続きの話としてたどる。"
---

ChatGPT、Claude、Geminiは、どれも同じ仕組みの上に作られている。その仕組みがTransformerで、出発点は2017年に発表された一本の論文である。この記事では、その論文が何を変えたのかを、数式を使わずにたどる。

## 一本の論文：「Attention Is All You Need」

論文を書いたのは、Googleのヴァスワニら8名である。2017年6月にarXivで公開され、同じ年の12月に国際会議NIPS 2017で発表された。2026年までに被引用数は25万回を超え、21世紀で最も引用された論文の一つになっている。

題名の元ネタは、ビートルズの「All You Need Is Love」である。当時、Attention（注意機構）は、ほかの仕組みを補助する部品として使われていた。「Attentionだけで十分だ」という主張が、そのまま題名になっている。

## それ以前：一語ずつ順番に読むRNN

2010年代半ばまで、言葉を扱うAIの主流はRNN（再帰型ニューラルネットワーク）だった。RNNは、人が本を一行ずつ読むように、文を一語ずつ順番に処理する。

このやり方には弱点が二つあった。一つ目は遅いことである。前の語を読み終えないと次の語に進めないので、計算を同時に進められない。二つ目は忘れやすいことである。「今日、本を一冊買った。午前は図書館へ、午後はカフェへ行き、夜になってようやくそれを読み始めた。」のように文が長くなると、「それ」が「本」を指すことを見失いやすい。

<figure>
  <a href="{{ '/assets/img/notes/rnn-vs-attention.svg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/notes/rnn-vs-attention.svg' | relative_url }}" alt="上はRNNが一語ずつ順番に読む様子、下はAttentionが「それ」を処理するときに全部の語を見て、「本」に最も大きな重みをつける様子"></a>
  <figcaption>図1　RNNとAttentionの違い。下の数字は説明のための例で、線が太いほど重みが大きい。</figcaption>
</figure>

## Attention：全部を一度に見て、大事な語に注目する

Attentionは、ある語を処理するときに、文中のすべての語を一度に見る。そのうえで、どの語が大事かに重みをつける。図1の例では、「それ」を処理するときに「本」にいちばん大きな重みがつく。

順番に読む必要がないので、たくさんの計算を同時に進められる。これはGPU（画像処理用に作られた、並列計算が得意な計算装置）と相性がよい。論文の基本モデルは、GPU8枚で12時間学習しただけで、当時最高の翻訳モデルを上回った。

## いちばん大きな意味：自己教師あり学習

Transformerの意味は、速さだけではない。もっと大きいのは、学習に使えるデータの量が桁違いに増えたことである。

以前の多くのAIは、人が正解をつけたデータで学んでいた。これを教師あり学習という。たとえば「この映画、最高だった」という文に、人が「肯定」というラベルを一件ずつつける。人手がかかるので、集められるデータには限りがあった。

一方、「文章の次の語を隠して当てる」という課題なら、正解は文章の中にもともと書いてある。「今日、本を一冊［　］。」の答えは「買った」で、人がラベルをつける必要はない。そのため、ネット上の膨大な文章をそのまま教材にできる。これを自己教師あり学習という。

<figure>
  <a href="{{ '/assets/img/notes/self-supervised.svg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/notes/self-supervised.svg' | relative_url }}" alt="左は人がラベルをつける教師あり学習、右は文章の次の語を当てる自己教師あり学習"></a>
  <figcaption>図2　教師あり学習と自己教師あり学習。</figcaption>
</figure>

ここで三つ補足しておく。まず、この考え方自体は、word2vec（2013年）などにすでにあった。次に、2017年の原論文は翻訳の研究で、人が作った対訳データを使っていた。そして、2018年のGPTやBERTが、Transformerと自己教師あり学習を組み合わせ、「まず大量の文章で事前学習し、あとで目的に合わせて調整する」というやり方を広めた。Transformerは並列計算が得意なので、この事前学習を桁違いの規模で行えるようになった。

## GPTの「T」

GPTは Generative Pre-trained Transformer の略である。Pは事前学習（Pre-trained）のP、Tはこの論文のTransformerのTを指す。

Googleは論文を出したが、すぐには製品に活かさなかった。その間に、OpenAIがTransformerで文章を生成するモデルを作り、GPTシリーズが生まれた。論文の著者8人は、その後全員がGoogleを去り、多くは自分の会社を立ち上げた。

## 論文をめぐる小さな話

- 著者8人は全員が「同等の貢献」とされ、論文の脚注には、並び順はランダムだと書かれている。
- Transformerという名前は、著者の一人ウスコライトがつけた。情報を「変換する」仕組みだからである。初期の設計メモの最後には、変形ロボットのキャラクターの絵があったという。
- NIPS 2017での発表は、講演ではなくポスターだった。4時間のセッションのあいだ人だかりが絶えず、著者たちは声がかれるまで説明を続けた。夜10時半の閉場時刻になっても人が残り、最後は警備員に退場を促されたという（Levy, 2024）。

もっとも、最初から誰もが重要性に気づいたわけではない。自然言語処理の研究者の中には、発表を聞いて「ただの小手先の技だ」と受け止めた人も多かった。この分野がその後どうなったかは、[NLP・プログラミング・数学は、AIにどう反応したか]({{ '/articles/other-fields/' | relative_url }})で扱う。

## 参考文献

- Levy, S. (2024, March). 8 Google employees invented modern AI. Here's the inside story. *WIRED*.
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. *Advances in Neural Information Processing Systems 30* (NIPS 2017).
