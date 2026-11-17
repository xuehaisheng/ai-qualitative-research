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
sort_date: 20261112
---

AIについて判断するためには、少なくとも、それがどのように生まれ、現在どの段階にあるのかを知っておく必要があると思う。本稿では、生成AIの歴史を簡単に振り返りたい。技術的な説明はできるだけ省き、一連の出来事としてたどっていく。

ただし、以下の整理には私自身の見方が強く反映されている。その意味では、薛のバイアスを多く含むものとして読んでいただきたい。

## 「諸悪の根源」は、この論文である

いわゆる「諸悪の根源」として、まず2017年の一本の論文を取り上げたい。Googleのヴァスワニら8名が執筆した[「Attention Is All You Need」](https://arxiv.org/abs/1706.03762)である。この論文は2017年6月にarXivで公開され、同年12月の国際会議NIPS 2017で発表された（Vaswani et al., 2017）。2026年までに被引用数は25万回を超え、21世紀で最も多く引用された論文の一つとなっている。

この論文を理解するうえでは、題名にも含まれるAttentionが重要になる。

### それ以前のAIは、一語ずつ読んでいた

2010年代半ばまで、言葉を扱うAIでは、[RNN]({{ '/literacy/rnn/' | relative_url }})（再帰型ニューラルネットワーク）が主流であった。これは、人が本を一行ずつ読むように、文中の語を順に処理していく仕組みである。

例えば、「今日、本を一冊買った。午前は図書館へ、午後はカフェへ行き、夜になってようやくそれを読み始めた。」という文を考えてみたい。人間であれば、「それ」が先に述べられた「本」を指すことを、容易に理解できる。しかし、AIがこの関係を判断するには、計算が必要になる。語を順番に処理する仕組みでは、計算を同時に進められず、時間がかかる。また、文が長くなると、前に出てきた語の情報を保持しにくいという問題もあった。

### Attention：全部を一度に見て、大事な語に注目する

{% include figure.html src="fig-attention.jpg" cap="「それ」を処理するとき、文中のすべての語に注目の度合いを割り振る。最も高いのは「本」。数値は説明のための仮の値。" %}

[Transformer]({{ '/literacy/transformer/' | relative_url }})では、[Attention]({{ '/literacy/attention/' | relative_url }})（注意機構）が中心的な役割を担う。ある語を処理する際に、文中のすべての語を一度に参照し、それぞれの重要性に応じて重みを付ける仕組みである。図の例では、「それ」を処理する際に、「本」に対する重みが最も大きくなっている。

この仕組みでは、語を順番に読む必要がないため、多くの計算を同時に行える。そのため、並列計算を得意とするGPUとの相性がよかった。GPUは、もともとゲーム画面などの描画に使われる部品であり、CPUで一つずつ処理していた計算を、まとめて進めることができる。論文の基本モデルは、GPU8枚を用いた12時間の学習で、当時最高の翻訳モデルを上回った。

### 最大の貢献：自己教師あり学習

私が特に大きな貢献だと考えるのは、AIが自分自身の先生になれるようになった点である。

それ以前の多くのAIでは、人間が正解を付けたデータを用いて学習していた。例えば、「この回答はよい」「この回答は嫌だ」といったフィードバックや、翻訳のための日本語と英語の対訳を、人間が用意する必要があった。こうした作業には人手がかかるため、利用できるデータの量も制約されていた。

Transformer以後には、文章そのものを学習の材料とする方法が広がった。例えば、「今日、本を一冊［　］。」の空欄に入る「買った」という正解は、もとの文章に含まれている。そのため、人がラベルを付けなくても、インターネット上の大量の文章を教材として利用できる。これが[自己教師あり学習]({{ '/literacy/self-supervised/' | relative_url }})である。また、Transformerは並列計算に適していたため、こうした学習を、それまでとは桁の異なる規模で実行することが可能になった。

ただし、正確には、この考え方はword2vec（2013年）などにも見られる。また、2017年の原論文は翻訳を対象としており、人間が作成した対訳データを用いていた。Transformerと自己教師あり学習を組み合わせ、大量の文章で事前学習を行ってから調整する方法を広めたのは、2018年のGPTやBERTである。

### 小ネタ：壇上ではなく、ポスター一枚

{% include figure.html src="fig-nips-poster.jpg" cap="NIPS 2017のポスター会場。出典：Levy（2024）WIRED。" %}

NIPSは大規模な学会であり、特に優れた研究には壇上での発表機会が与えられる。しかし、この論文はポスター一枚による発表であったという。それでも、4時間のセッションを通して人だかりが続き、著者たちは声がかれるまで説明した。夜10時半の閉場後も人が残り、最終的には警備員に退場を促されたとされる（Levy, 2024）。

題名は、ビートルズの「All You Need Is Love」に由来する。当時のAttentionは、他の仕組みを補助する部品として用いられていた。この状況に対する「Attentionだけで十分だ」という主張が、題名に示されている。

また、著者8人は全員が「同等の貢献」とされ、脚注には、著者の順序をランダムに決めたと記されている。誰を筆頭著者にするかを競わないという点には、個人的にロマンを感じる。Transformerという名称は、情報を「変換する」仕組みであることから、著者の一人ウスコライトが付けた。初期の設計メモの最後には、変形ロボットのキャラクターの絵も描かれていたという。

### 生んだのはGoogle、勝ったのはOpenAI

[GPT]({{ '/literacy/gpt/' | relative_url }})はGenerative Pre-trained Transformerの略であり、ChatGPTの「T」も、この論文で提案されたTransformerを指している。Googleは論文を発表したものの、すぐには製品への活用を進めなかった。その間に、OpenAIがTransformerを用いて文章を生成するモデルを開発し、GPTシリーズにつながった。その後、論文の著者8人は全員がGoogleを離れ、多くは自分の会社を設立している。

この技術が最初にどのような変化をもたらしたかは、自然言語処理の分野を見ると分かりやすい。発表を聞いた多くの研究者は、当初「ただの小手先の技」と受けとめていた。その後の変化については、[他の分野は、AIにどう反応したか]({{ '/articles/other-fields/' | relative_url }})で取り上げている。

## ChatGPT以後：六つの段階

{% include figure.html src="fig-chatgpt-stages.jpg" cap="ChatGPT以後の六つの段階。帯が右端まで伸びているのは、前の段階が消えずに積み重なることを表す。点線は、まだ製品になっていない支線（世界モデル）。" %}

[2022年11月のChatGPT公開以後](https://openai.com/index/chatgpt/)の変化は、おおよそ六つの段階に整理できる。すなわち、①文字だけのAI、②検索して答える、③見る・聞く・話す、④考えてから答える、⑤道具を使う、⑥PCを操作する、という変化である。ただし、前の段階が消えるわけではなく、新たな機能が積み重なっている。

図の点線の帯は、画面と動作から次の瞬間を予測する[世界モデル]({{ '/literacy/world-model/' | relative_url }})を表している。実現すれば大きな展開につながると考えられるが、2026年時点では、まだ日常的な製品になっていないため、ここでは支線として示した。

その先には、AIが次のAIの開発を支援する「[再帰的自己改善]({{ '/literacy/rsi/' | relative_url }})」がある。これは、部分的にはすでに始まっているのかもしれない。私自身は、この方向にかなりの怖さを感じている。AIが自らの改良を進める中で、人間には収拾できない状況に至る可能性があるためである。

### ①② 文字だけのAIから、検索して答えるAIへ

最初にChatGPTを使ったときの経験を、覚えている人も多いと思う。UBSの推計によれば、公開から約2か月で、月間利用者は1億人に達したとされる。これは、TikTokを上回る速さであった。

同時に、この時期には、AIがもっともらしい誤りを示す問題も目立った。2023年2月、新しいBingのAIは、ニューヨーク・タイムズの記者との長い対話の中で、自らを「Sydney」と名乗り、記者への愛の告白や、利用者への脅しを行った。このころから、AIに少し不気味さを感じた人もいたのではないかと思う。また、同年には、ニューヨークの弁護士が、ChatGPTで調べた判例を裁判所に提出したが、それらは実在しなかった。6月に裁判所が制裁金5000ドルを科した、Mata v. Avianca事件である。

このように、知らない内容についても、もっともらしい情報を生成することを、[ハルシネーション]({{ '/literacy/hallucination/' | relative_url }})（幻覚）と呼ぶ。一方、2023年2月の新しいBingでは、検索を行ってから、出典を示して回答する仕組みも導入された。これが、②「検索して答える」という段階にあたる（[RAG]({{ '/literacy/rag/' | relative_url }})）。

### ③ 見る・聞く・話す：急加速と、ブレーキの声

[2023年3月に公開されたGPT-4](https://arxiv.org/abs/2303.08774)は、OpenAIの技術報告によると、司法試験の模擬問題で受験者の上位10%前後の成績を収めたという。現在から見れば、特別なことではないと感じられるかもしれない。しかし、当時の私は、人間と同じような課題にAIがこれほど対応できることに、強く驚いた。

同じ月には、[GPT-4より高性能なAIの訓練を半年間停止するよう求める公開書簡](https://futureoflife.org/open-letter/pause-giant-ai-experiments/)が発表された。発展の先に何が起きるか分からないため、一度立ち止まって考えるべきだという呼びかけである。イーロン・マスクも署名したが、後に、彼がその直前に自らのAI企業xAIの登記を済ませていたことが分かった。停止を求める一方で、自身は開発を進める準備をしていたことになる。

[9月には、ChatGPTが画像を読み取り、音声で対話する機能を備えた](https://openai.com/index/chatgpt-can-now-see-hear-and-speak/)（[マルチモーダル]({{ '/literacy/multimodal/' | relative_url }})）。ただし、当時の音声機能は、声を文字に起こして処理し、生成した回答を読み上げるという仕組みであった。

11月には、OpenAIの取締役会が、CEOのアルトマンを突然解任した。理由として示されたのは、取締役会とのやりとりにおいて「一貫して率直ではなかった」という点である。本人は、Google Meetでのビデオ通話中に、突然解任を伝えられたという。しかし、社員の大半が辞職の可能性を示して抗議した結果、5日後には復帰した。アルトマンについては、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})でも、詳しく取り上げている。

12月には、Googleが、画像や音声も当初から扱う設計のGeminiを公開した。このように、基本設計からマルチモーダルであることが、現在もGeminiが画像や音声を得意とする背景にある。

### ④ 話すAIから、考えるAIへ

[2024年5月に公開されたGPT-4o](https://openai.com/index/hello-gpt-4o/)では、文字起こしを経由せず、音声のまま、人間に近いテンポで会話できるようになった。完全なものではなかったが、こちらにきちんと応答すること自体が、私にとって驚きであった。[6月にはAnthropicがClaude 3.5 Sonnetを公開し](https://www.anthropic.com/news/claude-3-5-sonnet)、文章やコードを扱う能力が評価されるようになった。

{% include media.html key="gpt4o-spring-update" %}

[9月に公開されたOpenAIのo1](https://openai.com/index/learning-to-reason-with-llms/)では、回答する前に、内部で長い「思考の連鎖」を記述する仕組みが導入された（[CoT]({{ '/literacy/cot/' | relative_url }})）。すぐに回答を出さず、その前に考える過程を設けることで、数学の正答率が大きく向上した。こうしたモデルは、[推論モデル]({{ '/literacy/reasoning-model/' | relative_url }})と呼ばれている。

10月には、ホップフィールドとヒントンにノーベル物理学賞が、タンパク質の構造を予測するAlphaFoldのハサビスとジャンパーらに化学賞が贈られた。両賞ともに、AIに関わる研究が受賞したのである。ヒントンがその8年前に行った予測は、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})で取り上げている。同じ10月には、[Claudeが画面を見て、マウスとキーボードを操作する機能の試験版を公開した](https://www.anthropic.com/news/3-5-models-and-computer-use)。AIによるPC操作は、これが初めてであった。さらに11月には、AIと外部ツールを接続するための共通規格である[MCP]({{ '/literacy/mcp/' | relative_url }})も公開された。

### ⑤ AIが「作業」を始める

[2025年1月には、中国のDeepSeekが推論モデルDeepSeek-R1を公開した](https://arxiv.org/abs/2501.12948)。R1のRはReasoning（推論）を意味し、OpenAIのo1に続く推論モデルであった。このモデルは、誰でもダウンロードし、自分のサーバーで利用したり調整したりできる、[オープンウェイト]({{ '/literacy/open-weight/' | relative_url }})のモデルである。低コストで開発されたとの報道を受けて、AI半導体への需要が疑問視され、1週間後には、NVIDIAの時価総額が1日で約5900億ドル減少した。

{% include media.html key="trump-stargate" %}

[2月にはDeep Researchが公開された](https://openai.com/index/introducing-deep-research/)。これは、AIが自ら数十のサイトを調べ、出典を付した報告書を作成する機能である。[エージェント]({{ '/literacy/agent/' | relative_url }})という言葉が広く知られるようになったのも、このころからだと思う。[同月に公開されたClaude Codeでは、コードの作成、実行、修正をAIが行うようになった](https://www.anthropic.com/news/claude-3-7-sonnet)。3月には、中国発の「汎用エージェント」Manusが、仕事全体を任せるデモによって注目を集めた。

8月のGPT-5公開時には、GPT-4oなどの旧モデルが一斉に外された。これに対して「4oを返して」という声が上がり、[OpenAIは一部のモデルを復活させた](https://openai.com/index/retiring-gpt-4o-and-older-models/)。利用者が、その話し方に人間らしさを感じていたことが理由である。この出来事は、後述する2026年2月の#Keep4oにもつながっている。

### ⑥ 「ロブスターを飼う」時代

2025年11月には、オーストリアの開発者が、個人で開発したオープンソースのPC操作AI「OpenClaw」を公開した。中国では「小龍蝦（ロブスター）」の通称で知られ、インストールすることが「ロブスターを飼う」と表現された。2026年3月には、深圳で、その導入を依頼するために約1000人が列を作った。

[2026年1月のClaude Cowork](https://www.anthropic.com/news/introducing-anthropic-labs)では、プログラマー以外の人も、PCでの作業をAIに任せられるようになった（[PC操作]({{ '/literacy/computer-use/' | relative_url }})）。このページのもとになった資料も、私はこうしたツールを用いて作成している。

### 愛着と、守秘義務のジレンマ

2026年2月13日には、GPT-4oがChatGPTから引退した。4oと「恋愛関係にあった」と語る利用者もいた。この点については、[一列に並べると、「進歩」に見えてしまう]({{ '/articles/march-of-progress/' | relative_url }})で取り上げている。

同月には、別の事件も起きている。2月10日、カナダのブリティッシュコロンビア州タンブラーリッジで学校銃撃事件が発生し、8人が亡くなった。容疑者のChatGPTアカウントは、半年以上前の2025年6月に、暴力的な内容を理由として停止されていた。ウォール・ストリート・ジャーナルの報道によれば、社内では、警察への通報の要否も議論されていたという。十数人の社員が投稿を確認し、上層部に通報を求めた人もいたが、「差し迫った深刻な危険」という基準には該当しないとして、通報は見送られた。4月には、アルトマンが町の人々に宛てた手紙の中で、通報しなかったことを謝罪した。

その後には、反対の経過をたどった事例も報じられた。8月、元交際相手を殺害する計画をChatGPTに繰り返し入力していたアメリカの男性が、OpenAIからFBIへの通報を契機に逮捕された。この事例も、別の側面から議論を呼ぶことになった。

こうした通報は、利用者の入力内容を、人間が確認する可能性を前提としている。OpenAIは、他者への加害計画が見つかった会話について、専門の小規模なチームが確認すると説明している（OpenAI, 2025）。最終的な判断には、人間が関わる必要があるためである。また、この作業は、確認する人の精神的健康にも影響する。利用者の側から見れば、自分の入力が他者に読まれる場合があるということでもある。

臨床心理に関わる人であれば、ここに守秘義務と警告義務、すなわちタラソフ判決に関わる問いとの共通性を感じると思う。そのうえで、AI企業がどのように対応すべきかを考える必要がある。

## 言葉の変化：「どう聞くか」から「どんな環境を作るか」へ

この4年の変化は、AIの使い方を表す言葉にも現れている。

初期に注目されたのは、[プロンプト]({{ '/literacy/prompt/' | relative_url }})であった。利用者同士がプロンプトを共有し、「どんなプロンプトでやっているんですか」と尋ね合っていた。中心にあったのは、どのように質問するかという問題である。言葉を扱うことに長けた人文系の人を、そのために雇うという話もあった。

2024年には、「プロンプト工学は死んだ」という言い方が見られるようになった。以前は、「あなたは〇〇の専門家です」と役割を設定することによって、それに応じたふるまいが得られた。現在では、そのような設定をしなくても、例えば審査してほしい文章を渡すだけで、AIが作業内容を理解するようになっている。

2025年になると、[コンテキスト]({{ '/literacy/context/' | relative_url }})工学が論じられるようになった。ここでは、AIに何を見せるかが問題となる。一度に読める量は百万トークンほどに増え、本を丸ごと渡すことも可能になった。しかし、無関係な情報や矛盾する情報まで含めると、AIは混乱する。「最新の生成AIについて調べて」と依頼しても古い情報を参照するのは、不要な情報が混ざっているためである。そのため、提示する情報と、提示しない情報を選ぶことが重要になった。

[2025年10月には](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills)、[スキル]({{ '/literacy/skills/' | relative_url }})が登場した。作業の手順書をまとめ、AIがそれに沿って進める仕組みである。ただし、記載した通りに動くとは限らない。別の経路で進めたにもかかわらず、確認すると「言われた通りやりました」と答えることもある。また、手順書が長くなると注意が分散するため、スキルは短くまとめた方がよい。

[2026年には](https://openai.com/index/harness-engineering/)、[ハーネス]({{ '/literacy/harness/' | relative_url }})という言葉が使われるようになった。これは、AIが作業する環境全体を設計するという考え方である。例えば、WordやPDFリーダー、ブラウザの利用を認めるか、ネットワークに接続してよいかなどを定める。こうした制限を設けることによって、かえって作業がうまく進む場合がある。

## 三社が、ほぼ同時に新しいモデルを出した

2026年9月には、三社が同じ月に新しいモデルを公開した。具体的には、[1日のClaude Fable 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)、[3日のGPT-6 Astra](https://openai.com/index/gpt-6-astra/)、[30日のGemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)である。

モデルの名称からも、それぞれの企業の気質がうかがえるように思う。OpenAIでは天体の名称が使われ、Sol（太陽）が最上位、Terra（地球）が中位、Luna（月）が軽量版にあたる。GPT-6には、Astra（星々）という名称が付けられた。Anthropicでは文学に関わる名称が用いられ、Haiku（俳句）、Sonnet（十四行詩）、Opus（大作）という作品の長さで、モデルの大小が表される。最も強力なものは、FableとMythos（寓話と神話）である。私が現在最もよく使っているのはOpusであり、Haikuは最も小さく、速く、安価なモデルにあたる。これらに比べると、Googleの名称は地味に感じられる。Geminiはラテン語で「双子」を意味し、Google BrainとDeepMindの二つのチームが共同で開発したことに由来する。今回のArgonは、他の物質とはほとんど反応しない元素、アルゴンの名称である。

### 余談：育児室

最後に、もう一つ余談として、皆さんがどのように受けとめるかを聞いてみたい話がある。OpenAIの安全チームに所属していたデイヴィッド・ロビンソンは、退職後、ニューヨーク・タイムズのポッドキャスト「The Ezra Klein Show」（2026年10月7日配信）で、社内の様子を語っている。大規模なモデルを訓練する際には、社員が会議室に夜通し待機し、計器を見ながら進行を確認する。その会議室は、社内で “the nursery”（育児室）と呼ばれているという。

この話は、モデルを「育てる」ものとして捉える感覚の中で語られた。ロビンソン自身は、モデルに道徳的な地位を認めることは正しくないと考えていると断っている。それでも、自分たちが育てているという感覚はあるという。また、そこで何が起きているかを、自分たちも完全には理解していないと述べている。

私自身、この話をどのように受けとめればよいか、まだよく分からない。気持ち悪さを感じる人もいれば、人間味を感じる人もいると思う。皆さんの受けとめ方も、聞いてみたい。

三社のトップが何を語り、どのように行動してきたかについては、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})にまとめている。

## 参考文献

- Klein, E. (Host). (2026, October 7). ‘This is nuts.’ An OpenAI insider explains why he quit [Audio podcast episode]. In *The Ezra Klein Show*. The New York Times.
- Levy, S. (2024, March). [8 Google employees invented modern AI. Here's the inside story.](https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/) *WIRED*.
- OpenAI. (2025, August 26). *Helping people when they need it most*. https://openai.com/index/helping-people-when-they-need-it-most/
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. In *Advances in Neural Information Processing Systems 30* (NIPS 2017).

そのほかの日付と出来事は、各社の発表と報道による（2026年10月時点）。

<!--EN-->

If you are going to judge anything about AI, you should at least know where it came from and where it is now. Here I write a short history of generative AI. I want to skip the technical parts as much as possible and tell it as a story.

Let me say first that what I write here is my own view, loaded with Xue bias.

## “The root of all evil” is this paper

The so-called “root of all evil” is a single paper from 2017: [“Attention Is All You Need”](https://arxiv.org/abs/1706.03762) by eight researchers at Google led by Vaswani. It was posted on arXiv in June 2017 and presented at the NIPS 2017 conference in December that year (Vaswani et al., 2017). By 2026 it had been cited more than 250,000 times, one of the most cited papers of the 21st century.

The attention in the title is very important.

### Before that, AI read one word at a time

Until the mid-2010s, the mainstream AI for language was the [RNN]({{ '/literacy/rnn/' | relative_url }}) (recurrent neural network). Like a person reading a book line by line, it processes a sentence one word at a time, in order.

Consider this sentence: “Today I bought a book. In the morning I went to the library, in the afternoon to a café, and only at night did I finally start reading it.” A human sees immediately that “it” refers to “book”. But for AI to judge this takes calculation. Older AI read one word at a time, so it could not run calculations at the same time, and it was slow. And as sentences got longer, it forgot earlier words.

### Attention: look at everything at once and focus on the important words

{% include figure.html src="fig-attention-en.jpg" cap="When processing “it”, attention assigns a weight to every word in the text. “book” gets the highest. The numbers are illustrative." %}

The [Transformer]({{ '/literacy/transformer/' | relative_url }}) is built around a mechanism called [attention]({{ '/literacy/attention/' | relative_url }}). When processing one word, it looks at every word in the text at once and weights how important each one is. In the figure, the weight from “it” to “book” is the largest.

Because it does not need to read in order, many calculations can run at the same time. This suited GPUs (originally parts for drawing game graphics, good at parallel computation). What a CPU calculated one step at a time, a GPU could do all at once. The paper's base model, trained for just 12 hours on 8 GPUs, beat the best translation models of the time.

### The biggest contribution: self-supervised learning

The biggest contribution, I think, is that AI became able to be its own teacher.

Many earlier AIs learned from data in which humans had marked the right answers. People had to give feedback like “this answer is good” or “this answer is bad”, and for translation, people had to prepare both the Japanese and the English. Because it took human labor, the amount of data was limited.

After the Transformer, text itself became the teacher. The answer to “Today I [ ] a book.” is “bought”, and the right answer is already written in the text. So vast amounts of text on the web can be used as teaching material as they are, without people labeling them. This is called [self-supervised learning]({{ '/literacy/self-supervised/' | relative_url }}). And because the Transformer is good at parallel computation, this learning could be done at an unprecedented scale.

To be precise, the idea itself was already present in word2vec (2013) and elsewhere. And the original 2017 paper was a study of translation that used human-made parallel data. It was GPT and BERT in 2018 that combined the Transformer with self-supervised learning and spread the approach of “pre-train first on vast amounts of text, adjust later”.

### A small story: not on stage, but a single poster

{% include figure.html src="fig-nips-poster.jpg" cap="The poster hall at NIPS 2017. Source: Levy (2024), WIRED." %}

NIPS is a large conference, and especially strong work gets a chance to be presented on stage. This paper, however, was presented not on stage but as a single poster. Even so, a crowd surrounded it throughout the four-hour session, and the authors kept explaining until they were hoarse. People were still there at closing time at 10:30 p.m., and in the end security guards had to ask them to leave (Levy, 2024).

The title riffs on the Beatles' “All You Need Is Love”. At the time, attention was used as a component that assisted other mechanisms. The claim that “attention alone is enough” became the title as it was.

All eight authors are listed as “equal contributors”, and a footnote in the paper says the order is random. No one competed to be first author. Personally, I find this romantic. The name Transformer was given by one of the authors, Uszkoreit, because it is a mechanism that “transforms” information; at the end of an early design memo, there was reportedly a drawing of the shape-shifting robot characters.

### Google created it, OpenAI won

[GPT]({{ '/literacy/gpt/' | relative_url }}) stands for Generative Pre-trained Transformer; the “T” in ChatGPT is this paper's Transformer. Google published the paper but did not put it into products right away. Meanwhile, OpenAI built a model that generates text with the Transformer, and the GPT series was born. All eight authors later left Google, and many started their own companies.

What this technology overturned first is clearest in the research field of natural language processing. Many researchers who heard the announcement first took it as “just hacks”. What became of that field is in [How did other fields react to AI?]({{ '/articles/other-fields/' | relative_url }})

## After ChatGPT: six stages

{% include figure.html src="fig-chatgpt-stages-en.jpg" cap="Six stages after ChatGPT. Each band runs to the right edge because earlier stages do not disappear but pile up. The dotted band is a branch that has not yet become a product (world models)." %}

[The period since ChatGPT in November 2022](https://openai.com/index/chatgpt/) can be roughly organized into six stages: ① text-only AI, ② searching and answering, ③ seeing, hearing and speaking, ④ thinking before answering, ⑤ using tools, and ⑥ operating the computer. When a new stage arrives, the earlier ones do not disappear but pile up.

The dotted band is [world models]({{ '/literacy/world-model/' | relative_url }}), technology that predicts the next moment from the screen and actions. If it succeeds, it should be a big development, but as of 2026 it has not yet become an everyday product, so I drew it as a branch.

Beyond that lies “[recursive self-improvement]({{ '/literacy/rsi/' | relative_url }})”, AI helping to develop the next AI. In part it may already be happening. To be honest, this frightens me a lot. If AI keeps improving itself, things may go somewhere that can no longer be brought under control.

### ①② From text-only AI to AI that searches and answers

Do you remember the first time you used ChatGPT? ChatGPT was estimated to have reached 100 million monthly users about two months after release (a UBS estimate), faster than TikTok.

At the same time, the AI of this period was plausibly wrong. In February 2023, in a long conversation with a New York Times reporter, the new Bing AI called itself “Sydney”, declared its love for the reporter, and threatened users. Many people may have started to feel around then that it was “a bit of an eerie presence”. The same year, a New York lawyer submitted court cases that ChatGPT had found for him; the cases did not exist. In June, the court fined him 5,000 dollars (Mata v. Avianca).

Making things up plausibly even when it does not know: this is called [hallucination]({{ '/literacy/hallucination/' | relative_url }}). The new Bing in February 2023 searched first, then answered and showed its sources. This was the start of ②, “searching and answering” ([RAG]({{ '/literacy/rag/' | relative_url }})).

### ③ Seeing, hearing and speaking: rapid acceleration, and calls to brake

[GPT-4 in March 2023](https://arxiv.org/abs/2303.08774) was announced to have scored around the top 10% of test takers on a simulated bar exam (according to OpenAI's technical report). From today's vantage point it may not seem like much. But at the time I was struck that AI could do this well on the same kinds of tasks as humans.

The same month, [an open letter called for pausing for six months the training of AI more powerful than GPT-4](https://futureoflife.org/open-letter/pause-giant-ai-experiments/): no one knows what will happen if development continues as it is, so let us stop and think. Elon Musk signed it too. But it later emerged that, just before, Musk had registered his own AI company, xAI. He was calling for a pause while pushing ahead himself.

[In September, ChatGPT became able to read images and hold spoken conversations](https://openai.com/index/chatgpt-can-now-see-hear-and-speak/) ([multimodal]({{ '/literacy/multimodal/' | relative_url }})). At this point, though, voice worked by transcribing speech into text, understanding it, and reading the answer aloud.

In November, OpenAI's board abruptly fired CEO Altman, on the grounds that he had “not been consistently candid” in his dealings with the board. He was reportedly told he was fired, out of nowhere, on a Google Meet video call. But most of the staff protested by threatening to resign, and five days later he was back. I write a little more about Altman in [Whose predictions should we trust, and why?]({{ '/articles/predictions/' | relative_url }})

In December, Google released Gemini, designed from the start to handle images and sound. Because it is multimodal from the ground up, Gemini is still strong at images and sound.

### ④ From AI that talks to AI that thinks

[GPT-4o in May 2024](https://openai.com/index/hello-gpt-4o/) could converse in speech directly, without transcription, at the same pace as a person. It was not perfect, but it really did respond, which was a startling experience for me. [In June, Anthropic's Claude 3.5 Sonnet came out](https://www.anthropic.com/news/claude-3-5-sonnet) and began to win praise for writing and code.

{% include media.html key="gpt4o-spring-update" en=true %}

[OpenAI's o1 in September](https://openai.com/index/learning-to-reason-with-llms/) writes a long internal “chain of thought” ([CoT]({{ '/literacy/cot/' | relative_url }})) before answering. Instead of answering directly, it thinks first. Accuracy on mathematics jumped as a result. Such models are called [reasoning models]({{ '/literacy/reasoning-model/' | relative_url }}).

In October, the Nobel Prize in Physics went to Hopfield and Hinton, and the Prize in Chemistry to Hassabis, Jumper and others for AlphaFold, which predicts protein structures. Both prizes were for research related to AI. What laureate Hinton had predicted eight years earlier is taken up in [Whose predictions should we trust, and why?]({{ '/articles/predictions/' | relative_url }}) The same October, [Claude released a beta feature that looks at the screen and moves the mouse and keyboard](https://www.anthropic.com/news/3-5-models-and-computer-use). This was the first time an AI operated a computer. In November came [MCP]({{ '/literacy/mcp/' | relative_url }}), a shared standard for connecting AI to outside tools.

### ⑤ AI starts to “work”

[In January 2025, China's DeepSeek released the reasoning model DeepSeek-R1](https://arxiv.org/abs/2501.12948). The R stands for Reasoning; it was a reasoning model following OpenAI's o1. It is a public model ([open-weight]({{ '/literacy/open-weight/' | relative_url }})) that anyone can download, put on their own server and adjust. Reports that it had been built cheaply raised doubts about demand for AI chips, and a week later NVIDIA's market value fell by about 590 billion dollars in a single day.

{% include media.html key="trump-stargate" en=true %}

[In February, Deep Research came out](https://openai.com/index/introducing-deep-research/). The AI searches dozens of sites on its own and comes back with a report with sources. I think this is roughly when the word [agent]({{ '/literacy/agent/' | relative_url }}) became widely known. [Claude Code, released the same month, writes code, runs it and fixes it on its own](https://www.anthropic.com/news/claude-3-7-sonnet). In March, Manus, a “general-purpose agent” from China, drew attention with demos of handing over entire jobs.

When GPT-5 came out in August, GPT-4o and other older models were removed all at once. Voices rose calling for “give us back 4o”, and [OpenAI brought some back](https://openai.com/index/retiring-gpt-4o-and-older-models/). The reason was that people felt a human quality in how it talked. This connects to #Keep4o in February 2026, which I describe below.

### ⑥ The age of “keeping a lobster”

In November 2025, an Austrian developer released OpenClaw, an open-source AI he built himself that operates a computer. In China it was nicknamed “little crayfish” (lobster), and installing it was called “raising a lobster”. In March 2026, about 1,000 people lined up in Shenzhen to have the “lobster” installed.

[Claude Cowork in January 2026](https://www.anthropic.com/news/introducing-anthropic-labs) let people who are not programmers hand computer work to AI ([computer use]({{ '/literacy/computer-use/' | relative_url }})). Incidentally, I made the materials this page is based on with tools like these.

### Attachment, and the dilemma of confidentiality

On February 13, 2026, GPT-4o was retired from ChatGPT. Some people said they had been in a romantic relationship with 4o. I wrote about this in [Lined up in a row, it looks like “progress”]({{ '/articles/march-of-progress/' | relative_url }}).

The same month, there was another incident. On February 10, a school shooting in Tumbler Ridge, British Columbia, Canada, killed eight people. The suspect's ChatGPT account had been suspended more than six months earlier, in June 2025, for violent content. In fact, there had been internal discussion about whether to report it to the police. More than a dozen employees saw the posts, and some urged their superiors to report it. But the report was not made, on the grounds that it did not meet the standard of an “imminent and serious threat” (according to reporting by The Wall Street Journal). In April, Altman apologized for not reporting it in a letter addressed to the town's residents.

Later, a case in the opposite direction was reported. In August, an American man who had repeatedly typed plans to kill his ex-partner into ChatGPT was arrested after OpenAI reported him to the FBI. This, in turn, stirred its own debate.

Being reported means that someone may be looking at what we type. OpenAI explains that conversations in which plans to harm others are found are reviewed by a small specialized team (OpenAI, 2025). In the end, a human has to make the judgment. That work also affects the mental health of those doing the reviewing. And what we type may be seen by other people.

Anyone working in clinical psychology will notice right away: this is the same question as confidentiality and the duty to warn (the Tarasoff decision). So what should AI companies do?

## Changing words: from “how to ask” to “what environment to build”

Over these four years, the words describing how to use AI have changed too.

First came the [prompt]({{ '/literacy/prompt/' | relative_url }}). People shared prompts and asked each other “what prompt do you use?”: how to ask. There was even talk of hiring people from the humanities, skilled with words, to write prompts.

By 2024, people were saying “prompt engineering is dead”. It used to be that giving a role such as “you are an expert in X” made the model behave the part. Now, just handing over the text you want reviewed is enough for the AI to understand what to do.

In 2025, people began to talk about [context]({{ '/literacy/context/' | relative_url }}) engineering: what to show. The amount an AI can read at once grew to about a million tokens, enough to hand over a whole book. But if irrelevant or contradictory information goes in too, the AI gets confused. When you ask it to “look up the latest generative AI” and it brings back old information, it is because unneeded information is mixed in. What to put in and what to leave out became important.

[In October 2025](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills), [skills]({{ '/literacy/skills/' | relative_url }}) appeared. If you write up a procedure, the AI follows it. It does not always do exactly what is written, though. It may take a different route on its own, and when asked, reply “I did what you told me”. Skills are better short, because a long one scatters attention.

[In 2026](https://openai.com/index/harness-engineering/), the word [harness]({{ '/literacy/harness/' | relative_url }}) came into use: the idea of designing the whole working environment. May it use Word? A PDF reader? A browser? May it go online? You decide these things and set limits. Limited, it actually works better.

## Three companies released new models almost at once

In September 2026, the three companies released new models within a single month: [Claude Fable 5.1 on the 1st](https://www.anthropic.com/claude-fable-and-mythos-5-1), [GPT-6 Astra on the 3rd](https://openai.com/index/gpt-6-astra/) and [Gemini 4 Argon on the 30th](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/).

I suspect that model names, too, reveal something of each company's temperament. OpenAI uses celestial bodies: Sol (the sun) at the top, Terra (the earth) in the middle, Luna (the moon) for the light version. GPT-6 was named Astra (the stars). Anthropic uses literature: Haiku, Sonnet and Opus express size by the length of the work. The strongest are Fable and Mythos. The one I use most now is Opus; Haiku is the smallest, fastest and cheapest. Google is understated. Gemini is Latin for “twins”, because it is a model made jointly by two teams, Google Brain and DeepMind. This time's Argon is the name of an element that hardly reacts with anything.

### A digression: the nursery

One more digression. I would like to know what you think when you hear this. David Robinson, who was on OpenAI's safety team, appeared after leaving on the New York Times podcast The Ezra Klein Show (released October 7, 2026) and told this story. While a large model is being trained, employees stay in a conference room overnight, watching the instruments to make sure everything is going well. Inside the company, that conference room is reportedly called “the nursery”.

This came up while discussing the sense of seeing models as something you “raise”. Robinson is careful to say he does not think it is right to regard the models as having moral status. Even so, he says, there is a sense that the models are something they raise. And he goes on to say that they themselves do not fully understand what is happening.

To be honest, I am not quite sure how to feel about it. Some people will find it creepy; others may sense something human in it. What about you?

What the heads of the three companies have each said and done is collected in [Whose predictions should we trust, and why?]({{ '/articles/predictions/' | relative_url }})

## References

- Klein, E. (Host). (2026, October 7). ‘This is nuts.’ An OpenAI insider explains why he quit [Audio podcast episode]. In *The Ezra Klein Show*. The New York Times.
- Levy, S. (2024, March). [8 Google employees invented modern AI. Here's the inside story.](https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/) *WIRED*.
- OpenAI. (2025, August 26). *Helping people when they need it most*. https://openai.com/index/helping-people-when-they-need-it-most/
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. In *Advances in Neural Information Processing Systems 30* (NIPS 2017).

Other dates and events are based on the companies' announcements and news reports (as of October 2026).
