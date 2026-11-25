(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  let savedTheme = null;
  try { savedTheme = localStorage.getItem("portfolio-theme"); } catch (_) {}
  if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;

  const updateThemeLabel = () => {
    const light = root.dataset.theme === "light";
    themeButton.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", light ? "#f5f7fa" : "#090e17");
  };
  updateThemeLabel();

  themeButton.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("portfolio-theme", root.dataset.theme); } catch (_) {}
    updateThemeLabel();
  });

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    nav.classList.toggle("is-open", open);
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    items.forEach(item => observer.observe(item));
  } else {
    items.forEach(item => item.classList.add("is-visible"));
  }
})();