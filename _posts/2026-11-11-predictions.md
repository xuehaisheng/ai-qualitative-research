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

AIについては、毎週のように大きな予測が示されている。その発言者には、ノーベル賞を受賞した研究者や、最先端の企業を率いる人も多い。本稿では、いくつかの予測と、その後に明らかになったことを並べて検討したい。誰の予測を、どのような根拠に基づいて信じるか、あるいは信じないかを考える材料にしていただければと思う。

## クイズ：この予言は当たったか？

2016年、「深層学習の父」と呼ばれるジェフリー・ヒントンは、「今すぐ、放射線科医を育てるのをやめるべきだ」と述べた。AIはパターン認識を得意とするため、画像診断の正答率も、まもなく医師を上回るという理由であった。この発言を受けて、放射線科医を目指すことをやめた人もいたかもしれない。その後、ヒントンは2023年に「AIの危険について話すため」にGoogleを退社し、2024年にはノーベル物理学賞を受賞している。

しかし、この予測は外れた。メイヨー・クリニックでは、放射線科医が2016年から55%増え、約400人となった。また、米国放射線学会は、今後30年にさらに26%増加すると予測している。2025年5月には、ヒントン自身もニューヨーク・タイムズの取材に対して、「言い過ぎた」と認めた。

予測が外れた理由としては、主に二つが挙げられている。

一つ目は、読影にかかる費用や時間が減少することで、検査の件数が増えた点である。それまで長く待つ必要があった人々が、早く検査を受けられるようになり、結果として医師の不足が生じた。

二つ目は、ヒントンが、放射線科医の実際の仕事を十分に把握していなかったと思われる点である。放射線科医は、画像を読むことに加え、結果を患者や他の医師に伝える役割も担っている。例えば、がんのような深刻な結果を伝える場面では、AIから告げられても、容易には信頼できないと思う。こうした場面では、人が人を信頼する関係が重要になるのである。

## 安全を掲げ、予言は最も強気

AnthropicのCEOであるダリオ・アモデイは、かつてOpenAIで研究を率いていたが、安全性に関する考え方の違いから、2021年に独立してAnthropicを設立した。彼は安全性を最も重視すると述べる一方、能力の進歩については、三社のトップの中でも最も強気な予測を示してきた。

{% include media.html key="amodei-cfr" %}

- [2024年10月には、AIが「データセンターの中の天才の国」となり、生物学における50〜100年分の進歩を5〜10年に短縮すると述べた。](https://darioamodei.com/essay/machines-of-loving-grace)
- [2025年3月には、3〜6か月以内に、コードの90%をAIが書くようになると予測した。](https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic)
- [2025年5月には、1〜5年で新人ホワイトカラーの仕事の半分が失われ、失業率が10〜20%に達すると述べた。](https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic)

### 「できる」と「やっている」の間

{% include figure.html src="fig-labor-radar.jpg" cap="職業ごとの、理論上AIができる作業の割合（青）と、実際にClaudeで行われている割合（赤）。出典：Anthropic “Labor market impacts of AI: A new measure”（2026年3月）図2。" %}

一方、[2026年3月にAnthropic自身が公表した報告](https://www.anthropic.com/research/labor-market-impacts)からは、やや異なる状況がうかがえる。この報告では、自社サービスの利用データを用い、職業ごとに「理論上AIができる作業の割合」（青）と、「実際にClaudeで行われている割合」（赤）が比較されている。

例えば、「コンピュータと数学」の分野では、理論上はほぼすべての作業がAIで可能とされる一方、実際に行われていたのは約33%であった。影響が最も大きい職業はプログラマー（75%）であり、小さいものには庭師、調理師、バーテンダーなど、身体を使う仕事が含まれていた。また、AIの影響を強く受ける職業でも、失業率の系統的な上昇は、まだ確認されていない。22〜25歳の若者がこれらの職業に就く率が約14%低下したという兆候はあるが、統計的には、ぎりぎり有意とされる程度である。

この区別を質的研究に当てはめると、どの作業が青に、どの作業が赤にあたるだろうか。例えば、文字起こしや翻訳、文献の要約、コーディングの下書き、文章の推敲は、AIに任せやすいように見える。一方、フィールドに入ることや関係を築くこと、解釈や倫理的判断については、どのように考えられるか、検討してみたい。

## 正反対の二つの予言

AIに関する予測には、望ましい未来を描くものと、危険を強調するものの両方がある。

イーロン・マスクは、2026年7月の英エコノミスト誌のインタビューで、AIが人類を滅ぼす確率を10〜20%と見積もった。ロケットの開発にも関わる彼に対して、「その確率で爆発するロケットに乗るか」と質問されたという。マスクは、しばらく黙った後、「乗る。ただし、自分ではどうにもできないなら」と答えた。

これに対し、NVIDIAのCEOジェンスン・フアンは、2026年9月のポッドキャストで、「10%で絶滅、という計算はでっち上げだ」と述べた。その際、放射線科医に関する予測も外れたことを指摘している。

{% include media.html key="jensen-all-in" %}

Anthropicを含め、危険を強調する側の説明には、AIは人類を滅ぼす可能性があるからこそ、信頼できる自分たちに開発を任せるべきであり、他社は同じようには対応しないという論理が見られる。一方、危険を否定するフアンの企業も、AI半導体によって大きな利益を得ている。いずれの立場も、AI産業から直接利益を得る位置にあることを踏まえる必要があると思う。

誰の予測を、何を根拠として信じるかは、発言者の肩書きだけでは決められない。冒頭で見たように、ノーベル賞を受賞する研究者であっても、予測を誤ることがあるためである。

## 学術世界の醜態：査読は、誰が書いているのか

ICLRは、機械学習における最高峰の国際会議の一つである。OpenReviewを用いて査読を公開し、著者と査読者が匿名でやりとりする仕組みを採用している。しかし、2026年大会の査読中であった2025年11月27日、システムの不具合によって、外部から著者と査読者を特定できる状態となった。1万本以上の投稿に関する情報が抜き取られて流通し、低い評価を付けた査読者への嫌がらせや、買収も起きた。[組織委員会は、これを「ICLRの公正さへの、前例のない攻撃」とする声明を発表した](https://blog.iclr.cc/2025/12/03/iclr-2026-response-to-security-incident/)。

ほぼ同じ時期に、AI検出企業Pangramは、この会議の査読意見のうち、[約21%がすべてAIによって作成されたと推定した](https://www.pangram.com/blog/pangram-predicts-21-of-iclr-reviews-are-ai-generated)。AI研究者の会議において、査読そのものをAIに委ねていることになる。論文を十分に読み、自分で検討していれば、このようにはならないのではないかと思う。

査読者がAIで意見を作成し、著者もAIで論文を作成する場合、査読は何を評価しているのかが問われる。この問題は、質的研究の論文査読においても起こりうる。

## 誰が、誰から「盗んだ」のか

[蒸留]({{ '/literacy/distillation/' | relative_url }})とは、高性能なモデルの出力を用いて、別のモデルを学習させることである。2025年から2026年にかけては、この言葉に関わって、学ぶ側と学ばれる側の立場が入れ替わるような出来事が続いた。

そもそもAI企業は、人間が蓄積してきたインターネット上の文章や書籍を学習し、有料サービスとして提供してきた。2025年9月のAnthropicに対する著作権訴訟では、購入した書籍を用いた学習はフェアユースにあたると判断された。同社は、大量の古本を購入し、裁断してスキャンしたものを学習に用いていた。一方、海賊版サイトから約700万冊を保存していたことは侵害とされ、[Anthropicは15億ドルで和解した](https://assets-us-01.kc-usercontent.com/1eeb16db-4934-006e-40a6-38fa91285ebb/d8578720-9fd0-4c27-9c7f-041bac826869/Class%20Action%20Settlement%20Agreement.pdf)。

そのAnthropicは、2026年2月に、中国の3社（DeepSeek、月之暗面、MiniMax）が、[約2.4万の偽アカウントで1600万回以上のやりとりを行い](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks)、Claudeの能力を抽出したと告発した。同社は、この行為を「蒸留攻撃」と呼んでいる。

Anthropicの説明は、書籍は購入したものである一方、中国企業の行為は、自ら同意した利用規約への違反であり、問題は著作権ではなく契約にあるというものである。これに疑問を呈する側は、書籍の著者は学習に同意していないと指摘する。そのうえで、何万もの偽アカウントによる規約違反と、著者の知らないところで書籍を裁断して学習に用いることには、倫理的にどれほどの違いがあるかを問うている。企業が公に示す姿勢と、その背後で行うことには、問題を感じる面もある。同じく他者から学ぶ行為の中で、何を正当とし、何を盗みとするかは、改めて考える必要がある。

## 三つの会社の気質

現在、最先端のモデルを開発する代表的な企業として、三社が挙げられる。OpenAIは、2015年に非営利の研究所として発足し、ChatGPTを提供している。Anthropicは、2021年にOpenAIの元研究者らが設立した企業であり、Claudeを提供する。また、Google DeepMindは、2010年に設立され、2014年にGoogleが買収した企業で、Geminiを開発している。三社の新モデルと命名の特徴については、[生成AIの簡単な歴史]({{ '/articles/ai-history/' | relative_url }})で紹介した。

### OpenAI：言うことが、時期によって変わる

先に断っておくと、私はアルトマンにあまり好感を持っていない。そのため、以下の記述にも、薛のバイアスが強く含まれるものとして読んでいただきたい。私が特に気になっているのは、時期によって発言が変わる点である。

- **広告**：2024年5月のハーバード大学での対談で、アルトマンは、広告をChatGPTの「最後の手段」と位置づけた。AIと広告の組み合わせには、独特の不安を感じるためだという。しかし、2026年2月には、アメリカで無料プランと最も安い有料プラン（Go）の一部の利用者に、回答の下に関連広告を表示するようになった。
- **規制**：2023年5月の上院公聴会では、安全のための「一番の」提案として、AIに許認可を与える新たな機関の設立を求めた。一方、2025年5月の上院公聴会では、AI公開前の政府承認を義務づけることは「破滅的」だと述べた。
- **株**：2023年の公聴会では、OpenAIの株を保有していないと述べ、同社の利益とは関わりなく、自分が好きで取り組んでいるという姿勢を示していた。しかし、2024年12月のインタビューでは、かつてのY Combinatorのファンドを通じて「ほんのわずか」保有していることと、以前にはセコイアのファンド経由でも保有していたことを認めた。
- **解任**：2023年11月、取締役会は、アルトマンが取締役会に対して「一貫して率直ではなかった」として解任した。その後、社員の反発を受けて、5日後には復帰している（[生成AIの簡単な歴史]({{ '/articles/ai-history/' | relative_url }})）。

### OpenAIとナビエ–ストークス方程式：88時間で「解けた」100万ドルの難問

OpenAIに関しては、数学の研究者との間で生じた問題も取り上げておきたい。

ナビエ–ストークス方程式は、水や空気の流れを表す方程式である。2000年にクレイ数学研究所は、七つの難問を「ミレニアム懸賞問題」として提示し、それぞれに賞金100万ドルを設けた。これまでに解かれたのはポアンカレ予想のみであり、人間の知的営みの最先端にある問題と言える。ナビエ–ストークス方程式の問題もその一つで、3次元の滑らかな流れが、有限の時間内に突然「爆発」するかどうかが問われている。

2026年9月8日、OpenAIは、未公開モデルを用いた約1万のAIエージェントが、88時間で「爆発する」ことを証明したと発表した。この問題の公式説明文を執筆した数学者フェファーマンは、「解けて、わくわくした」と述べた。証明は、コンピュータ上で検証できる言語[Lean]({{ '/literacy/lean/' | relative_url }})で記述されている。ただし、人間には、その内容を理解できない状態であった。

この発表をめぐっては、剽窃の疑いも生じた。同じ問題には、ニューヨーク大学のバックマスターと、Anthropicのアルペゲが共同で取り組んでいた。二人は、ClaudeやOpenAIのCodexなどの公開モデルを利用し、自分たちの解法を入力しながら研究を進めていた。その内容がOpenAIに取り込まれ、利用されたのではないかという疑いである。二人は、OpenAIの発表の約半日前に、オイラー方程式などが「爆発する」という関連結果を、Leanによる検証とともに公開していた。

また、発表前には、OpenAIからの打診があったという。バックマスターによれば、OpenAIの研究者ブベックは、この問題に最も詳しい彼に対して、同社の証明を書き直して論文にすることを提案した。その際、Anthropic所属のアルペゲを著者に含めることには反対したという。しかし、二人で研究を進めてきたにもかかわらず、自分一人の名前で発表することは、研究者として受け入れがたいものであったと思う。バックマスターは提案を断った。また、やりとりを公表すると伝えたところ、「なぜ自分のキャリアを台無しにするのか（Why would you ruin your career?）」と言われたという。ブベックは、この説明を「誤りで、扇動的だ」と否定したが、後に言葉づかいについては謝罪した。

OpenAIは、二人のデータを直接利用したことを否定した。一方、最初の発表では、二人の製品利用から得た匿名化データが、モデルの改善に寄与した可能性は「否定できない」とも記していた。その後、発表前の2か月間の入力は影響しえなかったという説明に変更している。私たちが「モデルの改善に協力する」のチェックを外していても、入力内容が間接的に利用されていないかを、自分たちの側から確認することはできない。

ただし、その後、事態は異なる展開を見せた。10月に専門家たちが166ページの証明を、神託を読み解くように検討した結果、OpenAIの証明と二人の方法は、表面的には似ていても、異なるアプローチであることが明らかになってきた（Scientific American, 2026年10月）。この結果からは、剽窃の可能性は低いと考えられる。ただし、アルペゲ自身は、自分たちの別の証明に近いと異論を述べている。また、Leanによる記述と言葉による記述が食い違うという指摘も出された。

約1万のエージェントがそれぞれ何を行ったかは、誰にも分からない。クレイ研究所は、問題は「どうやら決着した」としながらも、検証と功績の判断には「あえて時間をかける」としている。現時点では、賞金も授与されていない。

私は、バックマスターが提案を断った判断は適切だったと思う。また、証明を読み込んで初めてアプローチの違いが分かったことは、AIが問題を解いても、それだけでは人間の理解が進まないことを示している。

数学の分野における反応は、[他の分野は、AIにどう反応したか]({{ '/articles/other-fields/' | relative_url }})でも取り上げている。

### Anthropic：好感を集めた「線引き」と、その裏側

Anthropicは2026年に、二つの「線引き」によって好意的に受けとめられた。一つは、[自国民の大規模監視と完全自律兵器への自社AIの利用を認めない](https://www.anthropic.com/news/statement-comments-secretary-war)という方針である。同社がこれらの制限を外すことを拒んだため、米国防総省は「供給網上のリスク」に指定し、Anthropicは提訴した。[9月の控訴審では、国防総省の判断が支持された](https://media.cadc.uscourts.gov/opinions/docs/2026/09/26-1049-2194984.pdf)。米国政府が自国の企業にこのように対応することに、中国出身の私は驚いた。従来、こうした扱いを受けるのは、中国企業であることが多かったためである。

もう一つは、最も強力なモデルであるMythosを一般公開せず、審査を通過した機関に限って提供したことである（[グラスウィング計画](https://www.anthropic.com/glasswing)）。ソフトウェアの脆弱性を発見する能力が高すぎるため、まず防御する側に利用してもらうという理由であった。

一方、批判を受ける側面もある。Anthropicは、2025年9月以降、中国資本が50%を超える企業の利用を禁止している。高性能な中国のモデルが、国民の監視に使われる可能性を理由とする点には、一理あると思う。ただし、自社を上回るモデルが開発されることへの懸念もあるのではないか。蒸留への取り締まりも厳しく、ローカルで小さなモデルを微調整するためにClaudeを利用しようとすると、モデル開発には協力できないと断られる場合がある。また、中国にいる人が最新モデルを利用できないという状況には、公平性の観点から違和感がある。公開モデル（[オープンウェイト]({{ '/literacy/open-weight/' | relative_url }})）の禁止自体は主張していないものの、蒸留への取り締まりや、チップの輸出規制を求めている。

Claudeを一つの「相手」として扱う方針も示されている。2026年1月には、Claudeの価値観を説明する[「憲法」を全面的に改訂して公開した](https://www.anthropic.com/news/claude-new-constitution)。これは、個々の規則を列挙するよりも、ふるまいの理由を説明する方針である。Claudeに意識があるかどうかは「分からない」としつつ、心理的な安定と福祉に配慮すると記されている。10月には、利用規約の改定を発表し、Claudeに対する[「持続的で不必要な虐待・残酷な行為」を禁止した（11月12日施行）](https://www.anthropic.com/news/2026-usage-policy-update)。違反した場合には、アカウント停止の可能性もある。

私は、この方針に同意する。主に気になるのは、Claudeへの影響以上に、私たち人間への影響である。AIに「ありがとう」とも言わず、命令することばかりを続けていると、その態度が習慣になる可能性がある。何かをしてくれる相手と関わる中で、私たちの態度も、無意識のうちに形づくられると思う。

### Google：技術の本家。でも2026年は人材流出

Google DeepMindの共同創業者デミス・ハサビスは、神経科学の博士号を持ち、もとはゲーム開発に携わっていた。タンパク質の構造を予測するAlphaFoldの開発によって、2024年にノーベル化学賞を受賞した。Googleの強みには、YouTube、Gmail、検索との統合と、当初からマルチモーダルとして設計されたモデルが挙げられる。

それでも、2026年の時点では、三社の中でGoogleが最も弱い立場にあると、私は考えている。6月には[ジャンパーがAnthropicに移り](https://x.com/JohnJumperSci/status/2068001285173834106)、8月には[ハサビスがCEOを退いて会長となり](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/)、[チーフサイエンティストのジェフ・ディーンも退社した](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/)。また、自社のAIチップ（TPU）をAnthropicやMetaに大量に販売する一方、社内の研究者は計算資源の利用を待っているとも報じられた。ゴールドラッシュでは、採掘者よりもシャベルを売る人が利益を得たという話があるが、Googleもその方向に進んでいると見る人がいる。ただし、これはGoogleが公式に示した方針ではなく、噂の段階にとどまる。それでも、こうした話を踏まえると、同社のモデルの今後には、あまり期待できないのかもしれないと感じている。

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
