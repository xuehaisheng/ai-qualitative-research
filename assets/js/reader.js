(() => {
  'use strict';
  const normalize = value => String(value || '').normalize('NFKC').toLocaleLowerCase().trim();
  const matches = (text, query) => normalize(query).split(/\s+/).filter(Boolean).every(word => normalize(text).includes(word));
  const toast = message => {
    const target = document.querySelector('[data-reader-status]');
    if (target) target.textContent = message;
  };
  async function copyText(value, button) {
    const original = button.textContent;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const field = document.createElement('textarea');
        field.value = value;
        field.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.append(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Copy unavailable');
      }
      button.textContent = 'コピーしました';
      toast('コピーしました。');
      setTimeout(() => { button.textContent = original; }, 1800);
    } catch {
      toast('コピーできませんでした。下の引用情報を選択してコピーしてください。');
    }
  }
  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const dataElement = document.getElementById('paper-data');
  if (dataElement) {
    const papers = JSON.parse(dataElement.textContent);
    const byId = new Map(papers.map(p => [p.id, p]));
    const input = document.getElementById('paper-search');
    const group = document.getElementById('paper-group-filter');
    const topic = document.getElementById('paper-topic');
    const sort = document.getElementById('paper-sort');
    const items = [...document.querySelectorAll('.paper-item')];
    const sections = [...document.querySelectorAll('.paper-group')];
    const query = new URLSearchParams(location.search);
    if (query.has('q')) input.value = query.get('q');
    if ([...group.options].some(o => o.value === query.get('group'))) group.value = query.get('group');
    if ([...topic.options].some(o => o.value === query.get('topic'))) topic.value = query.get('topic');
    if ([...sort.options].some(o => o.value === query.get('sort'))) sort.value = query.get('sort');
    function apply(updateURL = true) {
      let count = 0;
      items.forEach(item => {
        const p = byId.get(item.id);
        const visible = matches([p.title, p.title_ja, p.apa, p.summary, ...p.themes].join(' '), input.value)
          && (!group.value || p.stance === group.value)
          && (!topic.value || p.themes.includes(topic.value));
        item.hidden = !visible;
        if (visible) count++;
        item.querySelectorAll('[data-tag]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.tag === topic.value)));
      });
      sections.forEach(section => {
        section.hidden = ![...section.querySelectorAll('.paper-item')].some(item => !item.hidden);
        const list = section.querySelector('.paper-list');
        const ordered = [...list.children].sort((a, b) => {
          const pa = byId.get(a.id), pb = byId.get(b.id);
          const author = pa.id.localeCompare(pb.id);
          return sort.value === 'year-desc' ? pb.year - pa.year || author : sort.value === 'year-asc' ? pa.year - pb.year || author : author;
        });
        ordered.forEach(item => list.append(item));
      });
      const status = document.getElementById('paper-count');
      const filtered = Boolean(input.value.trim() || group.value || topic.value);
      status.textContent = filtered ? `${count}件の文献が見つかりました（全${items.length}件）。` : `全${items.length}件の文献`;
      status.hidden = count === 0;
      document.getElementById('paper-empty').hidden = count > 0;
      document.querySelectorAll('[data-export-visible]').forEach(button => { button.disabled = count === 0; });
      if (updateURL && location.protocol !== 'file:') {
        const params = new URLSearchParams();
        if (input.value.trim()) params.set('q', input.value.trim());
        if (group.value) params.set('group', group.value);
        if (topic.value) params.set('topic', topic.value);
        if (sort.value !== 'author') params.set('sort', sort.value);
        const qs = params.toString();
        history.replaceState(null, '', `${location.pathname}${qs ? '?' + qs : ''}${location.hash}`);
      }
    }
    const clean = value => String(value || '').replace(/[\r\n]+/g, ' ').trim();
    function ris(p) {
      const b = p.bib;
      const lines = [b.journal === 'Times Higher Education' ? 'TY  - MGZN' : 'TY  - JOUR', `ID  - ${p.id}`, `TI  - ${clean(b.title)}`, `PY  - ${p.year}`];
      b.authors.filter(a => a !== 'others').forEach(a => lines.push(`AU  - ${clean(a)}`));
      if (b.journal) lines.push(`JO  - ${clean(b.journal)}`);
      if (b.volume) lines.push(`VL  - ${b.volume}`);
      if (b.issue) lines.push(`IS  - ${b.issue}`);
      if (b.pages) {
        const pages = b.pages.split(/[–-]/);
        lines.push(`SP  - ${pages[0]}`);
        if (pages[1]) lines.push(`EP  - ${pages[1]}`);
      }
      if (p.doi) { lines.push(`UR  - ${p.doi}`); if (p.doi.includes('doi.org/')) lines.push(`DO  - ${p.doi.split('doi.org/')[1]}`); }
      lines.push(`N1  - ${clean(p.apa)}`, 'ER  - ', '');
      return lines.join('\r\n');
    }
    function bibtex(p) {
      const escape = value => clean(value).replace(/\\/g, '\\textbackslash{}').replace(/[{}]/g, '\\$&');
      const b = p.bib;
      const fields = { title: b.title, author: b.authors.join(' and '), year: p.year, journal: b.journal, volume: b.volume, number: b.issue, pages: b.pages ? b.pages.replace(/–/g, '--') : '', doi: p.doi && p.doi.includes('doi.org/') ? p.doi.split('doi.org/')[1] : '', url: p.doi, note: p.apa };
      return `@article{${p.id},\n${Object.entries(fields).filter(([,v]) => v).map(([k,v]) => `  ${k} = {${escape(v)}}`).join(',\n')}\n}\n`;
    }
    [input, group, topic, sort].forEach(el => el.addEventListener(el === input ? 'input' : 'change', () => apply()));
    document.querySelectorAll('[data-reset-papers]').forEach(button => button.addEventListener('click', () => { input.value = ''; group.value = ''; topic.value = ''; sort.value = 'author'; apply(); input.focus(); }));
    document.querySelectorAll('[data-tag]').forEach(button => button.addEventListener('click', () => { topic.value = topic.value === button.dataset.tag ? '' : button.dataset.tag; apply(); }));
    document.querySelectorAll('[data-paper-action]').forEach(button => button.addEventListener('click', () => {
      const p = byId.get(button.dataset.paperId);
      if (button.dataset.paperAction === 'copy') copyText(p.apa + (p.doi ? ' ' + p.doi : ''), button);
      if (button.dataset.paperAction === 'link') copyText(`${location.origin}${location.pathname}#${p.id}`, button);
      if (button.dataset.paperAction === 'ris') download(`${p.id}.ris`, ris(p), 'application/x-research-info-systems;charset=utf-8');
      if (button.dataset.paperAction === 'bib') download(`${p.id}.bib`, bibtex(p), 'application/x-bibtex;charset=utf-8');
    }));
    document.querySelectorAll('[data-export-visible]').forEach(button => button.addEventListener('click', () => {
      const visible = [...document.querySelectorAll('.paper-item:not([hidden])')].map(item => byId.get(item.id));
      const isRIS = button.dataset.exportVisible === 'ris';
      download(`ai-qualitative-research.${isRIS ? 'ris' : 'bib'}`, visible.map(isRIS ? ris : bibtex).join('\n'), 'text/plain;charset=utf-8');
      toast('引用情報を書き出しました。');
    }));
    if (location.hash && byId.has(location.hash.slice(1))) {
      input.value = ''; group.value = ''; topic.value = '';
    }
    apply(false);
  }
  const noteInput = document.getElementById('note-search');
  if (noteInput) {
    const grid = document.querySelector('[data-note-grid]');
    const notes = [...grid.querySelectorAll('[data-note]')];
    const sort = document.getElementById('note-sort');
    let topic = '';
    function apply() {
      const ordered = [...notes].sort((a,b) => sort.value === 'updated' ? Number(b.dataset.date) - Number(a.dataset.date) || Number(a.dataset.order) - Number(b.dataset.order) : Number(a.dataset.order) - Number(b.dataset.order));
      ordered.forEach(note => { grid.append(note); note.hidden = !matches(note.dataset.search, noteInput.value) || Boolean(topic && note.dataset.topic !== topic); });
      const count = notes.filter(note => !note.hidden).length;
      const status = document.getElementById('note-count');
      status.textContent = '検索条件に合う記事を表示しています。';
      status.hidden = count === 0 || !(noteInput.value.trim() || topic);
      document.getElementById('note-empty').hidden = count > 0;
    }
    noteInput.addEventListener('input', apply); sort.addEventListener('change', apply);
    document.querySelectorAll('[data-note-topic]').forEach(button => button.addEventListener('click', () => {
      topic = button.dataset.noteTopic;
      document.querySelectorAll('[data-note-topic]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      apply();
    }));
    document.querySelector('[data-reset-notes]').addEventListener('click', () => {
      noteInput.value = ''; topic = '';
      document.querySelectorAll('[data-note-topic]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.noteTopic === '')));
      apply(); noteInput.focus();
    });
    apply();
  }
  const wikiInput = document.getElementById('wiki-search');
  if (wikiInput) {
    const entries = [...document.querySelectorAll('.wiki-item')];
    const categories = [...document.querySelectorAll('.wiki-cat')];
    const update = () => {
      entries.forEach(e => { e.hidden = !matches(e.dataset.search, wikiInput.value); });
      categories.forEach(c => { c.hidden = ![...c.querySelectorAll('.wiki-item')].some(e => !e.hidden); });
      const count = entries.filter(e => !e.hidden).length;
      const status = document.getElementById('wiki-count');
      status.textContent = '検索条件に合う用語を表示しています。';
      status.hidden = count === 0 || !wikiInput.value.trim();
      document.getElementById('wiki-empty').hidden = count > 0;
    };
    wikiInput.addEventListener('input', update);
    document.querySelector('[data-reset-wiki]').addEventListener('click', () => { wikiInput.value = ''; update(); wikiInput.focus(); });
    update();
  }
  const toc = document.querySelector('[data-reading-toc]');
  if (toc) {
    const headings = [...document.querySelectorAll('.post-body h2,.post-body h3')];
    const list = toc.querySelector('ol');
    headings.forEach((heading,index) => {
      if (!heading.id) heading.id = `section-${index + 1}`;
      const item = document.createElement('li');
      item.dataset.level = heading.tagName.slice(1);
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      item.append(link); list.append(item);
    });
    toc.hidden = headings.length < 2;
    const media = matchMedia('(min-width:821px)');
    toc.open = media.matches;
    media.addEventListener('change', () => { toc.open = media.matches; });
    list.addEventListener('click', e => { if (e.target.closest('a') && !media.matches) toc.open = false; });
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (!visible.length) return;
        list.querySelectorAll('a').forEach(a => a.removeAttribute('aria-current'));
        const current = [...list.querySelectorAll('a')].find(a => decodeURIComponent(a.hash.slice(1)) === visible[0].target.id);
        if (current) current.setAttribute('aria-current','location');
      }, { rootMargin: '-90px 0px -65% 0px' });
      headings.forEach(h => observer.observe(h));
    }
  }
  document.querySelectorAll('.desktop-nav a,.mobile-nav a').forEach(link => {
    if (link.pathname === location.pathname && !link.hash) link.setAttribute('aria-current','page');
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const panel = document.getElementById('mobile-panel');
      const toggle = document.querySelector('.menu-toggle');
      if (panel && !panel.hidden) { panel.hidden = true; toggle.setAttribute('aria-expanded','false'); toggle.focus(); }
    }
  });
})();
