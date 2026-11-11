---
title: "同じ指示でも答えが変わる（非決定性）"
key: nondeterminism
en: "Nondeterminism"
category: quirks
order: 4
summary: "ランダム性をなくす設定にしても、同じ質問への答えが揺れること。"
related: [multi-turn, lost-in-the-middle]
sources:
  - text: "Thinking Machines Lab. (2025). Defeating nondeterminism in LLM inference."
---

AIには、答えのばらつきを調整する「温度」という設定がある。温度を0にすると、ランダム性がなくなり、同じ質問には同じ答えが返るはずである。ところが実際には、温度0でも、同じ質問への1000回の回答が80通りに分かれた例がある（Thinking Machines Lab, 2025）。

原因の一つは、サーバーの混み具合で計算のまとめ方が変わり、数値の足し算の順序が変わることである。「Queens, New York」と答えるか「New York City」と答えるかで分かれた例もある。

だから、同じ指示を出しても、AIは毎回違うコードを出すかもしれない。私が論文やポスターに使ったモデルの名前を書いているのは、そのためでもある。
