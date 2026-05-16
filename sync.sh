#!/bin/bash
# sync.sh — Sincroniza con GitHub
# Uso: ./sync.sh
#
# Hace 4 cosas:
#   1. git add .           (empaqueta tus cambios)
#   2. git commit -m "..." (los guarda con tu mensaje)
#   3. git pull --rebase   (baja lo nuevo de tus companeras)
#   4. git push            (sube todo a GitHub)
#
# Si no tienes cambios, solo baja lo nuevo.

set -e
cd "$(dirname "$0")"

echo ""
echo "==========================================="
echo "  Sync con GitHub  -  playzonegrass"
echo "==========================================="

# Verifica que estemos en un repo git
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo ""
    echo "[ERROR] Este folder no es un repo git."
    echo "        Estas en: $(pwd)"
    exit 1
fi

BRANCH=$(git branch --show-current)
echo "  Branch actual: $BRANCH"
echo "==========================================="
echo ""

# Caso 1: NO hay cambios locales -> solo bajar
if [ -z "$(git status --porcelain)" ]; then
    echo "[i] No tienes cambios para subir."
    echo "[i] Bajando lo nuevo de tus companeras..."
    echo ""
    if git pull --rebase; then
        echo ""
        echo "[OK] Listo. Estas al dia con GitHub."
    else
        echo ""
        echo "==========================================="
        echo "  CONFLICTO DETECTADO"
        echo "==========================================="
        echo ""
        echo "Toma SCREENSHOT de esta pantalla COMPLETA"
        echo "y mandala al chat. No toques nada mas."
        exit 1
    fi
    exit 0
fi

# Caso 2: HAY cambios locales -> commit + pull + push
echo "Cambios pendientes en tu copia:"
echo "-------------------------------------------"
git status --short
echo "-------------------------------------------"
echo ""

# Pide el mensaje del commit
read -p "Que cambiaste? (mensaje corto en espanol): " MSG

if [ -z "$MSG" ]; then
    echo ""
    echo "[ERROR] Necesitas escribir un mensaje. Cancelado."
    echo "        Vuelve a correr ./sync.sh cuando estes lista."
    exit 1
fi

echo ""
echo "[1/4] Empaquetando tus cambios..."
git add .

echo "[2/4] Guardando con mensaje: \"$MSG\""
git commit -m "$MSG"

echo "[3/4] Bajando lo nuevo de tus companeras..."
if ! git pull --rebase; then
    echo ""
    echo "==========================================="
    echo "  CONFLICTO DETECTADO"
    echo "==========================================="
    echo ""
    echo "Tu cambio y el de easygarden85 chocaron en"
    echo "la misma linea de algun archivo."
    echo ""
    echo "Toma SCREENSHOT de esta pantalla COMPLETA"
    echo "y mandala al chat. No toques nada mas,"
    echo "yo lo resuelvo en 30 segundos."
    exit 1
fi

echo "[4/4] Subiendo a GitHub..."
git push

echo ""
echo "==========================================="
echo "  LISTO. Todo en GitHub."
echo "==========================================="
echo ""
echo "Repo: https://github.com/govelamaster/playzonegrass"
echo ""
