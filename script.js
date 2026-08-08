(() => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const year = document.querySelector("[data-year]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 6);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && mobileNav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      mobileNav.hidden = !open;
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // Pause decorative wave when the tab is hidden
  const bars = document.querySelector("[data-wave-bars]");
  if (bars && !reduceMotion) {
    document.addEventListener("visibilitychange", () => {
      bars.style.animationPlayState = document.hidden ? "paused" : "running";
      bars.querySelectorAll("span").forEach((el) => {
        el.style.animationPlayState = document.hidden ? "paused" : "running";
      });
    });
  }
})();
