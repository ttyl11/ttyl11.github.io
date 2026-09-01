// Initialize __VP_HASH_MAP__ in dev mode so that VitePress client code
// does not throw ReferenceError when prefetch/navigation logic runs.
if (import.meta.env.DEV) {
  window.__VP_HASH_MAP__ = {}
}
