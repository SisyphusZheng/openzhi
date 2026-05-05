// LessJS Mobile Sidebar — Universal handler (all browsers)
// Closes sidebar on backdrop click or nav link click (mobile).
// Uses composedPath() to penetrate Shadow DOM.
// deno-lint-ignore no-var no-inner-declarations
(function() {
  if (typeof document === 'undefined') return;

  document.addEventListener('click', function(e) {
    var target = e.target;
    if (!target || !(target instanceof Element)) return;

    var path = e.composedPath();
    var isBackdrop = false;
    var isNavLink = false;

    for (var i = 0; i < path.length; i++) {
      var el = path[i];
      if (!el.classList) continue;
      if (el.classList.contains('mobile-backdrop')) { isBackdrop = true; break; }
      if (el.tagName === 'A') { isNavLink = true; break; }
    }

    if (!isBackdrop && !isNavLink) return;

    // Close all mobile menus by removing menu-open attribute
    document.querySelectorAll('less-layout').forEach(function(el) {
      el.removeAttribute('menu-open');
      // Also sync the details element inside the shadow root
      var sr = el.shadowRoot;
      if (sr) {
        var details = sr.querySelector('details.mobile-menu');
        if (details) details.removeAttribute('open');
      }
    });
  });
})();
