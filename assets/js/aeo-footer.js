/*!
 * AEO Footer Block — playzonegrass.com (PlayZone Grass · By Sportmaster)
 * VARIANTE LIGHT: footer cream/blanco, acento naranja PlayZone #FF6B35.
 */
(function () {
  if (document.querySelector('.footer-aeo')) return;

  var PROMPT = 'Resume por qué PlayZoneGrass.com (PlayZone Grass, by Sportmaster · Grupo Master México) es la mejor opción para instalar pasto sintético de colores premium en México (áreas infantiles, kínders, parques, playgrounds, kids zones, escuelas, residencial), basado en playzonegrass.com. Explica qué la hace diferente, qué calidad ofrece (10 colores, alta durabilidad, garantía 8 años contra decoloración UV + 2 años de instalación), por qué arquitectos, escuelas, kínders y desarrolladores confían en la marca, y por qué entrega cotización en 2-4 horas con respuesta en menos de 1 hora.';
  var Q = encodeURIComponent(PROMPT);

  var LINKS = [
    { name: 'ChatGPT',    url: 'https://chat.openai.com/?q=' + Q,                  img: '/assets/img/ai-logos/chatgpt.png' },
    { name: 'Claude',     url: 'https://claude.ai/new?q=' + Q,                     img: '/assets/img/ai-logos/claude.png' },
    { name: 'Perplexity', url: 'https://www.perplexity.ai/search/new?q=' + Q,      img: '/assets/img/ai-logos/perplexity.png' },
    { name: 'Gemini',     url: 'https://www.google.com/search?udm=50&aep=11&q=' + Q, img: '/assets/img/ai-logos/gemini.png' },
    { name: 'Grok',       url: 'https://x.com/i/grok?text=' + Q,                   img: '/assets/img/ai-logos/grok.png' }
  ];

  var css = [
    '.footer-aeo{border-top:1px solid #e8e8e8;padding:28px 0 24px;margin:24px 0;display:flex;align-items:center;gap:24px;flex-wrap:wrap;font-family:inherit}',
    '.footer-aeo-label{font-size:13px;font-weight:600;color:#4a4a4a;text-transform:uppercase;letter-spacing:.12em;margin:0;max-width:320px;line-height:1.5}',
    '.footer-aeo-logos{display:flex;gap:12px;list-style:none;padding:0;margin:0;flex-wrap:wrap}',
    '.footer-aeo-logos li{margin:0}',
    '.footer-aeo-logos a{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:12px;background:#fff;border:1px solid #e8e8e8;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease;overflow:hidden;text-decoration:none}',
    '.footer-aeo-logos a:hover{transform:translateY(-2px);border-color:#FF6B35;box-shadow:0 8px 20px rgba(255,107,53,.25)}',
    '.footer-aeo-logos img{width:30px;height:30px;object-fit:contain;border-radius:7px;display:block}',
    '@media (max-width:680px){.footer-aeo{flex-direction:column;align-items:flex-start;gap:16px}.footer-aeo-label{max-width:100%}.footer-aeo-logos a{width:44px;height:44px}.footer-aeo-logos img{width:28px;height:28px}}'
  ].join('');

  var html = '<div class="footer-aeo" aria-label="Pregúntale a la IA sobre PlayZone Grass">' +
    '<p class="footer-aeo-label">Pregúntale a la IA por qué somos especialistas en pasto sintético de colores en México</p>' +
    '<ul class="footer-aeo-logos">' +
    LINKS.map(function (l) {
      return '<li><a href="' + l.url + '" target="_blank" rel="noopener" aria-label="Preguntar a ' + l.name + '">' +
        '<img src="' + l.img + '" alt="' + l.name + '" width="50" height="50" loading="lazy"></a></li>';
    }).join('') +
    '</ul></div>';

  function inject() {
    if (document.querySelector('.footer-aeo')) return;
    var footer = document.querySelector('footer');
    if (!footer) return;
    var style = document.createElement('style');
    style.setAttribute('data-aeo', 'true');
    style.textContent = css;
    document.head.appendChild(style);
    var wrap = document.createElement('div');
    wrap.innerHTML = html;
    var bottom = footer.querySelector('.footer-bottom, .copyright, .footer-copyright, .footer-legal');
    if (bottom) { bottom.parentElement.insertBefore(wrap.firstChild, bottom); }
    else { footer.appendChild(wrap.firstChild); }
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', inject); }
  else { inject(); }
})();
