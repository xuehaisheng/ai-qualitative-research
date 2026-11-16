---
title: "データを渡したくないとき：API、ローカルモデル、そしてGPUの話"
date: 2026-11-17 00:00:00 +0900
title_en: "When you don't want to hand over your data: APIs, local models and GPUs"
summary_en: "A follow-up to the note on AI privacy. Using companies' models through an API, which are not trained on by default but still keep data for a while, and running models on your own PC. With an explanation of what a GPU is, why its memory matters, and what memory capacity, memory bandwidth and FLOPS each decide."
author: 薛海升
key: api-local-models
order: 10
wiki: [open-weight, token, llm]
summary_ja: "AIプライバシーのノートの続き。企業のAIをAPIで使うと何が変わるのか、データを外に出さないローカルモデルには何が必要なのか。GPUとは何か、なぜGPUのメモリが要るのか、メモリの容量・帯域幅・計算力がそれぞれ何を決めるのかを説明する。"
topic: "研究の実践"
related_notes: ["ai-privacy", "meta-synthesis-with-ai"]
sort_date: 20261117
---

[前のノート]({{ '/articles/ai-privacy/' | relative_url }})では、ChatGPTやClaudeのような個人向けサービスでは、訓練に使うスイッチを切っても、保存と監視は残ることを見た。では、逐語録のように、企業に使われたくないデータを扱うときはどうすればよいのか。方法は大きく二つある。企業のAIをAPIという別の窓口から使う方法と、AIのモデルそのものを自分のPCで動かす方法である。

{% include figure.html src="fig-data-options-flow.png" cap="利用方法によるデータの流れの違い。上から、通常のクラウド利用、オプトアウト、条件を確認した有料API、完全なローカル処理。各社の公開の説明をもとにした概念図で、内部の仕組みを再現したものではない。" alt="四段の図。通常のクラウド、オプトアウト、有料APIでは、研究者のPCやアプリから企業のサーバーへデータが送られ、保存や安全監視の対象になる。ローカル処理では、資料、ローカルモデル、回答がすべて自分のPCの中に収まっている。" %}

## APIを使う

APIは、プログラムやアプリから企業のAIに文章を送り、回答を受け取るための窓口である。ブラウザでチャット画面を開く代わりに、別のソフトから同じモデルを呼び出す、と考えればよい。料金は月額ではなく、送った量と受け取った量に応じて払う。ChatGPTの月額料金とOpenAIのAPIの料金は、別の契約である。

個人向けサービスとの一番大きな違いは、初期設定で訓練に使われないことである。個人向けサービスでは、訓練に使われるのが初めの状態で、使われたくない人がスイッチを切る。APIでは逆に、使わせたい人だけが自分で許可する。

| API | 訓練に使うか | 保持と注意点 |
| --- | --- | --- |
| OpenAI | 初期設定では使わない。自分で共有を許可した場合は別。 | 不正利用の監視のためのログを通常最長30日保持する。ファイルや会話の状態などは、機能ごとに別の保持がある。 |
| Anthropic | 初期設定では使わない。明示的に送ったフィードバックなどは別。 | 通常30日以内に削除する。ファイル、法律上の義務、安全上のフラグは別。一部のモデルでは、ZDRの契約でも30日の保持が求められる。 |
| Gemini | 有料なら製品の改善に使わない。無料枠では改善に使われ、人が読むこともある。 | 不正利用の監視のため、入力と出力を通常55日保持する。ポリシー違反を見つけるためのモデルの訓練には使われうる。 |
| Grok | 使わない。データの共有と引き換えに無料クレジットを受け取る場合は別。 | 通常30日以内に削除する。法律や規約違反などの例外がある。 |

表のZDRは「Zero Data Retention」の略で、データを保持しないという特別な取り決めのことである。申し込みの条件や対象となる機能は会社ごとに違い、APIを使えば自動的にZDRになるわけではない。

APIで気をつけたいことが三つある。一つ目は、Geminiの無料枠である。無料で使えるAPIキーでは、入力が改善に使われ、人に読まれることもある。「APIだから訓練に使われない」とは言い切れない。二つ目は、APIでもデータは会社のサーバーに送られ、30日から55日ほど保持されることである。保持の間は監視の対象になる。処理する場所も、日本国内とは限らない。日本語の画面で使っていても、海外のサーバーで処理されることがある。三つ目は、APIを使うアプリの側の作りである。研究用のアプリが手元のPCで動いていても、検索のための変換や文字の読み取りだけを別のクラウドに送っていることがある。

つまりAPIは、訓練に使われる心配をかなり減らしてくれる。ただ、データが外に出ることは変わらない。語り手の言葉を一時的にでも会社のサーバーに置きたくないなら、残る方法はローカルモデルである。

## データを外に出さない：ローカルモデル

ローカルモデルは、モデルのファイルを自分のPCに置き、そのPCの中だけで文章を処理する方法である。重みが公開されているモデル（[オープンウェイト]({{ '/literacy/open-weight/' | relative_url }})）を使う。いま個人のPCで試しやすいのは、QwenシリーズのQwen3.5の9B級や、Qwen3.8-27Bなどである。Bは十億（billion）のことで、9Bならパラメータが90億個あることを表す。パラメータについては後で説明する。

LM Studioのようなアプリを使えば、モデルをダウンロードしたあとは、ネットにつながなくても会話や文書の処理ができる。ただし、「ローカル」と書いてあるだけで安心しない方がよい。文書を検索するための変換、画像の文字の読み取り、音声の文字起こしまで手元で動いているか。クラウドへの切り替えや同期の機能は切ってあるか。ネットを切った状態で目的の処理が動くかを試すと、確かめやすい。

ローカルモデルを動かせるかどうかは、PCのある部品でほぼ決まる。GPUと、GPUのメモリである。

## GPUとは何か

PCの中で計算をする部品は、主に二つある。CPUとGPUである。

CPUは、PCの頭脳にあたる部品である。少数の高性能な計算ユニット（コア）を持ち、いろいろな種類の仕事を、次々に切り替えながらすばやくこなす。表計算もメールもブラウザも、まずCPUが動かしている。

GPUは、もともと画面に絵を描くための部品として作られた。画面には何百万もの点があり、その一つ一つの色を毎秒何十回も計算し直す必要がある。一つ一つの計算は単純だが、数がとても多い。そこでGPUは、単純な計算ユニットを何千個も並べ、同じ種類の計算を一度に大量に進められるようになっている。

AIのモデルがしている計算も、これに近い。AIは文章を[トークン]({{ '/literacy/token/' | relative_url }})という単位に分け、それぞれを数字の列に変える。その数字の列に、モデルの「重み」を掛けて足すことを何度も繰り返して、次のトークンを決める。重みとは、学習によって決まった大量の数字のことで、これがパラメータである。27Bのモデルなら、270億個の数字が並んでいる。一つ一つは掛け算と足し算にすぎないが、数が膨大で、しかも多くを同時に計算できる。だから、AIの計算はCPUよりGPUの方がずっと速い。

## なぜGPUのメモリが必要なのか

計算するには、270億個の重みを、計算ユニットのすぐそばに置いておく必要がある。GPUには専用のメモリがあり、VRAM（ビデオメモリ）と呼ばれる。GPUの計算ユニットはVRAMとはとても速くやりとりできるが、PC本体のメモリ（RAM）とのやりとりはずっと遅い。そのため、モデルの重みはできるだけ全部VRAMに入れたい。

必要なVRAMは、パラメータの数から計算できる。重み一つを16ビット（2バイト）で持つと、27Bのモデルは270億×2バイトで約54GBになる。家庭用のGPUには入らない。そこで、重みの数字の細かさを落として、4ビット前後で持つ方法が使われる。これを量子化という。Ollamaで配布されているQwen3.8の27B版の量子化版は、約18GBである。

ただし、18GBのモデルが18GBのVRAMで快適に動くわけではない。モデルは、読んだ文章の内容を覚えておくための作業領域（KVキャッシュと呼ばれる）も使う。この作業領域は、入力が長いほど大きくなる。長い逐語録を一度に読ませると、その分だけVRAMを余計に使う。

VRAMに入りきらなかった分は、本体のRAMに置くこともできる。ただ、さきほど書いたようにRAMとのやりとりは遅いので、速度は大きく落ちる。

Macは事情が少し違う。Apple Siliconを使ったMacでは、CPUとGPUが同じメモリ（ユニファイドメモリ）を共有している。そのため、48GBのMacなら、そのかなりの部分をモデルに使える。家庭用のGPUでVRAMが48GBあるものはまずないので、大きなモデルを手軽に動かすには、Macが有利なことが多い。

## 容量、速さ、計算力

GPUやMacの性能表には、いくつもの数字が並んでいる。ローカルモデルに関係するのは主に三つで、それぞれ決めるものが違う。

一つ目は、メモリの容量（GB）である。これで決まるのは、どの大きさのモデルを、どれくらいの長さの入力で動かせるかである。容量が足りなければ、そもそも動かないか、本体のRAMに逃がして極端に遅くなる。逆に、容量が多いからといって速くなるわけではない。

二つ目は、メモリの帯域幅（GB/s）である。メモリから計算ユニットへ、1秒間にどれだけのデータを運べるかを表す。AIが文章を書き出すときは、トークンを一つ出すたびに、重みを全部一度読み直す。そのため、書き出す速さは、計算の速さよりも、この運ぶ速さで決まる。目安として、帯域幅をモデルの大きさで割ると、1秒あたりに出せるトークン数の上限が出る。たとえば約18GBのモデルを動かす場合、帯域幅が307GB/sのMac mini（M5 Pro）なら上限は1秒に約17トークン、1,792GB/sのRTX 5090なら約100トークンになる。実際の速さはこれより遅い。

三つ目は、浮動小数点演算の速さで、FLOPS（1秒あたりの演算回数）やTFLOPS（その1兆倍）で表す。浮動小数点演算とは、小数を含む数の掛け算や足し算のことである。この数字が効くのは、AIが入力を読み込む段階である。長い逐語録を渡すと、AIは書き始める前に、まず全文をまとめて計算する。この段階では、運ぶ速さより計算ユニットの数と速さが足りなくなるので、FLOPSが大きいほど、最初の一文字が出るまでの待ち時間が短くなる。モデルを自分のデータで追加学習させる（ファインチューニング）場合も、この計算力がものを言う。RTX 5060 Ti 16GBのFP32の演算性能は約24TFLOPS、RTX 5090は約105TFLOPSである。

まとめると、容量は「何が動くか」を決め、帯域幅は「どれだけ速く書き出すか」を決め、計算力は「どれだけ速く読み込むか」と「学習させられるか」を決める。逐語録の分析では、長い資料を読ませることが多いので、容量と計算力の両方が効いてくる。

## どのくらいのPCが必要か

4ビット前後の量子化版を使い、短めの資料から始める場合の目安を表にした。メーカーが保証する動作要件や、実際に測った速さではない。長い逐語録を読ませたり、画像を扱ったりすると、必要な量は増える。

| 用途の目安 | Mac | Windows |
| --- | --- | --- |
| まず試す（9B級） | ユニファイドメモリ24〜32GB | 本体RAM 32GB、VRAM 12〜16GB |
| 余裕をもって使う（27B級） | 48GB。長い資料なら64GBも | 本体RAM 64GB、VRAM 24〜32GB |

Appleによると、Mac miniの開始価格は、M6で14万9800円、M5 Proで29万9800円である。メモリを増やすと価格も上がる。M5 Proの48GB・512GB構成は、ヨドバシカメラの掲載例で40万7800円だった。WindowsのGPUでは、RTX 5060 Tiの16GB版が単体で約10万円の掲載例がある。ただし、27B版のモデル全体を16GBに収めるのは難しい。RTX 5090はVRAMが32GBあるが、確認した販売ページではGPU単体で84万7800円、品切れだった。価格は在庫や時期で大きく動くので、ここでの数字は参考にとどめてほしい。研究室にすでにPCがあるなら、まず小さいモデルと公開されている資料で試し、どこが足りないかを見てから買うかどうかを考えても遅くない。

## 設定にプログラミングは必要か

会話と文書の参照から始めるなら、コードを書く必要はない。LM Studioのようなアプリで、モデルをダウンロードし、読み込み、質問を送るところから試せる。Ollamaも、対応するアプリや短いコマンドから使える。

設定でつまずいたら、クラウドのAIに相談してもよい。そのときに研究資料を渡す必要はない。PCの機種、メモリの量、GPUの名前、機密情報を取り除いたエラーメッセージだけで、たいていは相談できる。

ローカルモデルの力は、クラウドの最新モデルには及ばない。開発元が公表するベンチマークの成績が、そのまま日本語のインタビューを解釈する力を表すわけでもない。実際の逐語録を入れる前に、公開されている資料や架空の資料で、自分の分析に必要な作業ができるかを確かめておくと、どこまで任せられるかが見えてくる。

## 参考文献

- Anthropic. (2026). *[How long do you store my organization's data?](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)* Anthropic Privacy Center.
- Anthropic. (2026). *[Is my data used for model training?](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training)*（商用製品）. Anthropic Privacy Center.
- Anthropic. (n.d.). *[Data retention practices for Covered Models](https://privacy.claude.com/en/articles/15425996-data-retention-practices-for-covered-models)*. Anthropic Privacy Center.
- Apple. (2026, September 22). *[新しいMac miniとMac Studio、本日より販売開始](https://www.apple.com/jp/newsroom/2026/09/the-new-mac-mini-and-mac-studio-are-available-today/)*.
- Apple. (n.d.). *[Mac mini 仕様](https://www.apple.com/jp/mac-mini/specs/)*.
- Dospara. (n.d.). *[Palit GeForce RTX 5090 GameRock 32GB](https://www.dospara.co.jp/SBR1892/IC518917.html)*.
- Google. (2026). *[Gemini API additional terms of service](https://aistudio.google.com/docs/terms)*.
- Google. (n.d.). *[Abuse monitoring](https://aistudio.google.com/docs/usage-policies)*. Gemini API.
- LM Studio. (n.d.). *[Offline operation](https://lmstudio.ai/docs/app/offline)*.
- Ollama. (n.d.). *[qwen3.8](https://ollama.com/library/qwen3.8)*.
- OpenAI. (n.d.). *[Data controls in the OpenAI platform](https://developers.openai.com/api/docs/guides/your-data)*.
- Qwen. (2026). *[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)* [Model card]. Hugging Face.
- TechSpot. (n.d.). *[Nvidia GeForce RTX 5060 Ti 16GB](https://www.techspot.com/specs/gpu/307872-nvidia-geforce-rtx-5060-ti-16gb.html)* [Specifications].
- Tom's Hardware. (2025). *[Nvidia GeForce RTX 5090 review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5090-review)*.
- Tsukumo. (n.d.). *[GeForce RTX 5060シリーズ](https://shop.tsukumo.co.jp/features/rtx-5060series/)*.
- xAI. (n.d.). *[Enterprise FAQs](https://x.ai/legal/faq-enterprise)*.
- Yodobashi Camera. (n.d.). *[Mac mini M5 Pro カスタマイズ構成](https://www.yodobashi.com/product/100000001010196007/)*.

<!--EN-->

The [previous note]({{ '/articles/ai-privacy/' | relative_url }}) showed that with consumer services such as ChatGPT and Claude, turning off the training switch still leaves storage and monitoring in place. So what can we do with data like interview transcripts, which we don't want companies to use? There are two broad options: use companies' models through a different door, the API, or run a model on your own PC.

{% include figure.html src="fig-data-options-flow.png" cap="How data flows under different ways of using AI. From top: ordinary cloud use, opting out, a paid API whose terms you have checked, and fully local processing. A conceptual figure based on what the companies publish (labels in Japanese); it does not reproduce their internal systems." alt="A four-row diagram. In ordinary cloud use, opting out and a paid API, data goes from the researcher's PC or app to the company's servers, where it may be stored and monitored. In local processing, materials, the local model and the replies all stay inside the researcher's own PC." %}

## Using an API

An API is a door through which programs and apps send text to a company's model and get replies back. Instead of opening a chat window in a browser, other software calls the same model. You pay for how much you send and receive, not a monthly fee. A ChatGPT subscription and OpenAI's API are separate contracts.

The biggest difference from consumer services is that APIs are not used for training by default. In consumer services, training is the starting state and people who object switch it off. With APIs it is the other way round: only those who want to share their data opt in.

| API | Used for training? | Retention and caveats |
| --- | --- | --- |
| OpenAI | Not by default, unless you choose to share. | Abuse-monitoring logs are normally kept for up to 30 days. Files, conversation state and other features have their own retention. |
| Anthropic | Not by default. Feedback you explicitly send is an exception. | Normally deleted within 30 days. Files, legal obligations and safety flags are separate. Some models require 30-day retention even under ZDR. |
| Gemini | Paid use is not used to improve products. Free-tier use is, and people may read it. | Prompts and outputs are normally kept for 55 days for abuse monitoring, and may be used to train models that enforce policy. |
| Grok | Not used, except where you share data in exchange for free credits. | Normally deleted within 30 days, with exceptions for legal and policy violations. |

ZDR stands for Zero Data Retention, a special arrangement under which data is not kept. Eligibility and covered features differ by company, and using an API does not make it ZDR automatically.

Three things are worth watching with APIs. First, Gemini's free tier: with a free API key, inputs are used for improvement and may be read by people, so “it's an API, so it isn't trained on” does not always hold. Second, even with an API, data goes to the company's servers and is kept for roughly 30 to 55 days, during which it is subject to monitoring. Processing may not happen in Japan; using a Japanese interface does not mean the servers are in Japan. Third, the app that uses the API: a research app may run on your PC and still send some steps, such as converting text for search or reading text from images, to another cloud service.

So an API greatly reduces the worry about training, but the data still leaves your machine. If you don't want the participants' words on a company's servers even for a while, the remaining option is a local model.

## Keeping data in: local models

A local model means putting the model files on your own PC and processing text only inside that PC. You use models whose weights have been published ([open-weight]({{ '/literacy/open-weight/' | relative_url }}) models). Models that are easy to try on a personal PC today include the 9B-class Qwen3.5 and Qwen3.8-27B. B stands for billion: 9B means the model has nine billion parameters, which are explained below.

With an app such as LM Studio, once a model is downloaded you can chat and work with documents without an internet connection. A “local” label alone is not enough, though. Check whether converting documents for search, reading text from images and transcribing audio also run on your machine, and whether cloud fallback and sync features are off. Trying the task you need with the network disconnected is an easy way to check.

Whether you can run a local model depends mostly on one part of the PC: the GPU and its memory.

## What is a GPU?

Two parts of a PC do most of the computing: the CPU and the GPU.

The CPU is the PC's brain. It has a small number of powerful computing units (cores) and handles many kinds of work quickly, switching from one task to the next. Spreadsheets, email and the browser all run on the CPU first.

The GPU was originally built to draw images on the screen. A screen has millions of dots, and the colour of each must be recalculated dozens of times a second. Each calculation is simple, but there are a great many of them. So a GPU has thousands of simple computing units side by side and can run large numbers of the same kind of calculation at once.

What an AI model computes is similar. It splits text into [tokens]({{ '/literacy/token/' | relative_url }}) and turns each into a list of numbers. It then multiplies those numbers by the model's “weights” and adds them up, over and over, to decide the next token. Weights are the large set of numbers fixed by training, and they are the parameters. A 27B model has 27 billion of them. Each step is just multiplication and addition, but there are enormous numbers of them and many can run at the same time, so AI runs much faster on a GPU than on a CPU.

## Why GPU memory matters

To compute, the 27 billion weights need to sit right next to the computing units. A GPU has its own memory, called VRAM (video memory). The GPU's computing units exchange data with VRAM very quickly, but exchanges with the PC's main memory (RAM) are much slower. So ideally all the model's weights should fit in VRAM.

You can work out how much VRAM is needed from the number of parameters. With each weight stored in 16 bits (2 bytes), a 27B model needs about 27 billion × 2 bytes, or 54 GB, which does not fit on a consumer GPU. The usual answer is to store the weights with less precision, around 4 bits each. This is called quantisation. The quantised 27B version of Qwen3.8 distributed through Ollama is about 18 GB.

An 18 GB model does not run comfortably in 18 GB of VRAM, though. The model also needs a working area to hold what it has read (called the KV cache), and this area grows with the length of the input. Giving it a long transcript at once uses that much more VRAM.

What does not fit in VRAM can be placed in main RAM, but because exchanges with RAM are slow, speed drops sharply.

Macs are a little different. In Macs with Apple Silicon, the CPU and GPU share the same memory (unified memory). A 48 GB Mac can give much of that to the model. Consumer GPUs with 48 GB of VRAM are rare, so for running large models without fuss, a Mac often has the advantage.

## Capacity, speed and compute

Spec sheets for GPUs and Macs list many numbers. Three matter most for local models, and each decides something different.

The first is memory capacity (GB). It decides which size of model you can run, and with how long an input. If capacity is short, the model will not run at all, or will spill into main RAM and become extremely slow. More capacity does not by itself make things faster.

The second is memory bandwidth (GB/s): how much data can be moved from memory to the computing units each second. When an AI writes text, it reads all of its weights once for every token it produces. So writing speed is set by this moving speed more than by computing speed. As a rough guide, dividing the bandwidth by the model's size gives an upper limit on tokens per second. For a model of about 18 GB, a Mac mini (M5 Pro) with 307 GB/s tops out at about 17 tokens a second, and an RTX 5090 with 1,792 GB/s at about 100. Real speeds are lower.

The third is floating-point performance, measured in FLOPS (operations per second) or TFLOPS (trillions of them). Floating-point operations are multiplications and additions of numbers with decimals. This number matters when the AI reads its input. Given a long transcript, the AI first processes the whole text before it starts writing. At this stage the limit is the number and speed of the computing units rather than the moving speed, so the higher the FLOPS, the shorter the wait before the first word appears. It also matters if you want to train a model further on your own data (fine-tuning). The RTX 5060 Ti 16GB delivers about 24 TFLOPS in FP32; the RTX 5090 about 105.

In short, capacity decides what can run, bandwidth decides how fast it writes, and compute decides how fast it reads and whether you can train it. Analysing transcripts usually means feeding in long material, so both capacity and compute come into play.

## How much PC do you need?

The table gives rough guides for using quantised models at around 4 bits and starting with shorter materials. These are not manufacturers' requirements or measured speeds. Long transcripts and images push the requirements up.

| Use | Mac | Windows |
| --- | --- | --- |
| Trying it out (9B class) | 24 to 32 GB unified memory | 32 GB RAM, 12 to 16 GB VRAM |
| Comfortable use (27B class) | 48 GB; 64 GB for long materials | 64 GB RAM, 24 to 32 GB VRAM |

According to Apple, the Mac mini starts at ¥149,800 with M6 and ¥299,800 with M5 Pro in Japan, and the price rises with more memory. An M5 Pro configuration with 48 GB and 512 GB was listed at ¥407,800 by Yodobashi Camera. On the Windows side, the 16 GB RTX 5060 Ti was listed at around ¥100,000 for the card alone, though fitting a whole 27B model into 16 GB is difficult. The RTX 5090 has 32 GB of VRAM, but the shop page I checked listed the card alone at ¥847,800, and out of stock. Prices move a lot with stock and timing, so treat these figures as reference only. If your lab already has a PC, you can try a small model with public materials first and see what falls short before deciding whether to buy.

## Do you need to program?

To start with chatting and asking about documents, you don't need to write code. In an app such as LM Studio you can download a model, load it and send questions. Ollama can also be used through compatible apps or a few short commands.

If you get stuck with the setup, you can ask a cloud AI for help without giving it any research data. Your PC model, the amount of memory, the GPU name and error messages with confidential details removed are usually enough.

Local models are not as capable as the latest cloud models, and the benchmark scores developers publish do not tell you how well a model interprets Japanese interviews. Before giving it real transcripts, try public or invented materials to see whether it can do the tasks your analysis needs. That shows how much you can leave to it.

## References

- Anthropic. (2026). *[How long do you store my organization's data?](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)* Anthropic Privacy Center.
- Anthropic. (2026). *[Is my data used for model training?](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training)* (commercial products). Anthropic Privacy Center.
- Anthropic. (n.d.). *[Data retention practices for Covered Models](https://privacy.claude.com/en/articles/15425996-data-retention-practices-for-covered-models)*. Anthropic Privacy Center.
- Apple. (2026, September 22). *[新しいMac miniとMac Studio、本日より販売開始](https://www.apple.com/jp/newsroom/2026/09/the-new-mac-mini-and-mac-studio-are-available-today/)*.
- Apple. (n.d.). *[Mac mini 仕様](https://www.apple.com/jp/mac-mini/specs/)*.
- Dospara. (n.d.). *[Palit GeForce RTX 5090 GameRock 32GB](https://www.dospara.co.jp/SBR1892/IC518917.html)*.
- Google. (2026). *[Gemini API additional terms of service](https://aistudio.google.com/docs/terms)*.
- Google. (n.d.). *[Abuse monitoring](https://aistudio.google.com/docs/usage-policies)*. Gemini API.
- LM Studio. (n.d.). *[Offline operation](https://lmstudio.ai/docs/app/offline)*.
- Ollama. (n.d.). *[qwen3.8](https://ollama.com/library/qwen3.8)*.
- OpenAI. (n.d.). *[Data controls in the OpenAI platform](https://developers.openai.com/api/docs/guides/your-data)*.
- Qwen. (2026). *[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)* [Model card]. Hugging Face.
- TechSpot. (n.d.). *[Nvidia GeForce RTX 5060 Ti 16GB](https://www.techspot.com/specs/gpu/307872-nvidia-geforce-rtx-5060-ti-16gb.html)* [Specifications].
- Tom's Hardware. (2025). *[Nvidia GeForce RTX 5090 review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5090-review)*.
- Tsukumo. (n.d.). *[GeForce RTX 5060シリーズ](https://shop.tsukumo.co.jp/features/rtx-5060series/)*.
- xAI. (n.d.). *[Enterprise FAQs](https://x.ai/legal/faq-enterprise)*.
- Yodobashi Camera. (n.d.). *[Mac mini M5 Pro カスタマイズ構成](https://www.yodobashi.com/product/100000001010196007/)*.
