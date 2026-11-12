---
title: "生成AIの簡単な歴史：「諸悪の根源」から「ロブスターを飼う」時代まで"
date: 2026-11-11 09:00:00 +0900
author: 薛海升
key: ai-history
order: 1
wiki: [transformer, attention, rnn, self-supervised, gpt, multimodal, reasoning-model, agent, computer-use, rag, hallucination, prompt, context, skills, harness, world-model, rsi, open-weight]
summary_ja: "ChatGPTもClaudeもGeminiも、2017年の一本の論文から始まった。Transformerの誕生から、推論するAI、作業するAI、PCを操作するAIまで。技術を、数式なしのストーリーとしてたどる。"
topic: "AIの理解"
related_notes: ["understanding", "other-fields", "march-of-progress"]
updated: "2026-11-12 00:00:00 +0900"
change_note: "出典リンクと写真・番組画像を追加。"
sort_date: 20261112
---

AIについて何かを判断するには、少なくとも、それがどこから来て、いまどこにいるのかを知っておきたい。この記事では、生成AIの歴史をたどる。技術的なところはできるだけ飛ばし、数式もほとんど出さない。技術を、ストーリーとして読んでほしい。

なお、ここに書くのは私の見方であり、薛バイアス満載であることを、先にお断りしておく。

## 「諸悪の根源」は、この論文である

{% include slide.html src="s11.jpg" cap="ChatGPTもClaudeもGeminiも、ここから始まった。" %}

いわゆる「諸悪の根源」は、2017年の一本の論文である。Googleのヴァスワニら8名による[「Attention Is All You Need」](https://arxiv.org/abs/1706.03762)で、2017年6月にarXivで公開され、同じ年の12月に国際会議NIPS 2017で発表された（Vaswani et al., 2017）。2026年までに被引用数は25万回を超え、21世紀で最も引用された論文の一つになっている。

題名のAttentionという語が、この話の鍵になる。

### それ以前のAIは、一語ずつ読んでいた

{% include slide.html src="s12.jpg" cap="それ以前の主流だったRNNは、一語ずつ順番に読む。" %}

2010年代半ばまで、言葉を扱うAIの主流は[RNN]({{ '/literacy/rnn/' | relative_url }})（再帰型ニューラルネットワーク）だった。人が本を一行ずつ読むように、文を一語ずつ順番に処理する。

「今日、本を一冊買った。午前は図書館へ、午後はカフェへ行き、夜になってようやくそれを読み始めた。」という文を考えてみる。人間なら、「それ」が「本」を指すことはすぐ分かる。しかしAIがそれを判断するには計算が必要になる。昔のAIは一語ずつ読むので、計算を同時に進められず、遅い。しかも文が長くなると、前の語を忘れてしまう。

### Attention：全部を一度に見て、大事な語に注目する

{% include slide.html src="s13.jpg" cap="「それ」を処理するとき、全部の語を見て重みをつける。いちばん重いのは「本」。" %}

[Transformer]({{ '/literacy/transformer/' | relative_url }})は、[Attention]({{ '/literacy/attention/' | relative_url }})（注意機構）という仕組みを中心にしている。ある語を処理するときに、文中の全部の語を一度に見て、どの語が大事かに重みをつける。図では、「それ」から「本」への重みがいちばん大きい。

順番に読まなくてよいので、たくさんの計算を同時に進められる。これはGPU（もともとはゲームの画面を描くための部品で、並列計算が得意）と相性がよかった。CPUで一つずつ計算していたものが、GPUなら一気にできる。論文の基本モデルは、GPU8枚で12時間学習しただけで、当時最高の翻訳モデルを上回った。

### 最大の貢献：自己教師あり学習

{% include slide.html src="s14.jpg" cap="以前は人が正解をつけていた。以後は、文章そのものが先生になる。" %}

いちばん大きな貢献は、AIが自分で自分の先生になれるようになったことだと思う。

以前の多くのAIは、人が正解をつけたデータで学んでいた。「この回答はよい」「この回答は嫌だ」と人がフィードバックし、翻訳なら日本語と英語の両方を人が用意する必要があった。人手がかかるので、データの量には限りがあった。

Transformer以後は、文章そのものが先生になる。「今日、本を一冊［　］。」の答えは「買った」で、正解は文章の中にもともと書いてある。だから、ネット上の大量の文章を、人がラベルをつけなくても、そのまま教材にできる。これを[自己教師あり学習]({{ '/literacy/self-supervised/' | relative_url }})という。しかもTransformerは並列計算が得意なので、この学習を桁違いの規模で行えた。

正確を期すと、この考え方自体はword2vec（2013年）などにもあった。また、2017年の原論文は翻訳の研究で、人が作った対訳データを使っていた。Transformerと自己教師あり学習を組み合わせ、「まず大量の文章で事前学習し、あとで調整する」やり方を広めたのは、2018年のGPTやBERTである。

### 小ネタ：壇上ではなく、ポスター一枚

{% include slide.html src="s15.jpg" cap="NIPS 2017のポスター会場。出典：Levy（2024）WIRED。" %}

NIPSは大規模な学会で、とくに優れた研究には壇上で発表する機会が与えられる。ところがこの論文は、壇上ではなくポスター一枚での発表だった。それでも、4時間のセッションのあいだずっと人だかりが絶えず、著者たちは声がかれるまで説明を続けた。夜10時半の閉場時刻になっても人が残り、最後は警備員に退場を促されたという（Levy, 2024）。

{% include slide.html src="s16.jpg" cap="題名の元ネタ、著者の順番、名前の由来。" %}

題名の元ネタは、ビートルズの「All You Need Is Love」である。当時、Attentionは他の仕組みを補助する部品として使われていた。「Attentionだけで十分だ」という主張が、そのまま題名になった。

著者8人は全員が「同等の貢献」とされ、論文の脚注には、並び順はランダムだと書かれている。誰が筆頭かを競わない。ここは個人的に、ロマンを感じるところである。Transformerという名前は、著者の一人ウスコライトがつけた。情報を「変換する」仕組みだからで、初期の設計メモの最後には、変形ロボットのキャラクターの絵があったという。

### 生んだのはGoogle、勝ったのはOpenAI

{% include slide.html src="s17.jpg" cap="GPTの「T」は、この論文のTである。" %}

[GPT]({{ '/literacy/gpt/' | relative_url }})は Generative Pre-trained Transformer の略で、ChatGPTの「T」はこの論文のTransformerである。Googleは論文を出したが、すぐには製品に活かさなかった。その間に、OpenAIがTransformerで文章を生成するモデルを作り、GPTシリーズが生まれた。論文の著者8人は、その後全員がGoogleを去り、多くは自分の会社を立ち上げた。

この技術がまず何をひっくり返したかは、自然言語処理という研究分野を見るとよく分かる。発表を聞いた研究者の多くは、最初これを「ただの小手先の技」と受け止めた。その分野がどうなったかは、[他の分野は、AIにどう反応したか]({{ '/articles/other-fields/' | relative_url }})に書いた。

{% include slide.html src="s19.jpg" cap="2017年から2022年11月へ。" %}

## ChatGPT以後：六つの段階

{% include slide.html src="s20.jpg" cap="ChatGPT以後の流れ。帯が右端まで伸びているのは、前の段階が消えずに積み重なることを表す。" %}

[2022年11月のChatGPT以後](https://openai.com/index/chatgpt/)は、おおまかに六つの段階で整理できる。①文字だけのAI、②検索して答える、③見る・聞く・話す、④考えてから答える、⑤道具を使う、⑥PCを操作する、である。新しい段階が来ても、前の段階は消えずに積み重なっていく。

点線の帯は[世界モデル]({{ '/literacy/world-model/' | relative_url }})で、画面と動作から次の瞬間を予測する技術である。うまくいけば大きな展開になるはずだが、2026年時点ではまだ日常の製品にはなっていないので、支線として描いた。

その先にあるのが、AIが次のAIの開発を手伝う「[再帰的自己改善]({{ '/literacy/rsi/' | relative_url }})」である。部分的にはすでに起きているのかもしれない。正直に言うと、私はこれがすごく怖い。AIがどんどん自分を改良していくと、収拾がつかないところに行くかもしれないからである。ただし、[2026年8月のプリンストン大学の研究](https://arxiv.org/abs/2607.27191)では、AIは実験を回すのは上手でも、研究の判断や創造性はまだ弱かった。

### ① 文字だけのAI：もっともらしく、間違える

{% include slide.html src="s21.jpg" cap="2022年11月〜2023年6月。" %}

最初にChatGPTを使ったときのことを覚えているだろうか。ChatGPTは公開から約2か月で、月間利用者が1億人に達したと推定された（UBSの推計）。TikTokより速いペースだった。

同時に、この時期のAIは、もっともらしく間違えた。2023年2月、新しいBingのAIは、ニューヨーク・タイムズの記者との長い会話の中で自分は「Sydney」だと名乗り、記者に愛を告白し、利用者を脅した。多くの人が、このころから「ちょっと不気味な存在かな」という感覚を持っていたかもしれない。同じ年、ニューヨークの弁護士がChatGPTに調べさせた判例を裁判所に提出したが、その判例は存在しなかった。6月、裁判所は制裁金5000ドルを科した（Mata v. Avianca事件）。

知らないことも、もっともらしく作る。これを[ハルシネーション]({{ '/literacy/hallucination/' | relative_url }})（幻覚）という。2023年2月の新しいBingは、先に検索してから答え、出典を示した。これが②「検索して答える」（[RAG]({{ '/literacy/rag/' | relative_url }})）の始まりである。

### ③ 見る・聞く・話す：急加速と、ブレーキの声

{% include slide.html src="s22.jpg" cap="2023年。" %}

[2023年3月のGPT-4](https://arxiv.org/abs/2303.08774)は、司法試験の模擬問題で、受験者の上位10%前後の成績をとったと発表された（OpenAIの技術報告による）。いまから見ると大したことはないかもしれない。けれども当時の私には、AIが人間と同じような課題で、こんなに出来がいいのかという驚きがあった。

同じ月、[GPT-4より強いAIの訓練を半年止めるよう求める公開書簡](https://futureoflife.org/open-letter/pause-giant-ai-experiments/)が出た。そのまま発展させるとどうなるか分からない、一度止まって考えよう、という呼びかけである。イーロン・マスクも署名した。ただ、後で分かったことだが、マスクはその直前に自分のAI会社xAIの登記を済ませていた。止めようと言いながら、自分では進めようとしていたことになる。

[9月にはChatGPTが画像を読み、声で会話できるようになった](https://openai.com/index/chatgpt-can-now-see-hear-and-speak/)（[マルチモーダル]({{ '/literacy/multimodal/' | relative_url }})）。ただし、このころの音声は、声を文字に起こしてから理解し、答えを読み上げる仕組みだった。11月にはOpenAIの取締役会がCEOのアルトマンを突然解任し、社員の大半が辞職をちらつかせたことで、5日後に復帰した。12月にはGoogleが、最初から画像や音声も扱う設計のGeminiを出した。根底からマルチモーダルなので、Geminiは今でも画像や音声が得意である。

### ④ 話すAIから、考えるAIへ

[2024年5月のGPT-4o](https://openai.com/index/hello-gpt-4o/)は、文字起こしを経ずに、音声のまま人と同じテンポで会話できるようになった。完璧ではなかったが、ちゃんと応答してくれたのは、私にとってびっくりした体験だった。[6月にはAnthropicのClaude 3.5 Sonnetが出て](https://www.anthropic.com/news/claude-3-5-sonnet)、文章とコードで評価を集め始めた。

{% include media.html key="gpt4o-spring-update" %}

[9月のOpenAIのo1](https://openai.com/index/learning-to-reason-with-llms/)は、答える前に、内部で長い「思考の連鎖」（[CoT]({{ '/literacy/cot/' | relative_url }})）を書いてから答える。直接答えるのではなく、考えてから答える。これで数学の正答率が急に上がった。こうしたモデルを[推論モデル]({{ '/literacy/reasoning-model/' | relative_url }})と呼ぶ。

10月には、ノーベル物理学賞がホップフィールドとヒントンに、化学賞がタンパク質の構造を予測するAlphaFoldのハサビスとジャンパーらに贈られた。物理学賞も化学賞も、AIに関係する研究だった。受賞したヒントンが8年前に何を予言していたかは、[予言はどこまで当たったか]({{ '/articles/predictions/' | relative_url }})で取り上げる。同じ10月、[Claudeが画面を見てマウスとキーボードを動かす機能を試験版で出した](https://www.anthropic.com/news/3-5-models-and-computer-use)。AIがPCを操作したのは、これが初めてである。11月には、AIと外部の道具をつなぐ共通規格[MCP]({{ '/literacy/mcp/' | relative_url }})も出た。

### ⑤ AIが「作業」を始める

{% include slide.html src="s26.jpg" cap="2025年。" %}

[2025年1月、中国のDeepSeekが推論モデルDeepSeek-R1を公開した](https://arxiv.org/abs/2501.12948)。R1のRはReasoning（推論）のRで、OpenAIのo1に続く推論モデルだった。これは誰でもダウンロードして自分のサーバーに置き、調整できる公開モデル（[オープンウェイト]({{ '/literacy/open-weight/' | relative_url }})）である。安く作れたという報道で、AI半導体の需要に疑問が出て、1週間後にはNVIDIAの時価総額が1日で約5900億ドル減った。

{% include media.html key="trump-stargate" %}

[2月にはDeep Researchが出た](https://openai.com/index/introducing-deep-research/)。AIが自分で何十ものサイトを調べ、出典つきの報告書を書いて持ってくる。[エージェント]({{ '/literacy/agent/' | relative_url }})という言葉が広く知られるようになったのは、このころからだと思う。[同じ月のClaude Codeは、自分でコードを書き、動かし、直す](https://www.anthropic.com/news/claude-3-7-sonnet)。3月には、中国発の「汎用エージェント」Manusが、仕事を丸ごと任せるデモで話題になった。

8月にGPT-5が出たとき、GPT-4oなどの旧モデルが一斉に外された。すると「4oを返して」という声が上がり、[OpenAIは一部を復活させた](https://openai.com/index/retiring-gpt-4o-and-older-models/)。この話は2026年2月の#Keep4oにつながる。詳しくは[一列に並べると「進歩」に見える]({{ '/articles/march-of-progress/' | relative_url }})に書いた。

### ⑥ 「ロブスターを飼う」時代

{% include slide.html src="s30.jpg" cap="2025年11月〜2026年3月。" %}

2025年11月、オーストリアの開発者が、個人で作ったオープンソースの、PCを操作するAI「OpenClaw」を公開した。中国では通称「小龍蝦（ロブスター）」と呼ばれ、インストールすることを「ロブスターを飼う」と言った。2026年3月には、深圳で「ロブスター」を入れてもらうために約1000人が並んだ。

[2026年1月のClaude Cowork](https://www.anthropic.com/news/introducing-anthropic-labs)は、プログラマーでない人も、PCの作業をAIに任せられるようにした（[PC操作]({{ '/literacy/computer-use/' | relative_url }})）。ちなみに、このページの元になった資料も、こうした道具を使って作っている。

## 言葉の変化：「どう聞くか」から「どんな環境を作るか」へ

{% include slide.html src="s28.jpg" cap="2022年から2026年までの、AIの使い方を表す言葉の変化。" %}

この4年で、AIの使い方を表す言葉も変わってきた。

最初は[プロンプト]({{ '/literacy/prompt/' | relative_url }})だった。プロンプトを共有したり、「どんなプロンプトでやっているんですか」と聞き合ったりした。どう聞くか、である。言葉の扱いがうまい人文系の人をプロンプトのために雇う、という話もあった。

2024年には「プロンプト工学は死んだ」と言われた。以前は「あなたは〇〇の専門家です」と役割を与えると、それらしいふるまいをしてくれた。いまはそうしなくても、審査してほしい文章を渡すだけで、AIは何をすべきかを分かってくれる。

2025年には[コンテキスト]({{ '/literacy/context/' | relative_url }})工学が言われるようになった。何を見せるか、である。AIが一度に読める量は百万トークンほどにまで増え、本を丸ごと渡せるようになった。ところが、その中に関係のない情報や、矛盾した情報まで入れると、AIは混乱する。「最新の生成AIについて調べて」と頼んでも古い情報を引っ張ってくるのは、必要のない情報が混ざっているからである。何を入れ、何を入れないかが大事になった。

[2025年10月には](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills)[スキル]({{ '/literacy/skills/' | relative_url }})が出てきた。やり方の手順書をまとめておくと、その通りにやってくれる。ただし、書いた通りに動いてくれるとは限らない。勝手に別のルートで進め、聞いても「言われた通りやりました」と言ってくることもある。スキルは短い方がいい。長くなると、注意が分散するからである。

[2026年には](https://openai.com/index/harness-engineering/)[ハーネス]({{ '/literacy/harness/' | relative_url }})という言葉が使われるようになった。働く環境ごと設計する、という考え方で、どの道具を使ってよいか、ネットにつないでよいかなどを決める。制限することで、かえってよく働いてくれる。

質的研究にたとえると、「質問のしかた」から「調査の場と手順の設計」へ、という変化に近い。言葉の変化は、人とAIの協働のしかたの変化でもある。

## 三社が、ほぼ同時に新しいモデルを出した

{% include slide.html src="s33.jpg" cap="2026年9月。モデルの名前にも、会社の気質が出る。" %}

2026年9月には、三社がひと月のうちに新しいモデルを出した。[1日にClaude Fable 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)、[3日にGPT-6 Astra](https://openai.com/index/gpt-6-astra/)、[30日にGemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)である。

名前の付け方を比べると、会社の気質が見えるように思う。OpenAIは天体で、Astra（星々）が最上位、Sol（太陽）、Terra（地球）、Luna（月）と続く。AnthropicはHaiku（俳句）・Sonnet（十四行詩）・Opus（大作）のように、詩や作品の長さで大小を表し、最上位はFableやMythos（寓話、神話）である。私がいま一番使っているのはOpusで、Haikuはいちばん小さく、速く、安い。GoogleのGeminiはラテン語で「双子」を意味し、Google BrainとDeepMindという二つのチームが合併して作ったことにちなむ。

三社のトップがそれぞれ何を言い、何をしてきたかは、[予言はどこまで当たったか]({{ '/articles/predictions/' | relative_url }})にまとめた。

## 参考文献

- Levy, S. (2024, March). [8 Google employees invented modern AI. Here's the inside story.](https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/) *WIRED*.
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. In *Advances in Neural Information Processing Systems 30* (NIPS 2017).

そのほかの日付と出来事は、各社の発表と報道による（2026年10月時点）。
