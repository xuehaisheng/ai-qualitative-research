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


AIに対して批判的であるか、推進する側であるか、あるいは中立であるかという立場自体は、それぞれにあってよいと思う。ただし、いずれの立場をとるにしても、情緒的な反応とともに、知識に基づいて理性的に判断することも必要である。もちろん、情緒も大切なものである。そのうえで、何について判断しているのかを知っておくことが重要になると考える。


## こうならないために


それでは、十分な知識を持たずに判断すると、どのようなことが起きるのだろうか。ここでは、やや極端な例を取り上げたい。


2020年4月23日、ホワイトハウスで新型コロナウイルスに関する記者会見が行われた。ウイルスが消毒剤によって短時間で死滅するという研究報告を受けて、当時のトランプ大統領は、消毒剤を体内に注射するような方法を調べてみてはどうか、という趣旨の発言をした。翌日には、消毒剤のライゾールやデトールを製造するレキットベンキーザー社が声明を発表した。その内容は、いかなる場合も自社の消毒剤を人体内に入れてはならない、というものであった（Freking, 2020）。


<figure class="editorial-figure" id="trump-disinfectant">
  <a href="https://www.youtube.com/watch?v=zicGxU5MfwE" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/zicGxU5MfwE/maxresdefault.jpg" width="1280" height="720" alt="2020年4月23日の記者会見で消毒剤について話すトランプ大統領。NBC New Yorkの動画サムネイル。" width="1280" height="720" loading="lazy" decoding="async"></a>
  <figcaption>消毒剤の注射について言及した、2020年4月23日のホワイトハウス記者会見。<span class="editorial-credit">出典：NBC New York 公式映像のサムネイル。<a href="https://www.youtube.com/watch?v=zicGxU5MfwE" target="_blank" rel="noopener">動画 ↗</a>・<a href="https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-briefing-31/" target="_blank" rel="noopener">ホワイトハウス発言記録 ↗</a></span></figcaption>
</figure>

この出来事は、AIに直接関わるものではない。しかし、よく知らない領域について、もっともらしく感じられる思いつきだけで判断することの問題を示している。AIについても、利用するかどうかを判断するためには、まずその仕組みを知っておく必要があると思う。また、AIそのものに加えて、それを開発する企業や人々が何をしているのかにも目を向けたい。以下では、私が質的研究者にとってAIリテラシーが必要だと考える理由を、三つに分けて説明する。


## ① 知識の解像度が違う


{% include figure.html src="fig-resolution.jpg" cap="「間違ってはいない。でも、解像度が違う」。講習会のスライドより。" alt="生成AIと質的研究を左右に並べた図。上段は「生成AIは、次の言葉を予測する」「質的研究では、言葉を分析する」。下段は、少し厳密に言うと「生成AIは、次のトークンを予測する」「質的研究では、質的データ（主に言葉）を分析する」。" %}


例えば、「生成AIは、次の言葉を予測する」「質的研究では、言葉を分析する」という説明は、いずれも誤りとは言えない。


ただし、より詳しく説明するならば、生成AIが予測するのは次の[トークン]({{ '/literacy/token/' | relative_url }})である。トークンは、AIが文章を処理する際の単位であり、単語や文字の一部にあたる。一方、質的研究で分析する対象は、主に言葉からなる質的データである。具体的には、インタビュー記録や観察メモ、日記、写真など、数値にしない形で扱うデータがこれに含まれる。


これらの説明の違いは、対象についての知識の解像度の違いとして捉えられる。質的研究には、現象学、GTA、テーマ分析、ナラティブ、会話分析など、それぞれに蓄積されてきた議論がある。同様に、AIにも、Transformer、Attention、事前学習、RLHF、ハルシネーション、エージェントなど、多くの概念や仕組みがある。これらを知ることで、AIに対する理解も変わると考えられる。このサイトの[AIリテラシー]({{ '/literacy/' | relative_url }})は、その解像度を少しずつ高めていくために作成している。


{% include figure.html src="fig-depth.jpg" cap="「どちらにも、奥行きがある」。生成AIと質的研究、それぞれの専門用語や人名。講習会のスライドより。" alt="二つの円を並べた図。左の円の中心に「生成AI」、まわりにTransformer、Attention、事前学習、RLHF、ハルシネーション、エージェントなどの用語や研究者の名前。右の円の中心に「質的研究」、まわりに現象学、GTA、M-GTA、テーマ分析、会話分析、ナラティブ、エスノグラフィーなどの用語や研究者の名前。" %}


## ② AIは拡声器になる


AIについて学びたいが、どのように学べばよいか分からないと相談すると、「AIのことはAIに聞けばいいじゃん」と言われることがある。しかし、この助言だけでは、学ぶ人が抱えている問題に十分に応えられないと思う。


対象についての知識を持つ人がAIを利用する場合、AIはその人の力を増幅する拡声器のように働く。一方、出力を判断するための知識が乏しい場合には、平均的な内容をそのまま受けとりやすい。大学で教えていると、AIを用いて作成されたレポートを読むことがあるが、定番の説明が並び、面白みに欠けると感じることも多い。その延長に、AIが大量に作り出す、AIらしい質の低いコンテンツとしての[AIスロップ]({{ '/literacy/slop/' | relative_url }})がある。AIに質問すること自体に問題があるわけではない。ただし、返ってきた回答を評価するためには、質問する側にも一定の知識が必要になる。


## ③ 「できる」と「確かめられる」は別


AIの出力を見ると、さまざまなことができるように感じられる。例えば、統計ソフトRのコードの作成やソフトウェアの開発、数学の証明などが挙げられる。


しかし、Rがどのようなものかを知らなければ、生成されたコードの正しさを判断することは難しい。Javaをコーヒーの名前としてしか知らない人にとっても、AIが作成したソフトウェアを点検することは容易ではない。また、AIによる証明を確かめる際には、[Lean]({{ '/literacy/lean/' | relative_url }})についての知識が必要になる。Leanは、証明の一行一行が正しいかどうかを、コンピュータで自動的に確かめるための言語である。


質的研究についても、同様のことが言える。よい質的研究とはどのようなものかを理解していなければ、AIという「魔法」を用いて分析結果を得ても、その内容を評価することは難しい。もっとも、研究のよさを判断する基準は多様であり、特定の手順を踏めばよいと一義的に定まるものではない。それでも、自分がどのような質的研究を行いたいのかについては、少なくとも理解しておく必要があると考える。


## 誰の予言を、何を根拠に信じるか


AIの将来についても、論者によって大きく異なる見通しが示されている。例えば、イーロン・マスクはAIが人類を滅ぼす確率を10〜20%と見積もった一方、NVIDIAのジェンスン・フアンは、そうした計算はでっち上げだと述べた。誰の見通しを、どのような根拠から信じるかを判断することも、AIリテラシーに含まれると考える。具体的な発言と出典については、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})にまとめている。


このサイトでは、AIを利用するかどうかを、それぞれが判断するための材料を提供したいと考えている。AIを開発する企業は、公に掲げる理念の一方で、その実際の行動にはかなり問題のある側面もある。そのため、ここで紹介する内容を読んで、AIの利用に抵抗を感じる人もいるかもしれない。そうした知識を踏まえて利用しないと決めることも、一つの判断である。最終的にどのような選択をするかは、読む人自身に委ねたい。


## 参考文献


- Freking, K. (2020, April 24). Injecting disinfectant ‘sounds interesting’ to Trump. Lysol disagrees. *The Christian Science Monitor*. [https://csmonitor.com/USA/2020/0424/Injecting-disinfectant-sounds-interesting-to-Trump.-Lysol-disagrees](https://csmonitor.com/USA/2020/0424/Injecting-disinfectant-sounds-interesting-to-Trump.-Lysol-disagrees)

<!--EN-->

Any position is fine. You can be critical of AI, promote it, or stay neutral. But we want to judge with reason, not only with feeling. Feeling matters a great deal too, of course. For that, it is important to judge with knowledge.

## So that this does not happen

What happens when you judge without knowing? Here is one extreme example.

On April 23, 2020, there was a White House press briefing on the novel coronavirus. After a report on research showing that disinfectant kills the virus quickly, President Trump (as he then was) said, in effect, that it might be interesting to check whether something like injecting disinfectant into the body could be done. The next day, Reckitt Benckiser, maker of the disinfectants Lysol and Dettol, issued a statement saying that under no circumstance should its disinfectant products be put into the human body (Freking, 2020).

<figure class="editorial-figure" id="trump-disinfectant-en">
  <a href="https://www.youtube.com/watch?v=zicGxU5MfwE" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/zicGxU5MfwE/maxresdefault.jpg" width="1280" height="720" alt="President Trump speaking about disinfectant at the press briefing on April 23, 2020. Video thumbnail from NBC New York." width="1280" height="720" loading="lazy" decoding="async"></a>
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
