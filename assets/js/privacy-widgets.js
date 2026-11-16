/* Two widgets for the privacy note: where a conversation goes (pv-flow) and how to turn training off (pv-optout). */
(function () {
  if (window.__pvWidgets) return;
  window.__pvWidgets = true;

  var T = {
    ja: {
      input: ['逐語録や資料', '質問を送る'], server: ['企業のサーバー', 'で回答を計算'], local: ['自分のPC', 'で回答を計算'], reply: ['回答が', '研究者へ戻る'],
      nodes: { answer: '回答の生成', store: '履歴・データの保存', train: 'モデルを改善する訓練', human: '監視と人による審査' },
      state: { on: '使われる', off: '使われない', cond: '条件つき', meta: '基本的にメタデータのみ' },
      stateSvg: { meta: 'メタデータのみ' },
      // Monitoring and human review is something that may happen, not something your data is "used" for.
      human: { on: 'ありえる', cond: '限定的にありえる', off: 'ない', meta: 'ありえる' },
      modes: { on: '改善がオン', off: '改善をオフ', temp: '履歴を残さないチャット', fb: 'フィードバックを送る' },
      companyLabel: 'サービス', modeLabel: '使い方',
      legend: '黒い流れ：使われる（監視と人による審査では「ありえる」）　灰色の流れと点線の枠：条件つき（監視では「限定的にありえる」）　灰色の枠と細い流れ：基本的にメタデータのみ　灰色の点線：使われない。各社の公開の説明をもとにした図で、内部の仕組みを再現したものではない。',
      src: '出典：各社のヘルプとプライバシーポリシー（2026年11月17日確認）。本文末の参考文献を参照。'
    },
    en: {
      input: ['Transcripts,', 'questions'], server: ['Company', 'servers reply'], local: ['Your own PC', 'replies'], reply: ['The reply', 'comes back'],
      nodes: { answer: 'Generating a reply', store: 'Storage', train: 'Model training', human: 'Monitoring, review' },
      state: { on: 'Used', off: 'Not used', cond: 'Conditional', meta: 'Mostly metadata only' },
      stateSvg: { meta: 'Metadata only' },
      human: { on: 'Possible', cond: 'Possible in limited cases', off: 'None', meta: 'Possible' },
      humanSvg: { cond: 'Limited cases' },
      modes: { on: 'Improvement on', off: 'Improvement off', temp: 'Chat without history', fb: 'Sending feedback' },
      companyLabel: 'Service', modeLabel: 'Situation',
      legend: 'Black flow: used (for monitoring and review: possible). Grey flow and dotted box: conditional (for monitoring: possible in limited cases). Grey box and thin flow: mostly metadata only. Grey dots: not used. Based on what the companies publish; it does not reproduce their internal systems.',
      src: 'Sources: each company’s help pages and privacy policy (checked 17 November 2026). See the references at the end.'
    }
  };

  function s(state, ja, en) { return { s: state, ja: ja, en: en }; }
  var ANSWER = s('on', '入力は会社のサーバーに送られ、そこで回答が作られる。どの使い方でも同じ。', 'Your input is sent to the company’s servers, where the reply is generated. This is the same in every situation.');

  var FLOW = {
    chatgpt: {
      name: 'ChatGPT',
      on: {
        store: s('on', '削除するまで履歴に残る。削除すると30日以内にサーバーから消える（法律上の義務などの例外あり）。', 'Kept in your history until you delete it, then removed from the servers within 30 days (with exceptions such as legal obligations).'),
        train: s('on', 'Free・Plus・Proの会話は訓練に使われる。初期設定はオン。', 'Conversations on Free, Plus and Pro are used for training. The setting is on by default.'),
        human: s('on', '自動検知で疑わしい会話を見つけ、人が読む。差し迫った危険があると判断すれば警察に知らせる。', 'Automated systems flag conversations and people review them. If staff judge there is an imminent threat, they notify the police.')
      },
      off: {
        train: s('off', '以後の新しい会話は訓練に使わない。ただしDaybreak（Trusted Access）の会話は、オフでも使われることがある。', 'New conversations are no longer used for training. Daybreak (Trusted Access) sessions may still be used even with the setting off.')
      },
      temp: {
        note: { ja: 'ChatGPTでは「一時チャット」。', en: 'In ChatGPT this is Temporary Chat.' },
        store: s('cond', '履歴には出ないが、安全のためにコピーを最長30日保持する。', 'It does not appear in your history, but a copy may be kept for up to 30 days for safety.'),
        train: s('off', '訓練には使わない。', 'Not used for training.'),
        human: s('on', '不正利用を監視する必要があるときに確認する。', 'Reviewed when needed to monitor for abuse.')
      },
      fb: {
        train: s('on', '👍や👎を送ると、その会話全体が訓練に使われうる。改善をオフにしていても同じ。', 'If you rate a reply with a thumbs up or down, the whole conversation may be used for training, even with the setting off.')
      }
    },
    claude: {
      name: 'Claude',
      on: {
        store: s('on', '削除するまで履歴に残る。削除すると30日以内にサーバーから消える。', 'Kept in your history until you delete it, then removed from the servers within 30 days.'),
        train: s('on', '訓練に使い、個人が分からない形にして訓練用に最長5年保持する。', 'Used for training, and kept in de-identified form in the training pipeline for up to 5 years.'),
        human: s('on', '利用規約違反と判定された会話は、入力と出力を最長2年、判定のスコアを最長7年保持する。', 'If a chat is flagged for a policy violation, inputs and outputs are kept for up to 2 years and classification scores for up to 7 years.')
      },
      off: {
        train: s('off', '過去の会話も新しい会話も、今後の訓練から外す。ただし、すでに始まった訓練と、できあがったモデルには及ばない。', 'Past and new chats are excluded from future training. Training already under way, and models already trained, are not affected.'),
        human: s('on', '違反と判定された会話は、オフでも安全対策の改善に使われうる。', 'Chats flagged for violations may still be used to improve safety systems, even with the setting off.')
      },
      temp: {
        note: { ja: 'Claudeでは「Incognito chat」。', en: 'In Claude this is an incognito chat.' },
        store: s('cond', '履歴には残らない。保持は既定で30日。', 'It does not appear in your history. By default it is kept for 30 days.'),
        train: s('off', '改善をオンにしていても、訓練には使わない。', 'Not used for training, even if the improvement setting is on.')
      },
      fb: {
        train: s('on', '👍や👎、バグ報告に関わるデータは5年保持し、訓練に使われうる。', 'Data tied to feedback (thumbs up or down, bug reports) is kept for 5 years and may be used for training.')
      }
    },
    gemini: {
      name: 'Gemini',
      on: {
        note: { ja: 'Geminiでは、改善のオンとオフを「アクティビティの保存」で切り替える。18歳以上は初期設定でオン。', en: 'In Gemini, improvement is switched on and off with “Keep Activity”. It is on by default for users aged 18 and over.' },
        store: s('on', '履歴に残る。自動削除の期間は既定で18か月（3か月、36か月にも変えられる）。', 'Kept in your activity. Auto-delete is set to 18 months by default (3 or 36 months are also available).'),
        train: s('on', '生成AIモデルの訓練を含む、サービスの改善に使う。', 'Used to improve Google services, including training generative AI models.'),
        human: s('on', '一部の会話を人が読む。読まれたデータはアカウントから切り離して3年保持する。', 'Some chats are read by human reviewers. Reviewed data is disconnected from your account and kept for 3 years.')
      },
      off: {
        store: s('cond', '履歴には出ないが、回答と安全対策のために最長72時間保持する。', 'It does not appear in your activity, but it is kept for up to 72 hours to respond and for safety.'),
        train: s('off', '以後の会話は訓練に使わない（フィードバックを送った場合を除く）。', 'Future chats are not used for training (unless you send feedback).'),
        human: s('on', 'Google、利用者、社会を守るための確認は続き、人が読むこともある。', 'Chats are still used to protect Google, its users and the public, including review by people.')
      },
      temp: {
        note: { ja: 'Geminiでは「一時チャット」。', en: 'In Gemini this is a temporary chat.' },
        store: s('cond', '最長72時間保持する。', 'Kept for up to 72 hours.'),
        train: s('off', '訓練にも、人による改善のための確認にも使わない。', 'Not used for training, or for improvement review by people.'),
        human: s('on', '安全のための確認は続く。', 'Safety checks still apply.')
      },
      fb: {
        train: s('on', 'フィードバック本文に加え、直近24時間の会話とアップロードしたファイルなども送られ、改善に使われる。', 'Feedback can include the last 24 hours of chats and any uploads, and is used for improvement.'),
        human: s('on', '専門のチームが読み、アカウントから切り離して最長3年保持する。', 'Specially trained teams review it, and it is kept for up to 3 years, disconnected from your account.')
      }
    },
    grok: {
      name: 'Grok',
      on: {
        store: s('on', '削除するまで履歴に残る。削除すると30日以内に消える。', 'Kept in your history until you delete it, then removed within 30 days.'),
        train: s('on', '訓練に使われる。', 'Used for training.'),
        human: s('cond', '安全や法律上の理由で保持・確認する例外がある。', 'There are exceptions for keeping and checking data for safety or legal reasons.')
      },
      off: {
        train: s('off', '以後の新しい会話は訓練に使わない。', 'New conversations are not used for training.')
      },
      temp: {
        note: { ja: 'Grokでは「Private Chat」。', en: 'In Grok this is Private Chat.' },
        store: s('cond', '履歴には出ない。30日以内に削除する。', 'It does not appear in your history and is deleted within 30 days.'),
        train: s('off', '訓練には使わない。', 'Not used for training.')
      },
      fb: {
        train: s('on', '訓練をオフにしていても、自分で送ったフィードバックは訓練に使われうる。', 'Feedback you choose to send may be used for training, even after you opt out.')
      }
    }
  };
  var COMPANIES = ['chatgpt', 'claude', 'gemini', 'grok'];
  var MODES = ['on', 'off', 'temp', 'fb'];
  var NODES = ['answer', 'store', 'train', 'human'];

  // A situation inherits whatever it does not override from "on" (feedback and opt-out keep the same storage, and so on).
  function resolve(c, m) {
    var d = FLOW[c], out = { answer: ANSWER, note: null };
    NODES.slice(1).forEach(function (k) { out[k] = (d[m] && d[m][k]) || d.on[k]; });
    if (m === 'fb' && !(d.fb && d.fb.human)) out.human = d.on.human;
    out.note = (d[m] && d[m].note) || (m === 'on' || m === 'off' ? d.on.note : null);
    return out;
  }


  /* ---- Opt-out vs API vs ZDR vs local (data-set="compare") ---- */
  var LOCAL_ALL = {
    answer: s('on', '入力は外に出ない。自分のPCの中で回答を作る。', 'Nothing leaves your machine. The reply is generated on your own PC.'),
    store: s('off', '会社には送られない。保存先は自分のPCだけ。', 'Nothing is sent to a company. Data is stored only on your PC.'),
    train: s('off', '会社の訓練には使われない。', 'Not used for any company’s training.'),
    human: s('off', '会社の監視も、人による確認もない。', 'No company monitoring and no human review.'),
    note: { ja: '検索のための変換、文字の読み取り、文字起こしまで手元で動いているかを確かめる。ネットを切って動けば確実。', en: 'Check that search indexing, text recognition and transcription also run locally. If it works with the network off, it is local.' }
  };
  var COMPARE = {
    openai: {
      api: {
        store: s('cond', '不正利用の監視ログを最長30日保持。会話の状態を保存する機能を使えば30日、ファイルは削除するまで残る。', 'Abuse-monitoring logs are kept for up to 30 days. Features that store conversation state keep it for 30 days; files stay until deleted.'),
        train: s('off', '初期設定では使わない。', 'Not used by default.'),
        human: s('on', '最長30日のログが監視の対象になる。', 'The logs of up to 30 days are subject to monitoring.')
      },
      zdr: {
        note: { ja: '申し込み：営業窓口に申請し、OpenAIの審査で承認された組織だけが使える。承認後、管理画面の「Settings → Organization → Data controls」に「Data Retention」のタブが現れ、組織やプロジェクトごとにZDRを選ぶ。', en: 'How to get it: apply through sales; only organisations approved by OpenAI can use it. Once approved, a Data Retention tab appears under Settings → Organization → Data controls, where ZDR is set per organisation or project.' },
        store: s('meta', '内容は残さない。利用量などのメタデータは残る。Assistants、Files、ベクトルストアなどはZDRの対象外で、使えば削除するまで残る。', 'No content is kept; metadata such as usage remains. Assistants, Files, vector stores and some other features are not covered and keep data until deleted.'),
        train: s('off', '使わない。', 'Not used.'),
        human: s('cond', '内容は監視ログに残らない。児童への性的虐待が疑われる画像やファイルだけは、人が確認するために保持される。', 'Content is excluded from monitoring logs. Images and files flagged as possible child sexual abuse material are kept for human review.')
      }
    },
    anthropic: {
      api: {
        store: s('cond', '入力と出力は30日以内に削除。違反と判定されると最長2年、判定のスコアは最長7年。Files APIのファイルは削除するまで。', 'Inputs and outputs are deleted within 30 days. If flagged, up to 2 years (scores up to 7). Files API files stay until deleted.'),
        train: s('off', '初期設定では使わない。明示的に送ったフィードバックは別。', 'Not used by default, except feedback you explicitly send.'),
        human: s('on', '30日の間、違反の検知の対象になる。', 'Subject to violation detection during those 30 days.')
      },
      zdr: {
        note: { ja: '申し込み：Anthropicと個別にZDRの合意を結ぶ。ConsoleのAPI、Enterprise版のClaude Code、Bedrockなどのクラウド経由で使える。', en: 'How to get it: sign a ZDR agreement with Anthropic. It applies to the Console API, Claude Code in Enterprise, and cloud routes such as Bedrock.' },
        store: s('meta', '内容は残さない。ただし2026年6月9日からは、Mythos級のモデル（Covered Models）はZDRでも30日保持する。', 'No content is kept. From 9 June 2026, however, Mythos-class models (Covered Models) keep prompts and outputs for 30 days even under ZDR.'),
        train: s('off', '使わない。', 'Not used.'),
        human: s('cond', 'Covered Modelsの30日分は、承認された少人数だけが記録つきで読める。違反の判定や法律上の必要がある場合も例外。', 'For Covered Models, only a small approved group can read the 30 days of data, with every access logged. Flagged content and legal requirements are also exceptions.')
      }
    },
    google: {
      api: {
        note: { ja: 'Gemini APIの無料枠は、改善に使われ、人が読むこともある。以下は有料の場合。', en: 'The free tier of the Gemini API is used for improvement and may be read by people. The values below are for paid use.' },
        store: s('cond', '不正利用の監視のため、入力と出力を55日保持。Google検索でのグラウンディングを使うと30日保存され、止められない。', 'Prompts and outputs are kept for 55 days for abuse monitoring. Grounding with Google Search stores data for 30 days and cannot be turned off.'),
        train: s('off', '有料なら製品の改善に使わない。', 'Paid use is not used to improve products.'),
        human: s('on', '55日の間、監視の対象になる。ポリシー違反を見つけるモデルの訓練には使われうる。', 'Monitored during those 55 days, and may be used to train models that enforce policy.')
      },
      zdr: {
        note: { ja: '申し込み：Gemini APIでは監視ログを消せない。ZDRが必要ならGoogle CloudのVertex AIを使い、キャッシュを切り、保存する設定（store）をfalseにするなど、自分で設定を揃える。', en: 'How to get it: the Gemini API cannot drop its monitoring logs. For ZDR, use Vertex AI on Google Cloud and configure it yourself, e.g. turning off caching and setting store to false.' },
        store: s('meta', '設定を揃えれば内容は残さない。検索のグラウンディングは最長3日、地図は30日保存され、止められない。', 'With the right settings, no content is kept. Search grounding keeps data for up to 3 days and Maps grounding for 30, and these cannot be turned off.'),
        train: s('off', '使わない。', 'Not used.'),
        human: s('cond', 'Google Cloudの規約で使う場合、不正利用の監視のための記録が残ることがある。', 'Under the Google Cloud terms, prompts may still be logged for abuse monitoring.')
      }
    },
    xai: {
      api: {
        store: s('cond', '入力と出力は30日以内に自動で削除。', 'Inputs and outputs are deleted automatically within 30 days.'),
        train: s('off', '使わない。無料クレジットと引き換えに許可した場合は別。', 'Not used, unless you allow it in exchange for free credits.'),
        human: s('cond', '規約違反の疑いがあるときや法律上必要なときは保持する。', 'Kept when content is flagged for violations or when the law requires it.')
      },
      zdr: {
        note: { ja: '申し込み：公開の文書にはZDRという名前の制度はない。保持期間を変えるには、エンタープライズ窓口を通じて書面で個別に合意する。', en: 'How to get it: the public documents describe no programme called ZDR. Changing retention requires a separate written agreement through the enterprise team.' },
        store: s('cond', '書面の合意で決めた期間による。', 'Depends on the period set in the written agreement.'),
        train: s('off', '使わない。', 'Not used.'),
        human: s('cond', '規約違反の疑いや法律上の必要がある場合は例外。', 'Exceptions for flagged content and legal requirements.')
      }
    }
  };
  var CONSUMER_OF = { openai: 'chatgpt', anthropic: 'claude', google: 'gemini', xai: 'grok' };
  var API_ANSWER = s('on', '入力は会社のサーバーに送られ、そこで回答が作られる。', 'Your input is sent to the company’s servers, where the reply is generated.');
  var COMPARE_CFG = {
    companies: [{ id: 'openai', label: 'OpenAI' }, { id: 'anthropic', label: 'Anthropic' }, { id: 'google', label: 'Google' }, { id: 'xai', label: 'xAI' }],
    modes: {
      ja: [{ id: 'optout', label: '個人向け（改善オフ）' }, { id: 'api', label: 'API' }, { id: 'zdr', label: 'API＋ZDR' }, { id: 'local', label: 'ローカルモデル' }],
      en: [{ id: 'optout', label: 'Consumer (opted out)' }, { id: 'api', label: 'API' }, { id: 'zdr', label: 'API + ZDR' }, { id: 'local', label: 'Local model' }]
    },
    // xAI publishes no ZDR programme, so that combination cannot be chosen.
    unavailable: function (c, m) { return c === 'xai' && m === 'zdr'; },
    resolve: function (c, m) {
      if (m === 'optout') return resolve(CONSUMER_OF[c], 'off');
      if (m === 'local') return LOCAL_ALL;
      var d = COMPARE[c][m];
      return { answer: API_ANSWER, store: d.store, train: d.train, human: d.human, note: d.note || null };
    }
  };

  var NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function h(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function tabs(name, items, current, onPick) {
    var row = h('div', 'pv-tabrow');
    row.appendChild(h('span', 'pv-tablabel', name));
    var list = h('div', 'pv-tabs');
    list.setAttribute('role', 'tablist');
    list.setAttribute('aria-label', name);
    items.forEach(function (it) {
      var b = h('button', 'pv-tab', it.label);
      b.type = 'button';
      b.setAttribute('data-id', it.id);
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', it.id === current ? 'true' : 'false');
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(list.children, function (x) { x.setAttribute('aria-selected', 'false'); });
        b.setAttribute('aria-selected', 'true');
        onPick(it.id);
      });
      list.appendChild(b);
    });
    row.appendChild(list);
    return row;
  }

  function initFlow(root) {
    var lang = root.getAttribute('data-lang') === 'en' ? 'en' : 'ja';
    var t = T[lang];
    var cfg = root.getAttribute('data-set') === 'compare' ? COMPARE_CFG : {
      companies: COMPANIES.map(function (c) { return { id: c, label: FLOW[c].name }; }),
      modes: MODES.map(function (m) { return { id: m, label: t.modes[m] }; }),
      resolve: resolve
    };
    if (cfg === COMPARE_CFG) cfg = { companies: cfg.companies, modes: cfg.modes[lang], resolve: cfg.resolve, unavailable: cfg.unavailable };
    var company = cfg.companies[0].id, mode = cfg.modes[0].id;
    root.textContent = '';

    // Same layout as the source figure "入力した資料は どの用途に分かれるのか": input -> server -> reply, with three branches.
    var svg = el('svg', { viewBox: '0 0 440 330', class: 'pv-svg', role: 'img', 'aria-hidden': 'true' });
    var parts = {};
    function box(x, y, w, hgt, lines, cls, parent) {
      el('rect', { x: x, y: y, width: w, height: hgt, rx: 5, class: cls || 'pv-box' }, parent);
      var tx = el('text', { x: x + w / 2, y: y + hgt / 2 - (lines.length - 1) * 9 + 5, class: 'pv-label', 'text-anchor': 'middle' }, parent);
      lines.forEach(function (ln, i) { el('tspan', { x: x + w / 2, dy: i ? 18 : 0 }, tx).textContent = ln; });
      return tx;
    }
    function wire(d, parent, always) {
      el('path', { d: d, class: 'pv-wire' }, parent);
      el('path', { d: d, class: 'pv-run' + (always ? ' pv-always' : '') }, parent);
    }
    var g0 = el('g', { class: 'pv-node', 'data-state': 'on' }, svg);
    wire('M98 150 L130 150', g0, true);
    wire('M185 178 L185 262', g0, true);
    box(4, 122, 94, 56, t.input, 'pv-in', g0);
    var serverText = box(130, 122, 110, 56, t.server, 'pv-box', g0);
    box(130, 262, 110, 50, t.reply, 'pv-box pv-reply', g0);
    var Y = { train: 14, store: 122, human: 230 };
    ['train', 'store', 'human'].forEach(function (k) {
      var y = Y[k] + 28, d = 'M240 150 L251 150 L251 ' + y + ' L268 ' + y;
      var g = el('g', { class: 'pv-node' }, svg);
      wire(d, g);
      el('rect', { x: 268, y: Y[k], width: 168, height: 56, rx: 5, class: 'pv-box' }, g);
      var label = el('text', { x: 280, y: Y[k] + 24, class: 'pv-label' }, g);
      label.textContent = t.nodes[k];
      el('circle', { cx: 284, cy: Y[k] + 41, r: 4.5, class: 'pv-mark' }, g);
      var st = el('text', { x: 296, y: Y[k] + 44, class: 'pv-state' }, g);
      parts[k] = { g: g, st: st };
    });
    root.appendChild(svg);

    var note = h('p', 'pv-note');
    var list = h('dl', 'pv-details');
    list.setAttribute('aria-live', 'polite');
    root.appendChild(note);
    root.appendChild(list);
    root.appendChild(h('p', 'pv-legend', t.legend));

    var controls = h('div', 'pv-controls');
    var companyRow = tabs(t.companyLabel, cfg.companies, company, function (id) { company = id; render(); });
    var modeRow = tabs(t.modeLabel, cfg.modes, mode, function (id) { mode = id; render(); });
    controls.appendChild(companyRow);
    controls.appendChild(modeRow);
    function select(row, id) {
      row.querySelectorAll('.pv-tab').forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-id') === id ? 'true' : 'false'); });
    }
    function disable(row, test) {
      row.querySelectorAll('.pv-tab').forEach(function (b) { b.disabled = test(b.getAttribute('data-id')); });
    }
    root.appendChild(controls);
    root.appendChild(h('p', 'pv-src', t.src));

    function render() {
      if (cfg.unavailable && cfg.unavailable(company, mode)) { mode = 'api'; select(modeRow, mode); }
      if (cfg.unavailable) {
        disable(modeRow, function (m) { return cfg.unavailable(company, m); });
        disable(companyRow, function () { return mode === 'local'; });
      }
      var r = cfg.resolve(company, mode);
      list.textContent = '';
      var sl = mode === 'local' ? t.local : t.server;
      Array.prototype.forEach.call(serverText.childNodes, function (n, i) { n.textContent = sl[i] || ''; });
      root.setAttribute('data-mode', mode);
      NODES.forEach(function (k) {
        var v = r[k];
        var label = k === 'human' ? t.human[v.s] : t.state[v.s];
        var svgLabel = k === 'human' ? ((t.humanSvg && t.humanSvg[v.s]) || label) : (t.stateSvg[v.s] || label);
        if (parts[k]) { parts[k].g.setAttribute('data-state', v.s); parts[k].st.textContent = svgLabel; }
        var dt = h('dt', 'pv-dt');
        dt.setAttribute('data-state', v.s);
        dt.appendChild(h('span', 'pv-dt-name', t.nodes[k]));
        dt.appendChild(h('span', 'pv-dt-state', label));
        list.appendChild(dt);
        list.appendChild(h('dd', 'pv-dd', v[lang]));
      });
      note.textContent = r.note ? r.note[lang] : '';
      note.hidden = !r.note;
      root.setAttribute('data-company', company);
    }
    render();
  }

  /* ---- Opt-out steps ---- */
  function step(ja, en, kind) { return { ja: ja, en: en, kind: kind || 'menu' }; }
  var OPT = {
    chatgpt: {
      name: 'ChatGPT',
      where: { ja: 'chatgpt.com（ウェブ）', en: 'chatgpt.com (web)' },
      steps: [
        step('設定', 'Settings'),
        step('データコントロール', 'Data controls'),
        step('すべての人のためにモデルを改善する', 'Improve the model for everyone', 'toggle'),
        step('完了', 'Done', 'button')
      ],
      first: { ja: '左下のアカウント名（プロフィール）を押して、メニューを開く。', en: 'Click your account name (profile) at the bottom left to open the menu.' },
      mobile: { ja: 'スマホのアプリ：サイドバー → プロフィールのアイコン → 「データコントロール」 → スイッチをオフ。', en: 'Mobile app: sidebar → profile icon → Data controls → switch it off.' },
      extra: { ja: '同じアカウントのウェブとアプリ、Codexにもまとめて反映される。Free・Plus・Proでは初期設定がオン。日本語のヘルプには「すべてのユーザー向けにモデルを改善する」という表記も残っている。', en: 'The change applies to the web, the apps and Codex on the same account. It is on by default for Free, Plus and Pro.' }
    },
    claude: {
      name: 'Claude',
      where: { ja: 'claude.ai（ウェブ）', en: 'claude.ai (web)' },
      steps: [
        step('設定', 'Settings'),
        step('プライバシー', 'Privacy'),
        step('AIモデルの改善を支援する', 'Help improve our AI models', 'toggle')
      ],
      first: { ja: '左下の自分の名前を押して、メニューを開く。', en: 'Click your name at the bottom left to open the menu.' },
      mobile: { ja: 'スマホのアプリも同じ順番：設定 → プライバシー → スイッチをオフ。', en: 'Mobile apps follow the same order: Settings → Privacy → switch it off.' },
      extra: { ja: 'Free・Pro・Maxと、個人のアカウントで使うClaude Codeが対象。日本語の画面では「AI モデルの改善に協力する」と表示されることもある。', en: 'This covers Free, Pro and Max, and Claude Code used with a personal account.' }
    },
    gemini: {
      name: 'Gemini',
      where: { ja: 'gemini.google.com（ウェブ）', en: 'gemini.google.com (web)' },
      steps: [
        step('設定とヘルプ', 'Settings & help'),
        step('アクティビティ', 'Activity'),
        step('オン', 'On', 'button'),
        step('オフにする', 'Turn off', 'toggle')
      ],
      first: { ja: 'サイドバーにある「設定とヘルプ」を開く。', en: 'Open Settings & help in the sidebar.' },
      mobile: { ja: '過去の分も消したいときは、最後に「オフにしてアクティビティを削除」を選ぶ。', en: 'To also delete past activity, choose Turn off and delete activity at the last step.' },
      extra: { ja: '音声とGemini Liveの動画・画面共有を改善に使う設定は別にある（こちらは初期設定でオフ）。オフにしても会話は最長72時間保持される。', en: 'There is a separate setting for using audio and Gemini Live video and screen shares (off by default). Even with Keep Activity off, chats are kept for up to 72 hours.' }
    },
    grok: {
      name: 'Grok',
      where: { ja: 'grok.com（ウェブ）', en: 'grok.com (web)' },
      steps: [
        step('Settings', 'Settings'),
        step('Data', 'Data'),
        step('Improve the Model', 'Improve the Model', 'toggle')
      ],
      first: { ja: '設定（Settings）を開く。公式のヘルプは英語の名前だけを示している。', en: 'Open Settings.' },
      mobile: { ja: 'スマホのアプリ：Settings → Data Controls → 「Improve the model」をオフ。X の中のGrokは別の設定：設定とプライバシー → プライバシーと安全 → データ共有とカスタマイズ → Grokとサードパーティコラボレーター。', en: 'Mobile app: Settings → Data Controls → turn off Improve the model. Grok inside X has its own setting: Settings and privacy → Privacy and safety → Data sharing and personalization → Grok & Third-party Collaborators.' },
      extra: { ja: 'ログインせずに使うと、オプトアウトの項目が出ないことがある（EU・英国以外）。', en: 'If you use Grok without logging in (outside the EU and UK), you may not see an opt-out option.' }
    }
  };

  function initOptout(root) {
    var lang = root.getAttribute('data-lang') === 'en' ? 'en' : 'ja';
    var company = 'chatgpt', timers = [];
    root.textContent = '';
    var top = tabs(lang === 'ja' ? 'サービス' : 'Service', COMPANIES.map(function (c) { return { id: c, label: OPT[c].name }; }), company, function (id) { company = id; render(); });
    top.classList.add('pv-tabrow-top');
    root.appendChild(top);
    var panel = h('div', 'pv-opt-panel');
    panel.setAttribute('aria-live', 'polite');
    root.appendChild(panel);
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function render() {
      timers.forEach(clearTimeout); timers = [];
      var d = OPT[company];
      panel.textContent = '';
      var head = h('p', 'pv-opt-where');
      head.appendChild(h('strong', null, d.where[lang]));
      head.appendChild(document.createTextNode(' ' + d.first[lang]));
      panel.appendChild(head);
      var ol = h('ol', 'pv-steps');
      d.steps.forEach(function (st, i) {
        var li = h('li', 'pv-step');
        li.setAttribute('data-kind', st.kind);
        var screen = h('div', 'pv-screen');
        var bar = h('div', 'pv-screen-bar');
        bar.appendChild(h('span')); bar.appendChild(h('span')); bar.appendChild(h('span'));
        screen.appendChild(bar);
        var body = h('div', 'pv-screen-body');
        var primary = lang === 'ja' ? st.ja : st.en;
        if (st.kind === 'toggle') {
          var row = h('div', 'pv-toggle-row');
          row.appendChild(h('span', 'pv-toggle-label', primary));
          var sw = h('span', 'pv-switch');
          sw.appendChild(h('span', 'pv-knob'));
          row.appendChild(sw);
          body.appendChild(row);
        } else {
          body.appendChild(h('span', st.kind === 'button' ? 'pv-btn' : 'pv-menu', primary));
        }
        screen.appendChild(body);
        li.appendChild(h('span', 'pv-step-no', String(i + 1)));
        li.appendChild(screen);
        var labels = h('p', 'pv-step-labels');
        if (lang === 'ja') {
          var a = h('span', null, '日本語の画面：「' + st.ja + '」');
          var b = h('span', null, '英語の画面：' + st.en);
          if (st.kind === 'toggle') { a.appendChild(document.createTextNode('　→ オフ')); b.appendChild(document.createTextNode('　→ オフ')); }
          labels.appendChild(a); labels.appendChild(b);
        } else if (st.kind === 'toggle') {
          labels.appendChild(h('span', null, 'Switch it off.'));
        }
        li.appendChild(labels);
        ol.appendChild(li);
      });
      panel.appendChild(ol);
      panel.appendChild(h('p', 'pv-opt-mobile', d.mobile[lang]));
      panel.appendChild(h('p', 'pv-opt-extra', d.extra[lang]));

      var items = ol.children;
      if (reduce) { Array.prototype.forEach.call(items, function (li) { li.classList.add('is-in', 'is-done'); }); return; }
      Array.prototype.forEach.call(items, function (li, i) {
        timers.push(setTimeout(function () { li.classList.add('is-in'); }, 120 + i * 260));
        timers.push(setTimeout(function () { li.classList.add('is-done'); }, 700 + items.length * 260));
      });
    }
    render();
  }


  /* ---- Writing-speed demo ---- */
  function initSpeed(root) {
    var en = root.getAttribute('data-lang') === 'en';
    var text = en
      ? 'The interviewee describes moving to Tokyo for work and how, at first, she spoke to no one at the office. Over the following months she began to eat lunch with a colleague from the same prefecture, and this, she says, was when the city started to feel like hers.'
      : '語り手は、仕事のために東京に移ったころ、職場で誰とも話さなかったと振り返る。数か月たって、同じ県の出身の同僚と昼食をとるようになり、そのころから東京が自分の街だと感じられるようになった、と語っている。';
    var ttft = root.getAttribute('data-mode') === 'ttft';
    // Measured figures: MacStories (Viticci, 2026), Qwen3.8 27B, 4-bit. RTX 5090 = GGUF Q4_K_M in LM Studio; M5 Ultra = MLX.
    var scenarios = ttft ? [
      { id: 'short', label: en ? 'About 6,000 tokens in' : '入力 約6,000トークン', scale: 1,
        rows: [{ name: 'RTX 5090', spec: en ? '32GB, 1,792GB/s' : '32GB・1,792GB/s', wait: 2.0, rate: 59 },
               { name: 'Mac Studio (M5 Ultra)', spec: en ? '256GB, 1.2TB/s' : '256GB・1.2TB/s', wait: 4.0, rate: 48 }] },
      { id: 'long', label: en ? 'About 63,000 tokens in' : '入力 約63,000トークン', scale: 0.1,
        rows: [{ name: 'RTX 5090', spec: en ? '32GB, 1,792GB/s' : '32GB・1,792GB/s', wait: 26.4, rate: 49.6 },
               { name: 'Mac Studio (M5 Ultra)', spec: en ? '256GB, 1.2TB/s' : '256GB・1.2TB/s', wait: 42.8, rate: 38.9 }] },
      { id: 'spill', label: en ? 'About 64,000 tokens, RTX 5090 overflowing' : '約64,000トークン・RTX 5090があふれる', scale: 1,
        intro: en ? 'Measured writing speed when the RTX 5090\u2019s working area no longer fits in 32 GB and spills into main memory (Qwen3.8 27B, 4-bit). Reading time was not measured for this case, so only writing is shown, in real time.'
                  : 'RTX 5090の作業台が32GBに収まらず、本体のメモリにあふれた場合の書き出す速さの実測値（Qwen3.8 27B、4ビット）。この場合の読み込み時間は測られていないので、書き出しだけを実際の速さで再現している。',
        rows: [{ name: 'RTX 5090', spec: en ? '32GB, overflowing' : '32GB・あふれた状態', wait: 0, rate: 4.6 },
               { name: 'Mac Studio (M5 Ultra)', spec: en ? '256GB, 1.2TB/s' : '256GB・1.2TB/s', wait: 0, rate: 38.9 }] }
    ] : [
      { id: 'bw', scale: 1,
        rows: [{ name: 'Mac mini (M5 Pro)', spec: '307GB/s', wait: 0, rate: 17 },
               { name: 'RTX 5090', spec: '1,792GB/s', wait: 0, rate: 100 }] }
    ];
    var cur = scenarios[0], timer = null, started = false;
    root.textContent = '';
    var intro = h('p', 'pv-opt-where');
    root.appendChild(intro);
    if (ttft) {
      var tabRow = tabs(en ? 'Input' : '入力の長さ', scenarios.map(function (x) { return { id: x.id, label: x.label }; }), cur.id, function (id) {
        cur = scenarios.filter(function (x) { return x.id === id; })[0]; build(); run();
      });
      root.appendChild(tabRow);
    }
    var box = h('div');
    root.appendChild(box);
    var btn = h('button', 'pv-tab pv-speed-btn', en ? 'Run again' : 'もう一度');
    btn.type = 'button';
    root.appendChild(btn);
    var outs = [];

    function build() {
      intro.textContent = cur.intro ? cur.intro : ttft
        ? (cur.scale < 1
            ? (en ? 'Measured time to first token and writing speed for Qwen3.8 27B (4-bit). The reading bar runs at 10× speed; the seconds shown are the real ones.'
                  : 'Qwen3.8 27B（4ビット）での実測値。読み込みの棒は10倍速で動かしている（表示の秒数は実際の値）。')
            : (en ? 'Measured time to first token and writing speed for Qwen3.8 27B (4-bit), shown in real time (one token shown as one character).'
                  : 'Qwen3.8 27B（4ビット）での、最初の一文字までの時間と書き出す速さの実測値。実際の速さで再現している（1トークンを1文字として表示）。'))
        : (en ? 'Writing speed with a model of about 18 GB, at the upper limit set by bandwidth (one token shown as one character).'
              : '約18GBのモデルで、帯域幅から決まる上限の速さで書き出した場合（1トークンを1文字として表示）。');
      box.textContent = '';
      var maxWait = Math.max.apply(null, cur.rows.map(function (r) { return r.wait; }));
      outs = cur.rows.map(function (r) {
        var row = h('div', 'pv-speed-row');
        var head = h('div', 'pv-speed-head');
        var left = h('span'); left.appendChild(h('strong', null, r.name)); left.appendChild(document.createTextNode(' ' + r.spec));
        head.appendChild(left);
        head.appendChild(h('span', null, (en ? 'about ' : '1秒に約') + r.rate + (en ? ' tokens/s' : 'トークン')));
        row.appendChild(head);
        var o = { rate: r.rate, wait: r.wait, maxWait: maxWait };
        if (r.wait) {
          var bar = h('div', 'pv-ttft-bar'); o.fill = h('span', 'pv-ttft-fill'); bar.appendChild(o.fill);
          o.label = h('span', 'pv-ttft-label', ''); bar.appendChild(o.label);
          row.appendChild(bar);
        }
        o.el = h('div', 'pv-speed-out');
        row.appendChild(o.el);
        box.appendChild(row);
        return o;
      });
    }
    function run() {
      if (timer) clearInterval(timer);
      var t0 = performance.now(), scale = cur.scale;
      timer = setInterval(function () {
        var real = (performance.now() - t0) / 1000, done = true;
        outs.forEach(function (o) {
          // The reading phase is compressed by "scale"; writing always runs in real time.
          var readReal = o.wait * scale;
          if (o.wait) {
            var simWait = Math.min(o.wait, real / scale);
            o.fill.style.width = (simWait / o.maxWait * 100) + '%';
            o.label.textContent = simWait < o.wait
              ? (en ? 'Reading… ' : '読み込み中… ') + simWait.toFixed(1) + (en ? ' s' : '秒')
              : (en ? 'First word after ' : '最初の一文字まで ') + o.wait.toFixed(1) + (en ? ' s' : '秒');
            if (simWait < o.wait) { o.el.textContent = ''; done = false; return; }
          }
          var n = Math.min(text.length, Math.floor((real - readReal) * o.rate));
          o.el.textContent = text.slice(0, n);
          if (n < text.length) done = false;
        });
        if (done) { clearInterval(timer); timer = null; }
      }, 30);
    }
    build();
    btn.addEventListener('click', run);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es, ob) {
        es.forEach(function (e) { if (e.isIntersecting && !started) { started = true; run(); ob.disconnect(); } });
      }, { threshold: 0.4 }).observe(root);
    } else run();
  }


  function boot() {
    document.querySelectorAll('.pv-flow').forEach(initFlow);
    document.querySelectorAll('.pv-optout').forEach(initOptout);
    document.querySelectorAll('.pv-speed').forEach(initSpeed);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
