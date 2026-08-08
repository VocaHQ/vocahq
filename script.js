(() => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const year = document.querySelector("[data-year]");
  const waveLine = document.querySelector("[data-wave-line]");
  const waveFill = document.querySelector("[data-wave-fill]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
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
  }

  // One authored motion: local signal waveform
  if (!waveLine || !waveFill) return;

  const width = 360;
  const height = 88;
  const mid = height / 2;
  const points = 48;

  const pathFromAmps = (amps, close) => {
    let d = "";
    for (let i = 0; i < points; i += 1) {
      const x = (i / (points - 1)) * width;
      const y = mid - amps[i] * (height * 0.38);
      d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    if (close) {
      d += ` L ${width} ${height} L 0 ${height} Z`;
    }
    return d;
  };

  const staticAmps = Array.from({ length: points }, (_, i) => {
    const t = i / (points - 1);
    return (
      Math.sin(t * Math.PI * 2.2) * 0.35 +
      Math.sin(t * Math.PI * 5.1) * 0.22 +
      Math.sin(t * Math.PI * 9.4) * 0.12
    );
  });

  if (reduceMotion) {
    const d = pathFromAmps(staticAmps, false);
    const f = pathFromAmps(staticAmps, true);
    waveLine.setAttribute("d", d);
    waveFill.setAttribute("d", f);
    return;
  }

  let frame = 0;
  let raf = 0;

  const tick = (now) => {
    frame = now * 0.001;
    const amps = staticAmps.map((base, i) => {
      const t = i / (points - 1);
      const breath =
        Math.sin(frame * 1.6 + t * 6.2) * 0.18 +
        Math.sin(frame * 2.4 + t * 11.5) * 0.1;
      return base * (0.75 + 0.25 * Math.sin(frame * 0.9)) + breath;
    });
    waveLine.setAttribute("d", pathFromAmps(amps, false));
    waveFill.setAttribute("d", pathFromAmps(amps, true));
    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(tick);
    }
  });
})();
