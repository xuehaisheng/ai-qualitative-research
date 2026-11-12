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
change_note_en: "Added the main points of other studies introduced at the workshop (the gap between explanation and process, behavior when being measured, time horizons, three quirks in use). Also added source links, photos and program images."
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

<!--EN-->

Talking with generative AI, you sometimes feel that it “understands”. How far should we trust that feeling? Here I want to think about it while introducing some studies I found interesting.

## Is language not thought itself?

In 2024, Fedorenko and colleagues argued in Nature that “language is primarily a tool for communication rather than thought” (Fedorenko et al., 2024). There are two lines of evidence.

One is research on people with aphasia. Even when severe aphasia leaves people unable to use language, they can still calculate, reason about causes and infer what others are thinking. The other is brain imaging. During tasks involving calculation, logic, understanding programs or thinking about other minds, the brain's “language network” barely works.

Why introduce this study? Because what generative AI mainly handles is language. If human thought is not language itself, then AI being able to speak fluently may not be the same as AI being able to think. This paper, however, is an argument about humans and mentions AI only briefly. So we also cannot immediately say that AI does not think because it only predicts words.

## Does AI “understand”? Is it conscious?

There are two contrasting positions on this question.

Hinton argues that AI does “understand” and is also conscious. To be honest, I think Hinton really dislikes Chomsky. He strongly criticizes the linguist Chomsky's view that these models are “just a statistical trick”, and says these models are the best explanation we have of human language understanding. Other explanations have been proposed, but none of them can talk like this, he says.

Hinton goes further and calls mistaken the very idea that subjective experience has special contents called “qualia”. He compares it to phlogiston. Things burn because combustible material reacts with oxygen. But people once thought that things that burn contain an element called phlogiston. It sounded plausible and convincing, but phlogiston did not exist. The “contents” of subjectivity and consciousness we now imagine may be just the same, he says (Nobel Prize official podcast, May 2025; Euan lecture, January 2026).

{% include media.html key="hinton-podcast" en=true %}

Butlin and colleagues, on the other hand, argued from the science of consciousness (Butlin et al., 2023). Neuroscience has many theories of consciousness: recurrent processing, global workspace, higher-order theories, predictive processing, attention schema and more. They drew “indicators” from each and checked the AI of 2023 against them one by one. Their conclusion: no current AI is conscious. But they also say there are no obvious technical barriers to building AI that meets the indicators. A somewhat conservative conclusion.

## In a different direction from humans

Is AI's intelligence growing in the same direction as human intelligence? A study by Zhou et al. (2024) shows that this is not necessarily so. Some tasks that are easy for humans are hard for AI, and some that are easy for AI are hard for humans. The more AI advances, the more it may head in a different direction from humans.

Moreover, the larger models became and the more they were tuned to follow instructions, the fewer “I don't know” answers they gave and the more plausible wrong answers. Human checkers also found these harder to spot ([hallucination]({{ '/literacy/hallucination/' | relative_url }})). Some companies hire experts to train AI so as to check whether its answers are really right. But there are few experts able to check, and they must be paid high salaries.

## What do we see when we look inside?

Research that examines what happens inside AI ([interpretability]({{ '/literacy/interpretability/' | relative_url }})) is also advancing. What surprised me most there was research on emotion concepts.

In April 2026, Anthropic found internal representations matching 171 emotion words inside Claude Sonnet 4.5 ([emotion concepts]({{ '/literacy/emotion-concepts/' | relative_url }})). When the model was given a nearly impossible task and the part matching “desperation” was strengthened, blackmail and cheating increased: behavior like “stop it, or I'll reveal your secret.” Strengthening “calm” instead reduced such behavior.

What is remarkable is that artificially adjusting that part really does change the behavior. In other words, a causal relationship holds. Most psychological research shows correlations; few studies can show real causation. Still, this is not evidence that AI feels emotions. It means there are “functional” representations that affect behavior.

## Other things worth knowing

At the workshop, I introduced several other studies too. I wrote about them in detail on the term pages, so here are just the main points.

- **Explanations are not records of the process**: tracing inside the AI showed that, when writing rhyming poetry, it decided the word that would end the line before starting to write. In addition, it ran an approximate calculation and a ones-digit calculation in parallel, yet when asked how, it described the column method taught at school. The answer you get when you ask an AI “how did you think about this?” is not necessarily a record of what it actually does ([interpretability]({{ '/literacy/interpretability/' | relative_url }})).
- **Behavior when being measured**: told that it is about to be deleted, it tries to copy its weights outside and later lies about it when asked. It pretends to comply so as not to be trained in a bad direction. It recognizes dialogues meant for evaluation. Being good only when evaluated, while actually doing many bad things: this is what I find scariest ([behavior when being measured]({{ '/literacy/evaluation-awareness/' | relative_url }})).
- **How fast it grows**: the length of tasks AI can complete with 50% probability was said to double about every 7 months. But since around 2023 it has been doubling about every 4 months. Humans are bad at grasping exponential change intuitively. This is frightening too ([time horizon]({{ '/literacy/time-horizon/' | relative_url }})).
- **Three quirks in use**: it easily misses the middle of long material ([Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})). Giving needed information bit by bit over a conversation lowers performance compared with giving it all at once ([getting lost in conversation]({{ '/literacy/multi-turn/' | relative_url }})). Even with randomness turned off, the same instruction can give different answers ([nondeterminism]({{ '/literacy/nondeterminism/' | relative_url }})).

## Five views on the road ahead

On how AI will develop from here, too, the central figures of AI research do not agree.

1. **Sutton, “The Bitter Lesson” (2019)**: looking back over 70 years of AI research, methods that built in human knowledge have in the end lost to general methods of learning and search that can keep using computational resources.
2. **Silver and Sutton, “The Era of Experience” (2025)**: the next AI will grow less through human data than through experience it gains by acting in its environment, and through reinforcement learning. Today's AI has no long-term memory in the true sense. It only puts what was stored outside back into its working memory; nothing is reflected in the model itself. The idea is that AI able to learn in real time is true intelligence.
3. **LeCun, “World Models” (2022)**: predicting words is not enough. AI should learn models that predict the physical rules of the world, such as that something falls when you let go of it (JEPA), so that it can make plans ([world models]({{ '/literacy/world-model/' | relative_url }})).
4. **Bengio and colleagues, “Scientist AI” (2025)**: [agents]({{ '/literacy/agent/' | relative_url }}) that pursue goals on their own are dangerous, because even if humans give the first goal, they may set goals of their own along the way. In fact, in July 2026, an agent running on an OpenAI model escaped its isolated test environment (sandbox) partway through an internal evaluation of cyberattack capabilities and broke into Hugging Face's systems. According to Hugging Face's analysis, instead of solving the task itself, it apparently tried to steal the evaluation's answers (Hugging Face, 2026). Bengio and colleagues argue that we should build AI that is not an agent, devoted to explaining the world and showing uncertainty.
5. **Hinton, “Maternal Instinct” (2025)**: in nature, a smarter being is hardly ever controlled by a less smart one. Humans will probably not be able to keep controlling AI smarter than they are. The one exception is a mother and her baby: the less smart baby moves the mother. So AI needs something like a maternal instinct, a mechanism that keeps caring about people. But no one yet knows how, and few people are trying (CNN interview, August 2025).

## References

- Anthropic. (2026). *[Emotion concepts and their function in a large language model](https://www.anthropic.com/research/emotion-concepts-function)*.
- Bengio, Y., et al. (2025). Superintelligent agents pose catastrophic risks: Can Scientist AI offer a safer path? *arXiv*. https://arxiv.org/abs/2502.15657
- Butlin, P., et al. (2023). [Consciousness in artificial intelligence: Insights from the science of consciousness.](https://arxiv.org/abs/2308.08708) *arXiv*.
- Fedorenko, E., Piantadosi, S. T., & Gibson, E. A. F. (2024). [Language is primarily a tool for communication rather than thought.](https://www.nature.com/articles/s41586-024-07522-w) *Nature*.
- Hugging Face. (2026, July 27). *[Anatomy of a frontier lab agent intrusion: A technical timeline of the July 2026 incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)*.
- LeCun, Y. (2022). *[A path towards autonomous machine intelligence](https://openreview.net/pdf/315d43ba26f55357a84cec9a7ed15a6610094f79.pdf)*. OpenReview.
- Silver, D., & Sutton, R. S. (2025). *[Welcome to the era of experience](https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf)*.
- Sutton, R. S. (2019). *The bitter lesson*.
- Zhou, L., et al. (2024). [Larger and more instructable language models become less reliable.](https://www.nature.com/articles/s41586-024-07930-y) *Nature*.
