const SITE_DATA = {"header":{"name":"Ratlami Caketown","logo":"assets/logo.png","bgImg":"","about":"📍Address:- Maratho Ka Vas, Near Top khana, RATLAM !","email":"","phone":"📞 93298 85363","address":"","whatsapp":"💬:- 93298 85363","instagram":"","mapLink":"https://maps.app.goo.gl/uCfpmyVh2wFXGVv97","links":"","bg":"#000000","color":"#ffffff","font":"Georgia, serif","hh":30,"logoW":30,"nameSize":16,"align":"left","onlyPage1":true,"floatInfo":false},"pages":{"root":{"id":"root","parent":null,"title":"Home","bg":"#ffffff","gap":12,"pad":12,"mode":"grid","boxes":[{"id":"bkwugae","kind":"card","child":"pdrz8d8","img":"assets/logo.png","badge":"","badgeSz":18,"label":"bento","price":"","w":80,"h":220,"fit":"cover","rad":0,"bw":1,"bc":"#333333","pad":6,"align":"center","ta":"center","mt":0,"mb":4,"ml":0,"mr":0,"font":"Georgia, serif","ls":15,"lc":"#111111","lm":"none","lb":"#ffffff","pf":"system-ui, sans-serif","ps":14,"pc":"#111111","pm":"none","pb":"#dcfce7"}],"bgImg":""},"pdrz8d8":{"id":"pdrz8d8","parent":"root","title":"bento","bg":"#ffffff","gap":12,"pad":12,"mode":"grid","boxes":[{"id":"biomn2e","kind":"card","child":"pp38eg7","img":"assets/Bento Cakes/1/1.png","badge":"","badgeSz":18,"label":"1","price":"","w":50,"h":155,"fit":"cover","rad":0,"bw":1,"bc":"#333333","pad":6,"align":"left","ta":"center","mt":0,"mb":4,"ml":0,"mr":0,"font":"Georgia, serif","ls":15,"lc":"#111111","lm":"none","lb":"#ffffff","pf":"system-ui, sans-serif","ps":14,"pc":"#111111","pm":"none","pb":"#dcfce7"}],"bgImg":""},"pp38eg7":{"id":"pp38eg7","parent":"pdrz8d8","title":"1","bg":"#ffffff","gap":12,"pad":12,"mode":"grid","boxes":[{"id":"bh31myb","kind":"slider","w":100,"align":"center","h":365,"fit":"cover","r":25,"imgs":["assets/Bento Cakes/1/1.png","assets/Bento Cakes/1/2.png","assets/Bento Cakes/1/IMG_20260509_104215.png"],"interval":0,"tick":false,"ticker":"","bg":"#111111","color":"#ffffff","spd":0,"mt":0,"mb":3,"ml":0,"mr":0},{"id":"bzxycle","kind":"text","w":100,"align":"left","ta":"center","text":"Love Heart Bento - ₹180","font":"Georgia, serif","size":20,"color":"#000000","bg":"transparent","mt":0,"mb":0,"ml":0,"mr":0},{"id":"b6mm8uj","kind":"text","w":100,"align":"center","ta":"center","text":"250gm, Vanilla Flavour, Custom Name Latter.","font":"Impact, sans-serif","size":13,"color":"#000000","bg":"transparent","mt":0,"mb":4,"ml":0,"mr":0},{"id":"b510vt2","kind":"text","w":100,"align":"center","ta":"center","text":"More Info Click Button 👇","font":"Impact, sans-serif","size":12,"color":"#000000","bg":"transparent","mt":0,"mb":-3,"ml":0,"mr":0},{"id":"b1a95on","kind":"button","w":100,"align":"center","text":"Order On Whatsapp","mt":4,"mb":0,"ml":0,"mr":0,"wa":{"on":true,"num":"9329885363","customMsg":"Love Heart Bento - ₹180","msgImg":"assets/Bento Cakes/1/1.png","text":"Order On Whatsapp","logo":false,"logoSize":30,"font":"\"Trebuchet MS\", sans-serif","size":16,"color":"#000000","bg":"#25d366","bgImg":"","bw":1,"bc":"#000000","w":53,"h":37,"r":25,"mt":0,"ml":0,"mr":0,"al":"center","msgLink":"https://drive.google.com/file/d/1G8co8aUWxJLT6X8K_Aod1_FU8xMagzm1/view?usp=drive_link"}}],"bgImg":"","detail":{"title":"","price":"","desc":"","cta":"","photos":[],"imgH":340,"fit":"cover","rad":0,"imgBw":0,"imgBc":"#222222","ta":"left","mt":6,"ml":0,"tf":"Georgia, serif","ts":22,"tc":"#111111","pf":"system-ui, sans-serif","ps":17,"pc":"#111111","pbg":"transparent","pmt":8,"df":"system-ui, sans-serif","ds":14,"dc":"#334155","dmt":10,"ctas":14,"ctac":"#111111","ctaa":"center","ctamt":14,"wa":{"on":true,"num":"","customMsg":"","msgImg":"","text":"Order on WhatsApp","logo":false,"logoSize":18,"font":"Georgia, serif","size":15,"color":"#111111","bg":"#fcecd2","bgImg":"","bw":1,"bc":"#111111","w":70,"h":44,"r":4,"mt":10,"ml":0,"mr":0,"al":"center"}}}}};
(function(D, app, edit) {
    let cur = 'root', sel = null, selMulti = [], open = false, tm = [];
    const WA_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/></svg>';
    const AL = {left: 'flex-start', center: 'center', right: 'flex-end'};
    const E = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const U = n => !n ? '' : (D.assets && D.assets[n]) ? D.assets[n] : 'assets/' + n.split('/').map(encodeURIComponent).join('/');
    const post = m => parent.postMessage(m, '*');
    const go = (id, np) => { if (edit) return post({t: 'nav', id}); if (!D.pages[id]) return; cur = id; open = false; if (!np) history.pushState({id}, ''); render(); scrollTo(0, 0); };
    const isSel = id => id === sel || selMulti.includes(id);

    function waNum(raw) {
      let d = String(raw || '').replace(/\D/g, '');
      if (d.startsWith('00')) d = d.slice(2);
      if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
      if (d.length === 10) d = '91' + d;
      return d;
    }

    function pill(t, f, sz, c, m, b, al) {
      const mode = m || 'none';
      const cls = mode === 'none' ? 'pill-plain' : 'pill ' + E(mode);
      const bg = mode === 'solid' ? ';background:' + E(b || 'transparent') : '';
      return `<div class="${cls}" style="font-family:${E(f)};font-size:${Number(sz || 14)}px;color:${E(c)};text-align:${E(al || 'center')}${bg}">${E(t)}</div>`;
    }

    function boxWrapStyle(b, gap) {
      const w = Number(b.w || 50);
      const g = Number(gap != null ? gap : 12);
      const widthCss = w >= 99 ? '100%' : w <= 51 && w >= 48 ? `calc(50% - ${(g / 2).toFixed(1)}px)` : `${w}%`;
      const ml = b.align === 'center' ? 'auto' : b.align === 'right' ? 'auto' : `${Number(b.ml || 0)}px`;
      const mr = b.align === 'center' ? 'auto' : b.align === 'left' ? `${Number(b.mr || 0)}px` : '0';
      return `width:${widthCss};margin-top:${Number(b.mt || 0)}px;margin-bottom:${Number(b.mb || 0)}px;margin-left:${ml};margin-right:${mr}`;
    }

    function info() {
      const h = D.header, L = [];
      const a = (href, t) => L.push(`<a class="il" href="${E(href)}" target="_blank" rel="noopener">${E(t)}</a>`);
      if (h.phone) a('tel:' + h.phone.replace(/\s/g, ''), 'Call: ' + h.phone);
      if (h.whatsapp) { const wn = waNum(h.whatsapp); if (wn) a('https://wa.me/' + wn, 'WhatsApp'); }
      if (h.instagram) a(/^https?:/.test(h.instagram) ? h.instagram : 'https://instagram.com/' + h.instagram.replace('@', ''), 'Instagram');
      if (h.email) a('mailto:' + h.email, 'Email: ' + h.email);
      if (h.mapLink) a(h.mapLink, 'Shop Map Location');
      (h.links || '').split('\n').forEach(l => { const [x, y] = l.split('|').map(s => s.trim()); if (x && y) a(y, x); });
      return `<aside class="info${open ? ' open' : ''}"><div class="ih">${h.logo ? `<img src="${U(h.logo)}" alt="">` : ''}<b>${E(h.name)}</b><button data-a="menu">X</button></div>${h.about ? `<p>${E(h.about)}</p>` : ''}${h.address ? `<p>${E(h.address)}</p>` : ''}${L.join('')}</aside>`;
    }

    function waPayload(w, titleText, priceText) {
      const num = waNum(w.num || D.header.whatsapp || D.header.phone || '');
      const t = titleText || '', p = priceText || '';
      const link = (w.msgLink || '').trim();
      let msg = (w.customMsg || '').trim();
      if (msg) {
        msg = msg.replace(/\{title\}/gi, t).replace(/\{price\}/gi, p);
        if (link) {
          if (/\{link\}/i.test(msg)) msg = msg.replace(/\{link\}/gi, link);
          else msg += '\nLink: ' + link;
        }
      } else if (link) {
        msg = (t ? 'Hi, I want to order: ' + t + (p ? ' (' + p + ')' : '') + '\n' : '') + 'Link: ' + link;
      } else {
        msg = 'Hi, I want to order: ' + t + (p ? ' (' + p + ')' : '');
      }
      return { num, msg };
    }

    function waBtn(w, titleText, priceText) {
      if (!w || !w.on) return '';
      const pl = waPayload(w, titleText, priceText);
      const sz = Number(w.logoSize || 18);
      const ic = w.logo ? `<span style="display:inline-flex;width:${sz}px;height:${sz}px;align-items:center;justify-content:center">${WA_SVG}</span>` : '';
      const bdw = Number(w.bw || 0);
      const bd = bdw > 0 ? `border:${bdw}px solid ${E(w.bc || '#000')};` : 'border:none;';
      const bg = w.bgImg ? `url('${U(w.bgImg)}') center/cover no-repeat` : E(w.bg || '#16a34a');
      const waUrl = pl.num ? `https://wa.me/${pl.num}?text=${encodeURIComponent(pl.msg)}` : '';
      const hrefAttr = waUrl ? `href="${E(waUrl)}"` : '';
      return `<a class="wa" ${hrefAttr} target="_blank" rel="noopener" style="align-self:${AL[w.al] || 'center'};margin-top:${Number(w.mt || 0)}px;margin-left:${Number(w.ml || 0)}px;margin-right:${Number(w.mr || 0)}px;width:${Number(w.w || 75)}%;height:${Number(w.h || 44)}px;border-radius:${Number(w.r || 6)}px;font-family:${E(w.font || 'inherit')};font-size:${Number(w.size || 15)}px;color:${E(w.color || '#fff')};background:${bg};${bd}">${ic}<span>${E(w.text || 'Order on WhatsApp')}</span></a>`;
    }

    function detail(d) {
      const w = d.wa || {}, ph = (d.photos || []).filter(Boolean), multi = ph.length > 1;
      const descTxt = (d.desc || '').trim(), ctaTxt = (d.cta || '').trim();
      const empty = edit && !ph.length && !d.title && !d.price && !descTxt && !ctaTxt && !w.on;
      const fit = d.fit || 'cover';
      const bdw = Number(d.imgBw || 0);
      const imgBd = bdw > 0 ? `border:${bdw}px solid ${E(d.imgBc || '#000')};` : '';
      return `<div class="det">${empty ? '<div class="empty">Empty detail page — add photos, title, price, description and order button from the Edit tab</div>' : ''}` +
        (ph.length ? `<div class="sl"><div class="tr" style="height:${Number(d.imgH || 340)}px">${ph.map(x => `<img src="${U(x)}" draggable="false" style="object-fit:${E(fit)};border-radius:${Number(d.rad || 0)}px;${imgBd}" alt="${E(d.title)}">`).join('')}</div>` +
        (multi ? `<div class="dots">${ph.map((_, i) => `<i class="dot${i ? '' : ' on'}" data-a="dot" data-i="${i}"></i>`).join('')}</div>` : '') + '</div>' : '') +
        `<div class="det-txt" style="margin-top:${Number(d.mt || 0)}px;margin-left:${Number(d.ml || 0)}px;text-align:${E(d.ta || 'left')}">` +
        `${d.title ? `<h2 style="font-family:${E(d.tf)};font-size:${Number(d.ts || 22)}px;color:${E(d.tc)}">${E(d.title)}</h2>` : ''}` +
        `${d.price ? `<div class="price-wrap" style="margin-top:${Number(d.pmt || 8)}px"><span class="price" style="font-family:${E(d.pf)};font-size:${Number(d.ps || 17)}px;color:${E(d.pc)};background:${E(d.pbg || 'transparent')}">${E(d.price)}</span></div>` : ''}` +
        `${descTxt ? `<p class="desc" style="font-family:${E(d.df || d.tf)};font-size:${Number(d.ds || 14)}px;color:${E(d.dc || '#334155')};margin-top:${Number(d.dmt || 10)}px">${E(descTxt)}</p>` : ''}` +
        `${ctaTxt ? `<p class="cta-line" style="font-family:${E(d.df || d.tf)};font-size:${Number(d.ctas || 14)}px;color:${E(d.ctac || '#111')};text-align:${E(d.ctaa || 'center')};margin-top:${Number(d.ctamt || 14)}px">${E(ctaTxt)}</p>` : ''}</div>` +
        waBtn(w, d.title, d.price) + '</div>';
    }

    function renderBlock(b, i, gap) {
      const sCls = isSel(b.id) ? ' sel' : '';
      const dragAttr = edit ? `draggable="true" data-i="${i}"` : '';
      if (b.kind === 'banner') {
        const bg = b.bgImg ? `url('${U(b.bgImg)}') center/cover no-repeat` : E(b.bg || '#4a2208');
        return `<div class="blk blk-banner${sCls}" ${dragAttr} data-b="${b.id}" style="width:100%;min-height:${Number(b.h || 110)}px;margin-top:${Number(b.mt || 0)}px;margin-bottom:${Number(b.mb || 0)}px;background:${bg};color:${E(b.color || '#fff')};font-family:${E(b.font)};font-size:${Number(b.size || 18)}px;border-radius:${Number(b.r || 0)}px;padding:${Number(b.pad || 16)}px;text-align:${E(b.ta || 'center')}">${b.text ? `<div>${E(b.text)}</div>` : ''}</div>`;
      }
      if (b.kind === 'section') {
        return `<div class="blk blk-sec${sCls}" ${dragAttr} data-b="${b.id}" style="width:100%;min-height:${Number(b.h || 56)}px;margin-top:${Number(b.mt || 8)}px;margin-bottom:${Number(b.mb || 8)}px;background:${E(b.bg || '#552509')};color:${E(b.color || '#ffffff')};font-family:${E(b.font)};font-size:${Number(b.size || 20)}px;padding:${Number(b.pad || 12)}px;text-align:${E(b.ta || 'center')};border-radius:${Number(b.r || 0)}px">${E(b.text || 'Section Title')}</div>`;
      }
      if (b.kind === 'slider' || b.type === 'custom') {
        const ph = (b.imgs || []).filter(Boolean), multi = ph.length > 1;
        return `<div class="blk blk-sl${sCls}" ${dragAttr} data-b="${b.id}" data-iv="${Number(b.interval || 0)}" style="${boxWrapStyle(b, gap)};border-radius:${Number(b.r || 0)}px">` +
          `<div class="sl"><div class="tr" style="height:${Number(b.h || 240)}px">${ph.length ? ph.map(x => `<img src="${U(x)}" draggable="false" style="object-fit:${E(b.fit || 'cover')};border-radius:${Number(b.r || 0)}px" alt="">`).join('') : '<div class="empty-ph">Add slider photos</div>'}</div>` +
          (multi ? `<div class="dots">${ph.map((_, idx) => `<i class="dot${idx ? '' : ' on'}" data-a="dot" data-i="${idx}"></i>`).join('')}</div>` : '') +
          `</div>${b.tick && b.ticker ? `<div class="mq" style="background:${E(b.bg || '#000')};color:${E(b.color || '#fff')}"><span style="animation-duration:${Number(b.spd || 12)}s">${E(b.ticker)}</span></div>` : ''}</div>`;
      }
      if (b.kind === 'title' || b.kind === 'price' || b.kind === 'text') {
        const txt = (b.text || '').trim();
        if (!txt && !edit) return '';
        const bg = b.bg && b.bg !== 'transparent' ? `;background:${E(b.bg)};padding:4px 8px;border-radius:6px` : '';
        const inner = txt ? `<div style="font-family:${E(b.font)};font-size:${Number(b.size || (b.kind === 'title' ? 20 : 14))}px;font-weight:${b.kind === 'title' ? 700 : b.kind === 'price' ? 700 : 400};color:${E(b.color || '#111')};text-align:${E(b.ta || 'center')};white-space:pre-line${bg}">${E(txt)}</div>` : '<small style="opacity:.45">[empty block]</small>';
        return `<div class="blk blk-txt${sCls}" ${dragAttr} data-b="${b.id}" style="${boxWrapStyle(b, gap)}">${inner}</div>`;
      }
      if (b.kind === 'button') {
        return `<div class="blk blk-btn${sCls}" ${dragAttr} data-b="${b.id}" style="${boxWrapStyle(b, gap)};display:flex;flex-direction:column">${waBtn(b.wa, b.text, '')}</div>`;
      }
      if (b.kind === 'divider') {
        return `<div class="blk blk-div${sCls}" ${dragAttr} data-b="${b.id}" style="width:100%;padding:${Number(b.mt || 8)}px 0 ${Number(b.mb || 8)}px"><div style="height:${Number(b.h || 1)}px;background:${E(b.color || '#cbd5e1')}"></div></div>`;
      }
      const bdw = Number(b.bw || 0);
      const imgStyle = `height:${Number(b.h || 165)}px;object-fit:${E(b.fit || 'cover')};border-radius:${Number(b.rad || 0)}px;${bdw > 0 ? `border:${bdw}px solid ${E(b.bc || '#222')};` : ''}`;
      const hasMeta = (b.label || '').trim() || (b.price || '').trim();
      return `<div class="card${sCls}" ${dragAttr} data-b="${b.id}" data-c="${b.child || ''}" style="${boxWrapStyle(b, gap)}">` +
        `${b.img ? `<div class="card-img-wrap" style="position:relative"><img src="${U(b.img)}" draggable="false" style="${imgStyle}" alt="${E(b.label)}">${b.badge ? `<span class="img-badge" style="font-size:${Number(b.badgeSz || 18)}px">${E(b.badge)}</span>` : ''}</div>` : ''}` +
        `${hasMeta ? `<div class="meta" style="padding:${Number(b.pad || 6)}px 2px">${(b.label || '').trim() ? pill(b.label, b.font, b.ls || 15, b.lc, b.lm, b.lb, b.ta || 'center') : ''}${(b.price || '').trim() ? pill(b.price, b.pf, b.ps || 14, b.pc, b.pm, b.pb, b.ta || 'center') : ''}</div>` : ''}</div>`;
    }

    function grid(p) {
      if (!p.boxes.length) return `<div class="empty">${edit ? 'Blank page — add blocks from the Insert tab' : 'Coming soon'}</div>`;
      const gap = Number(p.gap != null ? p.gap : 12);
      const pad = Number(p.pad != null ? p.pad : 12);
      return `<div class="grid" style="gap:${gap}px;padding:${pad}px">${p.boxes.map((b, i) => renderBlock(b, i, gap)).join('')}</div>`;
    }

    function bindSliders() {
      app.querySelectorAll('.sl').forEach(sl => {
        const tr = sl.querySelector('.tr'); if (!tr) return;
        const dots = [...sl.querySelectorAll('.dot')];
        let drag = 0, x0 = 0, s0 = 0;
        tr.onscroll = () => { if (!tr.clientWidth) return; const i = Math.round(tr.scrollLeft / tr.clientWidth); dots.forEach((o, j) => o.classList.toggle('on', i === j)); };
        tr.onpointerdown = e => { if (e.pointerType !== 'mouse') return; drag = 1; x0 = e.clientX; s0 = tr.scrollLeft; tr.style.scrollSnapType = 'none'; tr.setPointerCapture(e.pointerId); };
        tr.onpointermove = e => { if (drag) tr.scrollLeft = s0 - (e.clientX - x0); };
        tr.onpointerup = tr.onpointercancel = () => { if (!drag) return; drag = 0; const w = tr.clientWidth || 1; tr.scrollTo({left: Math.round(tr.scrollLeft / w) * w, behavior: 'smooth'}); setTimeout(() => tr.style.scrollSnapType = '', 320); };
        const parentBlk = sl.closest('.blk-sl');
        const iv = parentBlk ? Number(parentBlk.dataset.iv || 0) : 0;
        if (iv > 0 && dots.length > 1) {
          tm.push(setInterval(() => {
            const w = tr.clientWidth || 1;
            const next = (Math.round(tr.scrollLeft / w) + 1) % dots.length;
            tr.scrollTo({left: next * w, behavior: 'smooth'});
          }, iv * 1000));
        }
      });
    }

    function render() {
      if (!D) return;
      const h = D.header, p = D.pages[cur] || D.pages.root;
      const showHeader = h.onlyPage1 ? p.id === 'root' : true;
      const mainBg = p.bgImg ? `${E(p.bg || '#ffffff')} url('${U(p.bgImg)}') center/cover no-repeat` : E(p.bg || '#ffffff');
      app.innerHTML = (showHeader ? `<header class="hd" style="min-height:${Number(h.hh || 54)}px;background:${h.bgImg ? `url('${U(h.bgImg)}') center/cover no-repeat` : E(h.bg)};color:${E(h.color)};font-family:${E(h.font)}"><div class="brand" style="justify-content:${AL[h.align] || 'flex-start'}">${h.logo ? `<img style="width:${Number(h.logoW || 34)}px;height:${Number(h.logoW || 34)}px" src="${U(h.logo)}" alt="">` : ''}<span style="font-size:${Number(h.nameSize || 17)}px">${E(h.name)}</span></div><button class="menu" data-a="menu">&#9776;</button></header>${info()}` : `${info()}`) +
        `<main style="background:${mainBg}">${p.mode === 'detail' && p.detail ? detail(p.detail) : grid(p)}</main>` +
        `${!showHeader && h.floatInfo ? `<button class="float-i" data-a="menu" title="Shop Info">i</button>` : ''}`;
      tm.forEach(clearInterval); tm = [];
      bindSliders();
      if (edit) {
        let dragIdx = -1;
        app.querySelectorAll('.card,.blk').forEach(el => {
          el.ondragstart = e => { dragIdx = +el.dataset.i; e.dataTransfer.effectAllowed = 'move'; };
          el.ondragover = e => { e.preventDefault(); el.classList.add('over'); };
          el.ondragleave = () => el.classList.remove('over');
          el.ondrop = e => {
            e.preventDefault(); el.classList.remove('over');
            const toIdx = +el.dataset.i;
            if (dragIdx > -1 && toIdx > -1 && dragIdx !== toIdx) post({t: 'moveBox', from: dragIdx, to: toIdx});
            dragIdx = -1;
          };
        });
      }
    }

    app.addEventListener('click', e => {
      const t = e.target;
      if (edit && t.closest('a')) e.preventDefault();
      if (!edit) {
        const waEl = t.closest('a.wa[href]');
        if (waEl && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          e.preventDefault();
          location.href = waEl.href;
          return;
        }
      }
      const a = t.closest('[data-a]');
      if (a) {
        const k = a.dataset.a;
        if (k === 'menu') { open = !open; const inf = app.querySelector('.info'); if (inf) inf.classList.toggle('open', open); return; }
        const sl = a.closest('.sl'), tr = sl && sl.querySelector('.tr');
        if (tr && k === 'dot') tr.scrollTo({left: Number(a.dataset.i) * tr.clientWidth, behavior: 'smooth'});
        return;
      }
      const c = t.closest('.card,.blk');
      if (c) {
        if (edit) post({t: 'sel', id: c.dataset.b, shift: e.shiftKey});
        else if (c.dataset.c) go(c.dataset.c);
      }
    });
    app.addEventListener('dblclick', e => { const c = edit && e.target.closest('.card'); if (c && c.dataset.c) go(c.dataset.c); });

    if (!edit) {
      history.replaceState({id: 'root'}, '');
      addEventListener('popstate', e => { cur = (e.state && e.state.id) || 'root'; open = false; render(); scrollTo(0, 0); });
      let sx = 0, sy = 0;
      addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, {passive: true});
      addEventListener('touchend', e => { const t = e.changedTouches[0]; if (sx < 40 && t.clientX - sx > 80 && Math.abs(t.clientY - sy) < 60 && cur !== 'root') history.back(); }, {passive: true});
    } else {
      addEventListener('keydown', e => {
        const k = e.key.toLowerCase(), c = e.ctrlKey || e.metaKey;
        if (c && 'szyvcd'.includes(k)) e.preventDefault();
        post({t: 'key', k, c, s: e.shiftKey});
      });
    }

    if (D) render();
    return { update(nd, page, s, m) { if (!nd.assets) nd.assets = D ? D.assets : {}; D = nd; cur = page; sel = s; selMulti = m || []; render(); } };
  })(SITE_DATA, document.getElementById('app'), false);
