---
title: "なぜAIリテラシーが必要か：知った上で判断する"
date: 2026-11-12 09:00:00 +0900
title_en: "Why AI literacy? Judging with knowledge"
summary_en: "Critical, supportive or neutral, any position on AI is fine, as long as it is reached with knowledge. Three reasons qualitative researchers need AI literacy: the resolution of what we know, AI as an amplifier, and the gap between what AI can do and what we can check."
author: 薛海升
key: why-ai-literacy
order: 0
wiki: [llm, token, slop, lean]
summary_ja: "AIに批判的でも、推進する側でも、中立でもよい。ただ、知った上で判断したい。知識の解像度、拡声器としてのAI、「できる」と「確かめられる」の違いという三つの点から、質的研究者にAIリテラシーが必要な理由を書く。"
topic: "AIの理解"
related_notes: ["ai-history", "predictions", "qualitative-reactions"]
sort_date: 20261112
---


立場はどれでもよい。AIに批判的でも、推進する側でも、中立でも構わない。ただ、情緒だけでなく、理性的にも判断したい。もちろん、情緒もとても大事である。そのためには、知った上で判断することが大事である。


## こうならないために


知らないまま判断すると、どうなるか。極端な例を一つ挙げる。


2020年4月23日、ホワイトハウスで新型コロナウイルスについての記者会見があった。ウイルスが消毒剤ですぐに死ぬという研究の報告のあとで、トランプ大統領（当時）は、消毒剤を体の中に注射するようなことはできないのか、調べてみると面白いのではないか、という趣旨の発言をした。翌日、消毒剤のライゾールやデトールを作っているレキットベンキーザー社が声明を出した。どんな場合でも、自社の消毒剤を人の体内に入れてはならない、という内容である（Freking, 2020）。


<figure class="editorial-figure" id="trump-disinfectant">
  <a href="https://www.youtube.com/watch?v=zicGxU5MfwE" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/zicGxU5MfwE/maxresdefault.jpg" alt="2020年4月23日の記者会見で消毒剤について話すトランプ大統領。NBC New Yorkの動画サムネイル。" width="1280" height="720" loading="lazy" decoding="async"></a>
  <figcaption>消毒剤の注射について言及した、2020年4月23日のホワイトハウス記者会見。<span class="editorial-credit">出典：NBC New York 公式映像のサムネイル。<a href="https://www.youtube.com/watch?v=zicGxU5MfwE" target="_blank" rel="noopener">動画 ↗</a>・<a href="https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-briefing-31/" target="_blank" rel="noopener">ホワイトハウス発言記録 ↗</a></span></figcaption>
</figure>

これはAIの話ではない。ただ、よく知らない分野について、もっともらしい思いつきで判断すると、こういうことが起きる。AIについても同じである。AIを使うにしても、使わないにしても、まず知っておきたい。AIそのものだけでなく、AIを作っている会社や人たちが何をやっているのかも、知っておいてほしいと思う。ここでは、質的研究者にAIリテラシーが必要だと私が考える理由を、三つに分けて書く。


## ① 知識の解像度が違う


{% include figure.html src="fig-resolution.jpg" cap="「間違ってはいない。でも、解像度が違う」。講習会のスライドより。" alt="生成AIと質的研究を左右に並べた図。上段は「生成AIは、次の言葉を予測する」「質的研究では、言葉を分析する」。下段は、少し厳密に言うと「生成AIは、次のトークンを予測する」「質的研究では、質的データ（主に言葉）を分析する」。" %}


「生成AIは、次の言葉を予測する」。「質的研究では、言葉を分析する」。どちらも間違ってはいない。


でも、少し詳しい人なら、こう言うはずである。生成AIは、次の[トークン]({{ '/literacy/token/' | relative_url }})を予測する。トークンとは、AIが文章を処理するときの単位で、単語や、文字の一部にあたる。質的研究では、質的データ（主に言葉）を分析する。質的データとは、インタビュー記録、観察メモ、日記、写真など、数値にしない形のデータのことである。


二つの言い方の違いは、知識の解像度の違いである。質的研究の側には、現象学、GTA、テーマ分析、ナラティブ、会話分析といった奥行きがある。それと同じくらいの奥行きが、AIの側にもある。Transformer、Attention、事前学習、RLHF、ハルシネーション、エージェントなど、知っておくと見え方が変わる言葉がたくさんある。このサイトの[AIリテラシー]({{ '/literacy/' | relative_url }})のページは、その解像度を少しずつ上げるために作っている。


{% include figure.html src="fig-depth.jpg" cap="「どちらにも、奥行きがある」。生成AIと質的研究、それぞれの専門用語や人名。講習会のスライドより。" alt="二つの円を並べた図。左の円の中心に「生成AI」、まわりにTransformer、Attention、事前学習、RLHF、ハルシネーション、エージェントなどの用語や研究者の名前。右の円の中心に「質的研究」、まわりに現象学、GTA、M-GTA、テーマ分析、会話分析、ナラティブ、エスノグラフィーなどの用語や研究者の名前。" %}


## ② AIは拡声器になる


AIを勉強したいけれど、どうすればいいか分からない。そう相談すると、「AIのことはAIに聞けばいいじゃん」と言われることがある。この助言は、あまり生産的ではないと思う。


分かる人がAIを使うと、AIは拡声器になる。もともとの力が、何倍にも大きくなる。一方で、判断できない人が使うと、平均的なものが出やすい。大学で教えている人なら、AIで作ったレポートを読んだことがあると思う。どれも定番の、平均的な文章で、あまり面白くない。その行き着く先が[AIスロップ]({{ '/literacy/slop/' | relative_url }})である。AIスロップとは、AIが量産した、AIっぽい質の低いコンテンツのことである。AIに聞くこと自体は悪くない。ただ、返ってきた答えのよしあしを判断するには、聞く側にも知識がいる。


## ③ 「できる」と「確かめられる」は別


AIは、何でもできるように見える。統計ソフトRのコードを書ける。ソフトウェアを開発できる。数学の証明もできる。


でも、そもそもRが何かを知らない人には、AIが書いたコードが正しいかどうか分からない。Javaをコーヒーの名前だと思っている人には、AIが作ったソフトを点検できない。[Lean]({{ '/literacy/lean/' | relative_url }})を知らない人には、AIの証明を確かめられない。Leanとは、証明の一行一行が正しいかを、コンピュータが自動で確かめる言語である。


質的研究も同じである。何がよい質的研究なのかを知らないと、AIという「魔法」を使っても、出てきた分析を評価できない。もっとも、何がよい研究かは研究によって基準がいろいろあって、こうすればよい、と一つに決まるものではない。それでも少なくとも、自分がやりたい質的研究が何なのかは、知っていなければならない。


## 誰の予言を、何を根拠に信じるか


AIの将来についても、言う人によって見通しが大きく違う。イーロン・マスクは、AIが人類を滅ぼす確率を10〜20%と見積もった。NVIDIAのジェンスン・フアンは、そうした計算はでっち上げだと言った。誰の予言を、何を根拠に信じるか。それを判断するのも、AIリテラシーである。具体的な発言と出典は、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})にまとめた。


このサイトでは、AIを使うか、使わないかを決めるための判断材料を手渡したいと考えている。AIを作っている会社は、表では立派なことを言いながら、裏ではかなり汚いこともやっている。だから、ここに書いたことを読むと、AIを使うのが嫌になるかもしれない。それで使わないと決めるのも、一つの判断である。どちらを選ぶかは、読む人が決めればよい。


## 参考文献


- Freking, K. (2020, April 24). Injecting disinfectant ‘sounds interesting’ to Trump. Lysol disagrees. *The Christian Science Monitor*. [https://csmonitor.com/USA/2020/0424/Injecting-disinfectant-sounds-interesting-to-Trump.-Lysol-disagrees](https://csmonitor.com/USA/2020/0424/Injecting-disinfectant-sounds-interesting-to-Trump.-Lysol-disagrees)

<!--EN-->

Any position is fine. You can be critical of AI, promote it, or stay neutral. But we want to judge with reason, not only with feeling. Feeling matters a great deal too, of course. For that, it is important to judge with knowledge.

## So that this does not happen

What happens when you judge without knowing? Here is one extreme example.

On April 23, 2020, there was a White House press briefing on the novel coronavirus. After a report on research showing that disinfectant kills the virus quickly, President Trump (as he then was) said, in effect, that it might be interesting to check whether something like injecting disinfectant into the body could be done. The next day, Reckitt Benckiser, maker of the disinfectants Lysol and Dettol, issued a statement saying that under no circumstance should its disinfectant products be put into the human body (Freking, 2020).

<figure class="editorial-figure" id="trump-disinfectant">
  <a href="https://www.youtube.com/watch?v=zicGxU5MfwE" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/zicGxU5MfwE/maxresdefault.jpg" alt="President Trump speaking about disinfectant at the press briefing on April 23, 2020. Video thumbnail from NBC New York." width="1280" height="720" loading="lazy" decoding="async"></a>
  <figcaption>The White House press briefing of April 23, 2020, where injecting disinfectant was mentioned.<span class="editorial-credit">Source: thumbnail of the official NBC New York video. <a href="https://www.youtube.com/watch?v=zicGxU5MfwE" target="_blank" rel="noopener">Video ↗</a> · <a href="https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-briefing-31/" target="_blank" rel="noopener">White House transcript ↗</a></span></figcaption>
</figure>

This is not about AI. But when you judge a field you do not know well on the basis of plausible-sounding ideas, this kind of thing happens. The same goes for AI. Whether you use AI or not, I want you to know about it first. Not only about AI itself, but also about what the companies and people building it are doing. Here I give three reasons why I think qualitative researchers need AI literacy.

## ① Knowledge has different resolutions

{% include figure.html src="fig-resolution-en.jpg" cap="“Not wrong. But a different resolution.” From the workshop slides." alt="Generative AI and qualitative research side by side. Top row: “Generative AI predicts the next word” and “Qualitative research analyzes words”. Bottom row, a little more precisely: “Generative AI predicts the next token” and “Qualitative research analyzes qualitative data (mainly words)”." %}

“Generative AI predicts the next word.” “Qualitative research analyzes words.” Neither is wrong.

But someone who knows a bit more would put it this way. Generative AI predicts the next [token]({{ '/literacy/token/' | relative_url }}). A token is the unit in which AI processes text, roughly a word or part of a word. Qualitative research analyzes qualitative data (mainly words). Qualitative data means data not turned into numbers, such as interview transcripts, field notes, diaries and photographs.

The difference between the two ways of putting it is a difference in the resolution of knowledge. On the qualitative research side there is depth: phenomenology, GTA, thematic analysis, narrative, conversation analysis. AI has just as much depth. There are many words that change how you see it once you know them: Transformer, attention, pre-training, RLHF, hallucination, agents. The [AI literacy]({{ '/literacy/' | relative_url }}) pages on this site are there to raise that resolution little by little.

{% include figure.html src="fig-depth-en.jpg" cap="“Both have depth.” Technical terms and names in generative AI and in qualitative research. From the workshop slides." alt="Two circles side by side. At the center of the left circle, “Generative AI”, surrounded by terms and researchers' names such as Transformer, attention, pre-training, RLHF, hallucination and agents. At the center of the right circle, “Qualitative research”, surrounded by terms and names such as phenomenology, GTA, M-GTA, thematic analysis, conversation analysis, narrative and ethnography." %}

## ② AI becomes a loudspeaker

You want to learn about AI but do not know how. Ask someone, and you may be told, “Just ask AI about AI.” I do not think this advice is very productive.

When someone who understands uses AI, AI becomes a loudspeaker. Their existing ability is multiplied many times over. When someone who cannot judge uses it, average output tends to come out. If you teach at a university, you have probably read reports made with AI. They are all standard, average writing, and not very interesting. Where that leads is [AI slop]({{ '/literacy/slop/' | relative_url }}): low-quality, AI-looking content mass-produced by AI. Asking AI is not bad in itself. But to judge whether the answer you get back is good, the person asking needs knowledge too.

## ③ “Can do” and “can check” are different

AI seems able to do anything. It can write code for the statistics software R. It can develop software. It can prove mathematical theorems.

But someone who does not know what R is cannot tell whether the code AI wrote is correct. Someone who thinks Java is a kind of coffee cannot inspect the software AI built. Someone who does not know [Lean]({{ '/literacy/lean/' | relative_url }}) cannot check AI's proofs. Lean is a language in which a computer automatically checks that every line of a proof is correct.

Qualitative research is the same. If you do not know what good qualitative research is, you cannot evaluate the analysis that comes out, even with the “magic” of AI. Of course, there are many standards for what good research is, and no single recipe. Even so, at the very least you need to know what kind of qualitative research you yourself want to do.

## Whose predictions to believe, and on what grounds

On the future of AI, too, forecasts differ greatly depending on who is speaking. Elon Musk put the probability that AI destroys humanity at 10–20%. NVIDIA's Jensen Huang called such calculations made up. Whose predictions to believe, and on what grounds: judging that is also AI literacy. I collected the specific statements and sources in [Whose predictions should we trust, and why?]({{ '/articles/predictions/' | relative_url }}).

On this site, I want to hand over material for deciding whether to use AI or not. The companies building AI say fine things in public while doing some fairly dirty things behind the scenes. So reading what is written here may make you not want to use AI. Deciding not to use it is a judgment too. Which to choose is up to the reader.

## References

- Freking, K. (2020, April 24). Injecting disinfectant ‘sounds interesting’ to Trump. Lysol disagrees. *The Christian Science Monitor*. [https://csmonitor.com/USA/2020/0424/Injecting-disinfectant-sounds-interesting-to-Trump.-Lysol-disagrees](https://csmonitor.com/USA/2020/0424/Injecting-disinfectant-sounds-interesting-to-Trump.-Lysol-disagrees)
