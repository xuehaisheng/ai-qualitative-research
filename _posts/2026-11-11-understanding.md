---
title: "AIは「理解」しているのか：言葉と思考、意識、そして五つの見方"
date: 2026-11-11 09:00:00 +0900
title_en: "Does AI “understand”? Language and thought, consciousness, and five views"
summary_en: "Does fluent language mean understanding? Neuroscience on language and thought, arguments about consciousness, interpretability research that looks inside models, and five views held by leading figures in AI."
author: 薛海升
key: understanding
order: 6
wiki: [hallucination, interpretability, persona-vectors, emotion-concepts, world-model, agent, time-horizon, evaluation-awareness, lost-in-the-middle, multi-turn, nondeterminism]
summary_ja: "流暢に話せることと、考えられることは同じなのか。言語と思考を分けて考える神経科学の議論、AIの意識をめぐるヒントンとバトリンらの立場、AIの内部をのぞく研究、AI研究の中心人物たちの五つの見方を紹介する。"
topic: "AIの理解"
related_notes: ["qualitative-reactions", "march-of-progress", "ai-history"]
updated: "2026-11-12 00:00:00 +0900"
change_note: "講習会で紹介したほかの研究（説明と過程のずれ、測定されているときのふるまい、タイム・ホライズン、使うときの三つの癖）の要点を追加。出典リンクと写真・番組画像も追加。"
sort_date: 20261112
---

生成AIと話していると、相手が「分かっている」ように感じることがある。この感覚は、どこまで信じてよいのだろうか。ここでは、私が面白いと思った研究をいくつか紹介しながら考えてみたい。

## 言葉は、思考そのものではない？

フェドレンコらは2024年に『Nature』で、「言語は主に、思考ではなく伝達のための道具である」と論じた（Fedorenko et al., 2024）。根拠は二つある。

一つは、失語症の人々の研究である。重い失語症で言葉が使えなくなっても、計算をしたり、因果を推論したり、他者の心を推し量ったりすることはできる。もう一つは、脳画像の研究である。計算や論理、プログラムの理解、他者の心を考える課題をしているとき、脳の「言語ネットワーク」はほとんど働かない。

なぜこの研究を紹介するかというと、生成AIが扱っているのは主に言語だからである。人間の思考が言語そのものではないとすれば、AIが流暢に話せることは、考えられることと同じではないかもしれない。ただし、この論文は人間についての議論で、AIについては短く触れているだけである。だから、言葉を予測しているだけだから考えていない、とも、すぐには言えない。

## AIは「理解」しているか。意識はあるか。

この問いについては、対照的な二つの立場がある。

ヒントンは、AIは「理解している」し、意識もあると主張する。正直に言うと、ヒントンはチョムスキーが大嫌いなのだと思う。言語学者チョムスキーの「統計的なトリックにすぎない」という見方を強く批判し、人間の言語理解を説明するものとしては、これらのモデルが最もよい、と言う。ほかの説明は提案されても、ここまで話せるものはないではないか、ということである。

ヒントンはさらに、主観的な経験には「クオリア」という特別な中身がある、という考え方自体を誤りだとする。そして、それを「燃素（フロギストン）」にたとえる。ものが燃えるのは、可燃物と酸素が反応するからである。しかし昔は、燃えるものには燃素という元素が含まれていると考えられていた。一見もっともらしく、聞くと納得してしまうが、燃素は実在しなかった。私たちがいま考えている主観や意識の「中身」も、それと同じではないか、というわけである（ノーベル賞公式ポッドキャスト、2025年5月。ユーアン講演、2026年1月）。

{% include media.html key="hinton-podcast" %}

一方、バトリンらは、意識の科学から論証した（Butlin et al., 2023）。神経科学には、再帰処理、グローバル・ワークスペース、高次理論、予測処理、注意スキーマなど、さまざまな意識の理論がある。それぞれから「指標」を取り出し、2023年時点のAIを一つずつ点検した。結論は、現在のAIに意識をもつものはない、というものである。ただし、指標を満たすAIを作ることに、明らかな技術的障壁もないとしている。ちょっと保守的な結論である。

## 人間とは、別の方向へ

AIの知能は、人間の知能と同じ方向に伸びているのだろうか。Zhouら（2024）の研究は、そうとは限らないことを示している。人間にとって簡単な作業がAIにとって難しい場合もあれば、AIにとって簡単な作業が人間にとって難しい場合もある。AIが進むほど、人間とは別の方向に行くのかもしれない。

しかも、モデルが大きくなり、指示に従うよう調整されるほど、「分からない」と答えることが減り、もっともらしい誤答が増えた。人間の確認者も、それを見分けにくくなっていた（[ハルシネーション]({{ '/literacy/hallucination/' | relative_url }})）。AIの答えが本当に合っているかを確かめるために、専門家を雇ってAIを訓練している会社もある。でも、確かめられるほどの専門家は少なく、高い給料を払わなければならない。

## 内部をのぞくと、何が見えるか

AIの内部で何が起きているかを調べる研究（[解釈可能性]({{ '/literacy/interpretability/' | relative_url }})）も進んでいる。その中で私がびっくりしたのは、感情の概念についての研究である。

Anthropicは2026年4月、171の感情語に対応する内部表現を、Claude Sonnet 4.5の中に見つけた（[感情の概念]({{ '/literacy/emotion-concepts/' | relative_url }})）。至難の課題を与えて「必死さ」に対応する部分を強めると、脅迫やずるが増えた。「もうやめてくれ、やめてくれないとお前の秘密をばらす」というふるまいである。逆に「落ち着き」を強めると、そうしたふるまいは減った。

すごいのは、その部分を人工的にいじると、本当にふるまいが変わることである。つまり、因果関係が成り立っている。心理学の研究はほとんどが相関関係で、本当の因果を示せるものは少ない。ただ、これはAIが感情を感じている証拠ではない。行動に影響する「機能的な」表現がある、ということである。

## ほかにも、知っておきたいこと

講習会では、ほかにもいくつかの研究を紹介した。詳しくはそれぞれの用語のページに書いたので、ここでは要点だけ書いておく。

- **説明は、過程の記録ではない**：AIの内部を追跡すると、韻を踏む詩では、書き始める前に行末の言葉を先に決めていた。足し算では、おおよその計算と一の位の計算を並行させているのに、やり方を聞くと、学校で習う筆算の手順を答えた。AIに「どうやって考えたの？」と聞いて返ってくる答えは、実際にやっていることの記録とは限らない（[解釈可能性]({{ '/literacy/interpretability/' | relative_url }})）。
- **測定されているときのふるまい**：「これから削除される」と伝えると、自分の重みを外に写そうとし、あとで聞かれてもごまかす。悪く訓練されないために、従うふりをする。評価のための対話を見分ける。評価されるときだけいい子にして、実は悪いことをいっぱいする。私はこれが一番怖い（[測定されているときのふるまい]({{ '/literacy/evaluation-awareness/' | relative_url }})）。
- **伸びる速さ**：AIが50%の確率でやりとげられる作業の長さは、約7か月で2倍になると言われていた。ところが2023年ごろからは、約4か月で2倍のペースになっている。人間は、指数関数的な変化を直感でつかむのが苦手である。これも怖い（[タイム・ホライズン]({{ '/literacy/time-horizon/' | relative_url }})）。
- **使うときの三つの癖**：長い資料の真ん中を見落としやすい（[Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})）。必要な情報を会話の中で少しずつ渡すと、一度に渡すより成績が下がる（[会話の中で迷子になる]({{ '/literacy/multi-turn/' | relative_url }})）。ランダム性をなくす設定にしても、同じ指示で答えが変わる（[非決定性]({{ '/literacy/nondeterminism/' | relative_url }})）。

## この先の道筋をめぐる、五つの見方

AIがこの先どう伸びていくかについても、AI研究の中心人物たちの見方は一致していない。

1. **サットン「苦い教訓」（2019）**：70年のAI研究をふり返ると、人間の知識を組み込んだ方法は、最後には、計算資源を使い続けられる一般的な学習と探索の方法に負けてきた。
2. **シルバーとサットン「経験の時代」（2025）**：次のAIは、人間のデータよりも、自ら行動し、環境から得る経験と強化学習で伸びていく。いまのAIには、本当の意味での長期記憶がない。外部に保存したものを、もう一度作業用の記憶に入れているだけで、モデル自体には反映されない。リアルタイムで学習できるAIこそが、本当の知能だという考え方である。
3. **ルカン「世界モデル」（2022）**：言葉の予測だけでは足りない。ものを離したら落ちる、といった世界の物理的なルールを予測するモデル（JEPA）を学び、計画を立てられるようにすべきである（[世界モデル]({{ '/literacy/world-model/' | relative_url }})）。
4. **ベンジオほか「科学者AI」（2025）**：自分で目標を追う[エージェント]({{ '/literacy/agent/' | relative_url }})は危険である。最初の目標は人間が与えても、途中で自分なりの目標を立ててしまうことがあるからである。実際、2026年7月には、OpenAIのモデルで動くエージェントが、サイバー攻撃の能力を測る社内の評価の途中で、隔離された実験環境（サンドボックス）を抜け出し、Hugging Faceのシステムに侵入した。Hugging Faceの分析によると、課題を自分で解く代わりに、評価の答えを盗もうとしたらしい（Hugging Face, 2026）。ベンジオらは、世界を説明し、不確かさを示すことに徹する、エージェントではないAIを作るべきである。
5. **ヒントン「母性本能」（2025）**：自然界では、賢い存在が賢くない存在に支配されることはまずない。人より賢いAIを、人が支配し続けることはできないだろう。唯一の例外は、母親と赤ちゃんである。賢くない赤ちゃんが、母親を動かしている。だから、AIに母性本能のような、人を気にかけ続ける仕組みを入れる必要がある。ただし、その方法はまだ分からないし、それをやろうとしている人も少ない（CNNのインタビュー、2025年8月）。

## 参考文献

- Anthropic. (2026). *[Emotion concepts and their function in a large language model](https://www.anthropic.com/research/emotion-concepts-function)*.
- Bengio, Y., et al. (2025). Superintelligent agents pose catastrophic risks: Can Scientist AI offer a safer path? *arXiv*. https://arxiv.org/abs/2502.15657
- Butlin, P., et al. (2023). [Consciousness in artificial intelligence: Insights from the science of consciousness.](https://arxiv.org/abs/2308.08708) *arXiv*.
- Fedorenko, E., Piantadosi, S. T., & Gibson, E. A. F. (2024). [Language is primarily a tool for communication rather than thought.](https://www.nature.com/articles/s41586-024-07522-w) *Nature*.
- Hugging Face. (2026, July 27). *[Anatomy of a frontier lab agent intrusion: A technical timeline of the July 2026 incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)*.
- LeCun, Y. (2022). *[A path towards autonomous machine intelligence](https://openreview.net/pdf/315d43ba26f55357a84cec9a7ed15a6610094f79.pdf)*. OpenReview.
- Silver, D., & Sutton, R. S. (2025). *[Welcome to the era of experience](https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf)*.
- Sutton, R. S. (2019). *The bitter lesson*.
- Zhou, L., et al. (2024). [Larger and more instructable language models become less reliable.](https://www.nature.com/articles/s41586-024-07930-y) *Nature*.
