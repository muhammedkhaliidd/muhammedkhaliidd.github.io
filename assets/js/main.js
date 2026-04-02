(() => {
  const STORAGE_KEY = "mk_theme";
  const root = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      const isDark = theme === "dark";
      btn.setAttribute("aria-pressed", String(isDark));
      btn.textContent = isDark ? "Dark" : "Light";
    }
  }

  // Dark is default
  const initial = getStoredTheme() === "light" ? "light" : "dark";
  applyTheme(initial);

  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      setStoredTheme(next);
      applyTheme(next);
    });
  }

  // Highlight current nav link
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const navLinks = document.querySelector(".navLinks");
  const prefersReducedMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function scrollTabIntoView(tab) {
    if (!navLinks || !tab) return;
    tab.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  document.querySelectorAll(".navLinks a[href]").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) {
      a.setAttribute("aria-current", "page");
      // Keep active tab visible in horizontally scrollable nav.
      requestAnimationFrame(() => scrollTabIntoView(a));
    }

    a.addEventListener("click", () => scrollTabIntoView(a));
    a.addEventListener("focus", () => scrollTabIntoView(a));
  });
})();

