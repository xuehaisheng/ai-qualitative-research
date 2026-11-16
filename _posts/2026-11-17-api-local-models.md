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
---

[前のノート]({{ '/articles/ai-privacy/' | relative_url }})では、ChatGPTやClaudeのような個人向けサービスでは、訓練に使うスイッチを切っても、会話の保存と監視は残ることを見た。逐語録のように、企業に使われたくないデータを扱うときには、それだけでは足りないことがある。では、ほかにどんな方法があるのか。

このノートでは、まず、企業のAIを使い続けながら、データの残り方を減らす方法を見る。APIと、ゼロデータ保持（ZDR）である。次に、データをまったく外に出さない方法として、AIを自分のPCで動かすローカルモデルを取り上げる。後半では、ローカルモデルに必要なPCの部品、GPUについて、技術に詳しくない人にも分かるように説明する。

## APIを使う

APIは、企業のAIを、チャット画面を通さずに使うための窓口である。自分で書いたプログラムや、APIに対応したアプリから文章を送り、回答を受け取る。中で動いているモデルは、チャット画面と同じである。料金は月額ではなく、送った量と受け取った量に応じて払う。ChatGPTの月額料金とOpenAIのAPIの料金は、別の契約になる。

個人向けサービスとの一番大きな違いは、初期設定で訓練に使われないことである。個人向けサービスでは、訓練に使われるのが初めの状態で、使われたくない人がスイッチを切る。APIでは逆に、使わせたい人だけが自分で許可する。

ただし、APIでもデータは会社のサーバーに届き、しばらく残る。OpenAIは不正利用の監視のためのログを最長30日、Anthropicは入力と出力を30日、Gemini APIは55日保持する。その間は監視の対象で、違反が疑われれば人が読む。また、Gemini APIには無料枠があり、無料枠の入力は改善に使われ、人が読むこともある。

## ゼロデータ保持（ZDR）

APIでも残る、この30日から55日の保存をなくすための取り決めが、ゼロデータ保持（Zero Data Retention、ZDR）である。APIを使えば自動的にZDRになるわけではなく、会社に申し込んで、別の取り決めを結ぶ必要がある。その条件は会社によって大きく違う。

**OpenAI**　ZDRを使えるのは、営業窓口に申し込み、審査で承認された組織だけである。承認されると、管理画面の「Settings → Organization → Data controls」に「Data Retention」のタブが現れ、組織やプロジェクトごとにZDRを選べるようになる。ZDRにすると、入力や出力の内容は監視のログに残らず、残るのは利用量などのメタデータだけになる。ただし、ファイルの保管（Files）、ベクトルストア、Assistantsのように、データを置いておくこと自体が目的の機能はZDRの対象外で、使えば削除するまで残る。また、児童への性的虐待が疑われる画像やファイルは、ZDRでも人が確認するために保持される。

**Anthropic**　Anthropicと個別にZDRの合意を結ぶ。APIのほか、Enterprise版のClaude Codeや、AmazonのBedrockなどのクラウド経由の利用も対象になる。ZDRでは内容を残さない。ただし2026年6月9日から、Claude Mythosのような最上位のモデル（Covered Models）は、ZDRの組織でも入力と出力を30日保持するようになった。この30日分を読めるのは承認された少人数だけで、読んだ記録はすべて残る。

**Google**　Gemini APIでは、有料にしても不正利用の監視のためのログは消せない。そのためGoogleは、ZDRが必要ならGoogle CloudのVertex AIを使うよう案内している。Vertex AIでは、キャッシュを切る、会話を保存する設定（store）を使わない、といった設定を自分で揃えることで、ZDRに近づけられる。それでも、Google検索で答えを補う機能（グラウンディング）を使うと最長3日、地図の機能を使うと30日保存され、これは止められない。

**xAI**　公開されている文書には、ZDRという名前の制度が見当たらない。APIの入力と出力は30日以内に自動で削除される。保持期間を変えたいときは、エンタープライズ窓口を通じて、書面で個別に合意することになる。

OpenAIとAnthropicのZDRは、組織として申し込み、審査や合意を経ることが前提になっている。個人の研究者が一人で用意するのは難しく、大学や研究室の単位で考えることになる。もう一つ気をつけたいのは、ZDRのAPIを使うアプリの側である。研究用のアプリが、検索のための変換や文字の読み取りといった一部の処理だけを、別のクラウドに送っていることがある。

## データを外に出さない：ローカルモデル

ZDRを使っても、データは一度は会社のサーバーを通る。一瞬でも外に出したくないなら、AIのモデルそのものを自分のPCで動かすしかない。これがローカルモデルである。

ローカルモデルでは、重みが公開されているモデル（[オープンウェイト]({{ '/literacy/open-weight/' | relative_url }})）をダウンロードし、自分のPCの中だけで文章を処理する。いま個人のPCで試しやすいのは、Qwen3.5の9B級や、Qwen3.8-27Bなどである。Bは十億（billion）のことで、9Bならパラメータが90億個あることを表す。パラメータが何かは、後半のGPUの説明の中で触れる。

LM Studioのようなアプリを使えば、モデルをダウンロードしたあとは、ネットにつながなくても会話や文書の処理ができる。ネットを切った状態で目的の作業ができれば、データは外に出ていないことになる。

ここまでの四つの方法を、会社ごとに並べたのが下の図である。個人向けサービスで訓練をオフにした場合、API、APIにZDRを加えた場合、ローカルモデルの四つを、下のタブで切り替えられる。使い方を変えるたびに、保存、訓練、監視のどれが止まり、どれが残るのかが分かる。xAIにはZDRの制度がないので、xAIを選ぶとZDRは選べない。ローカルモデルはどの会社とも関係しないので、会社のタブは選べなくなる。

{% include privacy-compare.html lang="ja" %}

図のとおり、データの扱いだけを見れば、ローカルモデルがいちばん確実である。ただし、ローカルモデルには、PCに高い性能が要るという弱点がある。動かせるかどうかは、PCの中のGPUという部品で、ほぼ決まる。ここからは、GPUとは何か、どの数字を見ればよいのかを説明する。

## GPUとは何か

PCの中で計算をする部品は、主に二つある。CPUとGPUである。

CPUは、PCの頭脳にあたる。少数の高性能な計算ユニット（コア）を持ち、表計算、メール、ブラウザと、いろいろな種類の仕事を次々に切り替えながらこなす。料理にたとえると、何でも作れる腕利きのシェフが数人いる厨房である。

GPUは、もともと画面に絵を描くための部品として作られた。画面には何百万もの点があり、その一つ一つの色を毎秒何十回も計算し直す。一つ一つは単純な計算だが、数がとても多い。そこでGPUは、単純な計算ユニットを何千個も並べて、同じ種類の計算を一斉に進める。こちらは、決まった作業だけをこなす見習いが何千人もいる厨房である。

この違いを見せるために、GPUメーカーのNVIDIAは2008年、テレビ番組『怪しい伝説（MythBusters）』の二人に、絵を描くロボットを二台作ってもらった。CPU役のロボットは、ペイント弾を一発ずつ撃って、少しずつ笑顔を描いていく。

{% include figure.html src="fig-mythbusters-cpu.gif" cap="CPU役のロボット。一発ずつ順番に撃って、笑顔を描く。出典：NVIDIA NVISION 08でのMythBustersのデモ（2008年）。" alt="白い板の前のロボットが、ペイント弾を一発ずつ撃って青い点を描いていく。" %}

一方、GPU役の「Leonardo 2.0」は、大量の砲身を一斉に撃ち、80ミリ秒でモナ・リザを描き上げる。

{% include figure.html src="fig-mythbusters-gpu.gif" cap="GPU役のロボット「Leonardo 2.0」。大量の砲身を一斉に撃ち、80ミリ秒でモナ・リザを描く（スローモーション）。出典：同上。" alt="大量の管が並んだ装置から一斉にペイントが飛び出し、板の上にモナ・リザが現れる様子のスローモーション。" %}

AIのモデルがしている計算は、このモナ・リザの描き方に近い。AIは文章を[トークン]({{ '/literacy/token/' | relative_url }})という単位に分け、それぞれを数字の列に変える。その数字の列に、モデルの「重み」を掛けて足すことを何度も繰り返して、次のトークンを決める。重みとは、学習によって決まった大量の数字のことで、これがさきほど出てきたパラメータである。27Bのモデルなら、270億個の数字が並んでいる。一つ一つは掛け算と足し算にすぎないが、数が膨大で、しかも一斉に計算できる。だから、AIの計算はCPUよりGPUの方がずっと速い。

## 台所で考える：容量、帯域幅、計算力

では、GPUの性能表のどこを見ればよいのか。ローカルモデルに関係する数字は、主に三つある。三つはそれぞれ別のことを決めているので、少し変わったレストランの台所にたとえて説明する。

{% include gpu-visual.html part="kitchen" lang="ja" %}

このレストランでは、料理を一皿出すたびに、冷蔵庫の材料を全部いったん調理台まで運ばなければならない。材料がモデルの重みで、一皿がAIの書き出す一つのトークンである。変な決まりに見えるが、AIが文章を書くときにしていることは、これに近い。トークンを一つ出すたびに、重みを全部一度読み直している。

**冷蔵庫の大きさ＝メモリの容量（GB）**　GPUには専用のメモリがあり、VRAMと呼ばれる。これが調理台のすぐ隣にある冷蔵庫である。材料が全部入らなければ、足りない分は遠くのスーパー、つまりPC本体のメモリまで取りに行くことになり、料理はとても遅くなる。つまり、容量で決まるのは、どの大きさのモデルを動かせるかである。

**通路の幅＝メモリの帯域幅（GB/s）**　冷蔵庫から調理台へ、1秒間にどれだけの材料を運べるかを表す。一皿ごとに材料を全部運ぶので、AIが文章を書き出す速さは、料理人の腕よりも、この通路の幅で決まる。

**料理人の数と手の速さ＝計算力（FLOPS）**　FLOPSは、小数を含む掛け算や足し算を1秒間に何回できるかを表す数字で、TFLOPSはその1兆倍である。これが効くのは、料理を作る前に注文を読む段階である。長い逐語録を渡すと、AIは書き始める前に全文をまとめて計算する。このときは通路より料理人の手が足りなくなるので、FLOPSが大きいほど、最初の一文字が出るまでの待ち時間が短くなる。モデルを自分のデータで追加学習させる（ファインチューニング）ときも、この計算力がものを言う。

まとめると、容量は「何が動くか」、帯域幅は「どれだけ速く書き出すか」、計算力は「どれだけ速く読み込むか」と「学習させられるか」を決める。以下では、この三つを一つずつ、実際の機械の数字で見ていく。

## 容量：モデルは冷蔵庫に入るか

まず容量である。冷蔵庫に入るかどうかは、パラメータの数から計算できる。重み一つを16ビット（2バイト）で持つと、27Bのモデルは約54GBになり、家庭用のGPUには入らない。そこで、重みの数字の細かさを落として、4ビット前後で持つ方法が使われる。材料を真空パックで小さくするようなもので、量子化と呼ばれる。Ollamaで配布されているQwen3.8の27B版の量子化版は約18GBである。

{% include gpu-visual.html part="sizes" lang="ja" %}

ただし、18GBのモデルなら18GBの冷蔵庫で足りる、というわけではない。AIは、読んだ文章を覚えておくための作業台（KVキャッシュ）も使い、この作業台は入力が長いほど広くなる。長い逐語録を一度に読ませると、その分だけメモリを余計に使う。

小さなモデルなら少ない容量でも動く。しかし、分析に使えるくらいの力を持ったモデルは大きい。実用になるモデルを、長い資料と一緒に動かしたいなら、大きな容量はほぼ欠かせない。一方で、容量が大きいからといって速くなるわけではない。

この点で、Macは台所の作りが違う。Apple Siliconを使ったMacでは、CPUとGPUが同じメモリ（ユニファイドメモリ）を共有している。冷蔵庫が家全体で一つ、というイメージで、48GBのMacなら、そのかなりの部分をモデルに使える。家庭用のGPUでVRAMが48GBあるものはないので、大きなモデルを動かすにはMacが有利になる。

## 帯域幅：書き出す速さ

次は通路の幅、帯域幅である。帯域幅をモデルの大きさで割ると、1秒あたりに書き出せるトークン数のおおよその上限が出る。約18GBのモデルなら、帯域幅307GB/sのMac mini（M5 Pro）で1秒に約17トークン、1,792GB/sのRTX 5090で約100トークンになる。実際の速さは、これより遅くなる。

{% include gpu-visual.html part="speed" lang="ja" %}

ただし、これは書き始めてからの速さである。長い逐語録を渡したときには、書き始めるまでにも時間がかかる。そこで効いてくるのが、三つ目の計算力である。

## 計算力：最初の一文字が出るまで

計算力の差は、最初の一文字が出るまでの時間に、いちばんはっきり表れる。たとえばFP32の演算性能は、RTX 5060 Ti 16GBが約24TFLOPS、RTX 5090が約105TFLOPSで、4倍以上の差がある。

では、計算力の大きいRTX 5090と、大きなメモリを積んだMac Studioでは、どちらが速いのか。MacStoriesのフェデリコ・ヴィティッチが、同じQwen3.8 27B（4ビット）を、RTX 5090のPCとMac Studio（M5 Ultra、メモリ256GB）で動かして測っている。実行するソフトと量子化の形式が違うので、チップ同士ではなく、機械全体での比較である。

{% include gpu-visual.html part="ttft" lang="ja" %}

約6,000トークンの入力では、最初の一文字が出るまでに、RTX 5090は2.0秒、Mac Studioは4.0秒かかった。計算力の差が、そのまま待ち時間の差になっている。書き出す速さも、帯域幅の広いRTX 5090の方が速かった（1秒に59トークンと48トークン）。入力を約63,000トークンまで長くすると、待ち時間は26.4秒と42.8秒に延びるが、順位は変わらない。モデルが32GBに収まっている限り、どちらの段階でもRTX 5090の方が少し速い。

ここで、容量の話に戻る。逆転が起きるのは、冷蔵庫が足りなくなったときである。上のデモの三つ目のタブで、その様子を再現した。上のRTX 5090の数字は、作業台に置く数字を8ビットに縮めて、全体を32GBに収めたうえで測ったものである。収まりきらずに本体のメモリにあふれた設定では、入力が約6万、13万、26万トークンのとき、書き出す速さは1秒に4.6、2.9、1.5トークンまで落ちた。同じ長さで、Mac Studioは1秒に38.9、32.4、24.3トークンを保っている。

少し速いが冷蔵庫の小さいRTX 5090か、少し遅いが冷蔵庫の大きいMac Studioか。長い逐語録をまとめて読ませるなら、冷蔵庫の大きさが効いてくる。

## どのくらいのPCが必要か

ここまでの話を、PC選びの目安にまとめる。4ビット前後の量子化版を使い、短めの資料から始める場合である。長い逐語録を読ませたり、画像を扱ったりすると、必要な量は増える。

| 用途の目安 | Mac | Windows |
| --- | --- | --- |
| まず試す（9B級） | ユニファイドメモリ24〜32GB | 本体のメモリ32GB、VRAM 12〜16GB |
| 余裕をもって使う（27B級） | 48GB。長い資料なら64GBも | 本体のメモリ64GB、VRAM 24〜32GB |

いまの価格は次のとおりである（2026年11月時点、日本の税込価格）。

<div class="pv-products">
<figure><img src="{{ '/assets/img/figures/prod-mac-mini.jpg' | relative_url }}" alt="手のひらに載ったMac mini" loading="lazy"><figcaption><strong>Mac mini</strong>M6：149,800円から（最大32GB、170GB/s）<br>M5 Pro：299,800円から（最大64GB、307GB/s）<br>M5 Pro・48GB・512GBの構成は407,800円（ヨドバシカメラの掲載例）</figcaption></figure>
<figure><img src="{{ '/assets/img/figures/prod-mac-studio.jpg' | relative_url }}" alt="Mac Studioの正面" loading="lazy"><figcaption><strong>Mac Studio</strong>M5 Max：419,800円から<br>M5 Ultra：949,800円から（最大512GB、1.2TB/s）</figcaption></figure>
<figure><img src="{{ '/assets/img/figures/prod-rtx-5090.jpg' | relative_url }}" alt="GeForce RTX 5090のグラフィックボード" loading="lazy"><figcaption><strong>GeForce RTX 5090</strong>VRAM 32GB、1,792GB/s<br>GPU単体で847,800円（ドスパラの掲載例、品切れ）<br>RTX 5060 Ti 16GBは単体で約10万円</figcaption></figure>
</div>
Windowsで組む場合は、GPUのほかに本体やメモリの費用もかかる。また、RTX 5060 Tiの16GBに27Bのモデル全体を収めるのは難しい。研究室にすでにPCがあるなら、まず小さいモデルと公開されている資料で試し、どこが足りないかを見てから、買うかどうかを決めればよい。

## 設定にプログラミングは要るか

会話と文書の参照から始めるなら、コードを書く必要はない。LM Studioなら、モデルをダウンロードし、読み込み、質問を送るところから始められる。Ollamaも、対応するアプリや短いコマンドから使える。設定でつまずいたら、クラウドのAIに相談すればよい。PCの機種、メモリの量、GPUの名前、エラーメッセージがあれば足り、研究資料を渡す必要はない。

ただ、ローカルモデルの力は、クラウドの最新モデルには及ばない。開発元が公表するベンチマークの成績も、日本語のインタビューを解釈する力とは別のものである。実際の逐語録を入れる前に、公開されている資料や架空の資料で、自分の分析に必要な作業ができるかを試しておくと、どこまで任せられるかが見えてくる。

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
