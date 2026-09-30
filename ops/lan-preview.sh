#!/usr/bin/env bash
# Local-network preview of the Pecuvate Main Site: a production build served
# from this workstation to anyone on the same Wi-Fi/LAN. Netlify deploy
# previews are not used (build minutes are shared across every site); review
# a branch here before merging.
#
#   bash ops/lan-preview.sh            # build, then serve on port 3102
#   PORT=3105 bash ops/lan-preview.sh  # another port (3100-3109 are the LAN preview range: Members 3100, EELA 3101, this site 3102)
#
# The build copies Netlify's: a clean, lockfile-exact install and the Node
# major version from netlify.toml. If it builds here it should build on
# Netlify. The site is fully static and needs no secrets.

set -euo pipefail

PORT="${PORT:-3102}"
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LAN_IP="$(hostname -I | awk '{print $1}')"

NODE_MAJOR="$(sed -n 's/^ *NODE_VERSION *= *"\([0-9]*\).*/\1/p' "$REPO/netlify.toml")"
: "${NODE_MAJOR:?lan-preview: no NODE_VERSION in netlify.toml}"

cd "$REPO/src"
echo "lan-preview: installing (frozen lockfile, as Netlify does)..."
pnpm install --frozen-lockfile
echo "lan-preview: building on Node ${NODE_MAJOR} (Netlify's version)..."
npx -y "node@${NODE_MAJOR}" node_modules/astro/astro.js build
echo
echo "lan-preview: serving at http://${LAN_IP}:${PORT}  - share this with anyone on the network."
echo "             Ctrl+C to stop. Branch: $(git rev-parse --abbrev-ref HEAD) @ $(git rev-parse --short HEAD)"
exec pnpm exec astro preview --host 0.0.0.0 --port "$PORT"
