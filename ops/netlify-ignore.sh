#!/usr/bin/env bash
# Netlify `ignore` command: exit 0 = SKIP this build, exit 1 = BUILD.
#
# The account is on Netlify Free (300 build minutes a month, shared by every
# site). Owner decision 2026-09-29 (made for Empowr Members, applied here
# 2026-09-30): previews are viewed locally with ops/lan-preview.sh, not built
# on Netlify, and production skips pushes that cannot change the site.
#
#   Deploy previews: never built. Review locally with ops/lan-preview.sh.
#   Production:      build only when src/ or netlify.toml changed since the
#                    last deploy (docs, planning, ops-only pushes are skipped).
#
# Anything this script cannot determine falls through to BUILD: a wasted
# minute is cheaper than a fix that silently never ships.

set -u

case "${CONTEXT:-}" in
  deploy-preview|branch-deploy)
    echo "netlify-ignore: previews are viewed locally (ops/lan-preview.sh) - skipping."
    exit 0 ;;
esac

if [ -z "${CACHED_COMMIT_REF:-}" ] || [ "${CACHED_COMMIT_REF}" = "${COMMIT_REF:-}" ]; then
  echo "netlify-ignore: no previous deploy to compare with - building."
  exit 1
fi

# Paths are relative to the repo root; Netlify runs this from base="src".
cd "$(git rev-parse --show-toplevel 2>/dev/null || echo ..)" || exit 1
git diff --quiet "$CACHED_COMMIT_REF" "${COMMIT_REF:-HEAD}" -- src netlify.toml
case $? in
  0) echo "netlify-ignore: nothing under src/ or netlify.toml changed - skipping."; exit 0 ;;
  1) echo "netlify-ignore: site files changed - building."; exit 1 ;;
  *) echo "netlify-ignore: could not compare commits - building."; exit 1 ;;
esac
