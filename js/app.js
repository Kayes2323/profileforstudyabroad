/* Renders the portfolio from window.SITE (js/content.js). No dependencies, no build step. */
(function () {
  'use strict';
  var S = window.SITE, KEY = 'ak-lang', lang = 'en';
  try { var saved = localStorage.getItem(KEY); if (saved === 'bn' || saved === 'en') lang = saved; } catch (e) {}

  function $(q, r) { return (r || document).querySelector(q); }
  function $$(q, r) { return Array.prototype.slice.call((r || document).querySelectorAll(q)); }
  function pick(o, parts) { for (var i = 0; i < parts.length && o != null; i++) o = o[parts[i]]; return o; }
  function U(k) { var p = k.split('.'), v = pick(S.ui[lang], p); return v !== undefined ? v : pick(S.ui.en, p); }
  function L(o) { if (o == null) return null; if (typeof o === 'string') return o; return o[lang] || o.en || null; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var DIG = '০১২৩৪৫৬৭৮৯';
  function num(n) { var s = String(n); if (s.length < 2) s = '0' + s; return lang === 'bn' ? s.replace(/\d/g, function (d) { return DIG[d]; }) : s; }
  function bySlug(slug) { return S.projects.filter(function (p) { return p.slug === slug; })[0]; }
  var page = document.body.getAttribute('data-page');
  var home = page === 'home' ? '' : 'index.html';

  /* ---- static text bindings ---- */
  function bindStatic() {
    $$('[data-i]').forEach(function (el) { var v = U(el.getAttribute('data-i')); if (typeof v === 'string') el.textContent = v; });
    $$('[data-ih]').forEach(function (el) { var v = U(el.getAttribute('data-ih')); if (typeof v === 'string') el.innerHTML = v; });
    $$('[data-alt]').forEach(function (el) { el.setAttribute('alt', U('alt')[el.getAttribute('data-alt')] || ''); });
    $$('[data-aria]').forEach(function (el) { el.setAttribute('aria-label', U(el.getAttribute('data-aria'))); });
    $$('[data-src]').forEach(function (el) { var p = S.photos, k = el.getAttribute('data-src'); el.src = k.indexOf('skills') === 0 ? p.skills[+k.slice(-1)] : p[k]; });
    $$('.nv').forEach(function (a) { a.setAttribute('href', home + a.getAttribute('data-h')); });
    $('#len').setAttribute('aria-pressed', lang === 'en');
    $('#lbn').setAttribute('aria-pressed', lang === 'bn');
  }

  function setMeta(title, description) {
    document.title = title;
    var m = $('meta[name="description"]'); if (m) m.setAttribute('content', description);
    var og = $('meta[property="og:title"]'); if (og) og.setAttribute('content', title);
    var od = $('meta[property="og:description"]'); if (od) od.setAttribute('content', description);
  }

  /* ---- shared pieces ---- */
  function placeholder(cls, key) { return '<div class="ph ' + (cls || '') + '"><span>' + esc(U(key || 'phShot')) + '</span></div>'; }
  function logoTile(p, cls) {
    return '<div class="logo ' + (cls || '') + '" style="--lbg:' + esc(p.logoBg) + ';--lw:' + (p.logoW || 560) + 'px"><img src="' + esc(p.logo) + '" alt="' + esc(p.name) + ' logo" loading="lazy"></div>';
  }
  function shotImg(s, p, cls) { return '<div class="pic ' + cls + '"' + (s.ar ? ' style="--ar:' + s.ar + '"' : '') + '><img src="' + esc(s.src) + '" alt="' + esc(L(s.alt) || p.name) + '" loading="lazy"></div>'; }
  function linkBtns(p) {
    var out = [];
    if (p.links.demo) out.push('<a class="btn" href="' + esc(p.links.demo) + '" target="_blank" rel="noopener">' + esc(U('liveLink')) + '</a>');
    if (p.links.repo) out.push('<a class="btn o" href="' + esc(p.links.repo) + '" target="_blank" rel="noopener">' + esc(U('codeLink')) + '</a>');
    return out.length ? '<div class="btns">' + out.join('') + '</div>' : '';
  }

  /* ---- home ---- */
  function renderHome() {
    $('#skl').innerHTML = U('skills').map(function (s) {
      return '<div><div class="dots"><i></i><i></i><i></i></div><h3>' + esc(s[0]) + '</h3><div class="t">' + esc(s[1]) + '</div></div>';
    }).join('');
    $('#pnames').innerHTML = S.projects.map(function (p) { return '<a href="#pj-' + p.slug + '">' + esc(p.name) + '</a>'; }).join('');

    // project index: first real screenshot on the left, all logos on the right
    var withShot = S.projects.filter(function (p) { return p.shots && p.shots.length; })[0];
    $('#idxl').innerHTML = withShot ? shotImg(withShot.shots[0], withShot, 'tall') : placeholder('tall');
    $('#idxr').innerHTML = '<div class="logos">' + S.projects.map(function (p) {
      return '<a href="#pj-' + p.slug + '" class="lk" aria-label="' + esc(p.name) + '">' + logoTile(p, 'sq') + '<span>' + esc(p.name) + '</span></a>';
    }).join('') + '</div>';

    $('#pj').innerHTML = S.projects.map(function (p, i) {
      var a = i % 2 === 0, hasShot = p.shots && p.shots.length;
      var portrait = hasShot && p.shots[0].ar && p.shots[0].ar < 0.9;
      var ph = hasShot ? p.shots.filter(function (s) { return s.ar && s.ar < 0.9; }).slice(0, 3) : [];
      var fill = ph.length && ph.length < 3 ? '<div class="logo fill" style="--lbg:' + esc(p.logoBg) + ';--lw:' + (p.logoW || 560) + 'px;grid-column:span ' + (3 - ph.length) + '"><img src="' + esc(p.logo) + '" alt="' + esc(p.name) + ' logo"></div>' : '';
      var main = !hasShot ? logoTile(p, 'm') : portrait
        ? '<div class="phones">' + ph.map(function (s) { return shotImg(s, p, ''); }).join('') + fill + '</div>'
        : shotImg(p.shots[0], p, 'm');
      var small = hasShot ? (fill ? '' : logoTile(p, 'sm')) : placeholder('sm', 'shotNeeded');
            var cat = L(p.category) || U('catPending');
      var chips = '<div class="chips"><span class="chip fill">' + esc(L(S.statusLabels[p.status])) + '</span><span class="chip">' + esc(cat) + '</span></div>' +
        '<div class="chips">' + (p.tech || []).map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>';
      var info = '<div class="col"><div class="t">' + chips + '<p>' + esc(L(p.summary) || U('cs.pending')) + '</p></div>' + linkBtns(p) +
        '<a class="more" href="project.html#' + p.slug + '">' + esc(U('caseLink')) + '</a>' + small + '</div>';
      return '<section class="slide pj ' + (a ? 'a' : 'b') + '" id="pj-' + p.slug + '">' +
        '<i class="bl ' + (a ? 'r' : 'pe') + '" style="--x:' + (a ? 74 : -8) + '%;--y:-8%;--s:26%"></i><i class="bl pk" style="--x:' + (a ? 90 : 60) + '%;--y:60%;--s:20%"></i>' +
        '<div class="hw"><h2 class="big">' + esc(p.name) + '</h2><span class="sc" aria-hidden="true">' + esc(U('pjScript')) + ' ' + num(i + 1) + '</span></div>' +
        '<div class="g">' + (a ? main + info : info + main) + '</div></section>';
    }).join('');
    renderContact();
  }

  var ICON = { github: '&lt;/&gt;', linkedin: 'in', facebook: 'f', instagram: 'ig', email: '@', whatsapp: 'wa' };
  function pill(key, label, v, cls) {
    var href = v.url, ext = href.indexOf('mailto:') === 0 ? '' : ' target="_blank" rel="noopener"';
    return '<a class="pill ' + (cls || '') + '" href="' + esc(href) + '"' + ext + '><i class="ic" aria-hidden="true">' + ICON[key] + '</i><span class="pl"><b>' + esc(label) + '</b><span>' + esc(v.label || U('waText')) + '</span></span></a>';
  }
  function renderContact() {
    var c = S.contact, parts = [];
    [['github', 'GitHub'], ['linkedin', 'LinkedIn'], ['facebook', 'Facebook'], ['instagram', 'Instagram'], ['email', U('mail')]].forEach(function (x) {
      parts.push(c[x[0]] ? pill(x[0], x[1], c[x[0]]) : '<div class="pill off"><i class="ic" aria-hidden="true">' + ICON[x[0]] + '</i><span class="pl"><b>' + esc(x[1]) + '</b><span>' + esc(U('tbp')) + '</span></span></div>');
    });
    if (c.whatsapp) parts.push(pill('whatsapp', 'WhatsApp', { url: c.whatsapp.url, label: U('waText') }, 'wa'));
    $('#cb').innerHTML = parts.join('');
    var soc = $('#soc');
    if (soc) soc.innerHTML = '<span>' + esc(U('findMe')) + '</span>' + ['linkedin', 'github', 'facebook', 'instagram'].filter(function (k) { return c[k]; }).map(function (k) {
      return '<a href="' + esc(c[k].url) + '" target="_blank" rel="noopener">' + esc(k === 'github' ? 'GitHub' : k === 'linkedin' ? 'LinkedIn' : k === 'facebook' ? 'Facebook' : 'Instagram') + '</a>';
    }).join('');
  }

  /* ---- case study ---- */
  function currentSlug() { var h = location.hash.replace('#', ''); return bySlug(h) ? h : S.projects[0].slug; }
  function featList(items, cls) {
    return '<ul>' + items.map(function (i) { return '<li>' + esc(L(i)) + ' <span class="lg ' + cls + '">' + esc(U('cs')[cls === 'i' ? 'legI' : cls === 'p' ? 'legP' : 'legC']) + '</span></li>'; }).join('') + '</ul>';
  }
  function renderProject() {
    var p = bySlug(currentSlug()), cs = U('cs'), pend = '<p class="pend">' + esc(cs.pending) + '</p>';
    function text(v) { var s = L(v); return s ? '<p>' + esc(s) + '</p>' : pend; }
    var feats = (p.implemented || []).length || (p.planned || []).length
      ? featList(p.implemented || [], 'i') + featList(p.planned || [], 'p') : pend;
    var tech = (p.tech || []).length ? '<div class="chips">' + p.tech.map(function (t) { return '<span class="chip fill">' + esc(t) + '</span>'; }).join('') + '</div>' : pend;
    var shots = (p.shots || []).length
      ? '<div class="shotgrid">' + p.shots.map(function (s) { return shotImg(s, p, ''); }).join('') + '</div>'
      : '<div class="shotgrid">' + placeholder('') + placeholder('') + '</div>';
    var links = [];
    if (p.links.demo) links.push('<a class="btn" href="' + esc(p.links.demo) + '" target="_blank" rel="noopener">' + esc(cs.demo) + '</a>');
    if (p.links.repo) links.push('<a class="btn o" href="' + esc(p.links.repo) + '" target="_blank" rel="noopener">' + esc(cs.repo) + '</a>');
    var rel = (p.related || []).map(bySlug).filter(Boolean).map(function (r) {
      return '<a class="lk" href="#' + r.slug + '">' + logoTile(r, 'sq') + '<span>' + esc(r.name) + '</span></a>';
    }).join('');
    var basis = (p.basis || []).length ? '<p class="basis"><b>' + esc(cs.basis) + ':</b> ' + p.basis.map(esc).join(' · ') + '</p>' : '';
    var bodies = [
      text(p.summary) + basis, text(p.problem), text(p.users), text(p.concept), feats, text(p.role), tech, shots, text(p.challenges),
      '<div class="chips"><span class="chip fill">' + esc(L(S.statusLabels[p.status])) + '</span></div>' + (L(p.limitations) ? text(p.limitations) : ''),
      links.length ? '<div class="btns">' + links.join('') + '</div><p class="basis">' + esc(cs.liveNote) + '</p>' : '<p class="pend">' + esc(cs.noLinks) + '</p>',
      rel ? '<div class="logos rel">' + rel + '</div>' : pend
    ];
    $('#csname').textContent = p.name;
    $('#csstatus').textContent = L(S.statusLabels[p.status]);
    $('#cscat').textContent = L(p.category) || U('catPending');
    $('#csaka').innerHTML = p.aka ? '<span class="chip">' + esc(cs.repoName) + ': ' + esc(p.aka) + '</span>' : '';
    $('#cslogo').innerHTML = logoTile(p, 'hd');
    $('#cslinks').innerHTML = links.join('');
    $('#toc').innerHTML = cs.sections.map(function (s, i) { return '<a href="#" data-k="s' + i + '">' + esc(s) + '</a>'; }).join('');
    $('#csbody').innerHTML = cs.sections.map(function (s, i) { return '<section class="blk" id="s' + i + '"><h2>' + esc(s) + '</h2>' + bodies[i] + '</section>'; }).join('');
    $$('#toc a').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); $('#' + a.getAttribute('data-k')).scrollIntoView(); }); });
    setMeta(p.name + ' | ' + (lang === 'bn' ? 'কেস স্টাডি' : 'Case study') + ' | ' + U('brand'), L(p.summary) || S.meta[lang].description);
  }

  /* ---- boot ---- */
  function render() {
    document.documentElement.lang = lang;
    bindStatic();
    if (page === 'home') { renderHome(); setMeta(S.meta[lang].title, S.meta[lang].description); }
    else if (page === 'project') { renderProject(); }
    else { setMeta(U('nf').head + ' | ' + U('brand'), S.meta[lang].description); }
  }
  function setLang(l) { lang = l; try { localStorage.setItem(KEY, l); } catch (e) {} render(); }
  $('#len').addEventListener('click', function () { setLang('en'); });
  $('#lbn').addEventListener('click', function () { setLang('bn'); });
  if (page === 'project') window.addEventListener('hashchange', function () { renderProject(); window.scrollTo(0, 0); });
  render();
})();
