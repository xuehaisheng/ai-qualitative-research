---
title: "AIと一緒に、メタ統合をやってみた：任せたこと、自分で決めたこと"
date: 2026-11-11 09:00:00 +0900
title_en: "Doing a meta-synthesis with AI: what we delegated and what we decided"
summary_en: "How a qualitative meta-synthesis of how researchers write about generative AI was carried out with AI, from search to poster: search strings, linked screening sheets, self-built review tools, and what stayed with the researchers."
author: 薛海升
key: meta-synthesis-with-ai
order: 7
wiki: [agent, context, lost-in-the-middle, hallucination]
summary_ja: "質的研究者が生成AIをどう論じてきたかを調べる質的メタ統合を、検索から発表まで、AIと一緒に進めた。どの作業をAIに任せ、どこを自分で決めたのかを、検索式の比較、連動するスクリーニング表、自作の確認ツールとともに記録する。"
topic: "研究の実践"
related_notes: ["qualitative-reactions", "understanding", "ai-history"]
sort_date: 20261111
---

質的研究者は生成AIをどう論じてきたのか。私たちは、この問いを質的メタ統合で調べ、日本質的心理学会第23回大会でポスター発表した（薛・梶原・豐田, 2026）。この研究は、最初の文献検索から発表のポスターまで、AIと一緒に進めた。ここでは、その進め方を順に書いていく。一番伝えたいのは、どの作業をAIに任せ、どこを自分で決めたかである。結果の中身は、[質的研究者は、AIにどう反応したか]({{ '/articles/qualitative-reactions/' | relative_url }})の最後に書いた。

## 全体の流れ

作業は、検索、選別、分析、統合、発表の五つの段階に分かれる。ひとことで言えば、AIが速くしたのは「作業」であり、何を問い、何を選び、どうまとめるかは、研究者が決めた。

| 段階 | AIに任せたこと | 自分で決めたこと |
|---|---|---|
| ① 検索 | 検索式の案を8通り作り、実際に試して精度を測る | 何を探すかを決め、最終の検索式を選ぶ |
| ② 選別 | 記録を表にまとめ、題目と抄録を翻訳する。全文PDFも集める | 3回のふるい分けの判定は、すべて自分の手で行う |
| ③ 分析 | 複数のAIエージェントが、論文ごとに言説とメタファーを分析する | 原文を読み、全ユニットを確認・修正する |
| ④ 統合 | ベクトル化など、まとめ方の参考を出す | 四つのメタファーと「〜論」の構成を考える |
| ⑤ 発表 | ポスターのレイアウトと、余白などの調整 | 内容に集中する |

## ① 検索：検索式づくりも、AIと試行錯誤した

最初の検索から、AIと一緒にやった。OpenAIのAIエージェントCodexが、ブラウザでWeb of Scienceを操作し、検索式の案を8通り作って実行した。それぞれについて、関連度の高い順に30件を抜き出し、本当に当てはまる文献の割合（精度）を数えた。

| 検索式 | ねらい | 件数 | 精度 |
|---|---|---|---|
| A | 広く拾う（核になる語だけ） | 7,385 | 50% |
| B | 方法論的な省察 | 654 | 77% |
| **C** | **意見・展望・レビュー（主な検索式）** | **195** | **60%** |
| D | 題名を重視する（高精度） | 358 | 73% |
| E | ノイズを除く（NOT検索） | 767 | 73% |
| F | 再現率を保つ修正版 | 2,228 | 53% |
| G | 精度を上げる方法論版 | 785 | 60% |
| H | 題名と抄録の混合 | 1,068 | 53% |

件数は年と文献タイプで絞ったあとの数。精度は、上位30件のうち厳密に当てはまった割合。

広く拾う式Aは7,385件で、広すぎた。精度だけを見ればBやDの方が高い。それでもCを主な検索式にしたのは、195件という件数が目標の100〜300件に近く、意見論文、展望、レビュー、指針という、集めたい文献の種類に合っていたからである。Bは補助、Dは高精度版として残した。検索式、件数、精度、ノイズの原因、修正の理由といった検索の記録も、Codexが日本語と英語でまとめてくれた。

最終的には、2026年7月4日に、Web of ScienceとEBSCOhostを通して12の索引先を検索し、EndNoteで重複を除いて522件になった。ただし、どんな文献を探すのか、どの検索式を採用するのかは、自分で決めた。

## ② 選別：前の輪で外した文献は、次のシートに出てこない

{% include figure.html src="fig-screening-sheet.jpg" cap="実際の「第2輪」シートの左側。左から判定、外す理由、記録番号、題目の訳と原文。右には抄録の訳と原文が続く。" %}

522件をふるい分けるための表も、AIに作ってもらった。Excelのシートが四つあり、互いに連動している。

1. **EndNote貼付**：522件の書誌情報。題目と抄録は、DeepSeekのAPIで日本語に機械翻訳して並べてある。
2. **第1輪**：題目だけを見て判定する。
3. **第2輪**：題目と抄録を見て判定する。第1輪で削除した文献は、このシートには出てこない。
4. **第3輪**：方法論的な論考に限定し、最終的な対象論文を選ぶ。

前の輪で外した文献は、次のシートに出てこない。だから、一輪ずつ自分の目でふるい分けるときに、同じ文献を何度も見なくてすむ。外す理由は、E1〜E12のコードから選ぶ。全文のPDFも、オープンアクセスのものはAIのスクリプトが自動で集めた。集められなかったものは、出版社ごと、原因ごとの一覧にしてもらい、手で入手した。

結果は、522件から140篇（題目・抄録の検討後）、32篇（方法論的な論考に限定）、29篇（全文を入手）、そして28篇になった。研究プロトコルが1篇含まれていたので、あとで除いた。ドイツ語の論文も1篇あり、それは日本語訳で読んだ。表と翻訳はAIが作ったが、判定はすべて自分で入力した。

## ③ 分析：複数のAIエージェントが一篇ずつ読み、人が全部を確かめる

分析の中心は、論文の中のAIの描き方を「ユニット」として抜き出すことである。参照枠には、フーコー派言説分析（Willig, 2022）と概念メタファー理論（Lakoff & Johnson, 1980）を使った。

まず、GPT-5.5（Codex）のサブエージェントを何体も動かし、論文を手分けして分析させた。一つのAIに全部を一度に読ませると、注意が分散して精度が落ちる（[Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})）。一篇ずつ別のエージェントに任せると、精度が上がる。結果は213ユニット、ページ参照つきの文脈抜粋315件である。次に、Claudeでも同じ論文を一篇ずつ分析し直した。英語の原文の翻訳もGPTとClaudeで作ったが、原文は自分でも読んだ。最後に、著者3名が全ユニットを確認・修正した。

### 原文から結果まで、たどれるようにする

全ユニットを確かめるために、確認用のツールを自分たちで作った。

V2は「論文マップ」である。原文の抜粋（ページ番号つき）、論文ごとの分析単位、統合テーマが線でつながっていて、どの原文からどのテーマが生まれたかを、さかのぼって確かめられる。

{% include figure.html src="fig-review-v2.jpg" cap="論文マップ（V2）。左から原文の抜粋、論文ごとの分析単位、統合テーマ。" %}

V3は論文ごとの確認画面で、その論文のユニットが全部並び、担当者が一つずつ「承認」か「保留」を判断する。見出しの編集や、どのサブテーマに置くかの変更もここで行う。全部オンラインにして、アカウントでログインし、新しい論文を追加することもできる。

{% include figure.html src="fig-review-v3.jpg" cap="論文ごとの確認画面（V3）。左に論文の一覧、中央にその論文のユニットが並び、一つずつ判断する。" %}

ついでに、確認を進めるとバッジがもらえる「実績」の仕組みも入れた。ゲームのようなものである。余計なことだが、飴（ごほうび）があった方が続けやすいと思ったからである。

大事にしたのは、AIの出力をそのまま結果にせず、原文に戻れる道筋を残すことだった。

## ④ 統合：AIは材料を並べ、まとめ方は自分で決めた

{% include figure.html src="fig-vector-plots.jpg" cap="Claudeが出した参考の図。ユニットをベクトル化して空間に並べたもの。小さな点が一つひとつのユニット、大きな点が当時の7テーマ。" %}

この段階でも、Claudeにいろいろな参考を出してもらった。たとえば、ユニットをベクトル化して、意味の近いものを空間に並べる見方である。ベクトル化とは、文章を数の並びに直して、意味の近さを距離として測れるようにすることである。

結果は、思っていたような分布にはならなかった。この図をそのまま採用はしていない。ただ、それがかえって大きなヒントになった。四つに分けられるのではないか、と考えたのである。そもそもAIを何として認識しているのか（似姿、存在論）。AIを通して何が見えるのか（レンズ、認識論）。方法としてどうするのか（手、方法論）。AIを使うことで、私たちや分析の対象、質的研究がどうなるのか（秤、価値論）。

最後の四つのメタファーと、それぞれを「〜論」に対応させる構成は、自分で考えた。第一著者を中心にまとめたあと、共著者と合議して妥当性を確かめた。

## ⑤ 発表：形はAIに任せて、内容に集中する

{% include figure.html src="fig-poster-results.jpg" cap="Claudeと一緒に作ったポスター（日本質的心理学会第23回大会）のうち、結果の部分。四つのメタファー（似姿・レンズ・手・秤）と、それぞれのサブテーマ。図を押すと大きく表示される。" alt="ポスターの結果の部分。似姿、レンズ、手、秤の四つの帯が上から並び、それぞれに論文からの引用、問い、ユニット数、サブテーマが書かれている。" %}

ポスターも、Claudeと一緒に作った。HTMLで組み、PDFに書き出している。「上下の余白が少ない」と話しかければ、全体を一度に組み直してくれる。一つずつ位置を直す時間がいらないので、その分、内容に集中できた。

それでも、形をすべてAI任せにしたわけではない。モンドリアンの抽象画から、色面と線で区切る構成のヒントを得た。また、人間の目には錯覚がある。たとえば細い線を同じ色にすると、薄く見える。だから細い部分の色は少し濃くし、フォントの太さも調整した。こうした知識がなければ、そういう調整はしなかったし、薄く見えるままだったと思う。

## まとめ：検証可能な形で、人間の理解のためにAIを使う

私の立場は、AIに任せきるのではなく、AIが出した結果を人間が検証できる形で使う、というものである。そして、人間の理解のためにAIを使う。

AIに作業を任せた分、読むことと考えることに時間を使えた。その結果、全部をAIに任せきるより、この分野に詳しい人間たちが生まれた。AIが何をするかより、AIを使うことで人間がどう成長し、人間の理解がどう深まるかの方が大事だと、私は思っている。

## すぐに試せる頼み方

最後に、すぐに試せる頼み方を挙げておく。「〇〇」を自分のテーマに変えて使う。

1. **資料を探す**：「〇〇に関する査読付き論文を、2015年以降で10本探して。著者・年・タイトル・誌名・リンクを表にして」
2. **レビュー**：「〇〇についてシステマティック・レビューをしたい。Web of Science で使う検索式を3案作り、それぞれの長所と短所を説明して」
3. **分析**：「添付のインタビュー記録をテーマ分析して。各テーマの根拠に、発言のページと行番号のタグを付け、タグを押すと原文の該当箇所が光るHTMLにして」
4. **発表資料**：「この要旨を、A0縦のポスターの構成にして。見出し、図の位置、余白まで提案して」
5. **HTML**：「いま調べた内容を、初めて読む人にも分かる1枚のウェブページ（HTML）にまとめて」

三つ目には理由がある。AIに分析させると、もっともらしいまとめが出てくる。しかし、どの発言が根拠なのかが見えないと検証できない。分析の一つひとつに「何ページの何行目か」というタグを付けさせ、タグを押すと原文が光るウェブページにしてもらえば、確認がすぐにできる。インタビューが何人分もあるなら、一人分ずつ別のエージェントに分析させると、精度が上がる。


## 参考文献

- Lakoff, G., & Johnson, M. (1980). *Metaphors we live by*. University of Chicago Press.
- Willig, C. (2022). *Introducing qualitative research in psychology* (4th ed.). Open University Press.
- 薛海升・梶原佐保・豐田隼（2026）. 質的研究者は生成AIをどう論じるか. 日本質的心理学会第23回大会 ポスター発表.

使用したモデルは、GPT-5.5、GPT-5.6、GPT-6.1（OpenAI）と Claude Opus 5.5（Anthropic）である。

<!--EN-->

How have qualitative researchers written about generative AI? We investigated this question with a qualitative meta-synthesis and presented a poster at the 23rd Annual Meeting of the Japanese Association of Qualitative Psychology (Xue, Kajiwara & Toyoda, 2026). We carried out this study with AI, from the first literature search to the poster. Here I describe how we did it, step by step. What I most want to convey is which tasks we left to AI and what we decided ourselves. The findings are summarized at the end of [How have qualitative researchers responded to AI?]({{ '/articles/qualitative-reactions/' | relative_url }}).

## The overall flow

The work fell into five stages: search, screening, analysis, synthesis and presentation. In a word, AI sped up the “work”; the researchers decided what to ask, what to select and how to put it together.

| Stage | What we left to AI | What we decided ourselves |
|---|---|---|
| ① Search | Drafting eight candidate search strings, running them and measuring precision | Deciding what to look for and choosing the final search string |
| ② Screening | Putting the records into sheets, translating titles and abstracts, collecting full-text PDFs | Making every decision in all three rounds of screening by hand |
| ③ Analysis | Several AI agents analyzing the discourse and metaphors of each paper | Reading the originals, and checking and correcting every unit |
| ④ Synthesis | Offering reference views, such as vectorization | Working out the four metaphors and the structure of “-ologies” |
| ⑤ Presentation | Laying out the poster and adjusting margins | Concentrating on the content |

## ① Search: even the search strings came from trial and error with AI

We worked with AI from the very first search. Codex, OpenAI's AI agent, operated Web of Science in a browser, drafted eight candidate search strings and ran them. For each, it took the 30 most relevant results and counted the share that truly fit (precision).

| String | Aim | Hits | Precision |
|---|---|---|---|
| A | Cast a wide net (core terms only) | 7,385 | 50% |
| B | Methodological reflection | 654 | 77% |
| **C** | **Opinion, perspective, review (main string)** | **195** | **60%** |
| D | Title-focused (high precision) | 358 | 73% |
| E | Remove noise (NOT search) | 767 | 73% |
| F | Revised to keep recall | 2,228 | 53% |
| G | Methodological version with higher precision | 785 | 60% |
| H | Mixed title and abstract | 1,068 | 53% |

Hits are after filtering by year and document type. Precision is the share of the top 30 that strictly fit.

String A, at 7,385 hits, was too broad. On precision alone, B and D were better. We still chose C as the main string because its 195 hits were close to our target of 100–300, and it matched the kinds of documents we wanted: opinion papers, perspectives, reviews and guidelines. We kept B as a supplement and D as a high-precision version. Codex also wrote up the search record (search strings, hits, precision, sources of noise and reasons for revisions) in Japanese and English. But what kinds of documents to look for, and which search string to adopt, we decided ourselves.

In the end, on July 4, 2026, we searched 12 indexes through Web of Science and EBSCOhost and removed duplicates in EndNote, leaving 522 records.

## ② Screening: papers excluded in one round do not appear on the next sheet

{% include figure.html src="fig-screening-sheet-en.jpg" cap="The actual “Round 2” sheet, with the column headers translated. From left: decision, reason for exclusion, record ID, Japanese machine translation of the title, original title." %}

We also had AI build the sheets for screening the 522 records. The Excel file has four linked sheets.

1. **EndNote paste**: bibliographic data for the 522 records. Titles and abstracts sit beside a Japanese machine translation made through the DeepSeek API.
2. **Round 1**: decide on titles alone.
3. **Round 2**: decide on titles and abstracts. Papers deleted in Round 1 do not appear on this sheet.
4. **Round 3**: limit to methodological essays and select the final set.

Papers excluded in one round do not appear on the next sheet. So when screening round by round with our own eyes, we did not have to look at the same paper again and again. Reasons for exclusion are chosen from codes E1–E12. AI scripts also automatically collected full-text PDFs of open-access papers. For those it could not collect, it made a list by publisher and cause, and we obtained them by hand.

The result went from 522 records to 140 (after reviewing titles and abstracts), 32 (limited to methodological essays), 29 (full text obtained), and finally 28. One study protocol was included and removed later. One paper was in German, and we read it in Japanese translation. AI made the sheets and translations, but we entered every decision ourselves.

## ③ Analysis: several AI agents read one paper each, and humans check everything

The core of the analysis is extracting, as “units”, how a paper portrays AI. As frames of reference we used Foucauldian discourse analysis (Willig, 2022) and conceptual metaphor theory (Lakoff & Johnson, 1980).

First, we ran many GPT-5.5 (Codex) subagents and had them split the papers between them. When one AI reads everything at once, its attention is spread thin and accuracy drops ([Lost in the Middle]({{ '/literacy/lost-in-the-middle/' | relative_url }})). Giving each paper to a separate agent improves accuracy. The result was 213 units and 315 context excerpts with page references. Next, we had Claude reanalyze the same papers one by one. GPT and Claude also produced translations of the English originals, but I read the originals myself too. Finally, the three authors checked and corrected every unit.

### Keeping a trail from the original text to the results

To check every unit, we built our own review tools.

V2 is a “paper map”. Excerpts from the original (with page numbers), the analytic units for each paper and the synthesized themes are connected by lines, so you can trace back which original text each theme came from.

{% include figure.html src="fig-review-v2-en.jpg" cap="Paper map (V2), redrawn in English. From left: excerpts from the original, analytic units for each paper, synthesized themes." %}

V3 is a review screen for each paper. All of that paper's units are listed, and the reviewer decides on each one, “approve” or “hold”. Editing headings and changing which subtheme a unit belongs to also happen here. Everything is online: you log in with an account and can add new papers.

{% include figure.html src="fig-review-v3-en.jpg" cap="Review screen for each paper (V3), redrawn in English. The list of papers on the left; that paper's units in the middle, decided one by one." %}

While we were at it, we added an “achievements” system that awards badges as you progress through the review. It is like a game. It was unnecessary, but I thought a little candy (a reward) would make it easier to keep going.

What we cared about was not taking AI output as the result as it is, but keeping a path back to the original text.

## ④ Synthesis: AI laid out the material, and we decided how to put it together

{% include figure.html src="fig-vector-plots-en.jpg" cap="A reference figure from Claude: units vectorized and placed in space. Small dots are individual units; large dots are the seven themes we had at the time." %}

At this stage, too, we had Claude offer various reference views. One example is vectorizing the units and placing those with similar meanings close together in space. Vectorization means turning text into a sequence of numbers so that closeness of meaning can be measured as distance.

The result did not show the distribution we had expected, and we did not adopt the figure as it was. But that turned out to be a big hint. We thought: maybe it can be split into four. What do we take AI to be in the first place (likeness, ontology)? What can we see through AI (lens, epistemology)? What do we do with it as a method (hand, methodology)? What becomes of us, of what we analyze, and of qualitative research when we use AI (scale, axiology)?

The final four metaphors, and the structure that matches each to an “-ology”, I worked out myself. After the first author put it together, we checked its validity through discussion among the co-authors.

## ⑤ Presentation: leave the form to AI and concentrate on content

{% include figure.html src="fig-poster-results-en.jpg" cap="The results section of the poster made with Claude (23rd Annual Meeting of the Japanese Association of Qualitative Psychology), redrawn in English. The four metaphors (likeness, lens, hand, scale) and their subthemes. Click to enlarge." alt="The results section of the poster. Four bands, likeness, lens, hand and scale, run from top to bottom, each with a quotation from a paper, a question, the number of units and subthemes." %}

We made the poster with Claude too. It was laid out in HTML and exported to PDF. Say “there is too little margin at the top and bottom”, and it reworks the whole layout at once. Because there was no need to spend time adjusting positions one by one, we could concentrate on the content instead.

Even so, we did not leave the form entirely to AI. We took a hint for a structure divided by color fields and lines from Mondrian's abstract paintings. Human eyes also have illusions: thin lines in the same color look paler, for example. So we made the thin parts slightly darker and adjusted the font weights. Without this kind of knowledge, we would not have made those adjustments, and the poster would have stayed looking pale.

## Summary: using AI in a verifiable way, for human understanding

My position is not to leave everything to AI, but to use what AI produces in a form humans can verify. And to use AI for human understanding.

Because we left the work to AI, we could spend time reading and thinking. As a result, rather than leaving everything to AI, we ended up as people who know this field well. What matters more than what AI does, I think, is how people grow and how human understanding deepens through using AI.

## Requests you can try right away

Finally, here are some requests you can try right away. Replace “X” with your own topic.

1. **Finding sources**: “Find 10 peer-reviewed papers on X published since 2015. Put the authors, year, title, journal and link in a table.”
2. **Reviews**: “I want to do a systematic review on X. Draft three search strings for Web of Science and explain the strengths and weaknesses of each.”
3. **Analysis**: “Do a thematic analysis of the attached interview transcripts. For the evidence of each theme, attach a tag with the page and line number of the statement, and make an HTML page where clicking a tag highlights the passage in the original.”
4. **Presentation materials**: “Turn this abstract into the structure of an A0 portrait poster. Propose headings, figure positions and even margins.”
5. **HTML**: “Put what we just looked up into a single web page (HTML) that a first-time reader can understand.”

There is a reason for the third one. When you have AI analyze something, a plausible summary comes out. But if you cannot see which statement is the evidence, you cannot verify it. If you have AI tag each piece of analysis with “page and line”, and make a web page where clicking a tag highlights the original, checking becomes quick. If you have several people's interviews, having a separate agent analyze each person's improves accuracy.

## References

- Lakoff, G., & Johnson, M. (1980). *Metaphors we live by*. University of Chicago Press.
- Willig, C. (2022). *Introducing qualitative research in psychology* (4th ed.). Open University Press.
- Xue, H., Kajiwara, S., & Toyoda, J. (2026). How do qualitative researchers discuss generative AI? A new attempt at qualitative meta-synthesis [Poster presentation, in Japanese]. 23rd Annual Meeting of the Japanese Association of Qualitative Psychology.

The models used were GPT-5.5, GPT-5.6 and GPT-6.1 (OpenAI) and Claude Opus 5.5 (Anthropic).
