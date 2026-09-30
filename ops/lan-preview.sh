#!/usr/bin/env bash
# Local-network preview of the Pecuvate Main Site: a production build served
# from this workstation to anyone on the same Wi-Fi/LAN. Netlify deploy
# previews are not used (build minutes are shared across every site); review
# a branch here before merging.
#
#   bash ops/lan-preview.sh            # build, then serve on port 3101
#   PORT=3105 bash ops/lan-preview.sh  # another port (3100-3109 are the LAN preview range)
#
# The site is fully static and needs no secrets.

set -euo pipefail

PORT="${PORT:-3101}"
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LAN_IP="$(hostname -I | awk '{print $1}')"

cd "$REPO/src"
echo "lan-preview: building..."
pnpm run build
echo
echo "lan-preview: serving at http://${LAN_IP}:${PORT}  - share this with anyone on the network."
echo "             Ctrl+C to stop. Branch: $(git rev-parse --abbrev-ref HEAD) @ $(git rev-parse --short HEAD)"
exec pnpm exec astro preview --host 0.0.0.0 --port "$PORT"
