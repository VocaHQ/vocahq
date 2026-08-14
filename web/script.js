(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const year = document.querySelector("[data-year]");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.documentElement.classList.add("js-ready");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && mobileNav) {
    let lastOpen = false;

    const setOpen = (open, returnFocus = false) => {
      lastOpen = open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".sr-only").textContent = open ? "Close navigation" : "Open navigation";
      mobileNav.hidden = !open;
      if (returnFocus) toggle.focus();
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lastOpen) {
        setOpen(false, true);
      }
    });

    const desktopQuery = window.matchMedia("(min-width: 680px)");
    const closeOnDesktop = (event) => {
      if (!event.matches) return;
      const focusInside = mobileNav.contains(document.activeElement);
      const wasOpen = lastOpen;
      setOpen(false);
      if (wasOpen && focusInside) toggle.focus();
    };

    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", closeOnDesktop);
    } else if (typeof desktopQuery.addListener === "function") {
      desktopQuery.addListener(closeOnDesktop);
    }
  }

  const faqItems = [...document.querySelectorAll(".faq-list details")];
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  const revealItems = [...document.querySelectorAll(".reveal")];
  const reveal = (item) => item.classList.add("is-visible");

  if (motionQuery.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach(reveal);
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        currentObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealItems.forEach((item) => observer.observe(item));
    window.setTimeout(() => revealItems.forEach(reveal), 1400);
  }

  const animatedTrack = document.querySelector(".ribbon-track");
  if (animatedTrack && !motionQuery.matches) {
    document.addEventListener("visibilitychange", () => {
      animatedTrack.style.animationPlayState = document.hidden ? "paused" : "running";
    });
  }
})();