---
title: "会話の中で迷子になる"
key: multi-turn
en: "Lost in multi-turn conversation"
category: quirks
order: 3
summary: "必要な情報を会話の中で少しずつ渡すと、一度に渡すより成績が下がること。"
summary_en: "Giving needed information bit by bit over a conversation lowers performance compared with giving it all at once."
related: [lost-in-the-middle, nondeterminism, context]
sources:
  - text: "Laban, P., et al. (2025). LLMs get lost in multi-turn conversation."
    url: "https://arxiv.org/abs/2505.06120"
---

必要な情報を一度に全部渡すより、会話の中で少しずつ渡すと、成績が平均39%下がった（Laban et al., 2025）。主な原因は能力の不足ではない。早い段階で決めつけ、そこから戻れなくなることと、答えが不安定になることである。

AIとやりとりしながら分析を深めていくときにも、これは起こりうる。行き詰まったら、それまでに整理したことをまとめて、新しい会話で一気に渡し直すと、うまくいくことがある。

<!--EN-->

Giving the needed information bit by bit over a conversation, rather than all at once, lowered performance by 39% on average (Laban et al., 2025). The main cause is not a lack of ability. It is that the model jumps to conclusions early and cannot go back, and that its answers become unstable.

This can happen when you deepen an analysis through back-and-forth with AI. If you get stuck, it can help to summarize what you have worked out so far and hand it over all at once in a new conversation.
