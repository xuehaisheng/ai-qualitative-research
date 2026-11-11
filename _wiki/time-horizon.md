---
title: "タイム・ホライズン"
key: time-horizon
en: "Time horizon"
category: inside
order: 5
summary: "人間の専門家なら何時間かかる作業を、AIが50%の確率でやりとげられるか、という物差し。"
related: [agent, rsi, evaluation-awareness]
articles: [understanding]
sources:
  - text: "METR. (2025). Measuring AI ability to complete long tasks."
    url: "https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/"
  - text: "METR. (2026, January 29). Time Horizon 1.1."
    url: "https://metr.org/blog/2026-1-29-time-horizon-1-1"
  - text: "METR. (2026). Task-completion time horizons of frontier AI models."
    url: "https://metr.org/time-horizons/"
---

タイム・ホライズンは、AIの能力を評価する非営利団体METRが測っている物差しである。人間の専門家なら何時間かかる作業を、AIが50%の確率でやりとげられるかを表す。AIの進歩を示す図として、いまいちばんよく引用されている。下の図は、METRのサイトにある図を埋め込んだもので、目盛や成功率を切り替えられる。

<div class="embed-frame">
  <iframe src="https://metr.org/horizon-chart-embed" title="METR：最先端のAIモデルのタイム・ホライズン（インタラクティブ図）" loading="lazy"></iframe>
</div>
<p class="embed-credit">図：METR「Task-Completion Time Horizons of Frontier AI Models」の埋め込み版。Time Horizon 1.1／1.0、対数目盛（Log Scale）／等間隔の目盛（Linear Scale）、成功率50%／80%を切り替えられる。<a href="https://metr.org/time-horizons/" target="_blank" rel="noopener">METRの元のページ</a></p>

## 縦軸は何を測っているか

縦軸は、AIが作業にかけた時間ではない。人間の専門家がその作業をやると何時間かかるか、で測っている。ある課題の長さで、50%の確率でやりとげられると予測できる長さが、そのモデルのタイム・ホライズンである。成功率を80%に切り替えると、値はずっと短くなる。

最初に表示される図は対数目盛で、4秒、36秒、6分、1時間……と、何倍かずつ増えていく。等間隔の目盛（Linear Scale）に切り替えると、同じデータが、長いあいだ底にはりついていて、最後に急に立ち上がる曲線に見える。人間は、倍々で増えるものを直感的に捉えるのが苦手である。だからこそ、等間隔の目盛で見ると怖い。

## 「約7か月で2倍」から「約4か月で2倍」へ

2025年の最初の報告では、タイム・ホライズンは約7か月ごとに2倍になってきた、と言われていた。データが更新されたTime Horizon 1.1の公開データで見ると、次のように読める（倍増の期間はMETRの値、線の延長は私の再計算による）。

- 2019年からの全データでは、約188日（約6か月）ごとに2倍。2025年までのモデルは、この線の上下2倍ほどにおさまっていた。
- この線を延ばすと、2026年4月には約4.7時間になるはずだった。
- ところが、2026年2月のClaude Opus 4.6は約12時間、4月のClaude Mythos Previewは約17時間（95%信頼区間 8.5〜55時間）だった。
- 2023年以降のデータだけで線を引き直すと、約129日（約4か月）ごとに2倍になる。2026年のモデルも、この線の2倍以内に入る。

外れたのは「6か月で2倍」という古い見積もりのほうで、伸びは2023年ごろから速まっていた、と読める。

## 読むときの注意

METRのページには、16時間を超える測定は、今の課題セットでは信頼できないと書かれている。また、課題は主にソフトウェアの作業なので、そのまま質的分析の作業にあてはめることはできない。「50%の確率でできる」という意味であることも忘れないでおきたい。なお、METRのこのページは、現在は積極的には更新していないとしている（2026年11月に確認）。
