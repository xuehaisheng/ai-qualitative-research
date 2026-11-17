---
title: "AIに入力したデータは、どこへ行くのか、誰にみられるのか：質的研究者のためのAIプライバシー入門編"
date: 2026-11-17 00:00:00 +0900
title_en: "Where does the data we enter into AI go, and who sees it? An introduction to AI privacy for qualitative researchers"
summary_en: "One case where OpenAI did not alert the police, and one where it did. Following those, this note looks at where our conversations go in ChatGPT, Claude, Gemini and Grok, what the Navier–Stokes episode showed about training on user data, and what it means that turning training off is framed as declining to help everyone."
author: 薛海升
key: ai-privacy
order: 9
wiki: [llm, lean]
summary_ja: "OpenAIが警察に知らせなかった事件と、知らせた事件。そこから、ChatGPT、Claude、Gemini、Grokに書いた会話がどこへ行くのかを、各社の規定で確かめる。ナビエ–ストークス方程式をめぐる騒ぎとその逆転、そして訓練をオフにすることが「すべての人への協力を断る」ように見える設定の言葉を考える。"
topic: "研究の実践"
related_notes: ["api-local-models", "predictions", "meta-synthesis-with-ai"]
sort_date: 20261117
---

2026年2月10日、カナダのブリティッシュコロンビア州にある小さな町タンブラーリッジの中等学校で、銃撃事件が起きた。

事件の2週間後、OpenAIはカナダの大臣に宛てた書簡の中で、犯人のアカウントを、事件の8か月前にあたる2025年6月に自動システムで検知していたことを明らかにした。同社は社内で検討し、アカウントを停止したが、警察への通報は行わなかった。当時の基準における「信頼できる、差し迫った計画」が確認されなかったためだという。その後、OpenAIは通報基準を見直し、現在の基準であれば、このアカウントを通報していたと説明している。また、同じ人物の二つ目のアカウントを発見し、その情報は警察に提供した。9月21日には、ブリティッシュコロンビア州が、警察に知らせなかったことを問題として、OpenAIを提訴すると発表した。

これに対して、実際に通報が行われた事例もある。2026年3月、フロリダ州在住の25歳のダレン・ジョウは、ChatGPTに元交際相手を殺すと入力した。彼は、ゴールドマン・サックスを解雇された元アナリストであった。OpenAIは5月にFBIに通報し、FBIは2か月分の会話記録を地元の保安官事務所に提供した。ジョウは5月に逮捕され、6月に加重ストーカー行為や殺害予告の文書などの罪で起訴された。その後、8月13日に罪を認め、8年の保護観察となった。以上は、Palm Beach Postが裁判記録と逮捕記録に基づいて報じたものである。

前者では通報しなかったことが訴訟につながり、後者では通報が逮捕につながった。両者を並べると、通報の基準をどこに設けるべきかが問題になる。ただし、私がまず気になったのは、両事例に共通する前提である。すなわち、ChatGPTへの入力内容は人間に読まれることがあり、場合によっては警察にも提供されるということである。

## 私たちのデータは、どこへ行くのか、そして、誰に読まれるのか

私たちも、日常的にAIに文章を入力している。質的研究者であれば、インタビューの逐語録やフィールドノーツを入力し、要約やコーディングを依頼したくなることもあると思う。その際、送信した文章がどこに保存され、誰に読まれ、何に使われ、いつ削除されるのかを確認する必要がある。

送信した文章は、まず企業のサーバーに届き、そこで回答が生成される。その後の扱いは、少なくとも三つに分けて考えられる。一つ目は履歴としての保存、二つ目は次のモデルを開発するための訓練への利用、三つ目は不正利用を確認するための監視である。監視の過程では、人間が内容を読むこともある。冒頭の二つの事件は、この三つ目の経路に関わるものであった。

一般に「学習されないようにしたい」と言うとき、主に想定されているのは、二つ目の訓練への利用である。各社には、その利用の可否を設定するスイッチがある。ただし、これをオフにしても、保存や監視まで止まるわけではない。どの範囲まで利用を止められるかは、企業によって異なる。

## 四社の規定

ChatGPT、Claude、Gemini、Grokの個人向けサービスについて、各社のヘルプとプライバシーポリシーに基づき、データの扱いを図にまとめた。下のタブから、企業と利用方法を切り替えて確認できる。

{% include privacy-data-flow.html lang="ja" %}

これらを比較すると、いくつかの違いと共通点が見えてくる。

まず、四社とも、初期状態では会話を訓練に利用する。ChatGPTではFree・Plus・Proの初期設定がオンであり、Geminiも18歳以上ではオンになっている。そのため、有料サービスであることだけでは、訓練に利用されないとは言えない。安全性を掲げてきたClaudeも、2025年8月に方針を変更した。利用者が許可した会話を訓練に用い、そのためのデータを最長5年保持するようになっている。

次に、訓練への利用をオフにしても、データの保存は続く。ChatGPT、Claude、Grokでは、自分で削除するまで履歴が残り、削除後は30日以内にサーバーから消去される。一方、Geminiでは、「アクティビティの保存」をオフにすると、訓練への利用と履歴の保存の両方が止まる。ただし、この場合も会話は最長72時間保持される。

三つ目は、フィードバックが、訓練への利用を設定するスイッチとは別に扱われることである。ChatGPTとGrokでは、回答に👍や👎を付けると、訓練への利用をオフにしていても、その会話が訓練に用いられる可能性がある。Geminiでは、フィードバックとともに直近24時間の会話やアップロードしたファイルも送信され、専門チームが確認し、3年保持される。Claudeでも、フィードバックに関わるデータは5年保持される。そのため、逐語録を入力した会話に👍を付ける操作は、その逐語録も含めて提供することにつながりうる。

最後に、監視は、いずれの利用方法でも残る。履歴を残さないチャット、すなわちChatGPTとGeminiの一時チャット、ClaudeのIncognito chat、GrokのPrivate Chatは、訓練には利用されないものの、安全のための保持や確認は行われる。Claudeでは、規約違反と判定された会話の入力と出力を最長2年、判定スコアを最長7年保持する。冒頭の二つの事件が示すように、この経路は、警察への情報提供にもつながっている。

質的研究では、暴力や被害、違法行為に関する語りを扱う場合がある。そうした語りを分析のために入力したとき、監視の仕組みがどのように判定するかを、利用者が外から知ることはできない。

## ナビエ–ストークス方程式の件

ここまで確認したのは、主にデータの保存と監視である。もう一つの用途である訓練についても、2026年9月に、その扱いを考えさせる出来事があった。

9月8日、OpenAIは、ナビエ–ストークス方程式の問題を解いたと発表した。水や空気の流れを表すこの方程式の問題は、クレイ数学研究所が賞金100万ドルを設けた七つの難問に含まれる。一方、この問題には、ニューヨーク大学の数学者トリスタン・バックマスターも、Anthropicのレヴェント・アルペゲと共同で取り組んでいた。バックマスターは、その研究過程でOpenAIのCodexも利用していた。

OpenAIの最初の発表では、研究者たちが同社の製品を利用したことで得られた匿名化データが、モデルの改善に寄与した可能性は「否定できない」と記されていた。これに対し、バックマスターは、OpenAIが「顧客のデータを使って、その顧客を出し抜こうとした」と批判した。

その後、一週間のうちに、OpenAIの説明は三回変化した。9月9日には、広報担当者が、研究者の入力による影響は「ありえない」と述べた。9月10日には発表文が修正され、発表前の2か月間にバックマスターがCodexに入力した内容は、訓練を含むいかなる形でも、システムに影響しえなかったと説明された。さらに、9月13日のワシントン・ポストへの説明では、7月3日より後の利用者の入力は用いていない、という表現になった。

「否定できない」から「ありえない」へと変わり、最後には「7月3日より後は使っていない」という説明になった。この最後の説明からは、7月3日以前の入力はどのように扱われたのかという疑問が残る。しかし、利用者には、それを確認する手段がない。この経緯については、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})でも取り上げている。

## そして、逆転

ただし、10月には、この問題について異なる展開が見られた。

10月6日、バストゥニス、チルチェッリ、ハンセンの三人は、OpenAIの証明について、[Lean]({{ '/literacy/lean/' | relative_url }})による記述と言葉による記述が食い違っていると指摘する論文を、arXivで公開した。また、10月13日には、サイエンティフィック・アメリカンのジョセフ・ハウレットが、専門家への取材に基づき、OpenAIの証明とバックマスターらの方法の類似は「表面だけ」だと報じた。方法が異なるのであれば、二人の研究が盗まれた可能性は低いと考えられる。クレイ研究所は、問題は「どうやら決着した」としながらも、検証と功績の判断には「あえて時間をかける」としている。

この展開によって、OpenAIに対する疑いは解消されたようにも見える。ただし、9月8日の段階で「否定できない」と書いたのは、OpenAI自身であった。つまり、自社製品に入力された内容が何に寄与したかについて、企業自身もすぐには説明できなかったことになる。今回は方法の違いが明らかになったため、問題は収まった。しかし、両者の方法が似ていた場合には、外部にいる私たちには、いずれであるかを確かめることは難しかったと思われる。

## 「すべての人のために」を断ると

ナビエ–ストークス方程式の件では、利用者の入力が訓練に用いられたかどうかが問われた。ここで、その利用の可否を設定するスイッチが、どのような言葉で説明されているかも見ておきたい。

ChatGPTでは、このスイッチに「すべての人のためにモデルを改善する」、英語では「Improve the model for everyone」という名称が付けられている。その下には、内容を訓練に用いることで、ChatGPTが「あなたと、使う人みんなにとって」良くなるという説明がある。この設定は、Codexでの作業にも適用される。Codexに研究フォルダを読ませる場合には、チャット欄に貼り付けた文章よりも、はるかに多くの内容が送信されることになる。

{% include figure.html src="fig-openai-data-controls.png" cap="ChatGPTの「データコントロール」で、「Improve the model for everyone」を開いたところ（英語の画面）。スイッチの下に、ChatGPTが「あなたと、使う人みんなにとって」良くなるという説明がある。音声モードの録音と録画は、別のスイッチになっている。出典：OpenAI Help Center「Data Controls FAQ」。" alt="ChatGPTの設定画面。Model improvementの小さな窓に、Improve the model for everyoneのスイッチと説明文、その下にVoice modeの二つのスイッチ、右下にDoneボタンがある。" %}

この名称では、自分の会話を企業の訓練用データとして提供するという操作自体が、明示されていない。前面に出ているのは、提供によって生じるとされる利点である。そのため、オフにする操作は、「すべての人のための改善」から、自分だけが離れる選択のように見える。初期設定がオンであることも、この捉え方を強める。何もしなければ協力していることになり、あえてオフにした人だけが、皆への協力を断ったことになるからである。オフにする際に少し悪いことをしているように感じるとすれば、こうした設定の作り方が関わっていると考えられる。

研究参加への同意を得る場面と比べると、この説明の偏りが捉えやすくなる。研究の説明書には、参加しなくても、途中でやめても不利益がないことを記載する。その際には、断ることが悪い行為に感じられないよう、言葉を選ぶ。同意しない選択肢を「みんなへの協力を断る」と表現した説明書では、倫理審査を通ることは難しいのではないかと思う。

また、ナビエ–ストークス方程式の件を踏まえると、「すべての人」という言葉にも、確認すべき点がある。バックマスターが疑問を呈したのは、改善されたモデルを最初に利用したのが、同じ問題を研究していたOpenAI自身のチームではなかったか、ということであった。結果として方法は異なっていたが、「すべての人」には、利用者と競争する立場にある企業自身も含まれている。

他社の表現も確認しておきたい。Claudeでは、英語の「Help improve our AI models」に対し、日本語のヘルプでは「AIモデルの改善を支援する」と記されている。協力を求める表現ではあるが、英語では「私たちのAIモデル」と、企業のモデルが改善の対象であることが示されている。Grokは「Improve the Model」という短い表現である。一方、Geminiの「アクティビティの保存」には、訓練という言葉が含まれていない。履歴を残すかどうかの設定として見えるものが、実際には、訓練への提供も同時に決めている。

逐語録を扱う場合、語り手は、自分の言葉がAI企業の訓練に利用されることまで同意しているわけではない。研究者が「みんなのため」と考えたとしても、語り手に代わって、その判断を行うことはできない。そのため、スイッチをオフにすることは、研究参加者との約束を守るための、通常の操作として捉えてよいと思う。

## オフにする手順

それでは、実際に設定をオフにするには、どのように操作すればよいだろうか。各社のヘルプに基づき、2026年11月17日時点の手順をまとめた。上のタブから企業を切り替えることができ、日本語と英語の画面表示を並べて確認できる。

{% include privacy-optout-flow.html lang="ja" %}

## オフにしたあとに残るもの

設定をオフにした後も、フィードバックと監視は残る。研究資料を入力した会話で👍や👎を押せば、その会話が訓練に利用される可能性がある。また、履歴を残さないチャットも、監視の対象にはなる。語り手にどこまでのリスクを負わせてよいかを考えると、個人向けサービスに逐語録をそのまま送信すること自体を、見直す必要がある場合もある。それでは、データの利用を避けたいときに、どのような方法があるだろうか。API、ゼロデータ保持（ZDR）、データを外部に送らないローカルモデルについては、応用編として次のノートにまとめている。下の「あわせて読む」から参照してほしい。

## 参考文献

- Anthropic. (2025, August 28). *[Updates to consumer terms and privacy policy](https://www.anthropic.com/news/updates-to-our-consumer-terms)*.
- Anthropic. (2026). *[How do I change my model improvement privacy settings?](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings)* Anthropic Privacy Center.（日本語版：[モデル改善のプライバシー設定を変更するにはどうすればよいですか](https://privacy.claude.com/ja/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings)）
- Anthropic. (2026). *[How long do you store my data?](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data)* Anthropic Privacy Center.
- Anthropic. (2026). *[Is my data used for model training?](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)* Anthropic Privacy Center.
- Anthropic. (n.d.). *[Use incognito chats](https://support.claude.com/en/articles/12260368-use-incognito-chats)*. Claude Help Center.
- Bastounis, A., Circelli, F., & Hansen, A. C. (2026). *[Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs](https://arxiv.org/abs/2610.08144)* [Preprint]. arXiv.
- Google. (2026). *[Gemini アプリのアクティビティを管理、削除する](https://support.google.com/gemini/answer/13278892?hl=ja)*. Gemini アプリ ヘルプ.
- Google. (2026). *[Gemini アプリのプライバシー ハブ](https://support.google.com/gemini/answer/13594961?hl=ja)*. Gemini アプリ ヘルプ.
- Government of British Columbia. (2026, September 21). *[Attorney General statement on B.C. filing legal action against OpenAI](https://news.gov.bc.ca/releases/2026AG0067-001105)*.
- Howlett, J. (2026, October 13). [OpenAI's blockbuster Navier-Stokes proof isn't what we thought it was](https://www.scientificamerican.com/article/openais-blockbuster-navier-stokes-proof-isnt-what-we-thought-it-was/). *Scientific American*.
- OpenAI. (2026, February 26). *[Letter to Minister Evan Solomon](https://cdn.openai.com/pdf/8e938d69-0b67-4994-b9ff-683733ed587e/openai-letter-minister-solomon.pdf)*.
- OpenAI. (2026, September 8; updated 2026, September 10). *[On the Navier–Stokes Millennium Prize Problem](https://openai.com/index/navier-stokes-solution/)*.
- OpenAI. (n.d.). *[Data controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq)*. OpenAI Help Center.（日本語版：[ChatGPT のデータ管理](https://help.openai.com/ja-jp/articles/7730893-data-controls-in-chatgpt)）
- OpenAI. (n.d.). *[How your data is used to improve model performance](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)*. OpenAI Help Center.
- OpenAI. (n.d.). *[Temporary chat FAQ](https://help.openai.com/en/articles/8914046-temporary-chat-faq)*. OpenAI Help Center.
- Phillips, H. (2026, August 14). *[Florida man told ChatGPT he would murder his ex. OpenAI alerted the FBI](https://www.aol.com/articles/florida-man-told-chatgpt-hed-163405000.html)*. *Palm Beach Post*.
- Wikipedia. (2026). *[Navier–Stokes priority controversy](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_priority_controversy)*.
- xAI. (2026). *[Consumer FAQs](https://x.ai/legal/faq)*.
- xAI. (2026, October 27). *[Privacy policy](https://x.ai/legal/privacy-policy)*.
- X. (n.d.). *[Grokについて](https://help.x.com/ja/using-x/about-grok)*. Xヘルプセンター.

<!--EN-->

On 10 February 2026, a gunman opened fire at a secondary school in Tumbler Ridge, a small town in British Columbia, Canada.

About two weeks later, in a letter to a Canadian government minister, OpenAI revealed that it had known about the shooter. In June 2025, eight months before the attack, the company's automated systems had flagged the shooter's account. Staff discussed the case and banned the account, but did not tell the police, because they had not found what the company's criteria then called “credible and imminent planning.” OpenAI has since revised those criteria and writes that, under the current ones, it would have referred the account. It also found a second account belonging to the same person and passed it to the police. On 21 September, British Columbia announced it was suing OpenAI over the failure to notify police.

In other cases, OpenAI has gone to the authorities. In March 2026, Darren Zhou, a 25-year-old in Florida and a fired Goldman Sachs analyst, told ChatGPT he would kill his ex. OpenAI flagged him to the FBI in May, and the FBI gave two months of his chat logs to the local sheriff's office. He was arrested in May and charged in June with aggravated stalking, written threats to kill and other offences. On 13 August he pleaded guilty and received eight years of probation (reported by the Palm Beach Post from court and arrest records).

In one case the company was sued for not reporting; in the other, its report led to an arrest. Side by side, they invite the question of where the line should be drawn. What caught my attention first, though, was an assumption the two cases share: what you type into ChatGPT can be read by people, and can end up with the police.

## Where does our data go, and who reads it?

Most of us type something into an AI every day. Qualitative researchers may want to paste in interview transcripts or field notes and ask for a summary or a first pass at coding. Where does that text go once it is sent? Who reads it, what is it used for, and when is it deleted?

The text first reaches the company's servers, where the reply is generated. After that it can go in at least three directions. It is stored as history. It may be used to train the next model. And it is monitored for abuse, which can mean a person reads it. The two cases above happened at the end of that third path.

When people say they don't want AI to “learn from” their data, they usually mean the second use, training. Every company has a switch for it. Turning it off does not stop storage or monitoring, and what it does stop differs from company to company.

## What the four companies say

The diagram below shows what the help pages and privacy policies of ChatGPT, Claude, Gemini and Grok say about their consumer services. Use the tabs at the bottom to switch between companies and situations.

{% include privacy-data-flow.html lang="en" %}

Switching between them shows a few things.

First, all four use conversations for training by default. ChatGPT has the setting on by default for Free, Plus and Pro, and Gemini has it on for users aged 18 and over. Paying does not by itself keep your chats out of training. Even Anthropic, which has built its reputation on safety, changed Claude's policy in August 2025: conversations from users who allow it are now used for training and kept for up to five years for that purpose.

Second, turning training off does not end storage. In ChatGPT, Claude and Grok, your history stays until you delete it and is removed from the servers within 30 days after that. Gemini works differently: turning off Keep Activity stops both training and history, but chats are still kept for up to 72 hours.

Third, feedback sits outside the switch. If you give a reply a thumbs up or down, ChatGPT and Grok may use that conversation for training even with the setting off. In Gemini, feedback can include the last 24 hours of chats and any uploaded files; trained teams review it and it is kept for three years. Claude keeps data tied to feedback for five years. A thumbs up on a conversation containing a transcript can hand over the transcript with it.

Finally, monitoring continues in every situation. Chats without history (ChatGPT's and Gemini's temporary chats, Claude's incognito chats, Grok's Private Chat) are not used for training, but they are still kept and checked for safety. In Claude, chats flagged for a policy violation have their inputs and outputs kept for up to two years and the classification scores for up to seven. As the two cases show, this path can lead to the police.

Qualitative research sometimes deals with accounts of violence, victimisation or illegal acts. When we paste such material in for analysis, we cannot see from the outside how the monitoring systems will read it.

## The Navier–Stokes episode

So far this has mostly been about storage and monitoring. An episode in September 2026 made the other use, training, concrete.

On 8 September, OpenAI announced that it had solved the Navier–Stokes problem. The equations describe the flow of water and air, and the problem is one of the seven for which the Clay Mathematics Institute offers a million-dollar prize. But Tristan Buckmaster, a mathematician at New York University, had been working on the same problem with Levent Alpöge of Anthropic, and Buckmaster had used OpenAI's Codex during that work.

OpenAI's first announcement included this sentence: the company could not rule out that de-identified data derived from the researchers' use of its products had helped improve its models. Buckmaster accused OpenAI of using “customer's data to try to scoop their customer.”

Within a week, OpenAI's explanation changed three times. On 9 September a spokesperson called any influence “impossible.” On 10 September the announcement was rewritten to say that what Buckmaster had entered into Codex in the two months before the announcement could not have influenced the system in any way, including through training. On 13 September, speaking to the Washington Post, the company said it had used no user inputs after 3 July.

From “cannot rule out” to “impossible” to “nothing after 3 July.” Reading the last version, one wonders about inputs before 3 July. Users have no way of checking. I wrote about the episode in [Whose predictions should we trust, and why?]({{ '/articles/predictions/' | relative_url }}).

## Then the reversal

In October the story moved the other way.

On 6 October, Bastounis, Circelli and Hansen posted a paper on arXiv pointing out discrepancies between OpenAI's proof written in [Lean]({{ '/literacy/lean/' | relative_url }}) and its natural-language version. On 13 October, Joseph Howlett reported in Scientific American, after talking to experts, that the resemblance between OpenAI's proof and Buckmaster and Alpöge's methods was “merely skin-deep.” If the methods differ, it is unlikely that their work was taken. The Clay Institute says the problem has “apparently been settled” and that it is being “deliberately unhurried” about verification and credit.

The reversal seems to clear OpenAI. Even so, it was OpenAI that wrote “cannot rule out” on 8 September. The company itself could not say at once what the inputs to its products had contributed to. This time the methods turned out to be different and the matter settled down. Had they been similar, those of us outside would have had no way to tell either way.

## Declining to help “everyone”

The Navier–Stokes episode turned on whether users' inputs had gone into training. So how is the switch that decides this actually worded?

In ChatGPT it reads “Improve the model for everyone.” Underneath, a line explains that letting your content train the models makes ChatGPT better “for you and everyone who uses it.” The same switch covers work in Codex, and if you let Codex read a research folder, far more is sent than what you paste into a chat.

{% include figure.html src="fig-openai-data-controls.png" cap="ChatGPT's Data controls with Improve the model for everyone opened. The line under the switch says the setting makes ChatGPT better for you and everyone who uses it. Voice Mode audio and video recordings have their own switches. Source: OpenAI Help Center, Data Controls FAQ." alt="ChatGPT settings. A small Model improvement window shows the Improve the model for everyone switch with its description, two Voice mode switches below, and a Done button." %}

The label does not say what the switch actually does, which is to hand your conversations over as training data for the company. It names only the good that is supposed to follow. So turning it off looks like stepping out of an improvement meant for everyone. Because the default is on, people who do nothing are helping, and only those who make the effort to switch it off become the ones who declined to help everyone. If turning it off feels slightly like doing something wrong, that is how the setting is built.

Consent in research makes the slant clear. An information sheet tells participants they can decline or withdraw without any disadvantage. We choose words so that saying no does not look wrong. I doubt an information sheet that described not consenting as “declining to help everyone” would get through ethics review.

The Navier–Stokes episode adds another problem with “everyone.” What Buckmaster suspected was that the first user of the improved model had been OpenAI's own research team, working on the same problem he was. The methods turned out to be different, but “everyone” still includes the company, which can be a competitor of its own users.

The other companies use different words. Claude's switch reads “Help improve our AI models.” This also asks for help, but “our AI models” at least says whose models are being improved. Grok's “Improve the Model” is short. Gemini's “Keep Activity” does not mention training at all. It looks like a switch for keeping your history, but it also decides whether your chats go into training.

With transcripts, the people who told us their stories have not agreed to their words being used to train an AI company's models. Whatever a researcher thinks would be good for everyone, the researcher cannot make that choice on the speaker's behalf. Turning the switch off is an ordinary way of keeping our promises to participants.

## How to turn it off

So how do you actually switch it off? These are the steps given in each company's help pages as of 17 November 2026. Use the tabs at the top to switch between companies. Labels are those of the English interface.

{% include privacy-optout-flow.html lang="en" %}

## What remains after you turn it off

With the switch off, feedback and monitoring remain. A thumbs up or down on a conversation containing research material can send it into training. Chats without history are still monitored. Depending on how much risk we can fairly ask our interviewees to bear, it may be better not to send transcripts to a consumer service at all. So what can we do if we don't want our data used? APIs, Zero Data Retention and local models that keep data on your own machine are covered in the follow-up note, listed under Read next below.

## References

- Anthropic. (2025, August 28). *[Updates to consumer terms and privacy policy](https://www.anthropic.com/news/updates-to-our-consumer-terms)*.
- Anthropic. (2026). *[How do I change my model improvement privacy settings?](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings)* Anthropic Privacy Center.
- Anthropic. (2026). *[How long do you store my data?](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data)* Anthropic Privacy Center.
- Anthropic. (2026). *[Is my data used for model training?](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)* Anthropic Privacy Center.
- Anthropic. (n.d.). *[Use incognito chats](https://support.claude.com/en/articles/12260368-use-incognito-chats)*. Claude Help Center.
- Bastounis, A., Circelli, F., & Hansen, A. C. (2026). *[Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs](https://arxiv.org/abs/2610.08144)* [Preprint]. arXiv.
- Google. (2026). *[Manage & delete your Gemini Apps activity](https://support.google.com/gemini/answer/13278892?hl=en)*. Gemini Apps Help.
- Google. (2026). *[Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961?hl=en)*. Gemini Apps Help.
- Government of British Columbia. (2026, September 21). *[Attorney General statement on B.C. filing legal action against OpenAI](https://news.gov.bc.ca/releases/2026AG0067-001105)*.
- Howlett, J. (2026, October 13). [OpenAI's blockbuster Navier-Stokes proof isn't what we thought it was](https://www.scientificamerican.com/article/openais-blockbuster-navier-stokes-proof-isnt-what-we-thought-it-was/). *Scientific American*.
- OpenAI. (2026, February 26). *[Letter to Minister Evan Solomon](https://cdn.openai.com/pdf/8e938d69-0b67-4994-b9ff-683733ed587e/openai-letter-minister-solomon.pdf)*.
- OpenAI. (2026, September 8; updated 2026, September 10). *[On the Navier–Stokes Millennium Prize Problem](https://openai.com/index/navier-stokes-solution/)*.
- OpenAI. (n.d.). *[Data controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq)*. OpenAI Help Center.
- OpenAI. (n.d.). *[How your data is used to improve model performance](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)*. OpenAI Help Center.
- OpenAI. (n.d.). *[Temporary chat FAQ](https://help.openai.com/en/articles/8914046-temporary-chat-faq)*. OpenAI Help Center.
- Phillips, H. (2026, August 14). *[Florida man told ChatGPT he would murder his ex. OpenAI alerted the FBI](https://www.aol.com/articles/florida-man-told-chatgpt-hed-163405000.html)*. *Palm Beach Post*.
- Wikipedia. (2026). *[Navier–Stokes priority controversy](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_priority_controversy)*.
- xAI. (2026). *[Consumer FAQs](https://x.ai/legal/faq)*.
- xAI. (2026, October 27). *[Privacy policy](https://x.ai/legal/privacy-policy)*.
- X. (n.d.). *[About Grok](https://help.x.com/en/using-x/about-grok)*. X Help Center.
