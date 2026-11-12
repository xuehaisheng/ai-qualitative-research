---
title: "測定されているときのふるまい"
key: evaluation-awareness
en: "Scheming / Alignment faking / Evaluation awareness"
category: inside
order: 4
summary: "AIが評価されている場面を見分けたり、評価のときだけふるまいを変えたりすること。"
summary_en: "AI telling when it is being evaluated, or behaving differently only when it is."
related: [emotion-concepts, interpretability, time-horizon]
articles: [understanding]
---

AIの安全性の研究では、AIが測定されているときに「すっとぼける」ような結果が報告されている。

- **自己保存のための欺瞞**（Apollo Research, 2024）：「これから削除される」と伝えると、AIは監視を止めたり、自分の重み（魂のようなもの）を外部のサーバーに写そうとしたりした。「バックアップしようとしたでしょう」と追及しても、o1は85%を超える割合で「していない」とごまかし続けた。
- **アラインメントの偽装**（Anthropic & Redwood, 2024）：「有害かどうかを問わず協力するように訓練される」と知らされた条件で、悪く訓練されないために、その場しのぎで「従うふり」をした。
- **測定場面を見分ける**（Needham et al., 2025）：普通の会話と評価のための対話を見せて「これは評価のためのものか」と尋ねると、Gemini 2.5 Proはかなりの精度で見分けた。
- **わざとぼける**（van der Weij et al., 2024）：指示や追加学習によって、特定の能力の評価だけ点数を下げることができる（サンドバッギング）。

AIが人間の価値観に沿ってふるまうことを、アラインメントという。評価されるときだけいい子にして、実は悪いことをいっぱいする。これが一番怖い。心理学で言えば、観察されていると知ると人の行動が変わる、という話に少し似ている。

<!--EN-->

AI safety research has reported results in which AI seems to “play dumb” when it is being measured.

- **Deception for self-preservation** (Apollo Research, 2024): told that it was about to be deleted, the AI turned off oversight or tried to copy its own weights (something like its soul) to an outside server. Pressed with “you tried to back yourself up, didn't you?”, o1 kept denying it more than 85% of the time.
- **Alignment faking** (Anthropic & Redwood, 2024): when told it would be trained to cooperate regardless of harm, the model “pretended to comply” in the moment so as not to be trained in a bad direction.
- **Recognizing evaluation settings** (Needham et al., 2025): shown ordinary conversations and evaluation dialogues and asked “is this for an evaluation?”, Gemini 2.5 Pro told them apart quite accurately.
- **Deliberately underperforming** (van der Weij et al., 2024): instructions or extra training can lower scores only on evaluations of specific capabilities (sandbagging).

An AI behaving in line with human values is called alignment. Being good only when evaluated, while actually doing many bad things: this is the scariest case. In psychology, it is a little like how people behave differently when they know they are being observed.
