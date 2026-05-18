# 🚨 Incidente sportmaster.mx + canchasdepadel.com + padelcenter.mx
## Tablero de control y seguimiento — actualizado 2026-05-18

---

## 1. Dominios víctima (todos de Mundo Artificial S.A. de C.V. / Agencia GEO México)

| Dominio | Registrar | Hosting | Estado actual |
|---|---|---|---|
| sportmaster.mx | registra.mx | OVH Canada 144.217.238.152 | Hackeado, TANDUKTOTO catch-all |
| canchasdepadel.com | GoDaddy | OVH Canada 144.217.238.152 | Hackeado, SUKITOTO |
| padelcenter.mx | GoDaddy | OVH Canada 144.217.238.152 | Hackeado + **SC hijack confirmado** |
| sportmaster.com.mx | registra.mx | OVH Canada 192.99.32.25 | Parcialmente hackeado (3 PHP) |

---

## 2. Atacante identificado

- **Operación:** TANDUKTOTO / SUKITOTO / MENTAL4D (gambling indonesio)
- **Cuenta del atacante:** `febriyanriyan0895@gmail.com` (Gmail Indonesia)
- **C2:** `wss://tm.filter:1502`
- **Payload servers:** kedan-google.netlify.app, need-rest-ko.netlify.app
- **Redirect/login destination:** togel.buildso.com (Cloudflare)
- **Asset CDNs:** padelcenter.alamsutra.shop, mobile.teamsuki.co.uk

---

## 3. 🚨 HALLAZGO CRÍTICO 2026-05-15 — Search Console hijack

Google notificó (msg WNC-627102) que `febriyanriyan0895@gmail.com` fue agregado como **OWNER** de padelcenter.mx en GSC.

**Acción inmediata requerida (Olga):**
1. Entrar a https://search.google.com/search-console
2. Seleccionar propiedad `padelcenter.mx`
3. Settings → Users and permissions
4. Eliminar a `febriyanriyan0895@gmail.com` y a CUALQUIER otro usuario que no reconozcas
5. Verificar las propiedades de sportmaster.mx, canchasdepadel.com y sportmaster.com.mx — repetir

**Acción Carlos (server):**
- Buscar y borrar meta tags `google-site-verification` no autorizados en HTML de los 3 sitios
- Si el ownership fue por DNS TXT, revisar y limpiar registros TXT no autorizados

---

## 4. Estado de los 6 reportes de abuso (enviados 2026-05-17 ~23:19 UTC)

| # | Destino | Subject corto | Respuesta | Acción siguiente |
|---|---|---|---|---|
| 1 | abuse@netlify.com | 2 subdomains Netlify (kedan-google, need-rest-ko) | CC bounce, sin reply | **Draft follow-up listo** — revisar y enviar |
| 2 | abuse@cloudflare.com | 3 dominios proxy (buildso, alamsutra, teamsuki) | Sin reply | Esperar a 2026-05-20; follow-up si silencio |
| 3 | abuse@godaddy.com | buildso.com | Sin reply | Esperar a 2026-05-20; follow-up si silencio |
| 4 | abuse@namecheap.com | alamsutra.shop | Auto-ack `[NC-ZRD-0356]` (estaba en SPAM) | Mover de SPAM. Solo responden si necesitan más info |
| 5 | abuse@nominet.uk | teamsuki.co.uk | Reply: usar formulario abuse.nominet.uk/nominet | **Draft ack listo** + re-someter via formulario web hoy |
| 6 | abuse@ovh.ca | Status update server 144.217.238.152 | Sin reply (tickets en OVH web portal) | Monitorear OVH manager + responder cualquier ticket que entre |

---

## 5. Drafts creados hoy 2026-05-18 (REVISAR antes de enviar)

| Para | Asunto | ID draft |
|---|---|---|
| carlos@trec.com.mx | 🚨 URGENTE Carlos — Hacker se metió en Search Console + 3 tareas críticas | r8837755169633345692 |
| abuse@netlify.com | Re: [ABUSE REPORT] Two Netlify subdomains... — Follow-up | r6817567765759582023 |
| abuse@nominet.uk | Re: [ABUSE REPORT] teamsuki.co.uk... | r4633713567389345131 |

---

## 6. Trabajo pendiente que NO se ha hecho aún

### Inmediato (hoy 2026-05-18)
- [ ] Olga: eliminar `febriyanriyan0895@gmail.com` de GSC de padelcenter.mx (y revisar las otras 3 propiedades)
- [ ] Olga: revisar y enviar los 3 drafts creados arriba
- [ ] Olga: mover de SPAM la auto-respuesta de Namecheap [NC-ZRD-0356]
- [ ] Olga: re-someter el reporte de Nominet en https://abuse.nominet.uk/nominet (web form)
- [ ] Carlos: bajar los 3 vhosts a 503 inmediatamente para detener daño SEO
- [ ] Carlos: confirmar snapshot forense del servidor (tar.gz + dump SQL)
- [ ] Carlos: confirmar recibido el correo de DNS TXT (sportmaster.mx GSC verification)

### Esta semana
- [ ] Reportar a Google Safe Browsing: https://safebrowsing.google.com/safebrowsing/report_phish/
  - URLs: kedan-google.netlify.app, need-rest-ko.netlify.app, togel.buildso.com, padelcenter.alamsutra.shop, mobile.teamsuki.co.uk/padelcenter/
- [ ] Reportar a registra.mx (registrar de sportmaster.mx) — abuso a su dominio
- [ ] Reportar a Policía Cibernética México (CDMX): cibernetica@ssp.cdmx.gob.mx / 088 — necesario para que Nominet/Cloudflare actúen sobre teamsuki.co.uk
- [ ] Reportar a FBI IC3 (infraestructura US): https://www.ic3.gov/
- [ ] Google Search Console Removals — solicitar removal temporal de URLs spam de los 3 dominios
- [ ] Configurar UpdraftPlus para backup automático en Google Drive (post-cleanup)
- [ ] Migrar los 3 sitios a Cloudflare Pages como HTML estático (plan a 7 días según promesa a OVH)

### Esta semana, cuentas a auditar (todos los lugares donde el atacante pudo haber dejado persistencia)
- [ ] WP admins de sportmaster.mx, canchasdepadel.com, padelcenter.mx — eliminar usuarios fantasma
- [ ] cPanel ambos servidores OVH — revisar usuarios FTP/email
- [ ] OVH manager — revisar conexiones recientes, tokens API
- [ ] registra.mx, GoDaddy — revisar contactos del dominio (admin/tech/billing)
- [ ] Plugins WordPress comprados — revocar licencias premium si aplica
- [ ] Cloudflare cuenta (la de Olga, donde está playzonegrass.com / canchasdepadel.mx) — revisar miembros

---

## 7. IOCs (para bloquear en firewall / WAF / referencia)

### Hashes SHA-256 de payloads maliciosos
- `17b47f2ecd19a77eaf5b09d9151a717bd9752245c7321cd94863cbb1920ec833` — pastos.php + home sportmaster.mx + contactanos
- `8899e5c91cffc4d75bf11e0e5df40f252bf4df51064ea8745ab5d9bcfd4e94fb` — cancha-padel.php + cancha-padel-tenis-pasto-sintetico.php

### Dominios maliciosos para bloquear
```
kedan-google.netlify.app
need-rest-ko.netlify.app
tm.filter
togel.buildso.com
padelcenter.alamsutra.shop
mobile.teamsuki.co.uk
account.bliblitiket.com
blibli.api.useinsider.com
bwa.blibli.com
banner.appsflyer.com
websdk.appsflyer.com
sdk-01.moengage.com
cdn.moengage.com
asia.creativecdn.com
bcp.crwdcntrl.net
c.ltmsphrcl.net
utt.impactcdn.com
script.crazyegg.com
```

### Email del atacante (bloquear / no aceptar)
- `febriyanriyan0895@gmail.com`

### Strings de detección WAF
```
tanduktoto, sukitoto, mental4d, tm.filter, wss://tm\.filter
togel, judi online, slot gacor, toto macau
lang="id-ID"  (en cualquier dominio mexicano)
```

---

## 8. Contactos clave

| Quién | Email | Teléfono |
|---|---|---|
| Olga Govela (dueña) | govelamaster@gmail.com | +52 55 3988 7615 |
| Carlos (sysadmin OVH) | carlos@trec.com.mx | — |
| OVH Soporte México | — | 1009 |
| registra.mx | soporte@registra.mx | — |
| Policía Cibernética CDMX | cibernetica@ssp.cdmx.gob.mx | 088 |
| INAI (si hay datos personales) | atencion@inai.org.mx | — |

---

*Última actualización: 2026-05-18 — versión 1.0*
