// Manual display settings override defaults; reset resumes following the system.
(() => {
  'use strict';
  const root = document.documentElement;
  const key = 'site-display';
  const flags = {contrast:'data-high-contrast', underline:'data-underline-links', motion:'data-reduce-motion'};
  const media = {
    contrast: matchMedia('(prefers-contrast: more)'),
    forced: matchMedia('(forced-colors: active)'),
    motion: matchMedia('(prefers-reduced-motion: reduce)'),
    transparency: matchMedia('(prefers-reduced-transparency: reduce)')
  };
  let saved = {};
  try { const value = JSON.parse(localStorage.getItem(key)); if (value && typeof value === 'object') saved = value; } catch (error) {}
  let syncControls = () => {};
  const announce = () => document.dispatchEvent(new CustomEvent('site-display'));
  function apply() {
    const contrast = media.forced.matches || (saved.contrast ?? media.contrast.matches);
    root.toggleAttribute(flags.contrast, contrast);
    root.toggleAttribute(flags.underline, saved.underline ?? contrast);
    root.toggleAttribute(flags.motion, saved.motion ?? media.motion.matches);
    root.toggleAttribute('data-reduce-transparency', media.transparency.matches);
    root.removeAttribute('data-card-buttons');
    if (saved.text === 'l' || saved.text === 'xl') root.setAttribute('data-text-size', saved.text);
    else root.removeAttribute('data-text-size');
    root.toggleAttribute('data-large-text', parseFloat(getComputedStyle(root).fontSize) >= 20);
    syncControls(); announce();
  }
  function persist() { try { localStorage.setItem(key, JSON.stringify(saved)); } catch (error) {} }
  Object.values(media).forEach(query => query.addEventListener('change', apply));
  apply();
  function ready() {
    const toggle = document.querySelector('.display-toggle');
    const panel = document.getElementById('display-panel');
    const menu = document.querySelector('.menu-toggle');
    if (!toggle || !panel) return;
    const sizes = [...panel.querySelectorAll('[data-text-size]')];
    const checks = [...panel.querySelectorAll('[data-display]')];
    syncControls = () => {
      sizes.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.textSize === (root.getAttribute('data-text-size') || ''))));
      checks.forEach(box => { box.checked = root.hasAttribute(flags[box.dataset.display]); });
    };
    sizes.forEach(button => button.addEventListener('click', () => { saved.text = button.dataset.textSize; persist(); apply(); }));
    checks.forEach(box => box.addEventListener('change', () => { saved[box.dataset.display] = box.checked; persist(); apply(); }));
    panel.querySelector('[data-display-reset]').addEventListener('click', () => {
      saved = {}; try { localStorage.removeItem(key); } catch (error) {} apply();
    });
    function place() {
      if (root.hasAttribute('data-large-text')) { panel.style.top = ''; return; }
      const parent = panel.parentElement.getBoundingClientRect();
      panel.style.top = Math.round(toggle.getBoundingClientRect().bottom - parent.top + 8) + 'px';
    }
    function close(returnFocus) {
      panel.hidden = true; toggle.setAttribute('aria-expanded', 'false');
      if (returnFocus) toggle.focus();
    }
    toggle.addEventListener('click', () => {
      if (!panel.hidden) { close(false); return; }
      if (menu?.getAttribute('aria-expanded') === 'true') menu.click();
      syncControls(); panel.hidden = false; place(); toggle.setAttribute('aria-expanded', 'true');
    });
    document.addEventListener('click', event => {
      if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) close(false);
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) close(true); });
    let queued = false;
    function follow() {
      if (queued || panel.hidden) return;
      queued = true; requestAnimationFrame(() => { queued = false; if (!panel.hidden) place(); });
    }
    addEventListener('scroll', follow, {passive:true}); addEventListener('resize', follow);
    document.addEventListener('site-display', follow);
    const probe = document.createElement('span');
    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText = 'position:absolute;width:1rem;height:1rem;visibility:hidden;pointer-events:none';
    document.body.append(probe);
    new ResizeObserver(() => {
      root.toggleAttribute('data-large-text', parseFloat(getComputedStyle(root).fontSize) >= 20);
      announce();
    }).observe(probe);
    syncControls();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once:true});
  else ready();
})();
