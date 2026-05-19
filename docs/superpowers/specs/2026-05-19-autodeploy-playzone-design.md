# Auto-deploy playzonegrass: guardar → GitHub → Cloudflare Pages

**Fecha:** 2026-05-19
**Proyecto:** playzonegrass (`/Users/melissagovela/Documents/playzonegrass`)
**Repo GitHub:** `https://github.com/govelamaster/playzonegrass`

## Objetivo

Cero comandos manuales. Cada vez que Claude edita un archivo del proyecto, el cambio se sube automáticamente a GitHub y Cloudflare Pages lo despliega solo.

## Flujo completo

```
Claude edita archivo
→ Hook PostToolUse dispara git add + commit + push
→ GitHub recibe el push
→ Cloudflare Pages detecta el push y despliega
→ Sitio actualizado en ~1 minuto
```

## Componentes

### 1. Claude Code Hook (PostToolUse)

- **Tipo:** `PostToolUse`
- **Matcher:** herramientas `Write` y `Edit`
- **Comando:**
  ```bash
  cd /Users/melissagovela/Documents/playzonegrass && git add -A && git diff --cached --quiet || git commit -m "auto: $(date '+%H:%M:%S')" && git push origin main
  ```
- **Configuración:** `/Users/melissagovela/Documents/playzonegrass/.claude/settings.json` (local al proyecto, solo aplica cuando Claude Code abre este directorio)
- **Comportamiento:** Si no hay cambios reales, `git diff --cached --quiet` evita un commit vacío y el comando termina sin error.

### 2. Cloudflare Pages — conexión a GitHub

- **Método:** Dashboard de Cloudflare Pages → proyecto `playzonegrass` → Settings → Build & Deploy → conectar a `govelamaster/playzonegrass`
- **Branch:** `main`
- **Build command:** ninguno (sitio estático HTML puro)
- **Output directory:** `/` (raíz del repo)
- **Resultado:** cada push a `main` dispara un deploy automático en Cloudflare

## Pre-condiciones cumplidas

- [x] Repo git local inicializado
- [x] Remote `origin` apuntando a `govelamaster/playzonegrass`
- [x] 17 commits locales listos para subir

## Pasos de implementación

1. Configurar hook `PostToolUse` en `~/.claude/settings.json`
2. Push inicial de los 17 commits acumulados: `git push origin main`
3. Conectar Cloudflare Pages al repo de GitHub desde el dashboard (una vez, manual)
4. Verificar: editar un archivo → confirmar commit automático → confirmar deploy en Cloudflare

## Consideraciones

- El hook está en `.claude/settings.json` local del repo, por lo que solo se activa cuando Claude Code trabaja en el directorio `playzonegrass`. No afecta otros proyectos.
- El mensaje de commit incluye la hora (`auto: 14:32:01`) para diferenciar commits.
- No hay rollback automático; si se sube un error, se corrige en el siguiente edit.
