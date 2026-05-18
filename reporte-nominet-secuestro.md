# Reporte de Abuso a Nominet — Secuestro de Dominio (.uk Domain Hijacking)

**Formulario oficial:** https://abuse.nominet.uk/nominet
**Email de respaldo:** registrars@nominet.uk

---

## 1. CLASIFICACIÓN DEL ABUSO

**Tipo:** Domain Hijacking / Unauthorised Transfer / Account Compromise
**Categoría Nominet:** Unlawful use of a domain — unauthorised access / fraud
**Urgencia:** ALTA — el dominio fue tomado sin autorización del titular legítimo

---

## 2. PLANTILLA DEL REPORTE (copiar al formulario)

### Subject / Asunto
```
URGENT: Domain Hijacking Report — Unauthorised Transfer of [TU-DOMINIO.UK]
```

### Body / Cuerpo del reporte (en inglés, como pide Nominet)

```
To the Nominet Domain Abuse Team,

I am submitting a formal abuse report regarding the unauthorised hijacking
of the .uk domain that I am/was the legitimate registrant of.

=== DOMAIN INFORMATION ===
Domain name: [TU-DOMINIO.UK]
Legitimate registrant: [TU NOMBRE COMPLETO o RAZÓN SOCIAL]
Original registrar: [NOMBRE DEL REGISTRAR — ej. GoDaddy, 123-reg, etc.]
Date of original registration: [FECHA]
Date hijacking was detected: [FECHA]

=== INCIDENT DESCRIPTION ===
On [FECHA Y HORA], I discovered that the domain [TU-DOMINIO.UK] had been
transferred / modified without my authorisation. The unauthorised actions
include (mark all that apply):

  [ ] Unauthorised transfer to a different registrar
  [ ] Unauthorised change of registrant contact details (WHOIS)
  [ ] Unauthorised change of nameservers / DNS records
  [ ] Unauthorised change of email associated with the domain
  [ ] Loss of access to the registrar account
  [ ] Website content replaced / defaced
  [ ] Domain used for phishing impersonating my brand
  [ ] Email (MX) hijacked, intercepting business correspondence

I am the rightful and legitimate registrant of this domain and did not
authorise any of these changes. I believe my registrar account was
compromised (account takeover) or the domain was transferred fraudulently.

=== EVIDENCE PROVIDED ===
1. Original registration receipt / invoice from [REGISTRAR] dated [FECHA]
2. Historical WHOIS records showing my ownership prior to [FECHA HIJACK]
3. Email correspondence from my registrar confirming registration
4. Screenshots of the current state showing unauthorised content/redirect
5. Bank/credit card statements showing original payment for the domain
6. ID document of the legitimate registrant (attached)
7. [Si aplica] Police report number: [NÚMERO DE DENUNCIA]

=== IMPACT ===
- Loss of access to business email associated with the domain
- Loss of legitimate web traffic to my customers
- Potential brand damage / impersonation of my company
- Estimated financial damages: [MONTO si lo tienes calculado]
- Number of customers/users affected: [aproximado]

=== REQUESTED ACTION ===
I respectfully request that Nominet:

1. Place the domain on registrar-lock / clientHold pending investigation
2. Suspend the unauthorised transfer
3. Restore the domain to my legitimate ownership
4. Preserve all transfer logs and registrar account access records
   for evidence purposes
5. Provide guidance on the formal recovery process

I understand that for unlawful use of a domain, Nominet requires a Law
Enforcement Agency to submit a formal takedown request. I have already
contacted [POLICÍA / ACTION FRAUD / OTHER LEA] and reference number
[NÚMERO] has been assigned. They will be in contact with Nominet shortly.

=== CONTACT INFORMATION ===
Full legal name: [TU NOMBRE]
Company (if applicable): PlayZone Grass / Grupo Master México (Sportmaster)
Email: [TU EMAIL — usa uno que NO esté comprometido]
Phone: [TU TELÉFONO con código de país]
Country: México
Preferred language for response: English / Spanish

I am available to provide any additional evidence or clarification required.
Thank you for your urgent attention to this matter.

Kind regards,
[FIRMA]
```

---

## 3. PASOS PARALELOS QUE DEBES HACER YA (no esperes a Nominet)

### A. Recuperar la cuenta del registrar
- [ ] Cambiar contraseñas de TODOS los emails asociados al dominio
- [ ] Activar 2FA en el registrar y en los emails
- [ ] Contactar soporte del registrar (GoDaddy/123-reg/etc.) **por teléfono**
- [ ] Pedir que congelen el dominio (`clientHold`, `clientTransferProhibited`)
- [ ] Solicitar logs de acceso a la cuenta (qué IP cambió qué, cuándo)

### B. Reportar a Law Enforcement Agency (LEA)
Nominet **EXIGE** que una agencia policial los contacte para casos de uso ilícito. Opciones:

- **Action Fraud (UK)** — https://www.actionfraud.police.uk/ — para fraudes en Reino Unido
- **Policía Cibernética México** — https://www.gob.mx/policiafederal — reporta como delito informático
- **INTERPOL** — si el ataque es transnacional
- **FBI IC3** — https://www.ic3.gov/ — si hay nexos con EEUU

> Guarda el **número de denuncia** y pásalo a Nominet inmediatamente.

### C. Preservación de evidencia
- [ ] WHOIS histórico: https://whoxy.com/ o https://securitytrails.com/
- [ ] Screenshots con fecha/hora visible del sitio comprometido
- [ ] Headers completos de cualquier email sospechoso
- [ ] Logs del registrar (pídelos formalmente por escrito)
- [ ] Estados de cuenta del banco con el pago original del dominio
- [ ] Backup de archivos del sitio si los tenías

### D. Mitigar daños mientras se resuelve
- [ ] Avisar a clientes por canales alternos (redes sociales, WhatsApp)
- [ ] Publicar aviso en redes: "Nuestro dominio X fue comprometido, NO interactúen con él"
- [ ] Reportar el dominio comprometido a:
  - Google Safe Browsing: https://safebrowsing.google.com/safebrowsing/report_phish/
  - PhishTank: https://phishtank.org/
  - Microsoft: https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site
- [ ] Si hay phishing a tu marca, reportar a tu proveedor de email para que marquen como spam

---

## 4. SI ES INFRACCIÓN DE MARCA (NO secuestro de cuenta)

Si en realidad alguien registró un dominio .uk parecido al tuyo (cybersquatting), la ruta es diferente:

**DRS — Dispute Resolution Service:** https://nominet.uk/go/drs
- Costo: desde £200 GBP (mediación) hasta £750 GBP (decisión experta)
- Plazo típico: 2–4 meses
- Requisito: tener marca registrada (TM) o derechos demostrables sobre el nombre

---

## 5. CHECKLIST FINAL ANTES DE ENVIAR

- [ ] Tengo el nombre exacto del dominio .uk afectado
- [ ] Tengo fechas precisas del incidente
- [ ] Tengo evidencia recopilada (mínimo 3 piezas)
- [ ] Tengo un email NO comprometido para recibir respuesta
- [ ] Tengo (o estoy tramitando) denuncia policial
- [ ] Adjunté identificación oficial del titular
- [ ] Envié por el formulario: https://abuse.nominet.uk/nominet
- [ ] Guardé copia del reporte y número de ticket que devuelva Nominet
