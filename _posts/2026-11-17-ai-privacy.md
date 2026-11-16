---
title: "AIに書いたことは、どこへ行くのか：二つの事件、四社の規定、「すべての人のために」"
date: 2026-11-17 00:00:00 +0900
title_en: "Where does what we tell AI go? Two cases, four companies' rules, and “for everyone”"
summary_en: "One case where OpenAI did not alert the police, and one where it did. Following those, this note looks at where our conversations go in ChatGPT, Claude, Gemini and Grok, what the Navier–Stokes episode showed about training on user data, and what it means that turning training off is framed as declining to help everyone."
author: 薛海升
key: ai-privacy
order: 9
wiki: [llm, lean]
summary_ja: "OpenAIが警察に知らせなかった事件と、知らせた事件。そこから、ChatGPT、Claude、Gemini、Grokに書いた会話がどこへ行くのかを、各社の規定で確かめる。ナビエ–ストークス方程式をめぐる騒ぎとその逆転、そして訓練をオフにすることが「すべての人への協力を断る」ように見える設定の言葉を考える。"
topic: "研究の実践"
related_notes: ["predictions", "meta-synthesis-with-ai"]
sort_date: 20261117
---

2026年2月10日、カナダのブリティッシュコロンビア州の小さな町タンブラーリッジで、中等学校が銃撃された。

その2週間後、OpenAIはカナダの大臣に宛てた書簡で、ある事実を明らかにした。犯人のアカウントは、事件の8か月前の2025年6月に、同社の自動システムに検知されていた。社員が会話を読み、アカウントを停止した。けれども警察には知らせなかった。当時の基準でいう「信頼できる、差し迫った計画」が見当たらなかったからだという。OpenAIはその後、通報の基準を見直した。いまの基準なら、このアカウントは通報していたと書いている。同じ人物の二つ目のアカウントも見つけ、こちらは警察に提供した。9月21日、ブリティッシュコロンビア州は、警察に知らせなかったことを問題にして、OpenAIを提訴すると発表した。

もう一つは、通報された例である。2026年3月、フロリダ州に住む25歳のダレン・ジョウは、ChatGPTに、元交際相手を殺すと書いた。ゴールドマン・サックスを解雇された元アナリストだった。OpenAIは5月にFBIへ通報し、FBIは2か月分の会話記録を地元の保安官事務所に渡した。ジョウは5月に逮捕され、6月に加重ストーカー行為や殺害予告の文書などの罪で起訴された。8月13日に罪を認め、8年の保護観察となった（Palm Beach Postが裁判記録と逮捕記録をもとに報じた）。

一方は通報しなかったことで訴えられ、もう一方は通報が逮捕につながった。並べると、どこで線を引くのが正しいのかを考えたくなる。ただ、私がまず引っかかったのは、二つの事件に共通する前提の方だった。ChatGPTに書いたことは、会社の人が読むことがある。場合によっては警察にも渡る。

## 私たちのデータは、どこへ行くのか

私たちも、毎日AIに何かを書いている。質的研究者なら、インタビューの逐語録やフィールドノーツを貼りつけて、要約やコーディングを頼むこともあるだろう。その文章は、送ったあとどこへ行くのか。誰が読み、何に使われ、いつ消えるのか。

送った文章は、まず会社のサーバーに届き、そこで回答が作られる。その先は、少なくとも三つの使い道に分かれる。一つ目は、履歴として保存されること。二つ目は、次のモデルを作るための訓練に使われること。三つ目は、不正利用がないかの監視で、ここでは人が読むこともある。冒頭の二つの事件は、三つ目の使い道の先で起きた。

「学習されないようにしたい」と言うとき、多くの人が気にしているのは二つ目の訓練である。訓練に使うかどうかのスイッチは、どの会社にもある。ただ、このスイッチを切っても、保存と監視は止まらない。どこまで止まるかは、会社によって違う。

## 四社の規定

ChatGPT、Claude、Gemini、Grokの個人向けサービスについて、各社のヘルプとプライバシーポリシーの説明を図にした。下のタブで、会社と使い方を切り替えられる。

{% include privacy-data-flow.html lang="ja" %}

切り替えてみると、いくつかのことが分かる。

まず、四社とも、最初の状態では会話を訓練に使う。ChatGPTはFree・Plus・Proで初期設定がオンで、Geminiも18歳以上ではオンになっている。お金を払っていれば訓練に使われない、ということはない。Claudeは2025年8月に方針を変え、利用者が許可した会話を訓練に使い、訓練用に最長5年保持するようになった。

次に、訓練をオフにしても、保存は続く。ChatGPT、Claude、Grokでは、履歴は自分で消すまで残り、消してから30日以内にサーバーから消える。Geminiは仕組みが違い、「アクティビティの保存」をオフにすると、訓練と履歴の両方が止まる。それでも会話は最長72時間保持される。

三つ目に、フィードバックはスイッチの外にある。回答に👍や👎をつけると、ChatGPTでもGrokでも、その会話は訓練に使われうる。訓練をオフにしていても同じである。Geminiでは、フィードバックと一緒に直近24時間の会話やアップロードしたファイルも送られ、専門のチームが読み、3年保持される。Claudeも、フィードバックに関わるデータを5年保持する。逐語録を貼った会話に👍をつけると、逐語録ごと渡すことになりうる。

最後に、監視はどの使い方でも止まらない。履歴を残さないチャット（ChatGPTとGeminiの一時チャット、ClaudeのIncognito chat、GrokのPrivate Chat）は訓練には使われないが、安全のための保持と確認は残る。Claudeでは、規約違反と判定された会話は、入力と出力が最長2年、判定のスコアが最長7年保持される。冒頭の二つの事件のとおり、この経路の先には警察がある。

質的研究では、暴力や被害、違法行為についての語りを扱うことがある。分析のためにそれを貼りつけたとき、監視の仕組みがそれをどう読むのかは、外からは分からない。

## ナビエ–ストークス方程式の件

訓練に使われるとはどういうことかを、具体的に考えさせる出来事が、2026年9月にあった。

9月8日、OpenAIは、ナビエ–ストークス方程式の問題を解いたと発表した。水や空気の流れを表すこの方程式は、クレイ数学研究所が賞金100万ドルをかけた七つの難問の一つである。ところが、この問題には、ニューヨーク大学の数学者トリスタン・バックマスターが、Anthropicのレヴェント・アルペゲと一緒に取り組んでいた。バックマスターは研究の途中で、OpenAIのCodexも使っていた。

OpenAIの最初の発表には、こういう一文があった。研究者たちが同社の製品を使ったことから得られた匿名化データが、モデルの改善に役立った可能性は「否定できない」。バックマスターは、OpenAIが「顧客のデータを使って、その顧客を出し抜こうとした」と批判した。

そこから一週間で、OpenAIの説明は三回変わった。9月9日、広報担当者は、影響は「ありえない」と述べた。9月10日には発表の文章が書き換えられ、発表前の2か月間にバックマスターがCodexに入力した内容は、訓練を含め、いかなる形でもシステムに影響しえなかった、という説明になった。9月13日のワシントン・ポストへの説明では、7月3日より後の利用者の入力は使っていない、という言い方に変わった。

「否定できない」から「ありえない」へ、そして「7月3日より後は使っていない」へ。最後の説明を読むと、では7月3日より前の入力はどうだったのか、と思う。利用者の側には、それを確かめる手段がない。この騒ぎの経緯は、[誰の予言を、何を根拠に信じるか]({{ '/articles/predictions/' | relative_url }})にも書いた。

## そして、逆転

10月になって、話は反対の方向に動いた。

10月6日、バストゥニス、チルチェッリ、ハンセンの三人が、OpenAIの証明について、[Lean]({{ '/literacy/lean/' | relative_url }})で書かれた証明と言葉で書かれた証明が食い違っていると指摘する論文をarXivに出した。10月13日には、サイエンティフィック・アメリカンのジョセフ・ハウレットが、専門家への取材をもとに、OpenAIの証明とバックマスターたちの方法の似ているところは「表面だけ」だと報じた。方法が違うなら、二人の研究が盗まれた可能性は低い。クレイ研究所は、問題は「どうやら決着した」としつつ、検証と功績の判断には「あえて時間をかける」としている。

この逆転で、OpenAIへの疑いは晴れたように見える。それでも、9月8日に「否定できない」と書いたのはOpenAI自身だった。自社の製品に入力されたものが何に役立ったのかを、会社自身がすぐには言えなかったことになる。今回は方法が違っていたので話が収まった。方法が似ていたら、外にいる私たちには、どちらとも確かめようがなかった。

## 「すべての人のために」を断ると

ここで、訓練に使うかどうかのスイッチの名前を見てみたい。

ChatGPTでは、このスイッチは「すべての人のためにモデルを改善する」と書かれている。英語では「Improve the model for everyone」である。その下には、内容を訓練に使うことで、ChatGPTが「あなたと、使う人みんなにとって」良くなる、という説明が添えられている。同じスイッチが、Codexでの作業にも効く。Codexに研究フォルダを読ませれば、送られるものはチャット欄に貼った文章よりずっと多い。

この名前には、スイッチが実際にしていること、つまり自分の会話を会社の訓練用データとして渡すことが書かれていない。書かれているのは、渡した結果として起きるとされる良いことだけである。そのため、オフにする操作は、「すべての人のための改善」から自分だけ降りる操作に見える。初期設定はオンなので、何もしない人は協力していることになり、わざわざオフにした人だけが、みんなへの協力を断った人になる。オフにするとき、少し悪いことをしているような気持ちになるのは、この作りのせいである。

研究で同意を取るときのことを考えると、この書き方の偏りがはっきりする。研究参加の説明書には、参加しなくても、途中でやめても不利益はない、と書く。断ることが悪いことに見えないように、言葉を選ぶ。同意しない選択肢を「みんなへの協力を断る」と書いた説明書は、倫理審査を通らないと思う。

ナビエ–ストークスの件を重ねると、「すべての人」という言葉は、さらに落ち着かなく聞こえる。バックマスターから見れば、改善されたモデルを最初に使ったのは、同じ問題を解こうとしていたOpenAI自身の研究チームだったのではないか、という疑いが出たのである。結果として方法は違っていた。それでも、「すべての人」には、利用者と競争する会社自身も入っている。

他社の言葉も見ておく。Claudeは英語で「Help improve our AI models」、日本語のヘルプでは「AIモデルの改善を支援する」である。これも協力を求める形だが、「私たちのAIモデル」と、改善されるのが会社のものであることは書いてある。Grokは「Improve the Model」と短い。Geminiの「アクティビティの保存」には、訓練という言葉が出てこない。履歴を残すかどうかのスイッチに見えて、実際には訓練に渡すかどうかも一緒に決めている。

逐語録の場合、語ってくれた人は、自分の言葉がAI企業の訓練に使われることに同意していない。研究者が「みんなのため」と思っても、その判断を語り手の代わりにすることはできない。スイッチをオフにするのは、研究参加者との約束を守るための、ごく普通の操作である。

## オフにする手順

各社のヘルプで確認した、2026年11月17日時点の手順である。上のタブで会社を切り替えられる。日本語の画面と英語の画面での表示を並べた。

{% include privacy-optout-flow.html lang="ja" %}

{% include figure.html src="fig-openai-data-controls.png" cap="ChatGPTの「データコントロール」で、「Improve the model for everyone」を開いたところ（英語の画面）。音声モードの録音と録画を訓練に使うかどうかは、別のスイッチになっている。出典：OpenAI Help Center「Data Controls FAQ」。" alt="ChatGPTの設定画面。Model improvementの小さな窓に、Improve the model for everyoneのスイッチと説明文、その下にVoice modeの二つのスイッチ、右下にDoneボタンがある。" %}

## オフにしたあとに残るもの

スイッチをオフにしても、フィードバックと監視の二つは残る。研究資料を貼った会話で👍や👎を押せば、その会話は訓練に回りうる。履歴を残さないチャットも、監視の対象からは外れない。語り手にとって、どこまでのリスクなら引き受けられるのかを考えると、個人向けのサービスに逐語録をそのまま送ること自体を見直した方がよい場面もある。大学が契約している環境や、データを外に出さないローカルモデルという選択肢もあり、これは別のノートで扱いたい。

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

On 10 February 2026, a secondary school in Tumbler Ridge, a small town in British Columbia, Canada, was attacked by a shooter.

Two weeks later, OpenAI disclosed something in a letter to a Canadian minister. Eight months before the shooting, in June 2025, the shooter's account had been flagged by the company's automated systems. Staff read the conversations and banned the account. They did not tell the police, because they had not found what the company's criteria then called “credible and imminent planning.” OpenAI has since revised those criteria and writes that, under the current ones, it would have referred the account. It also found a second account belonging to the same person and passed it to the police. On 21 September, British Columbia announced it was suing OpenAI over the failure to notify police.

The second case is one where OpenAI did report. In March 2026, Darren Zhou, a 25-year-old in Florida and a fired Goldman Sachs analyst, told ChatGPT he would kill his ex. OpenAI flagged him to the FBI in May, and the FBI gave two months of his chat logs to the local sheriff's office. He was arrested in May and charged in June with aggravated stalking, written threats to kill and other offences. On 13 August he pleaded guilty and received eight years of probation (reported by the Palm Beach Post from court and arrest records).

In one case the company was sued for not reporting; in the other, its report led to an arrest. Side by side, they invite the question of where the line should be. What struck me first was what the two cases take for granted. What you write to ChatGPT can be read by people at the company, and it can end up with the police.

## Where does our data go?

We all write things to AI every day. Qualitative researchers may paste in interview transcripts or field notes and ask for a summary or a first pass at coding. Where does that text go once it is sent? Who reads it, what is it used for, and when is it deleted?

The text first reaches the company's servers, where the reply is generated. After that it goes at least three ways. It is stored as history. It may be used to train the next model. And it is monitored for abuse, which can mean a person reads it. The two cases above happened at the end of that third path.

When people say they don't want AI to “learn from” their data, they usually mean the second use, training. Every company has a switch for it. Turning that switch off does not stop storage or monitoring, and how much it does stop differs from company to company.

## What the four companies say

The diagram below shows what the help pages and privacy policies of ChatGPT, Claude, Gemini and Grok say about their consumer services. Use the tabs at the bottom to switch between companies and situations.

{% include privacy-data-flow.html lang="en" %}

Switching between them shows a few things.

First, all four use conversations for training by default. ChatGPT has the setting on by default for Free, Plus and Pro, and Gemini has it on for users aged 18 and over. Paying does not by itself keep your chats out of training. Claude changed its policy in August 2025: conversations from users who allow it are used for training and kept for up to five years for that purpose.

Second, turning training off does not end storage. In ChatGPT, Claude and Grok, your history stays until you delete it and is removed from the servers within 30 days after that. Gemini works differently: turning off Keep Activity stops both training and history, but chats are still kept for up to 72 hours.

Third, feedback sits outside the switch. If you give a reply a thumbs up or down, ChatGPT and Grok may use that conversation for training even with the setting off. In Gemini, feedback can include the last 24 hours of chats and any uploaded files; trained teams review it and it is kept for three years. Claude keeps data tied to feedback for five years. A thumbs up on a conversation containing a transcript can hand over the transcript with it.

Finally, monitoring continues in every situation. Chats without history (ChatGPT's and Gemini's temporary chats, Claude's incognito chats, Grok's Private Chat) are not used for training, but they are still kept and checked for safety. In Claude, chats flagged for a policy violation have their inputs and outputs kept for up to two years and the classification scores for up to seven. As the two cases show, this path can lead to the police.

Qualitative research sometimes deals with accounts of violence, victimisation or illegal acts. When we paste such material in for analysis, we cannot see from the outside how the monitoring systems will read it.

## The Navier–Stokes episode

In September 2026, an episode made the question of training on user data concrete.

On 8 September, OpenAI announced that it had solved the Navier–Stokes problem. The equations describe the flow of water and air, and the problem is one of the seven for which the Clay Mathematics Institute offers a million-dollar prize. But Tristan Buckmaster, a mathematician at New York University, had been working on the same problem with Levent Alpöge of Anthropic, and Buckmaster had used OpenAI's Codex during that work.

OpenAI's first announcement included this sentence: the company could not rule out that de-identified data derived from the researchers' use of its products had helped improve its models. Buckmaster accused OpenAI of using “customer's data to try to scoop their customer.”

Within a week, OpenAI's explanation changed three times. On 9 September a spokesperson called any influence “impossible.” On 10 September the announcement was rewritten to say that what Buckmaster had entered into Codex in the two months before the announcement could not have influenced the system in any way, including through training. On 13 September, speaking to the Washington Post, the company said it had used no user inputs after 3 July.

From “cannot rule out” to “impossible” to “nothing after 3 July.” Reading the last version, one wonders about inputs before 3 July. Users have no way of checking. I wrote about the episode in [Whose predictions should we trust, and why?]({{ '/articles/predictions/' | relative_url }}).

## Then the reversal

In October the story moved the other way.

On 6 October, Bastounis, Circelli and Hansen posted a paper on arXiv pointing out discrepancies between OpenAI's proof written in [Lean]({{ '/literacy/lean/' | relative_url }}) and its natural-language version. On 13 October, Joseph Howlett reported in Scientific American, after talking to experts, that the resemblance between OpenAI's proof and Buckmaster and Alpöge's methods was “merely skin-deep.” If the methods differ, it is unlikely that their work was taken. The Clay Institute says the problem has “apparently been settled” and that it is being “deliberately unhurried” about verification and credit.

The reversal seems to clear OpenAI. Even so, it was OpenAI that wrote “cannot rule out” on 8 September. The company itself could not say at once what the inputs to its products had contributed to. This time the methods turned out to be different and the matter settled down. Had they been similar, those of us outside would have had no way to tell either way.

## Declining to help “everyone”

Now look at what the training switch is called.

In ChatGPT it reads “Improve the model for everyone.” Underneath, a line explains that letting your content train the models makes ChatGPT better “for you and everyone who uses it.” The same switch covers work in Codex, and if you let Codex read a research folder, far more is sent than what you paste into a chat.

The label does not say what the switch actually does, which is to hand your conversations over as training data for the company. It names only the good that is supposed to follow. So turning it off looks like stepping out of an improvement meant for everyone. Because the default is on, people who do nothing are helping, and only those who make the effort to switch it off become the ones who declined to help everyone. If turning it off feels slightly like doing something wrong, that is how the setting is built.

Consent in research makes the slant clear. An information sheet tells participants they can decline or withdraw without any disadvantage. We choose words so that saying no does not look wrong. I doubt an information sheet that described not consenting as “declining to help everyone” would get through ethics review.

Set beside the Navier–Stokes episode, “everyone” sounds even more uneasy. From Buckmaster's side, the suspicion was that the first user of the improved model had been OpenAI's own research team, working on the same problem as him. The methods turned out to be different. Still, “everyone” includes the company, which can be a competitor of its own users.

The other companies use different words. Claude says “Help improve our AI models” in English, and the Japanese help page uses a phrase meaning “support the improvement of AI models.” This also asks for help, but “our AI models” at least says whose models are being improved. Grok's “Improve the Model” is short. Gemini's “Keep Activity” does not mention training at all. It looks like a switch for keeping your history, but it also decides whether your chats go into training.

With transcripts, the people who told us their stories have not agreed to their words being used to train an AI company's models. Whatever a researcher thinks would be good for everyone, the researcher cannot make that choice on the speaker's behalf. Turning the switch off is an ordinary way of keeping our promises to participants.

## How to turn it off

These are the steps given in each company's help pages as of 17 November 2026. Use the tabs at the top to switch between companies. The labels are shown as they appear in the Japanese and English interfaces.

{% include privacy-optout-flow.html lang="en" %}

{% include figure.html src="fig-openai-data-controls.png" cap="ChatGPT's Data controls with Improve the model for everyone opened (English interface). Using Voice Mode audio and video recordings for training is a separate switch. Source: OpenAI Help Center, Data Controls FAQ." alt="ChatGPT settings. A small Model improvement window shows the Improve the model for everyone switch with its description, two Voice mode switches below, and a Done button." %}

## What remains after you turn it off

With the switch off, feedback and monitoring remain. A thumbs up or down on a conversation containing research material can send it into training. Chats without history are still monitored. Thinking about how much risk the people we interviewed can be asked to bear, there are cases where sending transcripts to a consumer service at all should be reconsidered. Institutionally contracted services and local models that keep data on your own machine are other options; I plan to cover them in a separate note.

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
