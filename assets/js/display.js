// Display settings: text size, darker text, underlined links, less motion, buttons for the card rows.
// The choices are kept in localStorage and put on <html> as attributes; the styles are in reader.css.
// The script in the page head applies them before the first paint.
(() => {
  'use strict';
  const key = 'site-display';
  const root = document.documentElement;
  const toggle = document.querySelector('.display-toggle');
  const panel = document.getElementById('display-panel');
  if (!toggle || !panel) return;
  const flags = { contrast: 'data-high-contrast', underline: 'data-underline-links', motion: 'data-reduce-motion', cardnav: 'data-card-buttons' };
  const prefers = { contrast: '(prefers-contrast: more)', motion: '(prefers-reduced-motion: reduce)' };
  const system = name => Boolean(prefers[name] && window.matchMedia && matchMedia(prefers[name]).matches);
  const read = () => { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch (error) { return {}; } };
  const write = value => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) {} };
  const sizes = [...panel.querySelectorAll('[data-text-size]')];
  const checks = [...panel.querySelectorAll('[data-display]')];

  // Show the current state on the controls.
  function sync() {
    const size = root.getAttribute('data-text-size') || '';
    sizes.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.textSize === size)));
    checks.forEach(box => { box.checked = root.hasAttribute(flags[box.dataset.display]); });
  }
  // Tell the home page (title, card rows) that sizes may have changed.
  const announce = () => document.dispatchEvent(new CustomEvent('site-display'));

  sizes.forEach(button => button.addEventListener('click', () => {
    const size = button.dataset.textSize;
    if (size) root.setAttribute('data-text-size', size); else root.removeAttribute('data-text-size');
    const saved = read(); saved.text = size; write(saved);
    sync(); announce();
  }));
  checks.forEach(box => box.addEventListener('change', () => {
    const name = box.dataset.display;
    root.toggleAttribute(flags[name], box.checked);
    // Saved as true or false, so a choice made here also overrides the system setting.
    const saved = read(); saved[name] = box.checked; write(saved);
    announce();
  }));
  panel.querySelector('[data-display-reset]').addEventListener('click', () => {
    try { localStorage.removeItem(key); } catch (error) {}
    root.removeAttribute('data-text-size');
    Object.keys(flags).forEach(name => root.toggleAttribute(flags[name], system(name)));
    sync(); announce();
  });

  // The panel sits just under the button. The button moves with the header on the home page, so follow it.
  function place() {
    const box = panel.parentElement.getBoundingClientRect();
    panel.style.top = Math.round(toggle.getBoundingClientRect().bottom - box.top + 10) + 'px';
  }
  let queued = false;
  const follow = () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; if (!panel.hidden) place(); }); } };
  function open() {
    const menu = document.querySelector('.menu-toggle');
    if (menu && menu.getAttribute('aria-expanded') === 'true') menu.click();
    sync(); place();
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    addEventListener('scroll', follow, { passive: true });
    addEventListener('resize', follow);
  }
  function close(returnFocus) {
    if (panel.hidden) return;
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    removeEventListener('scroll', follow);
    removeEventListener('resize', follow);
    if (returnFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => { if (panel.hidden) open(); else close(false); });
  document.addEventListener('click', event => {
    if (panel.hidden || panel.contains(event.target) || toggle.contains(event.target)) return;
    close(false);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) close(true); });
  sync();
})();
