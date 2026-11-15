// Follow browser-exposed system preferences, without a separate settings panel.
(() => {
  'use strict';
  const root = document.documentElement;
  const preferences = {
    'data-high-contrast': '(prefers-contrast: more), (forced-colors: active)',
    'data-reduce-motion': '(prefers-reduced-motion: reduce)',
    'data-reduce-transparency': '(prefers-reduced-transparency: reduce)'
  };
  Object.entries(preferences).forEach(([attribute, query]) => {
    const media = window.matchMedia(query);
    const sync = () => {
      root.toggleAttribute(attribute, media.matches);
      if (attribute === 'data-high-contrast') root.toggleAttribute('data-underline-links', media.matches);
      document.dispatchEvent(new CustomEvent('site-display'));
    };
    sync();
    media.addEventListener('change', sync);
  });
  // Observe actual font metrics: browser default font size and text-only zoom can
  // change without a viewport resize. Do not replace the user's font-size choice.
  const ready = () => {
    const probe = document.createElement('span');
    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText = 'position:absolute;width:1rem;height:1rem;visibility:hidden;pointer-events:none';
    document.body.append(probe);
    const sync = () => {
      root.toggleAttribute('data-large-text', parseFloat(getComputedStyle(root).fontSize) >= 20);
      document.dispatchEvent(new CustomEvent('site-display'));
    };
    new ResizeObserver(sync).observe(probe);
    sync();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once:true});
  else ready();
})();
