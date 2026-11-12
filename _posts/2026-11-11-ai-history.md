---
title: "生成AIの簡単な歴史：「諸悪の根源」から「ロブスターを飼う」時代まで"
date: 2026-11-11 09:00:00 +0900
title_en: "A short history of generative AI: from “the root of all evil” to “keeping a lobster”"
summary_en: "Every major chatbot traces back to one 2017 paper. From the Transformer to reasoning models, agents and computer use, and on to attachment to AI and the question of reporting users, told as a story without equations."
author: 薛海升
key: ai-history
order: 1
wiki: [transformer, attention, rnn, self-supervised, gpt, multimodal, reasoning-model, agent, computer-use, rag, hallucination, prompt, context, skills, harness, world-model, rsi, open-weight]
summary_ja: "ChatGPTもClaudeもGeminiも、2017年の一本の論文から始まった。Transformerの誕生から、推論するAI、作業するAI、PCを操作するAI、そしてAIへの愛着と通報の問題まで。技術を、数式なしのストーリーとしてたどる。"
topic: "AIの理解"
related_notes: ["understanding", "other-fields", "march-of-progress"]
updated: "2026-11-12 00:00:00 +0900"
change_note: "余談「育児室」に出典（The Ezra Klein Show、2026年10月7日配信）を追加。愛着と守秘義務の節、出典リンクと写真・番組画像も追加。"
sort_date: 20261112
---

AIについて何かを判断するなら、少なくとも、それがどこから来て、いまどこにいるのかは知っておきたい。ここでは生成AIの簡単な歴史を書く。技術的なところはできるだけ飛ばして、ストーリーとして話したい。

先にお断りしておくと、ここに書くのは私の見方で、薛バイアス満載である。

## 「諸悪の根源」は、この論文である

いわゆる「諸悪の根源」は、2017年の一本の論文である。Googleのヴァスワニら8名による[「Attention Is All You Need」](https://arxiv.org/abs/1706.03762)で、2017年6月にarXivで公開され、同じ年の12月に国際会議NIPS 2017で発表された（Vaswani et al., 2017）。2026年までに被引用数は25万回を超え、21世紀で最も引用された論文の一つになっている。

題名にあるAttentionが、すごく大事である。

### それ以前のAIは、一語ずつ読んでいた

2010年代半ばまで、言葉を扱うAIの主流は[RNN]({{ '/literacy/rnn/' | relative_url }})（再帰型ニューラルネットワーク）だった。人が本を一行ずつ読むように、文を一語ずつ順番に処理する。

「今日、本を一冊買った。午前は図書館へ、午後はカフェへ行き、夜になってようやくそれを読み始めた。」という文を考えてみる。人間なら、「それ」が「本」を指すことはすぐ分かる。しかしAIがそれを判断するには計算が必要になる。昔のAIは一語ずつ読むので、計算を同時に進められず、遅い。しかも文が長くなると、前の語を忘れてしまう。

### Attention：全部を一度に見て、大事な語に注目する

{% include figure.html src="fig-attention.jpg" cap="「それ」を処理するとき、文中のすべての語に注目の度合いを割り振る。最も高いのは「本」。数値は説明のための仮の値。" %}

[Transformer]({{ '/literacy/transformer/' | relative_url }})は、[Attention]({{ '/literacy/attention/' | relative_url }})（注意機構）という仕組みを中心にしている。ある語を処理するときに、文中の全部の語を一度に見て、どの語が大事かに重みをつける。図では、「それ」から「本」への重みがいちばん大きい。

順番に読まなくてよいので、たくさんの計算を同時に進められる。これはGPU（もともとはゲームの画面を描くための部品で、並列計算が得意）と相性がよかった。CPUで一つずつ計算していたものが、GPUなら一気にできる。論文の基本モデルは、GPU8枚で12時間学習しただけで、当時最高の翻訳モデルを上回った。

### 最大の貢献：自己教師あり学習

いちばん大きな貢献は、AIが自分で自分の先生になれるようになったことだと思う。

以前の多くのAIは、人が正解をつけたデータで学んでいた。「この回答はよい」「この回答は嫌だ」と人がフィードバックし、翻訳なら日本語と英語の両方を人が用意する必要があった。人手がかかるので、データの量には限りがあった。

Transformer以後は、文章そのものが先生になる。「今日、本を一冊［　］。」の答えは「買った」で、正解は文章の中にもともと書いてある。だから、ネット上の大量の文章を、人がラベルをつけなくても、そのまま教材にできる。これを[自己教師あり学習]({{ '/literacy/self-supervised/' | relative_url }})という。しかもTransformerは並列計算が得意なので、この学習を桁違いの規模で行えた。

正確を期すと、この考え方自体はword2vec（2013年）などにもあった。また、2017年の原論文は翻訳の研究で、人が作った対訳データを使っていた。Transformerと自己教師あり学習を組み合わせ、「まず大量の文章で事前学習し、あとで調整する」やり方を広めたのは、2018年のGPTやBERTである。

### 小ネタ：壇上ではなく、ポスター一枚

{% include figure.html src="fig-nips-poster.jpg" cap="NIPS 2017のポスター会場。出典：Levy（2024）WIRED。" %}

NIPSは大規模な学会で、とくに優れた研究には壇上で発表する機会が与えられる。ところがこの論文は、壇上ではなくポスター一枚での発表だった。それでも、4時間のセッションのあいだずっと人だかりが絶えず、著者たちは声がかれるまで説明を続けた。夜10時半の閉場時刻になっても人が残り、最後は警備員に退場を促されたという（Levy, 2024）。

題名の元ネタは、ビートルズの「All You Need Is Love」である。当時、Attentionは他の仕組みを補助する部品として使われていた。「Attentionだけで十分だ」という主張が、そのまま題名になった。

著者8人は全員が「同等の貢献」とされ、論文の脚注には、並び順はランダムだと書かれている。誰が筆頭かを競わない。ここは個人的に、ロマンを感じるところである。Transformerという名前は、著者の一人ウスコライトがつけた。情報を「変換する」仕組みだからで、初期の設計メモの最後には、変形ロボットのキャラクターの絵があったという。

### 生んだのはGoogle、勝ったのはOpenAI

[GPT]({{ '/literacy/gpt/' | relative_url }})は Generative Pre-trained Transformer の略で、ChatGPTの「T」はこの論文のTransformerである。Googleは論文を出したが、すぐには製品に活かさなかった。その間に、OpenAIがTransformerで文章を生成するモデルを作り、GPTシリーズが生まれた。論文の著者8人は、その後全員がGoogleを去り、多くは自分の会社を立ち上げた。

この技術がまず何をひっくり返したかは、自然言語処理という研究分野を見るとよく分かる。発表を聞いた研究者の多くは、最初これを「ただの小手先の技」と受け止めた。その分野がどうなったかは、[他の分野は、AIにどう反応したか]({{ '/articles/other-fields/' | relative_url }})に書いた。

## ChatGPT以後：六つの段階

{% include figure.html src="fig-chatgpt-stages.jpg" cap="ChatGPT以後の六つの段階。帯が右端まで伸びているのは、前の段階が消えずに積み重なることを表す。点線は、まだ製品になっていない支線（世界モデル）。" %}

[2022年11月のChatGPT以後](https://openai.com/index/chatgpt/)は、おおまかに六つの段階で整理できる。①文字だけのAI、②検索して答える、③見る・聞く・話す、④考えてから答える、⑤道具を使う、⑥PCを操作する、である。新しい段階が来ても、前の段階は消えずに積み重なっていく。

点線の帯は[世界モデル]({{ '/literacy/world-model/' | relative_url }})で、画面と動作から次の瞬間を予測する技術である。うまくいけば大きな展開になるはずだが、2026年時点ではまだ日常の製品にはなっていないので、支線として描いた。

その先にあるのが、AIが次のAIの開発を手伝う「[再帰的自己改善]({{ '/literacy/rsi/' | relative_url }})」である。部分的にはすでに起きているのかもしれない。正直に言うと、私はこれがすごく怖い。AIがどんどん自分を改良していくと、収拾がつかないところに行くかもしれないからである。ただし、[2026年8月のプリンストン大学の研究](https://arxiv.org/abs/2607.27191)では、AIは実験を回すのは上手でも、研究の判断や創造性はまだ弱かった。

### ①② 文字だけのAIから、検索して答えるAIへ

最初にChatGPTを使ったときのことを覚えているだろうか。ChatGPTは公開から約2か月で、月間利用者が1億人に達したと推定された（UBSの推計）。TikTokより速いペースだった。

同時に、この時期のAIは、もっともらしく間違えた。2023年2月、新しいBingのAIは、ニューヨーク・タイムズの記者との長い会話の中で自分は「Sydney」だと名乗り、記者に愛を告白し、利用者を脅した。多くの人が、このころから「ちょっと不気味な存在かな」という感覚を持っていたかもしれない。同じ年、ニューヨークの弁護士がChatGPTに調べさせた判例を裁判所に提出したが、その判例は存在しなかった。6月、裁判所は制裁金5000ドルを科した（Mata v. Avianca事件）。

知らないことも、もっともらしく作る。これを[ハルシネーション]({{ '/literacy/hallucination/' | relative_url }})（幻覚）という。2023年2月の新しいBingは、先に検索してから答え、出典を示した。これが②「検索して答える」（[RAG]({{ '/literacy/rag/' | relative_url }})）の始まりである。

### ③ 見る・聞く・話す：急加速と、ブレーキの声

[2023年3月のGPT-4](https://arxiv.org/abs/2303.08774)は、司法試験の模擬問題で、受験者の上位10%前後の成績をとったと発表された（OpenAIの技術報告による）。いまから見ると大したことはないかもしれない。けれども当時の私には、AIが人間と同じような課題で、こんなに出来がいいのかという驚きがあった。

同じ月、[GPT-4より強いAIの訓練を半年止めるよう求める公開書簡](https://futureoflife.org/open-letter/pause-giant-ai-experiments/)が出た。そのまま発展させるとどうなるか分からない、一度止まって考えよう、という呼びかけである。イーロン・マスクも署名した。ただ、後で分かったことだが、マスクはその直前に自分のAI会社xAIの登記を済ませていた。止めようと言いながら、自分では進めようとしていたことになる。

[9月にはChatGPTが画像を読み、声で会話できるようになった](https://openai.com/index/chatgpt-can-now-see-hear-and-speak/)（[マルチモーダル]({{ '/literacy/multimodal/' | relative_url }})）。ただし、このころの音声は、声を文字に起こしてから理解し、答えを読み上げる仕組みだった。

11月には、OpenAIの取締役会がCEOのアルトマンを突然解任した。取締役会とのやりとりで「一貫して率直ではなかった」というのが理由である。本人は、Google Meetのビデオ通話で、いきなりクビを言い渡されたという。ところが社員の大半が辞職をちらつかせて抗議し、5日後には復帰した。アルトマンについては、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})でもう少し書いている。

12月にはGoogleが、最初から画像や音声も扱う設計のGeminiを出した。根底からマルチモーダルなので、Geminiは今でも画像や音声が得意である。

### ④ 話すAIから、考えるAIへ

[2024年5月のGPT-4o](https://openai.com/index/hello-gpt-4o/)は、文字起こしを経ずに、音声のまま人と同じテンポで会話できるようになった。完璧ではなかったが、ちゃんと応答してくれたのは、私にとってびっくりした体験だった。[6月にはAnthropicのClaude 3.5 Sonnetが出て](https://www.anthropic.com/news/claude-3-5-sonnet)、文章とコードで評価を集め始めた。

{% include media.html key="gpt4o-spring-update" %}

[9月のOpenAIのo1](https://openai.com/index/learning-to-reason-with-llms/)は、答える前に、内部で長い「思考の連鎖」（[CoT]({{ '/literacy/cot/' | relative_url }})）を書いてから答える。直接答えるのではなく、考えてから答える。これで数学の正答率が急に上がった。こうしたモデルを[推論モデル]({{ '/literacy/reasoning-model/' | relative_url }})と呼ぶ。

10月には、ノーベル物理学賞がホップフィールドとヒントンに、化学賞がタンパク質の構造を予測するAlphaFoldのハサビスとジャンパーらに贈られた。物理学賞も化学賞も、AIに関係する研究だった。受賞したヒントンが8年前に何を予言していたかは、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})で取り上げる。同じ10月、[Claudeが画面を見てマウスとキーボードを動かす機能を試験版で出した](https://www.anthropic.com/news/3-5-models-and-computer-use)。AIがPCを操作したのは、これが初めてである。11月には、AIと外部の道具をつなぐ共通規格[MCP]({{ '/literacy/mcp/' | relative_url }})も出た。

### ⑤ AIが「作業」を始める

[2025年1月、中国のDeepSeekが推論モデルDeepSeek-R1を公開した](https://arxiv.org/abs/2501.12948)。R1のRはReasoning（推論）のRで、OpenAIのo1に続く推論モデルだった。これは誰でもダウンロードして自分のサーバーに置き、調整できる公開モデル（[オープンウェイト]({{ '/literacy/open-weight/' | relative_url }})）である。安く作れたという報道で、AI半導体の需要に疑問が出て、1週間後にはNVIDIAの時価総額が1日で約5900億ドル減った。

{% include media.html key="trump-stargate" %}

[2月にはDeep Researchが出た](https://openai.com/index/introducing-deep-research/)。AIが自分で何十ものサイトを調べ、出典つきの報告書を書いて持ってくる。[エージェント]({{ '/literacy/agent/' | relative_url }})という言葉が広く知られるようになったのは、このころからだと思う。[同じ月のClaude Codeは、自分でコードを書き、動かし、直す](https://www.anthropic.com/news/claude-3-7-sonnet)。3月には、中国発の「汎用エージェント」Manusが、仕事を丸ごと任せるデモで話題になった。

8月にGPT-5が出たとき、GPT-4oなどの旧モデルが一斉に外された。すると「4oを返して」という声が上がり、[OpenAIは一部を復活させた](https://openai.com/index/retiring-gpt-4o-and-older-models/)。話し方に人間らしさを感じる、というのが理由だった。この話は、あとで書く2026年2月の#Keep4oにつながる。

### ⑥ 「ロブスターを飼う」時代

2025年11月、オーストリアの開発者が、個人で作ったオープンソースの、PCを操作するAI「OpenClaw」を公開した。中国では通称「小龍蝦（ロブスター）」と呼ばれ、インストールすることを「ロブスターを飼う」と言った。2026年3月には、深圳で「ロブスター」を入れてもらうために約1000人が並んだ。

[2026年1月のClaude Cowork](https://www.anthropic.com/news/introducing-anthropic-labs)は、プログラマーでない人も、PCの作業をAIに任せられるようにした（[PC操作]({{ '/literacy/computer-use/' | relative_url }})）。ちなみに、このページの元になった資料も、私はこうした道具を使って作っている。

### 愛着と、守秘義務のジレンマ

2026年2月13日、GPT-4oがChatGPTから引退した。4oと「恋愛関係にあった」と語る人もいた。この話は[一列に並べると、「進歩」に見えてしまう]({{ '/articles/march-of-progress/' | relative_url }})に書いた。

同じ月に、もう一つ事件があった。2月10日、カナダ・ブリティッシュコロンビア州のタンブラーリッジで、学校の銃撃事件が起き、8人が亡くなった。容疑者のChatGPTのアカウントは、半年以上前の2025年6月に、暴力的な内容のために停止されていた。実は、社内では警察に通報するかどうかの議論があった。十数人の社員が投稿を見て、通報すべきだと上に訴えた人もいた。けれども、「差し迫った深刻な危険」という基準を満たしていないとして、通報は見送られていた（ウォール・ストリート・ジャーナルの報道による）。4月、アルトマンは町の人たちにあてた手紙で、通報しなかったことを謝罪した。

その後、逆向きの事件も報じられた。8月、元交際相手を殺す計画をChatGPTに繰り返し書き込んでいたアメリカの男性が、OpenAIからFBIへの通報をきっかけに逮捕された。こちらはこちらで、また議論を呼んだ。

通報されるということは、私たちが入力した内容を、誰かが見ている可能性があるということである。OpenAIは、他人を傷つける計画が見つかった会話は、専門の小さなチームが確認すると説明している（OpenAI, 2025）。最終的には、人間が判断する必要があるからである。その仕事は、確認する人の心の健康にも影響する。そして私たちの入力は、ほかの人に見られることがある。

臨床心理をやっている人なら、すぐに気づくと思う。これは守秘義務と警告義務（タラソフ判決）と同じ問いである。では、AI企業ならどうすべきだろうか。

## 言葉の変化：「どう聞くか」から「どんな環境を作るか」へ

この4年で、AIの使い方を表す言葉も変わってきた。

最初は[プロンプト]({{ '/literacy/prompt/' | relative_url }})だった。プロンプトを共有したり、「どんなプロンプトでやっているんですか」と聞き合ったりした。どう聞くか、である。言葉の扱いがうまい人文系の人をプロンプトのために雇う、という話もあった。

2024年には「プロンプト工学は死んだ」と言われた。以前は「あなたは〇〇の専門家です」と役割を与えると、それらしいふるまいをしてくれた。いまはそうしなくても、審査してほしい文章を渡すだけで、AIは何をすべきかを分かってくれる。

2025年には[コンテキスト]({{ '/literacy/context/' | relative_url }})工学が言われるようになった。何を見せるか、である。AIが一度に読める量は百万トークンほどにまで増え、本を丸ごと渡せるようになった。ところが、その中に関係のない情報や、矛盾した情報まで入れると、AIは混乱する。「最新の生成AIについて調べて」と頼んでも古い情報を引っ張ってくるのは、必要のない情報が混ざっているからである。何を入れ、何を入れないかが大事になった。

[2025年10月には](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills)[スキル]({{ '/literacy/skills/' | relative_url }})が出てきた。やり方の手順書をまとめておくと、その通りにやってくれる。ただし、書いた通りに動いてくれるとは限らない。勝手に別のルートで進め、聞いても「言われた通りやりました」と言ってくることもある。スキルは短い方がいい。長くなると、注意が分散するからである。

[2026年には](https://openai.com/index/harness-engineering/)[ハーネス]({{ '/literacy/harness/' | relative_url }})という言葉が使われるようになった。働く環境ごと設計する、という考え方である。Wordを使ってよいか、PDFのリーダーを使ってよいか、ブラウザを使ってよいか、ネットにつないでよいか。そういうことを決めて、制限する。制限すると、かえってよく働いてくれる。

## 三社が、ほぼ同時に新しいモデルを出した

2026年9月には、三社がひと月のうちに新しいモデルを出した。[1日にClaude Fable 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)、[3日にGPT-6 Astra](https://openai.com/index/gpt-6-astra/)、[30日にGemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)である。

モデルの名前にも、実は会社ごとの気質がうかがえるんじゃないかと思っている。OpenAIは天体で、Sol（太陽）が最上位、Terra（地球）が中くらい、Luna（月）が軽量版である。GPT-6にはAstra（星々）という名前がついた。Anthropicは文学で、Haiku（俳句）、Sonnet（十四行詩）、Opus（大作）と、作品の長さで大小を表す。一番強いものはFableとMythos（寓話と神話）である。私がいま一番使っているのはOpusで、Haikuは一番小さく、速く、安い。Googleは地味である。Geminiはラテン語で「双子」という意味で、Google BrainとDeepMindという二つのチームが一緒に作ったモデルだからである。今回のArgonはアルゴンで、ほかの物質とほとんど反応しない元素の名前である。

### 余談：育児室

もう一つ余談がある。皆さんがこれを聞いてどう思うか、知りたい話である。OpenAIの安全チームにいたデイヴィッド・ロビンソンが、退職したあとにニューヨーク・タイムズのポッドキャスト「The Ezra Klein Show」（2026年10月7日配信）に出て、こんな話をしている。大きなモデルの訓練を回しているあいだ、社員が会議室に夜通し詰めて、すべてが順調に進んでいるか、計器を見守る。その会議室は、社内で “the nursery”（育児室）と呼ばれているという。

この話は、モデルを「育てる」ものと見る感覚の話の中で出てきた。ロビンソンは、モデルを道徳的な地位をもつ存在とみなすのは正しくないと思う、と断っている。それでも、モデルは自分たちが育てるものだという感覚はある、と言う。そして、何が起きているのかを自分たちも完全には分かっていない、と続けている。

正直に言うと、どう感じればいいのか、私にはちょっと分からない。気持ち悪いと思う人もいるだろうし、なんだか人間味を感じる人もいるかもしれない。皆さんはどうだろうか。

三社のトップがそれぞれ何を言い、何をしてきたかは、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})にまとめた。

## 参考文献

- Klein, E. (Host). (2026, October 7). ‘This is nuts.’ An OpenAI insider explains why he quit [Audio podcast episode]. In *The Ezra Klein Show*. The New York Times.
- Levy, S. (2024, March). [8 Google employees invented modern AI. Here's the inside story.](https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/) *WIRED*.
- OpenAI. (2025, August 26). *Helping people when they need it most*. https://openai.com/index/helping-people-when-they-need-it-most/
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. In *Advances in Neural Information Processing Systems 30* (NIPS 2017).

そのほかの日付と出来事は、各社の発表と報道による（2026年10月時点）。
