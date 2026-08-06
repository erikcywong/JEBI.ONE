/* ============================================================
 全咖啡产业链低碳经济购物中心 — 公共脚本 v2
 ============================================================ */

// ---------- Animated Counter ----------
function animateCounters() {
 document.querySelectorAll('[data-count]').forEach(el => {
 const target = parseFloat(el.dataset.count);
 const prefix = el.dataset.prefix || '';
 const suffix = el.dataset.suffix || '';
 const decimals = parseInt(el.dataset.decimals || '0');
 const duration = 2200;
 const start = performance.now();

 function update(now) {
 const elapsed = now - start;
 const progress = Math.min(elapsed / duration, 1);
 const eased = 1 - Math.pow(1 - progress, 4);
 const current = eased * target;
 const formatted = decimals > 0
 ? current.toFixed(decimals)
 : Math.floor(current).toLocaleString();
 el.textContent = prefix + formatted + suffix;
 if (progress < 1) requestAnimationFrame(update);
 }
 requestAnimationFrame(update);
 });
}

// ---------- Bar Animation ----------
function animateBars() {
 document.querySelectorAll('.hbar-fill, .cf-fill').forEach(el => {
 const w = el.style.width;
 el.style.width = '0%';
 requestAnimationFrame(() => {
 el.style.width = w;
 });
 });
}

// ---------- SVG Path Draw Animation ----------
function animateSVGPaths() {
 document.querySelectorAll('[data-animate-path]').forEach(el => {
 const len = el.getTotalLength();
 el.style.strokeDasharray = len;
 el.style.strokeDashoffset = len;
 el.getBoundingClientRect();
 el.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)';
 el.style.strokeDashoffset = '0';
 });
}

// ---------- Intersection Observer ----------
function initScrollAnimations() {
 const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.classList.add('animate-in');
 observer.unobserve(entry.target);
 }
 });
 }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

 document.querySelectorAll('.module-card, .news-card, .feature-card, .kpi, .cf-card, .ip-card, .product-card, .flywheel-card, .storage-cell, .panel').forEach(el => {
 observer.observe(el);
 });
}

// ---------- Active Nav ----------
function setActiveNav() {
 const current = window.location.pathname.split('/').pop() || 'index.html';
 document.querySelectorAll('.nav-link').forEach(link => {
 const href = link.getAttribute('href');
 if (href === current || (current === '' && href === 'index.html')) {
 link.classList.add('active');
 }
 });
}

// ---------- Carbon Refresh (simulated live data) ----------
function initCarbonRefresh() {
 const btn = document.querySelector('[data-refresh]');
 if (!btn) return;
 btn.addEventListener('click', () => {
 btn.style.transform = 'rotate(360deg)';
 btn.style.transition = 'transform 0.6s ease';
 setTimeout(() => { btn.style.transform = 'rotate(0deg)'; btn.style.transition = 'none'; }, 600);
 document.querySelectorAll('[data-live]').forEach(el => {
 const base = parseInt(el.dataset.live);
 const delta = Math.floor((Math.random() - 0.3) * 80);
 const updated = base + delta;
 el.textContent = updated.toLocaleString();
 el.style.transition = 'color 0.5s';
 el.style.color = 'var(--green-hi)';
 setTimeout(() => { el.style.color = ''; }, 800);
 });
 });
}

// ---------- Tab Switching ----------
function initTabs() {
 document.querySelectorAll('[data-tab-group]').forEach(group => {
 const tabs = group.querySelectorAll('[data-tab]');
 const panels = document.querySelectorAll(`[data-tab-panel="${group.dataset.tabGroup}"]`);
 tabs.forEach(tab => {
 tab.addEventListener('click', () => {
 tabs.forEach(t => t.classList.remove('active'));
 tab.classList.add('active');
 const target = tab.dataset.tab;
 panels.forEach(p => {
 p.style.display = p.dataset.tabPanel === group.dataset.tabGroup && p.dataset.tabId === target ? '' : 'none';
 });
 });
 });
 });
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
 setActiveNav();
 initScrollAnimations();
 animateCounters();
 animateBars();
 animateSVGPaths();
 initCarbonRefresh();
 initTabs();
});
