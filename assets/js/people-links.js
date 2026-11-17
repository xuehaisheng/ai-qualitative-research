/* Link the first mention of each person in a note or term page to their card in the people section of the AI literacy page. */
(function () {
  var data = document.getElementById('people-index');
  if (!data) return;
  var key = data.getAttribute('data-key'), kind = data.getAttribute('data-kind'), base = data.getAttribute('data-base');
  var people;
  try { people = JSON.parse(data.textContent); } catch (e) { return; }
  // Only people that the people list records as appearing on this page.
  people = people.filter(function (p) { return (p[kind] || []).indexOf(key) !== -1; });
  if (!people.length) return;

  var SKIP = 'a, h1, h2, h3, h4, code, pre, script, style, figcaption, .pv-widget, .pv-visual, .wiki-sources, .people-skip';
  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  // Text after a references heading (参考文献 / References / 出典 / Sources) is left alone.
  function cutOff(section) {
    var heads = section.querySelectorAll('h2');
    for (var i = 0; i < heads.length; i++) {
      if (/^(参考文献|References|出典|Sources)$/.test(heads[i].textContent.trim())) return heads[i];
    }
    return null;
  }

  function patterns(p, en) {
    if (!en) return [p.ja];
    var full = p.en || '';
    var list = [full];
    if (/ et al\.?$/.test(full)) {
      // "Jowsey et al." is also written "Jowsey et al. (2025)" or just "Jowsey".
      list.push(full.replace(/ et al\.?$/, ''));
    } else if (/ & /.test(full)) {
      // "Braun & Clarke" is also written "Braun and Clarke".
      list.push(full.replace(' & ', ' and '));
    } else {
      // Also match the family name alone ("Hinton").
      var parts = full.split(' ');
      if (parts.length > 1) list.push(parts[parts.length - 1]);
    }
    return list.filter(Boolean);
  }

  function linkIn(section, en) {
    var stop = cutOff(section);
    people.forEach(function (p) {
      var pats = patterns(p, en);
      var re = new RegExp(en ? '\\b(' + pats.map(escapeRe).join('|') + ')(?![\\w])' : '(' + pats.map(escapeRe).join('|') + ')');
      var walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          if (n.parentElement.closest(SKIP)) return NodeFilter.FILTER_REJECT;
          if (stop && (stop.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      var node;
      while ((node = walker.nextNode())) {
        var m = re.exec(node.nodeValue);
        if (!m) continue;
        var after = node.splitText(m.index);
        after.splitText(m[0].length);
        var a = document.createElement('a');
        a.className = 'person-ref';
        a.href = base + '#person-' + p.id;
        a.title = en ? 'People: ' + p.en : '人物：' + p.ja;
        a.textContent = after.nodeValue;
        after.parentNode.replaceChild(a, after);
        break; // first mention only
      }
    });
  }

  function run() {
    document.querySelectorAll('.post-body > .lang-ja').forEach(function (s) { linkIn(s, false); });
    document.querySelectorAll('.post-body > .lang-en').forEach(function (s) { linkIn(s, true); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
