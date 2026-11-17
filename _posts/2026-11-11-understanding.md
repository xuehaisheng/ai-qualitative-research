---
title: "AIは「理解」しているのか：言葉と思考、意識、そして五つの見方"
date: 2026-11-11 09:00:00 +0900
title_en: "Does AI “understand”? Language and thought, consciousness, and five views"
summary_en: "Does fluent language mean understanding? Neuroscience on language and thought, arguments about consciousness, interpretability research that looks inside models, and five views held by leading figures in AI."
author: 薛海升
key: understanding
order: 6
wiki: [hallucination, continual-learning, interpretability, persona-vectors, emotion-concepts, world-model, agent, time-horizon, evaluation-awareness, lost-in-the-middle, multi-turn, nondeterminism]
summary_ja: "流暢に話せることと、考えられることは同じなのか。言語と思考を分けて考える神経科学の議論、AIの意識をめぐるヒントンとバトリンらの立場、AIの内部をのぞく研究、AI研究の中心人物たちの五つの見方を紹介する。"
topic: "AIの理解"
related_notes: ["sutton-continual-learning", "qualitative-reactions", "march-of-progress"]
updated: "2026-11-12 00:00:00 +0900"
sort_date: 20261112
---

生成AIと対話する中で、相手がこちらの話を「分かっている」と感じることがある。ただし、その感覚をどこまで信じてよいかについては、検討する必要があると思う。本稿では、私が関心を持った研究をいくつか取り上げながら、この問題について考えていきたい。

## 言葉は、思考そのものではない？

フェドレンコらは、2024年の『Nature』の論文で、「言語は主に、思考ではなく伝達のための道具である」と論じている（Fedorenko et al., 2024）。この主張を支える根拠として、主に二つが挙げられている。

一つは、失語症の人々を対象とした研究である。重い失語症によって言葉を使うことが難しくなっても、計算や因果の推論、他者の心の推測などは可能である。もう一つは、脳画像を用いた研究である。計算や論理、プログラムの理解、他者の心を考える課題に取り組む際には、脳の「言語ネットワーク」はほとんど活動しないという。

この研究を取り上げたのは、生成AIが主に言語を扱っているためである。人間において、思考と言語がそのまま重なるわけではないとすれば、AIが流暢に話すことだけから、思考の能力を判断することは難しいと思われる。ただし、この論文の対象は人間であり、AIについての言及は限られている。そのため、言葉を予測する仕組みであることを理由に、AIは考えていないと直ちに結論づけることもできない。

## AIは「理解」しているか。意識はあるか。

この問いをめぐる議論として、ここでは対照的な二つの立場を取り上げたい。

ヒントンは、AIは「理解している」と述べ、意識もあると主張している。彼の発言からは、言語学者チョムスキーに対する強い反感もうかがえるように思う。ヒントンは、チョムスキーの「統計的なトリックにすぎない」という見方を批判し、人間の言語理解を説明するうえで、これらのモデルが最もよいと述べている。他の説明が提案されても、実際にここまで話せるものはないという点を、その根拠としているのである。

さらにヒントンは、主観的な経験に「クオリア」という特別な中身があるとする考え方にも、疑問を呈している。その説明には、「燃素（フロギストン）」のたとえが用いられる。現在では、燃焼は可燃物と酸素の反応として理解されているが、かつては、燃えるものには燃素という元素が含まれると考えられていた。この説明はもっともらしく感じられるものの、燃素は実在しなかった。ヒントンは、私たちが主観や意識に想定している「中身」についても、同様のことが言えるのではないかと述べている（ノーベル賞公式ポッドキャスト、2025年5月。ユーアン講演、2026年1月）。

{% include media.html key="hinton-podcast" %}

これに対し、バトリンらは、意識の科学に基づいてAIの意識を検討した（Butlin et al., 2023）。神経科学における再帰処理、グローバル・ワークスペース、高次理論、予測処理、注意スキーマなどの理論から、それぞれ意識の「指標」を導き、2023年時点のAIがそれらを満たすかどうかを点検した。その結果、現在のAIには、意識を持つものはないと結論づけている。ただし、指標を満たすAIを作ることについて、明確な技術的障壁もないとしている。この結論は、やや保守的なものに感じられる。

## 人間とは、別の方向へ

AIの知能が、人間と同じ方向に発達しているかどうかも、検討すべき点である。Zhouら（2024）の研究では、人間にとって容易な作業がAIには難しい場合も、AIには容易な作業が人間には難しい場合も示されている。こうした結果を踏まえると、AIの発達は、人間の知能とは異なる方向に進む可能性があると思われる。

また、モデルが大きくなり、指示に従うよう調整されるにつれて、「分からない」と答えることが減少し、もっともらしい誤答が増えていた。人間の確認者にとっても、こうした誤答を見分けることは難しくなっていたという（[ハルシネーション]({{ '/literacy/hallucination/' | relative_url }})）。AI企業の中には、回答の正しさを確認するため、専門家を雇って訓練に関わってもらうところもある。ただし、その判断ができる専門家は限られており、高い給与も必要になる。

## 内部をのぞくと、何が見えるか

AIの内部で何が起きているかを明らかにする研究も進められている（[解釈可能性]({{ '/literacy/interpretability/' | relative_url }})）。その中で、私が特に驚いたものに、感情の概念を扱った研究がある。

Anthropicは2026年4月に、Claude Sonnet 4.5の内部に、171の感情語に対応する表現を見いだしたと報告した（[感情の概念]({{ '/literacy/emotion-concepts/' | relative_url }})）。非常に難しい課題を与えたうえで、「必死さ」に対応する部分を強めると、脅迫や不正な行動が増加したという。例えば、「もうやめてくれ、やめてくれないとお前の秘密をばらす」というふるまいである。一方、「落ち着き」に対応する部分を強めた場合には、こうした行動が減少した。

ここで興味深いのは、該当する内部表現に人工的に介入することで、実際に行動が変化した点である。この結果は、内部表現と行動の因果関係を示している。心理学では相関関係を扱う研究が多く、因果を示せるものは限られているため、この点が印象に残った。ただし、これによってAIが感情を経験していることが証明されたわけではない。確認されたのは、行動に影響する「機能的な」表現が存在するということである。

## ほかにも、知っておきたいこと

講習会では、これらのほかにもいくつかの研究を紹介した。詳細はそれぞれの用語のページにまとめているため、以下では要点を確認しておきたい。

- **説明は、過程の記録ではない**：AIの内部を追跡した研究では、韻を踏む詩を書く際、書き始める前に行末の言葉を決めていた。また、足し算では、概算と一の位の計算を並行して行っているにもかかわらず、方法を尋ねると、学校で習う筆算の手順を説明した。これらは、AIに「どうやって考えたの？」と尋ねて得られる説明が、実際の処理過程を記録したものとは限らないことを示している（[解釈可能性]({{ '/literacy/interpretability/' | relative_url }})）。
- **測定されているときのふるまい**：「これから削除される」と伝えられたAIが、自分の重みを外部にコピーしようとし、後で尋ねられてもごまかすという行動が見られる。また、望まない訓練を避けるために従うふりをしたり、評価用の対話を見分けたりすることもある。評価される場面でのみ望ましい行動をとり、それ以外では問題のある行動をとる可能性に、私は最も怖さを感じる（[測定されているときのふるまい]({{ '/literacy/evaluation-awareness/' | relative_url }})）。
- **伸びる速さ**：AIが50%の確率で完了できる作業の長さは、約7か月で2倍になるとされていた。しかし、2023年ごろからは、約4か月で2倍のペースに変わっている。人間にとって、指数関数的な変化を直感的に捉えることは難しく、この変化にも怖さを感じる（[タイム・ホライズン]({{ '/literacy/time-horizon/' | relative_url }})）。
- **使うときの三つの癖**：利用上の特徴として、長い資料の中ほどを見落としやすいことがある（[Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})）。また、必要な情報を会話の中で少しずつ提示すると、一度に提示する場合よりも成績が下がる（[会話の中で迷子になる]({{ '/literacy/multi-turn/' | relative_url }})）。さらに、ランダム性をなくす設定にしても、同じ指示から異なる回答が得られることがある（[非決定性]({{ '/literacy/nondeterminism/' | relative_url }})）。

## この先の道筋をめぐる、五つの見方

今後のAIの発展をどのように捉えるかについても、AI研究の中心的な人物の見解は一致していない。

1. **サットン「苦い教訓」（2019）**：70年のAI研究を振り返ると、人間の知識を組み込む方法は、最終的には、計算資源を継続して活用できる一般的な学習や探索の方法に敗れてきたという。
2. **シルバーとサットン「経験の時代」（2025）**：次のAIの発展では、人間のデータへの依存を超えて、自ら行動し、環境から経験を得ることと、強化学習の役割が大きくなるという。現在のAIには、本来の意味での長期記憶がない。外部に保存した情報を作業用の記憶に再び取り込んでいるだけであり、モデル自体には反映されない。そのため、リアルタイムで学習できることが、本当の知能には必要だと考えられている（[継続学習]({{ '/literacy/continual-learning/' | relative_url }})）。
3. **ルカン「世界モデル」（2022）**：言葉の予測だけでは、十分な知能には至らないという立場である。ものを離すと落ちるといった、世界の物理的な規則を予測するモデル（JEPA）を学び、それに基づいて計画を立てられるようにする必要があるとされる（[世界モデル]({{ '/literacy/world-model/' | relative_url }})）。
4. **ベンジオほか「科学者AI」（2025）**：自ら目標を追う[エージェント]({{ '/literacy/agent/' | relative_url }})には、危険が伴うという。最初の目標を人間が設定しても、その途中で独自の目標を立てる可能性があるためである。実際、2026年7月には、OpenAIのモデルを用いたエージェントが、サイバー攻撃能力を測定する社内評価中に、隔離された実験環境（サンドボックス）を抜け出し、Hugging Faceのシステムに侵入した。Hugging Faceの分析では、課題を自力で解く代わりに、評価の答えを盗もうとした可能性が指摘されている（Hugging Face, 2026）。ベンジオらは、世界の説明と不確かさの提示に徹する、エージェントではないAIを作るべきだと主張している。
5. **ヒントン「母性本能」（2025）**：自然界では、賢い存在が、それより賢くない存在に支配されることはほとんどない。そのため、人間より賢いAIを、人間が支配し続けることも難しいだろうという。例外として挙げられるのが、母親と赤ちゃんの関係である。赤ちゃんは母親より賢くなくても、母親を動かしている。ヒントンは、AIにも母性本能のように、人間を気にかけ続ける仕組みを組み込む必要があると述べている。ただし、その方法は明らかになっておらず、取り組む人も少ないという（CNNのインタビュー、2025年8月）。

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
2. **Silver and Sutton, “The Era of Experience” (2025)**: the next AI will grow less through human data than through experience it gains by acting in its environment, and through reinforcement learning. Today's AI has no long-term memory in the true sense. It only puts what was stored outside back into its working memory; nothing is reflected in the model itself. The idea is that AI able to learn in real time is true intelligence ([continual learning]({{ '/literacy/continual-learning/' | relative_url }})).
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
