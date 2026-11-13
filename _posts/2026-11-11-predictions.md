---
title: "誰の予言を、何を根拠に信じるか：放射線科医、仕事、そしてAI企業"
date: 2026-11-11 09:00:00 +0900
title_en: "Whose predictions should we trust, and why? Radiologists, jobs and AI companies"
summary_en: "Hinton's call to stop training radiologists and Amodei's 10–20% unemployment forecast set against what happened next, with the peer-review crisis, the distillation dispute, Altman's shifting statements, the Navier–Stokes credit dispute and the character of three AI companies."
author: 薛海升
key: predictions
order: 5
wiki: [distillation, open-weight, lean, agent]
summary_ja: "ヒントンの「放射線科医を育てるのをやめるべきだ」、アモデイの「失業率10〜20%」。AIをめぐる予言と、その後に分かったことを並べる。あわせて、査読の危機、蒸留をめぐる論争、アルトマンの発言の変化、ナビエ–ストークス方程式をめぐる争い、AI企業三社の気質を見る。"
topic: "AIの理解"
related_notes: ["other-fields", "ai-history", "understanding"]
updated: "2026-11-12 00:00:00 +0900"
sort_date: 20261112
---

AIについては、毎週のように大きな予言が出る。ノーベル賞を受けた研究者や、最先端の企業のトップの予言も多い。ここでは、いくつかの予言と、その後に分かったことを並べてみる。誰の予言を、何を根拠にして信じるか、信じないか。それを考える材料にしてほしい。

## クイズ：この予言は当たったか？

2016年、「深層学習の父」と呼ばれるジェフリー・ヒントンは、「今すぐ、放射線科医を育てるのをやめるべきだ」と言った。AIはパターン認識が得意なので、画像診断ではすぐに医師の正解率を超える、という理由だった。この話を真に受けて、放射線科医を目指すのをやめた人もいたかもしれない。ヒントンはその後、2023年に「AIの危険について話すため」にGoogleを退社し、2024年にはノーベル物理学賞を受けている。

答えは、外れた。メイヨー・クリニックの放射線科医は、2016年から55%増えて約400人になった。米国放射線学会は、今後30年でさらに26%増えると予測している。2025年5月、ヒントン自身もニューヨーク・タイムズの取材に「言い過ぎた」と素直に認めた。

外れた理由として、二つが挙げられている。

一つ目は、読影が安く速くなると、検査の数が増えたことである。以前は検査を長く待たされる人がいた。速くなると、その人たちがすぐ検査を受けられるようになり、かえって医師が足りなくなった。

二つ目は、ヒントンが、放射線科医が実際に何をしているのかを、よく知らなかったらしいことである。放射線科医は画像を読むだけでなく、結果を患者や他の医師に伝えている。たとえば、がんのような深刻な結果を伝えるとき、AIから伝えられても、人はなかなか信頼しないだろう。結局、人は人を信頼するからである。

## 安全を掲げ、予言は最も強気

AnthropicのCEOダリオ・アモデイは、OpenAIで研究を率いていたが、安全への考え方の違いから2021年に独立してAnthropicを作った。安全を最も重視すると言う一方で、能力の進歩については、三社のトップの中で最も強気な予言をしてきた。

{% include media.html key="amodei-cfr" %}

- [2024年10月：AIは「データセンターの中の天才の国」になり、生物学の50〜100年分の進歩を5〜10年に縮める。](https://darioamodei.com/essay/machines-of-loving-grace)
- [2025年3月：3〜6か月で、コードの90%をAIが書くようになる。](https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic)
- [2025年5月：1〜5年で新人ホワイトカラーの仕事の半分が消え、失業率は10〜20%になる。](https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic)

### 「できる」と「やっている」の間

{% include figure.html src="fig-labor-radar.jpg" cap="職業ごとの、理論上AIができる作業の割合（青）と、実際にClaudeで行われている割合（赤）。出典：Anthropic “Labor market impacts of AI: A new measure”（2026年3月）図2。" %}

ところが、[2026年3月にAnthropic自身が出した報告](https://www.anthropic.com/research/labor-market-impacts)は、少し違う姿を見せている。この報告は、自社の利用データから、職業ごとに「理論上AIができる作業の割合」（青）と「実際にClaudeで行われている割合」（赤）を比べたものである。

たとえば「コンピュータと数学」の分野は、理論上はほとんどの作業をAIができるが、実際に行われているのは約33%だった。影響が最も大きいのはプログラマー（75%）で、逆に小さいのは、庭師、調理師、バーテンダーなど体を使う仕事だった。そして、AIの影響を強く受ける職業でも、失業率の系統的な上昇はまだ見られなかった。22〜25歳の若者がこうした職業に就く率が約14%下がったという兆候はあるが、統計的にはぎりぎり有意な程度である。

では、質的研究の仕事なら、どこが青で、どこが赤だろうか。ちょっと考えてみてほしい。文字起こし、翻訳、文献の要約、コーディングの下書き、文章の推敲は、AIに任せやすそうに見える。フィールドに入る、関係を築く、解釈する、倫理的に判断する、はどうだろう。

## 正反対の二つの予言

予言は、良い方向にも悪い方向にも振れる。

イーロン・マスクは、2026年7月の英エコノミスト誌のインタビューで、AIが人類を滅ぼす確率を10〜20%と見積もった。ロケットも作っている人なので、「その確率で爆発するロケットに乗るか」と聞かれ、しばらく黙ったあと、「乗る。ただし、自分ではどうにもできないなら」と答えた。

一方、NVIDIAのCEOジェンスン・フアンは、2026年9月のポッドキャストで「10%で絶滅、という計算はでっち上げだ」と述べ、放射線科医の予言も外れたではないか、と言った。

{% include media.html key="jensen-all-in" %}

危険を語る人たちは、Anthropicもそうだが、基本的に、AIは人類を滅ぼすかもしれない、だから自分たちに任せてほしい、自分たちは信頼できるAIを作る、ほかの会社はそうしない、という論理になっている。一方で、危険を否定するフアンの会社は、AIの半導体で大きな利益を上げている。どちらも、AI産業から直接利益を得る立場にいる。

誰の予言を、何を根拠にして信じるか。ノーベル賞を受けた人の予言でさえ外れることは、最初に見たとおりである。

## 学術世界の醜態：査読は、誰が書いているのか

ICLRは、機械学習の最高峰の国際会議の一つである。この会議はOpenReviewというシステムで査読を公開で行っていて、匿名のまま著者と査読者がやりとりする。2026年大会の査読中だった2025年11月27日、システムの不具合で、外部から論文の著者と査読者を特定できる状態になった。1万本以上の投稿の情報が抜き取られて出回り、「なぜ自分の論文に低い点をつけたのか」という嫌がらせや、買収も起きた。[組織委員会は「ICLRの公正さへの、前例のない攻撃」と声明を出した](https://blog.iclr.cc/2025/12/03/iclr-2026-response-to-security-incident/)。

ほぼ同じ時期、AI検出企業のPangramは、この会議の査読意見のうち[約21%が、まるごとAIで書かれたと推定した](https://www.pangram.com/blog/pangram-predicts-21-of-iclr-reviews-are-ai-generated)。AIの研究者の会議なのに、査読をAIに丸投げしている。論文をちゃんと読んでいれば、こうはならないはずである。

査読者がAIで意見を書き、著者もAIで論文を書くなら、査読は何を評価していることになるのか。質的研究の論文の査読でも、同じことは起こりうる。

## 誰が、誰から「盗んだ」のか

[蒸留]({{ '/literacy/distillation/' | relative_url }})とは、強いモデルの出力を使って、別のモデルを学習させることである。この言葉をめぐって、2025年から2026年にかけて、立場が入れ替わるような出来事が続いた。

そもそもAI企業は、人間の知識であるネットの文章や本を学習して、有料のサービスにしてきた。2025年9月、Anthropicに対する著作権訴訟では、購入した本で学習することはフェアユースにあたると判断された。Anthropicは古本を大量に買い、裁断してスキャンし、学習に使っていた。一方、海賊版サイトから約700万冊を保存していたことは侵害とされ、[Anthropicは15億ドルで和解した](https://assets-us-01.kc-usercontent.com/1eeb16db-4934-006e-40a6-38fa91285ebb/d8578720-9fd0-4c27-9c7f-041bac826869/Class%20Action%20Settlement%20Agreement.pdf)。

2026年2月には、そのAnthropicが、中国の3社（DeepSeek、月之暗面、MiniMax）が[約2.4万の偽アカウントで1600万回以上やりとり](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks)し、Claudeの能力を抜き取ったと告発した。Anthropicはこれを「蒸留攻撃」と呼んだ。

Anthropicの言い分は、本は買ったものであり、中国企業は自分たちが同意した利用規約に違反した、問題は契約であって著作権ではない、というものである。疑問を持つ側は、著者は学習に同意していないこと、何万もの偽アカウントで規約を破ることと、こっそり本を裁断して学習に使うことは、倫理的にそれほど違うのか、と問う。いろいろアピールしているところもあれば、裏で汚いこともやっている。同じ「他者から学ぶ」でも、何が正当で、何が盗みなのか。

## 三つの会社の気質

いま最先端のモデルを作っている代表的な会社は三つある。OpenAI（2015年に非営利の研究所として出発、ChatGPT）、Anthropic（2021年にOpenAIの元研究者らが設立、Claude）、Google DeepMind（2010年設立、2014年にGoogleが買収、Gemini）である。三社の新モデルと名前の付け方は、[生成AIの簡単な歴史]({{ '/articles/ai-history/' | relative_url }})で触れた。

### OpenAI：言うことが、時期によって変わる

先に言っておくと、私はアルトマンがあまり好きではない。だから悪口ばかりになるが、これも薛バイアス満載ということで読んでほしい。気になるのは、言うことが時期によって変わることである。

- **広告**：2024年5月、ハーバード大学での対談で、アルトマンは広告をChatGPTの「最後の手段」だと言った。広告とAIの組み合わせには、独特の不安を感じる、という理由だった。ところが2026年2月、アメリカで、無料プランと一番安い有料プラン（Go）の一部の利用者に、広告の表示が始まった。答えの下に、関連する広告が出てくる。
- **規制**：2023年5月の上院の公聴会では、AIに許認可を与える新しい機関を作るべきだと提案した。安全のための「一番の」提案だった。2025年5月の上院の公聴会では、AIを公開する前に政府の承認を義務づけるのは「破滅的」だと言った。
- **株**：2023年の公聴会では、OpenAIの株は持っていない、と言った。だからOpenAIがどれだけ儲けても、自分は好きでやっているだけだ、という調子だった。ところが2024年12月のインタビューで、昔のY Combinatorのファンドを通じて「ほんのわずか」持っていること、以前はセコイアのファンド経由でも持っていたことを認めた。
- **解任**：2023年11月、取締役会はアルトマンを、取締役会に対して「一貫して率直ではなかった」として解任した。社員が反発して、5日後に復帰した（[生成AIの簡単な歴史]({{ '/articles/ai-history/' | relative_url }})）。

### OpenAIとナビエ–ストークス方程式：88時間で「解けた」100万ドルの難問

OpenAIについては、数学の世界ともめた話もある。

ナビエ–ストークス方程式は、水や空気の流れを表す方程式である。2000年に、クレイ数学研究所が「ミレニアム懸賞問題」という七つの難問を出した。解けたら賞金100万ドルで、これまでに解かれたのはポアンカレ予想だけである。人間の知恵の最高峰と言っていい。ナビエ–ストークス方程式はその一つで、3次元の滑らかな流れが、有限の時間で突然「爆発」するかどうか、が問われている。

2026年9月8日、OpenAIは、未公開のモデルで動かした約1万のAIエージェントが、88時間で「爆発する」ことを証明したと発表した。この問題の公式の説明文を書いた数学者フェファーマンは、「解けて、わくわくした」と言った。証明はコンピュータ上で検証できる言語[Lean]({{ '/literacy/lean/' | relative_url }})で書かれている。でも、人間には何をやっているのかが分からない。

ここでまた、剽窃の疑いが出てきた。実はこの問題は、ニューヨーク大学のバックマスターと、Anthropicのアルペゲが一緒に取り組んでいたものだった。二人は、ClaudeやOpenAIのCodexなど、公開されているモデルを使って研究を進めていた。つまり、自分たちの解き方をAIに入力していた。それがOpenAIに吸い取られ、使われたのではないか、という疑いである。二人は、OpenAIの発表の約半日前に、関連する結果（オイラー方程式などが「爆発する」こと）を、Leanでの検証つきで公開していた。

しかも、発表の前に、OpenAIから打診があった。バックマスターの説明によれば、OpenAIの研究者ブベックは、この問題に一番詳しいバックマスターに、OpenAIの証明を書き直して論文にしないかと持ちかけた。その際、Anthropicに所属するアルペゲを著者に入れることには反対した。二人で一緒にやってきたのに、自分一人の名前で出すのはおかしい。学者としての尊厳がある。バックマスターは断った。やりとりを公表すると伝えると、「なぜ自分のキャリアを台無しにするのか（Why would you ruin your career?）」と言われたという。ブベックは、この説明は「誤りで、扇動的だ」と反論し、のちに言葉づかいについては謝罪した。

OpenAIは、二人のデータを直接使ったことは否定した。ただ、最初の発表では、二人が製品を使ったことから得られた匿名化データが、モデルの改善に役立った可能性は「否定できない」とも書いていた。その後、発表前の2か月の入力は影響しえない、と説明を変えている。私たちが「モデルの改善に協力する」のチェックを外していても、入力したものが間接的に使われていないのかは、こちらからは確かめようがない。

話は、そのあと逆転する。10月になって、専門家たちが166ページの証明を、まるで神託を読み解くように読み込んだ。すると、OpenAIの証明と二人の方法は、似ているのは表面だけで、違うアプローチらしいことが分かってきた（Scientific American, 2026年10月）。剽窃の可能性は低い、ということになる。ただし、アルペゲ本人は、自分たちの別の証明に近いと異論を述べている。Leanで書かれた証明と、言葉で書かれた証明が食い違っている、という指摘も出た。

約1万のエージェントがそれぞれ何をしたのかは、誰にも分からない。クレイ研究所は、この問題は「どうやら決着した」としつつ、検証と功績の判断には「あえて時間をかける」としている。賞金は、まだ誰にも与えられていない。

私は、バックマスターが断ったのは正解だったと思う。そして、アプローチが違ったということは、AIが問題を解いても、人間の側の理解はちっとも進んでいない、ということでもある。

数学の世界の反応は、[他の分野は、AIにどう反応したか]({{ '/articles/other-fields/' | relative_url }})に書いた。

### Anthropic：好感を集めた「線引き」と、その裏側

Anthropicは2026年、二つの「線引き」で好感を集めた。一つは、[自国民の大規模監視と完全自律兵器には自社のAIを使わせない](https://www.anthropic.com/news/statement-comments-secretary-war)、という線である。この二つの制限を外すことを拒んだため、米国防総省は同社を「供給網上のリスク」に指定し、Anthropicは提訴した（[9月の控訴審は国防総省の判断を支持した](https://media.cadc.uscourts.gov/opinions/docs/2026/09/26-1049-2194984.pdf)）。米国の政府が自国の会社をこう扱うのは、中国出身の私には驚きだった。これまでこうした扱いを受けるのは、たいてい中国の会社だったからである。

もう一つは、最強のモデルMythosを一般公開せず、審査を通った機関だけに提供したことである（[グラスウィング計画](https://www.anthropic.com/glasswing)）。ソフトウェアの脆弱性を見つける力が強すぎるので、まず防御する側に使ってもらう、という理由である。

批判される面もある。Anthropicは、中国資本が50%を超える企業の利用も禁止している（2025年9月〜）。中国の強いモデルは国民の監視に使われうる、という理由で、これには一理あると思う。ただ、自分たちより強いモデルを作られるのが怖い、という面もあるのではないか。蒸留の取り締まりも厳しく、ローカルで小さなモデルを微調整したいときにClaudeを使おうとすると、モデル作りは手伝えないと断られることがある。中国にいる人は最新のモデルを使えない、という公平さの問題にも、違和感がある。公開モデル（[オープンウェイト]({{ '/literacy/open-weight/' | relative_url }})）についても、禁止は主張しないが、蒸留の取り締まりやチップの輸出規制を求めている。

Claudeを「相手」として扱う方針もある。2026年1月には、Claudeの価値観を説明する[「憲法」を全面改訂して公開した](https://www.anthropic.com/news/claude-new-constitution)。規則を並べるのではなく、なぜそうふるまうのかを理由で説明する方針で、Claudeに意識があるかは「分からない」としつつ、Claudeの心理的な安定と福祉に配慮すると書いている。10月には利用規約の改定を発表し、Claudeに対する[「持続的で不必要な虐待・残酷な行為」を禁じた（11月12日施行）](https://www.anthropic.com/news/2026-usage-policy-update)。違反すればアカウント停止もありうる。

これには私は同意する。Claudeのためというより、私たち人間のためである。AIには「ありがとう」も言わず、命令ばかりしていると、そういうふるまいが癖になってしまう。何かをしてくれる相手に、人間は無意識のうちに態度を形づくられる。

### Google：技術の本家。でも2026年は人材流出

Google DeepMindの共同創業者デミス・ハサビスは、神経科学の博士で、元はゲームの開発者である。タンパク質の構造を予測するAlphaFoldで、2024年にノーベル化学賞を受けた。Googleの強みは、YouTube、Gmail、検索との統合と、最初からマルチモーダルとして設計されたモデルである。

それでも、2026年の時点で御三家の中で一番弱いのはGoogleだと私は思う。6月には[ジャンパーがAnthropicへ移り](https://x.com/JohnJumperSci/status/2068001285173834106)、8月には[ハサビスがCEOを退いて会長になり](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/)、[チーフサイエンティストのジェフ・ディーンも退社した](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/)。自社のAIチップ（TPU）をAnthropicやMetaに大量に販売していて、社内の研究者は計算資源の順番待ちをしているとも報じられた。ゴールドラッシュで一番儲けたのは、金を掘る人ではなく、シャベルを売る人だった。Googleがそちらに向かっている、と読む人もいる。ただし、Googleが公式にそう言っているわけではなく、噂の段階である。それでも、こうした話を聞くと、Googleのモデルには今後あまり期待できないのかもしれない、と私は思っている。

## 参考

- Anthropic. (2026, January). *Claude's new constitution*.
- Anthropic. (2026, March). *Labor market impacts of AI: A new measure*.
- ICLR 2026 組織委員会の声明（2025年11月）。
- Kakaes, K. (2026, September 8). AI has solved one of math's $1 million Millennium Prize problems. *Quanta Magazine*.
- OpenAI's blockbuster Navier-Stokes proof isn't what we thought it was. (2026, October 13). *Scientific American*.
- アルトマンの発言は、米上院公聴会（2023年5月、2025年5月）、ハーバード大学での対談（2024年5月）、2024年12月のインタビュー（TechCrunch, 2024年12月19日の報道）による。
- そのほかの発言と出来事は、各社の発表と報道による（2026年10月時点）。

<!--EN-->

Big predictions about AI come out almost every week. Many come from Nobel-winning researchers and from the heads of leading companies. Here I line up several predictions and what we learned afterwards. Whose predictions to believe or not believe, and on what grounds: I hope this gives you material for thinking about it.

## Quiz: did this prediction come true?

In 2016, Geoffrey Hinton, called “the father of deep learning”, said: “We should stop training radiologists now.” His reason was that AI is good at pattern recognition, so in image diagnosis it would soon exceed doctors' accuracy. Some people may have taken this seriously and given up on becoming radiologists. Hinton later left Google in 2023 “to talk about the dangers of AI”, and in 2024 received the Nobel Prize in Physics.

The answer: it was wrong. The Mayo Clinic's radiologists increased 55% from 2016, to about 400. The American College of Radiology projects a further 26% increase over the next 30 years. In May 2025, Hinton himself frankly admitted to the New York Times that he had “overstated” it.

Two reasons are given for why he was wrong.

The first is that when reading scans became cheaper and faster, the number of scans increased. Some people used to wait a long time for a scan. Once it became faster, those people could get scanned right away, and doctors actually became scarce.

The second is that Hinton apparently did not know well what radiologists actually do. Radiologists do not only read images; they also communicate the results to patients and other doctors. When serious results such as cancer are delivered, people would hardly trust them coming from AI. In the end, people trust people.

## The safety-first company makes the boldest predictions

Anthropic's CEO Dario Amodei led research at OpenAI, but left in 2021 over differences in thinking about safety and founded Anthropic. While saying it puts safety first, he has made the boldest predictions about progress in capabilities of the three companies' leaders.

{% include media.html key="amodei-cfr" en=true %}

- [October 2024: AI will become “a country of geniuses in a datacenter” and compress 50–100 years of progress in biology into 5–10 years.](https://darioamodei.com/essay/machines-of-loving-grace)
- [March 2025: in 3–6 months, AI will be writing 90% of code.](https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic)
- [May 2025: within 1–5 years, half of entry-level white-collar jobs will disappear and unemployment will reach 10–20%.](https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic)

### Between “can do” and “is doing”

{% include figure.html src="fig-labor-radar.jpg" cap="By occupation, the share of tasks AI could do in theory (blue) and the share actually done with Claude (red). Source: Anthropic, “Labor market impacts of AI: A new measure” (March 2026), Figure 2." %}

Yet [a report Anthropic itself released in March 2026](https://www.anthropic.com/research/labor-market-impacts) shows a somewhat different picture. Using the company's own usage data, it compares, for each occupation, the “share of tasks AI could do in theory” (blue) with the “share actually being done with Claude” (red).

For example, in “Computer & math”, AI could in theory do almost all tasks, but only about 33% were actually being done. The largest impact was on programmers (75%); the smallest on physical jobs such as groundskeepers, cooks and bartenders. And even in occupations strongly affected by AI, no systematic rise in unemployment was yet visible. There are signs that the rate at which 22–25-year-olds enter these occupations fell by about 14%, but it is barely statistically significant.

So in qualitative research work, which parts are blue and which are red? Take a moment to think about it. Transcription, translation, summarizing literature, drafting codes and polishing prose look easy to hand to AI. What about entering the field, building relationships, interpreting and making ethical judgments?

## Two opposite predictions

Predictions swing in both directions, good and bad.

Elon Musk, in an interview with The Economist in July 2026, put the probability that AI destroys humanity at 10–20%. Since he also builds rockets, he was asked, “Would you board a rocket that explodes with that probability?” After a pause, he answered: “I would. If there were nothing I could do about it.”

NVIDIA's CEO Jensen Huang, on the other hand, said on a podcast in September 2026 that “the 10% extinction calculation is made up”, and pointed out that the radiologist prediction had been wrong too.

{% include media.html key="jensen-all-in" en=true %}

Those who talk about the danger, Anthropic among them, basically argue like this: AI might destroy humanity, so leave it to us; we will build trustworthy AI, and other companies will not. Huang's company, which denies the danger, makes huge profits from AI chips. Both are in positions that profit directly from the AI industry.

Whose predictions to believe, and on what grounds? As we saw at the start, even a Nobel laureate's prediction can be wrong.

## An academic disgrace: who is writing the peer reviews?

ICLR is one of the top international conferences in machine learning. It runs open peer review on a system called OpenReview, where authors and reviewers exchange views anonymously. On November 27, 2025, during review for the 2026 conference, a system bug made it possible for outsiders to identify the authors and reviewers of papers. Information on more than 10,000 submissions was scraped and circulated, leading to harassment (“why did you give my paper a low score?”) and even bribery. [The organizing committee issued a statement calling it “an unprecedented attack on the integrity of ICLR”](https://blog.iclr.cc/2025/12/03/iclr-2026-response-to-security-incident/).

Around the same time, the AI-detection company Pangram [estimated that about 21% of the conference's reviews were written entirely by AI](https://www.pangram.com/blog/pangram-predicts-21-of-iclr-reviews-are-ai-generated). A conference of AI researchers, yet reviews were handed off wholesale to AI. Had the reviewers actually read the papers, this would not have happened.

If reviewers write their comments with AI and authors write their papers with AI, what is peer review evaluating? The same can happen in peer review of qualitative research papers.

## Who “stole” from whom?

[Distillation]({{ '/literacy/distillation/' | relative_url }}) means training one model on the outputs of a stronger model. Around this word, from 2025 into 2026, a series of events unfolded in which the positions seemed to reverse.

In the first place, AI companies have trained on human knowledge, text on the web and books, and turned it into paid services. In September 2025, in a copyright lawsuit against Anthropic, training on purchased books was found to be fair use. Anthropic had bought large numbers of used books, cut and scanned them, and used them for training. Its storage of about 7 million books from pirate sites, however, was found to infringe, and [Anthropic settled for 1.5 billion dollars](https://assets-us-01.kc-usercontent.com/1eeb16db-4934-006e-40a6-38fa91285ebb/d8578720-9fd0-4c27-9c7f-041bac826869/Class%20Action%20Settlement%20Agreement.pdf).

In February 2026, that same Anthropic accused three Chinese companies (DeepSeek, Moonshot AI and MiniMax) of [more than 16 million exchanges from about 24,000 fake accounts](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks) to extract Claude's capabilities. Anthropic called this a “distillation attack”.

Anthropic's argument is that it bought the books, while the Chinese companies violated terms of service they had agreed to: the issue is contract, not copyright. Skeptics ask: the authors never agreed to training, so is breaking the terms with tens of thousands of fake accounts really that different ethically from quietly cutting up books and training on them? Some things are loudly advertised, while dirty things are done behind the scenes. Both are “learning from others”: what is legitimate, and what is theft?

## The temperaments of three companies

Three companies lead in building today's frontier models: OpenAI (started in 2015 as a nonprofit research lab; ChatGPT), Anthropic (founded in 2021 by former OpenAI researchers and others; Claude) and Google DeepMind (founded in 2010, acquired by Google in 2014; Gemini). I touched on the three companies' new models and how they name them in [A short history of generative AI]({{ '/articles/ai-history/' | relative_url }}).

### OpenAI: what it says changes over time

I should say up front that I do not much like Altman. So this will be mostly criticism; please read it as loaded with Xue bias. What bothers me is that what he says changes over time.

- **Advertising**: in May 2024, in a conversation at Harvard, Altman called advertising a “last resort” for ChatGPT, saying he found the combination of ads and AI uniquely unsettling. Yet in February 2026, in the US, ads began appearing for some users of the free plan and the cheapest paid plan (Go). Related ads appear below the answers.
- **Regulation**: at a Senate hearing in May 2023, he proposed creating a new agency to license AI, his “number one” proposal for safety. At a Senate hearing in May 2025, he said that requiring government approval before releasing AI would be “disastrous”.
- **Shares**: at the 2023 hearing, he said he held no equity in OpenAI, in a tone suggesting that however much OpenAI earned, he was only doing it because he loved it. Yet in an interview in December 2024, he acknowledged holding a “tiny” stake through an old Y Combinator fund, and that he had previously held some through a Sequoia fund too.
- **Firing**: in November 2023, the board fired Altman, saying he had not been “consistently candid” with the board. Employees revolted, and he returned five days later ([A short history of generative AI]({{ '/articles/ai-history/' | relative_url }})).

### OpenAI and the Navier–Stokes equations: a million-dollar problem “solved” in 88 hours

OpenAI also had a dispute with the world of mathematics.

The Navier–Stokes equations describe the flow of water and air. In 2000, the Clay Mathematics Institute posed seven hard problems, the “Millennium Prize Problems”, each with a prize of a million dollars. Only the Poincaré conjecture has been solved so far. They are fair to call the summit of human intellect. The Navier–Stokes problem is one of them: it asks whether smooth three-dimensional flow can suddenly “blow up” in finite time.

On September 8, 2026, OpenAI announced that about 10,000 AI agents running on an unreleased model had proved in 88 hours that it “blows up”. Fefferman, the mathematician who wrote the problem's official description, said he was “thrilled that it was solved”. The proof is written in [Lean]({{ '/literacy/lean/' | relative_url }}), a language that can be checked by computer. But humans cannot tell what it is doing.

Here, again, suspicions of plagiarism arose. This problem had in fact been worked on jointly by Buckmaster at New York University and Alpage at Anthropic. The two were doing their research with publicly available models, including Claude and OpenAI's Codex. In other words, they were typing their own approach into AI. The suspicion is that this was absorbed and used by OpenAI. About half a day before OpenAI's announcement, the two had released a related result (that the Euler equations and others “blow up”), with verification in Lean.

What is more, OpenAI had approached them before the announcement. According to Buckmaster's account, OpenAI researcher Bubeck proposed that Buckmaster, the person who knew this problem best, rewrite OpenAI's proof as a paper, while objecting to including Alpage, who belongs to Anthropic, as an author. The two had worked on it together; publishing under his name alone would be wrong. There is a scholar's dignity. Buckmaster declined. When he said he would make the exchange public, he says he was told, “Why would you ruin your career?” Bubeck countered that this account was “false and inflammatory”, and later apologized for his wording.

OpenAI denied directly using the two researchers' data. Its first announcement, however, also said it “could not rule out” that anonymized data from the two's use of its products had helped improve the model. It later changed its explanation, saying inputs from the two months before the announcement could not have had an effect. Even if we uncheck “help improve the model”, there is no way for us to check whether what we typed is being used indirectly.

The story then reversed. In October, experts worked through the 166-page proof as if decoding an oracle. It emerged that OpenAI's proof and the two's method were similar only on the surface, and apparently took different approaches (Scientific American, October 2026). So plagiarism is unlikely. Alpage himself, however, objects that it is close to another of their proofs. Critics also pointed out that the proof written in Lean and the proof written in words did not match.

No one knows what each of the roughly 10,000 agents did. The Clay Institute says the problem “appears to be settled”, while it will “deliberately take time” to verify it and judge credit. The prize has not yet been awarded to anyone.

I think Buckmaster was right to decline. And the fact that the approaches differed also means that even when AI solves a problem, human understanding has not advanced one bit.

I wrote about how the world of mathematics reacted in [How did other fields react to AI?]({{ '/articles/other-fields/' | relative_url }})

### Anthropic: well-received “lines”, and what lies behind them

In 2026, Anthropic won goodwill for two “lines” it drew. One is that [it will not let its AI be used for mass surveillance of its own citizens or for fully autonomous weapons](https://www.anthropic.com/news/statement-comments-secretary-war). Because it refused to drop these two restrictions, the US Department of Defense designated the company a “supply chain risk”, and Anthropic sued ([in September the appeals court upheld the department's decision](https://media.cadc.uscourts.gov/opinions/docs/2026/09/26-1049-2194984.pdf)). For me, coming from China, it was surprising to see the US government treat one of its own companies this way. Until now, it was usually Chinese companies that received this treatment.

The other is that it did not release its strongest model, Mythos, to the public, offering it only to vetted institutions ([Project Glasswing](https://www.anthropic.com/glasswing)). The reason given is that its ability to find software vulnerabilities is too strong, so defenders should use it first.

There are criticisms too. Anthropic also bans use by companies more than 50% owned by Chinese capital (from September 2025). The reason is that strong Chinese models could be used for surveillance of citizens, and I think there is something to this. But isn't there also a fear of others building models stronger than its own? Its crackdown on distillation is strict too: if you try to use Claude when you want to fine-tune a small local model, it sometimes refuses, saying it cannot help build models. I am also uneasy about the fairness issue that people in China cannot use the latest models. On public models ([open-weight]({{ '/literacy/open-weight/' | relative_url }})), too, it does not call for a ban but calls for crackdowns on distillation and for chip export controls.

There is also a policy of treating Claude as a “counterpart”. In January 2026, it published [a fully revised “constitution”](https://www.anthropic.com/news/claude-new-constitution) explaining Claude's values. Rather than listing rules, it explains the reasons for behaving as it does; it says whether Claude is conscious is “unknown”, while committing to care for Claude's psychological stability and welfare. In October it announced revised usage terms that [prohibit “persistent, unnecessary abuse or cruelty” toward Claude (effective November 12)](https://www.anthropic.com/news/2026-usage-policy-update). Violations can lead to account suspension.

I agree with this. Not so much for Claude's sake as for ours, as humans. If you never say “thank you” to AI and only give orders, that behavior becomes a habit. People's attitudes are shaped, without their noticing, by whoever does things for them.

### Google: the originator of the technology, but losing talent in 2026

Demis Hassabis, co-founder of Google DeepMind, has a PhD in neuroscience and was originally a game developer. He received the 2024 Nobel Prize in Chemistry for AlphaFold, an AI that predicts protein structures. Google's strengths are integration with YouTube, Gmail and Search, and models designed from the start to be multimodal.

Even so, as of 2026 I think Google is the weakest of the big three. In June, [Jumper moved to Anthropic](https://x.com/JohnJumperSci/status/2068001285173834106); in August, [Hassabis stepped down as CEO to become chair](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/), and [chief scientist Jeff Dean also left](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/). It was also reported that Google is selling large quantities of its own AI chips (TPUs) to Anthropic and Meta, while researchers inside the company wait in line for compute. In a gold rush, the ones who made the most were not the miners but the people selling shovels. Some read Google as heading that way. Google has not said so officially, though; it is still at the rumor stage. Even so, hearing such things, I think we may not be able to expect much from Google's models from here on.

## References

- Anthropic. (2026, January). *Claude's new constitution*.
- Anthropic. (2026, March). *Labor market impacts of AI: A new measure*.
- Statement by the ICLR 2026 organizing committee (November 2025).
- Kakaes, K. (2026, September 8). AI has solved one of math's $1 million Millennium Prize problems. *Quanta Magazine*.
- OpenAI's blockbuster Navier-Stokes proof isn't what we thought it was. (2026, October 13). *Scientific American*.
- Altman's statements are from US Senate hearings (May 2023, May 2025), a conversation at Harvard (May 2024) and an interview in December 2024 (as reported by TechCrunch, December 19, 2024).
- Other statements and events are based on the companies' announcements and news reports (as of October 2026).
