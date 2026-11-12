---
title: "RAG（検索拡張生成）"
key: rag
en: "Retrieval-Augmented Generation"
category: usage
order: 5
summary: "答える前に外部の資料を調べ、それを参照しながら答える仕組み。"
summary_en: "Looking up outside sources before answering, and answering with reference to them."
related: [hallucination, context, agent]
articles: [ai-history]
sources:
  - text: "IBM. What is retrieval-augmented generation (RAG)?"
    url: "https://www.ibm.com/think/topics/retrieval-augmented-generation"
---

RAG（検索拡張生成）は、答える前に外部の資料を調べ、それを参照しながら答える仕組みである。IBMは “an architecture for optimizing the performance of an artificial intelligence model by connecting it with external knowledge bases” と説明している。

2023年2月の新しいBingは、先にウェブを検索してから答え、出典を示した。ChatGPT以後の流れでは、これが「検索して答える」段階の始まりである。答えの根拠を外の資料に求めることで、[ハルシネーション]({{ '/literacy/hallucination/' | relative_url }})を減らそうとする考え方でもある。

<!--EN-->

RAG (retrieval-augmented generation) is a setup in which the model looks up outside sources before answering and answers with reference to them. IBM describes it as “an architecture for optimizing the performance of an artificial intelligence model by connecting it with external knowledge bases.”

The new Bing in February 2023 searched the web first, then answered and showed its sources. In the developments after ChatGPT, this marks the start of the “search and answer” stage. It is also an approach that tries to reduce [hallucination]({{ '/literacy/hallucination/' | relative_url }}) by grounding answers in outside sources.
