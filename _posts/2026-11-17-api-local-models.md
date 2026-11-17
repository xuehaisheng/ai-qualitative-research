---
title: "データを渡したくないとき：質的研究者のためのAIプライバシー応用編"
date: 2026-11-17 00:00:00 +0900
title_en: "When you don't want to hand over your data: advanced AI privacy for qualitative researchers"
summary_en: "A follow-up to the introduction to AI privacy. How APIs and Zero Data Retention (ZDR) differ from opting out, how to get ZDR at each company, and what you need to run a model on your own PC: what a GPU is, why its memory matters, and what capacity, bandwidth and FLOPS each decide, with current prices."
author: 薛海升
key: api-local-models
order: 10
wiki: [open-weight, token, llm]
summary_ja: "AIプライバシー入門の続き。個人向けサービスでのオプトアウト、API、ゼロデータ保持（ZDR）は何が違い、ZDRはどうすれば使えるのか。データを外に出さないローカルモデルには何が必要か。GPUとは何か、なぜGPUのメモリが要るのか、容量・帯域幅・計算力がそれぞれ何を決めるのかを、たとえと図で説明し、いまの価格も載せる。"
topic: "研究の実践"
related_notes: ["ai-privacy", "meta-synthesis-with-ai"]
sort_date: 20261117
underline_links: true
---

[前のノート]({{ '/articles/ai-privacy/' | relative_url }})では、ChatGPTやClaudeといった個人向けサービスにおいて、訓練への利用をオフにしても、会話の保存や監視は続くことを確認した。逐語録など、企業に利用されたくないデータを扱う場合には、この設定だけでは十分でないこともあるだろう。そこで、ほかにどのような方法が考えられるかを見ていきたい。

このノートでは、まず、企業のAIを利用しながらも、データが保存される範囲や期間を減らす方法として、APIとゼロデータ保持（ZDR）を取り上げる。次に、データを外部に送らず、AIを自分のPCで動かすローカルモデルについて述べる。後半では、ローカルモデルの利用に関わるGPUという部品に注目し、技術的な知識を前提とせずに、その仕組みを説明していこうと思う。

## APIを使う

APIとは、企業のAIをチャット画面以外の方法で利用するための窓口である。具体的には、自分で作成したプログラムやAPIに対応するアプリから文章を送り、その回答を受け取る。利用するモデル自体は、チャット画面から使う場合と同じである。ただし、料金は月額制ではなく、送受信した量に応じて支払う仕組みになっている。そのため、ChatGPTの月額利用とOpenAIのAPI利用は、それぞれ別の契約として扱われる。

個人向けサービスと比べた場合、APIの大きな特徴は、初期設定ではデータが訓練に利用されないという点にある。個人向けサービスでは、訓練への利用があらかじめ設定されており、利用を望まない人が自分でオフにする必要がある。それに対して、APIでは、訓練への提供を望む利用者が、改めて許可する仕組みとなっている。

しかしながら、APIを利用した場合にも、データは企業のサーバーに送られ、一定の期間保存される。例えば、不正利用の監視のために、OpenAIはログを最長30日、Anthropicは入力と出力を30日、Gemini APIは55日保持することになっている。保存された内容は監視の対象となり、違反が疑われた場合には人が読むこともある。また、Gemini APIの無料枠では、入力した内容が改善に利用されるほか、人に読まれる可能性もある。

## ゼロデータ保持（ZDR）

こうしたAPIにおける30日から55日の保存をなくすための取り決めが、ゼロデータ保持（Zero Data Retention、ZDR）である。APIを利用するだけでZDRが適用されるわけではなく、企業に申し込み、別途取り決めを結ぶ必要がある。その際の条件には、企業ごとに大きな違いが見られる。

**OpenAI**　ZDRの対象となるのは、営業窓口に申し込み、審査で承認された組織に限られる。承認後には、管理画面の「Settings → Organization → Data controls」に「Data Retention」のタブが表示され、組織やプロジェクトごとにZDRを設定できるようになる。この設定によって、入力や出力の内容は監視用のログに保存されなくなり、利用量などのメタデータのみが残る。ただし、ファイルの保管（Files）、ベクトルストア、Assistantsなど、データの保存を目的とする機能は対象外であり、削除するまでは保持される。また、児童への性的虐待が疑われる画像やファイルについては、ZDRを利用していても、人による確認のために保持されるという例外がある。

**Anthropic**　ZDRを利用するには、Anthropicと個別に合意する必要がある。その対象には、APIに加えて、Enterprise版のClaude Codeや、AmazonのBedrockなどのクラウド経由での利用も含まれる。ZDRでは、入力や出力の内容を保存しないことが原則となる。ただし、2026年6月9日からは、Claude Mythosのような最上位のモデル（Covered Models）について、ZDRの組織でも入力と出力を30日保持するようになった。この30日分のデータにアクセスできるのは承認された少人数に限られ、閲覧の記録もすべて残される。

**Google**　Gemini APIでは、有料で利用した場合にも、不正利用の監視用ログを残さないようには設定できない。そのため、GoogleはZDRが必要な利用者に対し、Google CloudのVertex AIを案内している。Vertex AIでは、キャッシュを無効にしたり、会話を保存する設定（store）を使わなかったりすることで、ZDRに近い状態にすることができる。ただし、Google検索によって回答を補う機能（グラウンディング）では最長3日、地図の機能では30日保存されるという例外があり、これらの保存を止めることはできない。

**xAI**　公開文書を確認した範囲では、ZDRという名称の制度は見当たらない。APIで送受信した入力と出力は、30日以内に自動削除されることになっている。この保持期間の変更を希望する場合には、エンタープライズ窓口を通じて、書面による個別の合意を結ぶ必要がある。

以上のように、OpenAIとAnthropicのZDRでは、組織として申し込み、審査や合意を経ることが前提とされている。個人の研究者だけで手続きを進めるのは難しく、大学や研究室の単位で検討することになるだろう。また、ZDRのAPIを利用しているというだけで、そのアプリ全体でデータが外部に保存されないと考えることもできない。研究用のアプリが、検索に必要な変換や文字の読み取りなど、一部の処理を別のクラウドに送っている場合があるためである。

## データを外に出さない：ローカルモデル

ZDRを利用しても、データが一度は企業のサーバーを通るという点は変わらない。そのため、一時的にもデータを外部に出したくない場合には、AIのモデル自体を自分のPCで動かすことになる。この方法が、ローカルモデルである。

ローカルモデルでは、重みが公開されているモデル（[オープンウェイト]({{ '/literacy/open-weight/' | relative_url }})）をダウンロードし、自分のPC内で文章を処理する。現在、個人のPCで比較的試しやすいものとして、Qwen3.5の9B級やQwen3.8-27Bなどが挙げられる。ここでBとは十億（billion）を意味し、9Bであれば、90億個のパラメータを持つモデルであることを示している。パラメータについては、後半でGPUの仕組みと合わせて説明する。

LM Studioなどのアプリを用いると、モデルをダウンロードした後は、ネットに接続せずに会話や文書の処理を行うことができる。ネットを切った状態で目的の作業を行えていれば、そのデータは外部に送られていないと考えられる。

下の図では、ここまで述べた四つの方法を、企業ごとに比較できるようにした。図の下にあるタブから、個人向けサービスで訓練への利用をオフにした場合、API、ZDRを適用したAPI、ローカルモデルを、それぞれ選択できる。利用方法の違いによって、保存、訓練、監視のうち、何が止まり、何が残るかを確認してほしい。ただし、xAIではZDRの制度がないため、同社のタブを選んだ場合にはZDRを選択できない。また、ローカルモデルはこれらの企業を経由しないため、企業のタブは選択できなくなっている。

{% include privacy-compare.html lang="ja" %}

図に示したように、データの扱いに注目するなら、ローカルモデルが最も確実な方法となる。ただし、その利用には、高い性能を持つPCが必要になるという難点もある。実際にモデルを動かせるかどうかは、PC内にあるGPUという部品に大きく左右されるためである。そこで以下では、GPUの役割と、その性能を判断する際の数字について説明していきたい。

## GPUとは何か

PC内で計算を担う主な部品として、CPUとGPUの二つが挙げられる。

CPUは、PC全体の頭脳にあたる部品である。少数の高性能な計算ユニット（コア）を持ち、表計算、メール、ブラウザなど、様々な種類の処理を切り替えながら進めている。料理にたとえるなら、幅広い料理を作れる、腕のよいシェフが数人いる厨房に近いだろう。

一方、GPUは、もともと画面に画像を表示するために作られた部品である。画面を構成する何百万もの点について、それぞれの色を毎秒何十回も計算し直す必要がある。一つ一つの計算は単純であるものの、その数が非常に多いという特徴がある。そのため、GPUでは単純な計算ユニットを何千個も並べ、同じ種類の計算を同時に進める仕組みが用いられている。先ほどの厨房の例で言えば、決まった作業を担当する見習いが何千人もいる状態に相当する。

この違いを示す事例として、GPUメーカーのNVIDIAが2008年に行ったデモを取り上げたい。同社はテレビ番組『怪しい伝説（MythBusters）』の二人に、絵を描く二台のロボットの製作を依頼した。下のCPU役のロボットは、ペイント弾を一発ずつ撃ちながら、徐々に笑顔を描いている。

{% include figure.html src="fig-mythbusters-cpu.gif" cap="CPU役のロボット。一発ずつ順番に撃って、笑顔を描く。出典：NVIDIA NVISION 08でのMythBustersのデモ（2008年）。" alt="白い板の前のロボットが、ペイント弾を一発ずつ撃って青い点を描いていく。" %}

それに対して、GPU役の「Leonardo 2.0」は、大量の砲身から一斉にペイント弾を撃ち、80ミリ秒でモナ・リザを描き上げている。

{% include figure.html src="fig-mythbusters-gpu.gif" cap="GPU役のロボット「Leonardo 2.0」。大量の砲身を一斉に撃ち、80ミリ秒でモナ・リザを描く（スローモーション）。出典：同上。" alt="大量の管が並んだ装置から一斉にペイントが飛び出し、板の上にモナ・リザが現れる様子のスローモーション。" %}

AIモデルの計算も、このモナ・リザを描く際の処理と似た特徴を持つ。具体的に、AIは文章を[トークン]({{ '/literacy/token/' | relative_url }})という単位に分け、それぞれを数字の列に変換する。そして、その数字の列とモデルの「重み」との掛け算や足し算を繰り返すことで、次のトークンを決めている。この重みとは、学習を通して決まった大量の数字であり、先ほど述べたパラメータにあたる。例えば、27Bのモデルは、270億個の数字を持つということになる。個々の処理は掛け算と足し算であるが、その数が膨大であり、同時に進められるという特徴がある。この点で、AIの計算には、CPUよりもGPUの方が適しており、処理もはるかに速くなる。

## 台所で考える：容量、帯域幅、計算力

それでは、GPUの性能を判断する際には、どこに注目すればよいだろうか。ローカルモデルの利用に関わる主な数字は、三つある。それぞれが異なることに関係しているため、ここでは少し特殊なレストランの台所を例に、一つずつ説明する。

{% include gpu-visual.html part="kitchen" lang="ja" %}

このレストランでは、料理を一皿出すたびに、冷蔵庫にある材料をすべて調理台へ運ぶという決まりがある。ここで、材料はモデルの重み、一皿の料理はAIが書き出す一つのトークンにあたる。実際の台所では奇妙に思える決まりだが、AIによる文章生成はこれに近い。トークンを一つ出すたびに、重み全体を一度読み直す必要があるためである。

**冷蔵庫の大きさ＝メモリの容量（GB）**　GPUにはVRAMと呼ばれる専用のメモリがあり、台所の例では、調理台のすぐ隣に置かれた冷蔵庫にあたる。材料がすべて収まらなければ、不足する分を遠くのスーパー、すなわちPC本体のメモリから運ぶ必要があり、料理を出すまでに時間がかかる。したがって、メモリの容量は、どの程度の大きさのモデルを動かせるかに関わっている。

**通路の幅＝メモリの帯域幅（GB/s）**　帯域幅とは、冷蔵庫から調理台へ、1秒間に運べる材料の量に相当する。料理を一皿出すたびに材料全体を運ぶ必要があるため、文章を書き出す際の速さは、料理人の腕よりも、この通路の幅に左右される。

**料理人の数と手の速さ＝計算力（FLOPS）**　FLOPSとは、小数を含む掛け算や足し算を1秒間に何回行えるかを示す数字であり、TFLOPSはその1兆倍にあたる。この計算力が特に関係するのは、料理に取りかかる前に注文を読む段階である。例えば、長い逐語録を渡した場合、AIは文章を書き出す前に、入力された全文をまとめて計算する。この段階では、通路の幅よりも料理人の処理する速さが問題となるため、FLOPSが大きいほど、最初の一文字が出るまでの待ち時間は短くなる。また、自分のデータを用いてモデルを追加学習させるファインチューニングにおいても、この計算力が重要となる。

以上を整理すると、容量は動かせるモデルの大きさに、帯域幅は文章を書き出す速さに、計算力は入力を読み込む速さや学習に関わっている。以下では、実際の機械の数字に照らしながら、それぞれの違いを具体的に見ていきたい。

## 容量：モデルは冷蔵庫に入るか

まず、メモリの容量について述べる。モデルが冷蔵庫に収まるかどうかは、そのパラメータの数から計算できる。例えば、重み一つを16ビット（2バイト）で保存すると、27Bのモデルには約54GBが必要となり、家庭用のGPUの容量には収まらない。そこで、重みの数字の細かさを落とし、4ビット前後で保存する方法が用いられる。これは材料を真空パックにして小さくするような方法であり、量子化と呼ばれている。具体的に、Ollamaで配布されているQwen3.8の27B版では、量子化されたモデルの大きさは約18GBとなる。

{% include gpu-visual.html part="sizes" lang="ja" %}

ただし、18GBのモデルであれば、18GBのメモリがあれば足りると考えることはできない。AIは、読み込んだ文章を覚えておくための作業台にあたるKVキャッシュも利用しており、その大きさは入力が長くなるにつれて増えていく。そのため、長い逐語録を一度に読み込ませる場合には、モデル自体に加えて、さらにメモリが必要となる。

小さなモデルであれば、少ない容量でも動かすことはできる。しかしながら、分析に用いるだけの力を持つモデルは、その大きさも増す。実用になるモデルと長い資料を同時に扱う場合には、大きな容量がほぼ欠かせないと考えられる。ただし、容量を増やすことと処理が速くなることは、区別しておく必要がある。

この点に関して、Macでは台所の構成が異なる。Apple Siliconを搭載したMacでは、CPUとGPUが同じメモリ、いわゆるユニファイドメモリを共有している。家全体で一つの冷蔵庫を使うような仕組みであり、48GBのMacであれば、そのかなりの部分をモデルに割り当てられる。家庭用のGPUで48GBのVRAMを持つものはないため、大きなモデルを動かすという点では、Macの方が有利になる。

## 帯域幅：書き出す速さ

次に、通路の幅にあたる帯域幅について見ていく。帯域幅をモデルの大きさで割ると、1秒間に書き出せるトークン数のおおよその上限を求められる。例えば、約18GBのモデルでは、帯域幅が307GB/sのMac mini（M5 Pro）で1秒に約17トークン、1,792GB/sのRTX 5090で約100トークンとなる。ただし、これらは上限の目安であり、実際の速さはその数字を下回る。

{% include gpu-visual.html part="speed" lang="ja" %}

ここで示したのは、文章を書き始めた後の速さである。ただし、長い逐語録を渡す場合には、最初の一文字が出るまでの時間にも注目する必要がある。この待ち時間に関わるのが、三つ目の計算力である。

## 計算力：最初の一文字が出るまで

計算力の違いは、最初の一文字が出るまでの待ち時間に、特にはっきりと表れる。例えば、FP32の演算性能は、RTX 5060 Ti 16GBが約24TFLOPS、RTX 5090が約105TFLOPSであり、両者には4倍以上の差がある。

それでは、計算力の大きいRTX 5090と、大容量のメモリを持つMac Studioを比較すると、どのような違いが見られるだろうか。MacStoriesのフェデリコ・ヴィティッチは、同じQwen3.8 27B（4ビット）を、RTX 5090を搭載したPCと、メモリ256GBのMac Studio（M5 Ultra）で動かし、その速さを測定している。ただし、実行に用いたソフトと量子化の形式が異なるため、チップ単体の性能差を測るものではなく、機械全体としての比較である。

{% include gpu-visual.html part="ttft" lang="ja" %}

約6,000トークンの入力では、最初の一文字が出るまでに、RTX 5090で2.0秒、Mac Studioで4.0秒を要しており、計算力の差が待ち時間に表れている。また、書き出す速さにおいても、帯域幅の広いRTX 5090が1秒に59トークン、Mac Studioが48トークンとなり、前者の方が速かった。入力を約63,000トークンに増やすと、待ち時間はそれぞれ26.4秒と42.8秒に延びるものの、順位は変わらない。モデルが32GBに収まる範囲では、読み込みと書き出しのいずれにおいても、RTX 5090の方が少し速いことが分かる。

しかしながら、この比較には、先ほどの容量の問題も関わっている。冷蔵庫の容量が足りなくなると、両者の速さは逆転する。上のデモの三つ目のタブでは、その状態を再現した。先ほどのRTX 5090の測定では、作業台に置く数字を8ビットに縮め、全体を32GBに収める設定が用いられていた。それに対して、容量に収まらずPC本体のメモリにあふれた設定では、入力が約6万、13万、26万トークンとなるにつれて、書き出す速さが1秒に4.6、2.9、1.5トークンまで低下した。同じ長さの入力に対して、Mac Studioでは、1秒に38.9、32.4、24.3トークンという速さが保たれている。

したがって、この比較では、少し速いものの冷蔵庫の小さいRTX 5090と、少し遅いものの冷蔵庫の大きいMac Studioとの違いに注目する必要がある。長い逐語録をまとめて読み込ませるという用途では、冷蔵庫の大きさが重要になると考えられる。

## どのくらいのPCが必要か

ここまでの説明を踏まえて、PCを選ぶ際の目安を下の表に示した。ここでは、4ビット前後の量子化版を用いて、短めの資料から試す場合を想定している。長い逐語録や画像を扱う場合には、さらに多くのメモリが必要となる。

| 用途の目安 | Mac | Windows |
| --- | --- | --- |
| まず試す（9B級） | ユニファイドメモリ24〜32GB | 本体のメモリ32GB、VRAM 12〜16GB |
| 余裕をもって使う（27B級） | 48GB。長い資料なら64GBも | 本体のメモリ64GB、VRAM 24〜32GB |

価格については、2026年11月時点における、日本の税込価格を以下に示す。

<div class="pv-products">
<figure><img src="{{ '/assets/img/figures/prod-mac-mini.jpg' | relative_url }}" alt="手のひらに載ったMac mini" loading="lazy"><figcaption><strong>Mac mini</strong>M6：149,800円から（最大32GB、170GB/s）<br>M5 Pro：299,800円から（最大64GB、307GB/s）<br>M5 Pro・48GB・512GBの構成は407,800円（ヨドバシカメラの掲載例）</figcaption></figure>
<figure><img src="{{ '/assets/img/figures/prod-mac-studio.jpg' | relative_url }}" alt="Mac Studioの正面" loading="lazy"><figcaption><strong>Mac Studio</strong>M5 Max：419,800円から<br>M5 Ultra：949,800円から（最大512GB、1.2TB/s）</figcaption></figure>
<figure><img src="{{ '/assets/img/figures/prod-rtx-5090.jpg' | relative_url }}" alt="GeForce RTX 5090のグラフィックボード" loading="lazy"><figcaption><strong>GeForce RTX 5090</strong>VRAM 32GB、1,792GB/s<br>GPU単体で847,800円（ドスパラの掲載例、品切れ）<br>RTX 5060 Ti 16GBは単体で約10万円</figcaption></figure>
</div>
WindowsでPCを組む場合には、GPU単体の価格に加えて、本体やメモリの費用も考える必要がある。また、RTX 5060 Tiの16GBでは、27Bのモデル全体を収めることは難しい。研究室にすでにPCがある場合には、まず小さなモデルと公開資料を用いて試し、不足する点を確かめた上で、購入するかどうかを判断するのがよいだろう。

## 設定にプログラミングは要るか

会話や文書の参照から始める場合には、自分でコードを書く必要はない。例えば、LM Studioでは、モデルをダウンロードして読み込み、質問を送るところから利用できる。また、Ollamaも、対応するアプリや短いコマンドを通して使うことができる。設定で分からないことがあれば、クラウドのAIに相談する方法もあるだろう。その際には、PCの機種、メモリの量、GPUの名称、エラーメッセージといった情報があればよく、研究資料を送る必要はない。

ただし、ローカルモデルには、クラウドの最新モデルほどの力はないという限界もある。また、開発元が示すベンチマークの成績を、そのまま日本語のインタビューを解釈する力とみなすこともできない。実際の逐語録を扱う前に、公開資料や架空の資料を用いて、自分の分析に必要な作業ができるかどうかを確かめておく必要があるだろう。その過程を通して、どこまでをモデルに任せられるかも見えてくると思われる。

## 参考文献

- Anthropic. (2026). *[How long do you store my organization's data?](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)* Anthropic Privacy Center.
- Anthropic. (2026). *[Is my data used for model training?](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training)*（商用製品）. Anthropic Privacy Center.
- Anthropic. (2026). *[Data retention practices for Covered Models](https://privacy.claude.com/en/articles/15425996-data-retention-practices-for-covered-models)*. Anthropic Privacy Center.
- Apple. (2026, September 22). *[新しいMac miniとMac Studio、本日より販売開始](https://www.apple.com/jp/newsroom/2026/09/the-new-mac-mini-and-mac-studio-are-available-today/)*.
- Apple. (n.d.). *[Mac mini 仕様](https://www.apple.com/jp/mac-mini/specs/)*.
- Apple. (n.d.). *[Mac Studio 仕様](https://www.apple.com/jp/mac-studio/specs/)*.
- bit-tech. (2008). *[Mythbusters finish Nvision in style](https://bit-tech.net/news/mythbusters-finish-nvision-in-style/1)*.
- Dospara. (n.d.). *[Palit GeForce RTX 5090 GameRock 32GB](https://www.dospara.co.jp/SBR1892/IC518917.html)*.
- Google. (n.d.). *[Abuse monitoring](https://ai.google.dev/gemini-api/docs/usage-policies)*. Gemini API.
- Google. (n.d.). *[Zero data retention](https://ai.google.dev/gemini-api/docs/zdr)*. Gemini API.
- Google Cloud. (n.d.). *[Gemini Enterprise Agent Platform and zero data retention](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention)*.
- LM Studio. (n.d.). *[Offline operation](https://lmstudio.ai/docs/app/offline)*.
- Manufacturing.net. (2010, January 20). *[The 80 millisecond Mona Lisa](https://www.manufacturing.net/industry40/article/13215687/the-80-millisecond-mona-lisa)*.
- Ollama. (n.d.). *[qwen3.8](https://ollama.com/library/qwen3.8)*.
- OpenAI. (n.d.). *[Data controls in the OpenAI platform](https://developers.openai.com/api/docs/guides/your-data)*.
- Qwen. (2026). *[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)* [Model card]. Hugging Face.
- TechSpot. (n.d.). *[Nvidia GeForce RTX 5060 Ti 16GB](https://www.techspot.com/specs/gpu/307872-nvidia-geforce-rtx-5060-ti-16gb.html)* [Specifications].
- Tom's Hardware. (2025). *[Nvidia GeForce RTX 5090 review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5090-review)*.
- Tsukumo. (n.d.). *[GeForce RTX 5060シリーズ](https://shop.tsukumo.co.jp/features/rtx-5060series/)*.
- Viticci, F. (2026, September). *[M5 Ultra Mac Studio review: The dream Mac for local AI agents](https://www.macstories.net/stories/m5-ultra-mac-studio-review-the-dream-mac-for-local-ai-agents/)*. MacStories.
- xAI. (n.d.). *[Enterprise FAQs](https://x.ai/legal/faq-enterprise)*.
- Yodobashi Camera. (n.d.). *[Mac mini M5 Pro カスタマイズ構成](https://www.yodobashi.com/product/100000001010196007/)*.

<!--EN-->

The [previous note]({{ '/articles/ai-privacy/' | relative_url }}) showed that with consumer services such as ChatGPT and Claude, turning off the training switch still leaves storage and monitoring in place. For data that we don't want companies to use, such as interview transcripts, that may not be enough. What else can we do?

This note first looks at ways to keep using companies' models while reducing how much of your data stays with them: the API, and Zero Data Retention (ZDR). It then turns to a way of keeping data entirely to yourself: running a model on your own computer, known as a local model. The second half explains the part of the computer that local models depend on, the GPU, for readers with no technical background.

## Using the API

An API is a way to use a company's model without its chat window. Programs you write, or apps that support the API, send text to the model and get replies back. The model behind it is the same one you chat with. You pay for how much you send and receive rather than a monthly fee, and a ChatGPT subscription and OpenAI's API are separate contracts.

The biggest difference from consumer services is that API data is not used for training by default. In consumer services, training is the starting state and people who object switch it off. With the API it is the other way round: only those who want to share their data opt in.

Even so, data sent through the API reaches the company's servers and stays there for a while. OpenAI keeps abuse-monitoring logs for up to 30 days, Anthropic keeps inputs and outputs for 30 days, and the Gemini API keeps them for 55. During that time they are monitored, and people read them if a violation is suspected. The Gemini API also has a free tier, whose inputs are used for improvement and may be read by people.

## Zero Data Retention (ZDR)

Zero Data Retention is the arrangement that removes these 30 to 55 days of storage. Using the API does not give you ZDR automatically: you have to apply and make a separate arrangement, and the terms differ a great deal from company to company.

**OpenAI**　ZDR is available only to organisations that apply through sales and are approved. Once approved, a Data Retention tab appears under Settings → Organization → Data controls, where ZDR can be switched on for the whole organisation or for individual projects. Under ZDR, the content of inputs and outputs is kept out of the monitoring logs, and only metadata such as usage remains. Features whose purpose is to store data, such as Files, vector stores and Assistants, are not covered and keep data until you delete it. Images and files flagged as possible child sexual abuse material are also kept for human review, even under ZDR.

**Anthropic**　You sign a ZDR agreement with Anthropic. It covers the API, Claude Code in Enterprise, and use through cloud platforms such as Amazon Bedrock. Under ZDR no content is kept. From 9 June 2026, however, top-tier models such as Claude Mythos (Covered Models) keep inputs and outputs for 30 days even for ZDR organisations. Only a small approved group can read those 30 days of data, and every access is logged.

**Google**　The Gemini API cannot drop its abuse-monitoring logs, even on the paid tier, so Google points those who need ZDR to Vertex AI on Google Cloud. There, you get close to ZDR by configuring things yourself, for example by turning off caching and not using the setting that stores conversations (store). Even then, grounding answers with Google Search stores data for up to 3 days and the Maps feature for 30, and neither can be turned off.

**xAI**　The public documents describe no programme called ZDR. API inputs and outputs are deleted automatically within 30 days. To change that period, you make a separate written agreement through the enterprise team.

At OpenAI and Anthropic, ZDR assumes that an organisation applies and goes through approval or an agreement. An individual researcher will find it hard to arrange alone, so it is something to raise at the level of a university or a lab. One more thing to check is the app that uses the API. Research apps sometimes send one step, such as converting text for search or reading text from images, to a different cloud service.

## Keeping data in: local models

Even with ZDR, your data passes through a company's servers. If you don't want it to leave your hands even for a moment, the only option is to run the model itself on your own computer. This is a local model.

With a local model, you download a model whose weights have been published (an [open-weight]({{ '/literacy/open-weight/' | relative_url }}) model) and process text only on your own machine. Models that are easy to try on a personal computer today include the 9B-class Qwen3.5 and Qwen3.8-27B. B stands for billion: 9B means nine billion parameters. What a parameter is comes up in the GPU section below.

With an app such as LM Studio, once a model is downloaded you can chat and work with documents without an internet connection. If the task works with the network off, your data is not leaving the machine.

The diagram below puts the four approaches side by side for each company: turning training off in a consumer service, the API, the API with ZDR, and a local model. Switch between them with the tabs to see which of storage, training and monitoring stops and which remains. xAI has no ZDR programme, so ZDR cannot be selected for xAI, and a local model involves no company, so the company tabs are disabled when it is selected.

{% include privacy-compare.html lang="en" %}

As the diagram shows, a local model is the surest option as far as data is concerned. Its weakness is that it needs a capable computer, and whether one can run a model depends mostly on a single part: the GPU. The rest of this note explains what a GPU is and which numbers to look at.

## What is a GPU?

Two parts of a computer do most of the computing: the CPU and the GPU.

The CPU is the computer's brain. It has a small number of powerful computing units (cores) and handles many kinds of work, such as spreadsheets, email and the browser, switching quickly from one task to the next. Think of a kitchen with a few skilled chefs who can cook anything.

The GPU was originally built to draw images on the screen. A screen has millions of dots, and the colour of each is recalculated dozens of times a second. Each calculation is simple, but there are a great many of them. So a GPU lines up thousands of simple computing units and runs the same kind of calculation all at once. Think of a kitchen with thousands of apprentices, each doing one fixed task.

To show the difference, the GPU maker NVIDIA asked the two hosts of the TV show MythBusters to build a pair of painting robots in 2008. The CPU robot fires paintballs one at a time and slowly paints a smiley face.

{% include figure.html src="fig-mythbusters-cpu.gif" cap="The CPU robot fires one shot at a time to paint a smiley face. Source: MythBusters demo at NVIDIA NVISION 08 (2008)." alt="A robot in front of a white board fires paintballs one at a time, making blue dots." %}

The GPU robot, Leonardo 2.0, fires a huge array of barrels at once and paints the Mona Lisa in 80 milliseconds.

{% include figure.html src="fig-mythbusters-gpu.gif" cap="The GPU robot, Leonardo 2.0, fires a huge array of barrels at once and paints the Mona Lisa in 80 milliseconds (slow motion). Source: as above." alt="Slow motion of paint bursting from a machine with many tubes, with the Mona Lisa appearing on the board." %}

What an AI model computes is closer to the way the Mona Lisa was painted. It splits text into [tokens]({{ '/literacy/token/' | relative_url }}) and turns each into a list of numbers. It then multiplies those numbers by the model's “weights” and adds them up, over and over, to decide the next token. Weights are the large set of numbers fixed by training; these are the parameters mentioned earlier. A 27B model has 27 billion of them. Each step is just multiplication and addition, but there are enormous numbers of them and they can all run at once, which is why AI runs much faster on a GPU than on a CPU.

## A kitchen: capacity, bandwidth and compute

Which numbers on a GPU's spec sheet matter? For local models there are mainly three, and each decides something different. A rather odd restaurant kitchen helps to explain them.

{% include gpu-visual.html part="kitchen" lang="en" %}

In this restaurant, every time a dish goes out, all the ingredients in the fridge have to be carried to the counter once. The ingredients are the model's weights, and a dish is one token the AI writes. The rule sounds strange, but it is close to what an AI does when it writes: for every token it produces, it reads all of its weights once.

**Fridge size = memory capacity (GB)**　A GPU has its own memory, called VRAM. This is the fridge right next to the counter. If the ingredients don't all fit, the rest has to be fetched from the supermarket far away, the computer's main memory, and cooking slows to a crawl. In other words, capacity decides how large a model you can run.

**Corridor width = memory bandwidth (GB/s)**　How much can be carried from the fridge to the counter each second. Since every dish needs all the ingredients carried over, how fast the AI writes depends on the width of this corridor more than on the cooks' skill.

**Number and speed of cooks = compute (FLOPS)**　FLOPS counts how many multiplications and additions of numbers with decimals can be done each second; TFLOPS is a trillion times that. This matters before cooking starts, when the order is read. Given a long transcript, the AI first processes the whole text before it starts writing. Here the cooks' hands, not the corridor, run short, so the higher the FLOPS, the shorter the wait before the first word appears. Compute also matters if you want to train a model further on your own data (fine-tuning).

In short, capacity decides what can run, bandwidth decides how fast it writes, and compute decides how fast it reads and whether you can train it. The next three sections take them one at a time, with numbers from real machines.

## Capacity: will the model fit in the fridge?

Whether a model fits follows from its number of parameters. With each weight stored in 16 bits (2 bytes), a 27B model needs about 54 GB, more than any consumer GPU holds. The usual answer is to store the weights with less precision, around 4 bits each, rather like vacuum-packing the ingredients. This is called quantisation. The quantised 27B version of Qwen3.8 distributed through Ollama is about 18 GB.

{% include gpu-visual.html part="sizes" lang="en" %}

An 18 GB model does not get by with an 18 GB fridge, though. The AI also needs a work surface to hold what it has read (the KV cache), and that surface grows with the length of the input. Giving it a long transcript at once takes that much more memory.

Small models run with little memory, but models capable enough for real analysis are large. To run a usable model together with long materials, a lot of capacity is more or less essential. More capacity does not by itself make anything faster, though.

Here Macs have a different kitchen layout. In Macs with Apple Silicon, the CPU and GPU share the same memory (unified memory). Think of a single fridge for the whole house: a 48 GB Mac can give much of that to the model. No consumer GPU has 48 GB of VRAM, so for running large models a Mac has the advantage.

## Bandwidth: how fast it writes

Next comes the corridor, bandwidth. Dividing the bandwidth by the model's size gives a rough upper limit on tokens written per second. For a model of about 18 GB, a Mac mini (M5 Pro) with 307 GB/s tops out at about 17 tokens a second, and an RTX 5090 with 1,792 GB/s at about 100. Real speeds are lower.

{% include gpu-visual.html part="speed" lang="en" %}

That is the speed once writing has started. With a long transcript, there is also a wait before it starts, and that is where the third number, compute, comes in.

## Compute: waiting for the first word

Differences in compute show most clearly in the wait for the first word. In FP32, for example, the RTX 5060 Ti 16GB delivers about 24 TFLOPS and the RTX 5090 about 105, more than four times as much.

So which is faster: the RTX 5090 with its high compute, or a Mac Studio with a lot of memory? Federico Viticci of MacStories ran the same Qwen3.8 27B model (4-bit) on a PC with an RTX 5090 and on a Mac Studio (M5 Ultra, 256 GB) and measured both. The software and quantisation formats differ, so this compares whole machines rather than chips.

{% include gpu-visual.html part="ttft" lang="en" %}

With an input of about 6,000 tokens, the first word appeared after 2.0 seconds on the RTX 5090 and 4.0 seconds on the Mac Studio. The difference in compute shows up directly as waiting time. The RTX 5090, with its wider bandwidth, also wrote faster (59 against 48 tokens a second). Stretching the input to about 63,000 tokens lengthened the waits to 26.4 and 42.8 seconds, but the order stayed the same. As long as the model fits in 32 GB, the RTX 5090 is a little faster at both stages.

This brings us back to capacity. The order flips when the fridge runs out, and the third tab of the demo above shows what happens. The RTX 5090 figures above were measured with the numbers on the work surface shrunk to 8 bits, so that everything fitted in 32 GB. In a setup where it did not fit and spilled into main memory, writing speed fell to 4.6, 2.9 and 1.5 tokens a second for inputs of about 60,000, 130,000 and 260,000 tokens. At the same lengths, the Mac Studio held at 38.9, 32.4 and 24.3.

A slightly faster RTX 5090 with a small fridge, or a slightly slower Mac Studio with a big one: when you feed in long transcripts in one go, the size of the fridge starts to matter.

## How much computer do you need?

Putting this together as a rough guide to choosing a computer, for quantised models at around 4 bits and shorter materials to start with. Long transcripts and images push the requirements up.

| Use | Mac | Windows |
| --- | --- | --- |
| Trying it out (9B class) | 24 to 32 GB unified memory | 32 GB RAM, 12 to 16 GB VRAM |
| Comfortable use (27B class) | 48 GB; 64 GB for long materials | 64 GB RAM, 24 to 32 GB VRAM |

Current prices (US prices, November 2026):

<div class="pv-products">
<figure><img src="{{ '/assets/img/figures/prod-mac-mini.jpg' | relative_url }}" alt="A Mac mini resting on a hand" loading="lazy"><figcaption><strong>Mac mini</strong>M6: from $899 (up to 32 GB, 170 GB/s)<br>M5 Pro: from $1,699 (up to 64 GB, 307 GB/s)</figcaption></figure>
<figure><img src="{{ '/assets/img/figures/prod-mac-studio.jpg' | relative_url }}" alt="Front of a Mac Studio" loading="lazy"><figcaption><strong>Mac Studio</strong>M5 Max: from $2,499 (up to 128 GB)<br>M5 Ultra: from $5,499 (up to 512 GB, 1.2 TB/s)</figcaption></figure>
<figure><img src="{{ '/assets/img/figures/prod-rtx-5090.jpg' | relative_url }}" alt="A GeForce RTX 5090 graphics card" loading="lazy"><figcaption><strong>GeForce RTX 5090</strong>32 GB VRAM, 1,792 GB/s<br>Launch price $1,999 for the card alone; street prices run higher<br>RTX 5060 Ti 16GB: launch price $429</figcaption></figure>
</div>
A Windows build also means paying for the rest of the computer and its memory, and a whole 27B model is hard to fit into the 16 GB of an RTX 5060 Ti. If your lab already has a computer, try a small model with public materials first, see what falls short, and then decide whether to buy.

## Do you need to program?

To start with chatting and asking about documents, you don't need to write code. In LM Studio you can download a model, load it and send questions. Ollama can also be used through compatible apps or a few short commands. If you get stuck with the setup, ask a cloud AI. Your computer's model, its memory, the GPU name and the error message are enough; it doesn't need any research data.

Local models are not as capable as the latest cloud models, though, and the benchmark scores developers publish say little about how well a model interprets interviews in your language. Before giving it real transcripts, try public or invented materials to see whether it can handle the tasks your analysis needs. That shows how much you can leave to it.

## References

- Anthropic. (2026). *[How long do you store my organization's data?](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)* Anthropic Privacy Center.
- Anthropic. (2026). *[Is my data used for model training?](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training)* (commercial products). Anthropic Privacy Center.
- Anthropic. (2026). *[Data retention practices for Covered Models](https://privacy.claude.com/en/articles/15425996-data-retention-practices-for-covered-models)*. Anthropic Privacy Center.
- Apple. (2026, September 22). *[The new Mac mini and Mac Studio are available today](https://www.apple.com/newsroom/2026/09/the-new-mac-mini-and-mac-studio-are-available-today/)*.
- Apple. (n.d.). *[Mac mini: Technical specifications](https://www.apple.com/mac-mini/specs/)*.
- Apple. (n.d.). *[Mac Studio: Technical specifications](https://www.apple.com/mac-studio/specs/)*.
- bit-tech. (2008). *[Mythbusters finish Nvision in style](https://bit-tech.net/news/mythbusters-finish-nvision-in-style/1)*.
- Google. (n.d.). *[Abuse monitoring](https://ai.google.dev/gemini-api/docs/usage-policies)*. Gemini API.
- Google. (n.d.). *[Zero data retention](https://ai.google.dev/gemini-api/docs/zdr)*. Gemini API.
- Google Cloud. (n.d.). *[Gemini Enterprise Agent Platform and zero data retention](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention)*.
- LM Studio. (n.d.). *[Offline operation](https://lmstudio.ai/docs/app/offline)*.
- Manufacturing.net. (2010, January 20). *[The 80 millisecond Mona Lisa](https://www.manufacturing.net/industry40/article/13215687/the-80-millisecond-mona-lisa)*.
- Ollama. (n.d.). *[qwen3.8](https://ollama.com/library/qwen3.8)*.
- OpenAI. (n.d.). *[Data controls in the OpenAI platform](https://developers.openai.com/api/docs/guides/your-data)*.
- Qwen. (2026). *[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)* [Model card]. Hugging Face.
- TechSpot. (n.d.). *[Nvidia GeForce RTX 5060 Ti 16GB](https://www.techspot.com/specs/gpu/307872-nvidia-geforce-rtx-5060-ti-16gb.html)* [Specifications].
- Tom's Hardware. (2025). *[Nvidia GeForce RTX 5090 review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5090-review)*.
- Viticci, F. (2026, September). *[M5 Ultra Mac Studio review: The dream Mac for local AI agents](https://www.macstories.net/stories/m5-ultra-mac-studio-review-the-dream-mac-for-local-ai-agents/)*. MacStories.
- xAI. (n.d.). *[Enterprise FAQs](https://x.ai/legal/faq-enterprise)*.
