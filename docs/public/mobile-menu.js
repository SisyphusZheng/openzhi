// LessJS Mobile Menu — Universal L2 script (all browsers)
//
// Handles mobile sidebar open/close for <less-layout>:
// 1. Syncs <details class="mobile-menu"> toggle → host `menu-open` attribute
//    This activates the `:host([menu-open])` CSS rules that show/hide sidebar.
//    CSS `:has()` is kept as progressive enhancement but is NOT relied upon.
// 2. Closes sidebar on backdrop click or nav link click (via composedPath).
//
// Why universal (not just :has() fallback)?
//   The Lit connectedCallback toggle listener conflicted with <details> native
//   behavior in Shadow DOM. Moving to a single external script eliminates the
//   three-layer conflict (CSS :has + Lit JS + has-fallback.js).
//
// deno-lint-ignore no-var no-inner-declarations
(function () {
  if (typeof document === 'undefined') return;

  function setupLayout(el) {
    var sr = el.shadowRoot;
    if (!sr) return;

    var details = sr.querySelector('details.mobile-menu');
    if (!details || details.dataset.lessMenuBound) return;

    details.dataset.lessMenuBound = 'true';

    // Toggle: sync `menu-open` attribute on <less-layout> host element.
    // The CSS `:host([menu-open])` rules show/hide the sidebar and backdrop.
    details.addEventListener('toggle', function () {
      if (details.open) {
        el.setAttribute('menu-open', '');
      } else {
        el.removeAttribute('menu-open');
      }
    });

    // Backdrop click: close the sidebar
    var backdrop = sr.querySelector('.mobile-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', function () {
        if (details.open) details.removeAttribute('open');
        // The toggle listener above will remove menu-open automatically
      });
    }

    // Nav link click: close the sidebar
    sr.querySelectorAll('.docs-sidebar a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (details.open) details.removeAttribute('open');
        // The toggle listener above will remove menu-open automatically
      });
    });
  }

  // Setup all existing <less-layout> elements
  function setupAll() {
    document.querySelectorAll('less-layout').forEach(setupLayout);
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAll);
  } else {
    setupAll();
  }

  // Also handle dynamically added <less-layout> elements via MutationObserver
  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      for (var j = 0; j < mutations[i].addedNodes.length; j++) {
        var node = mutations[i].addedNodes[j];
        if (node.tagName === 'LESS-LAYOUT') {
          setupLayout(node);
        }
      }
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
