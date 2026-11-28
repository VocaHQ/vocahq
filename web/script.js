(() => {
  "use strict";

  const root = document.documentElement;
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const year = document.querySelector("[data-year]");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  root.classList.add("js-ready");

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

    const desktopQuery = window.matchMedia("(min-width: 1040px)");
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
    window.setTimeout(() => revealItems.forEach(reveal), 800);
  }

  // Looping illustrations only run while they are on screen.
  const animatedItems = [...document.querySelectorAll("[data-animate]")];
  if ("IntersectionObserver" in window) {
    const animateObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-inview", entry.isIntersecting));
    }, { threshold: 0.15 });
    animatedItems.forEach((item) => animateObserver.observe(item));
  } else {
    animatedItems.forEach((item) => item.classList.add("is-inview"));
  }

  // Privacy paths: switch the diagram between on-device and gateway.
  const paths = document.querySelector("[data-paths]");
  if (paths) {
    const choices = [...paths.querySelectorAll("[data-path-choice]")];
    const panels = [...paths.querySelectorAll("[data-path-panel]")];
    const diagram = paths.querySelector("[data-path-diagram]");

    const choosePath = (name) => {
      if (diagram) diagram.dataset.path = name;
      choices.forEach((choice) => choice.setAttribute("aria-pressed", String(choice.dataset.pathChoice === name)));
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.pathPanel !== name;
      });
    };

    choices.forEach((choice) => {
      choice.addEventListener("click", () => choosePath(choice.dataset.pathChoice));
    });
    choosePath("device");
  }

  // Hero demo: a scripted illustration of speaking and text appearing.
  const demo = document.querySelector("[data-demo]");
  const stage = demo?.querySelector("[data-demo-stage]");
  const motionToggle = document.querySelector("[data-motion-toggle]");

  if (demo && stage) {
    const scenes = {
      mac: { where: "a Mac", app: "Notes", hint: "hold right option", text: "Move standup to ten and send the notes." },
      linux: { where: "Linux", app: "notes.md", hint: "press your hotkey", text: "Fix the audio buffer before the release." },
      windows: { where: "Windows", app: "Notepad", hint: "press your hotkey", text: "Thanks for testing the beta build!" },
      phone: { where: "a phone", app: "Messages", hint: "tap the mic key", text: "Running five minutes late, save me a seat." }
    };
    const order = Object.keys(scenes);
    const tabs = [...demo.querySelectorAll("[data-demo-tab]")];
    const textTargets = [...stage.querySelectorAll("[data-demo-text]")];
    const appLabel = stage.querySelector("[data-demo-app]");
    const hintLabel = stage.querySelector("[data-demo-hint]");
    const stateLabel = stage.querySelector("[data-demo-state]");

    let current = "mac";
    let autoplay = true;
    let paused = false;
    let inView = false;
    let playing = false;
    let timers = [];

    const clearTimers = () => {
      timers.forEach((id) => window.clearTimeout(id));
      timers = [];
      playing = false;
    };
    const after = (ms, fn) => timers.push(window.setTimeout(fn, ms));
    const setText = (value) => textTargets.forEach((target) => { target.textContent = value; });
    const setPhase = (phase, label) => {
      stage.dataset.phase = phase;
      if (stateLabel) stateLabel.textContent = label;
    };

    const showScene = (name) => {
      const scene = scenes[name];
      current = name;
      stage.dataset.platform = name;
      if (appLabel) appLabel.textContent = scene.app;
      if (hintLabel) hintLabel.textContent = scene.hint;
      stage.setAttribute("aria-label", `Animated illustration: on ${scene.where}, Voca listens and types "${scene.text}" into ${scene.app}.`);
      tabs.forEach((tab) => tab.setAttribute("aria-pressed", String(tab.dataset.demoTab === name)));
    };

    const finishScene = () => {
      clearTimers();
      setText(scenes[current].text);
      setPhase("done", "text inserted");
    };

    const canAnimate = () => !motionQuery.matches && !paused && inView && !document.hidden;

    const playScene = () => {
      clearTimers();
      playing = true;
      const scene = scenes[current];
      const words = scene.text.split(" ");
      const typeAt = 2600;
      const doneAt = typeAt + 300 + words.length * 150;

      setText("");
      setPhase("ready", "ready");
      after(700, () => setPhase("listening", "listening"));
      after(typeAt, () => setPhase("typing", "transcribing"));
      words.forEach((_, index) => {
        after(typeAt + 300 + index * 150, () => setText(words.slice(0, index + 1).join(" ")));
      });
      after(doneAt, () => setPhase("done", "text inserted"));
      after(doneAt + 2600, () => {
        playing = false;
        if (!autoplay || !canAnimate()) return;
        showScene(order[(order.indexOf(current) + 1) % order.length]);
        playScene();
      });
    };

    const sync = () => {
      if (canAnimate()) {
        if (!playing && autoplay) playScene();
      } else if (playing) {
        finishScene();
      }
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        autoplay = false;
        showScene(tab.dataset.demoTab);
        if (canAnimate()) {
          playScene();
        } else {
          finishScene();
        }
      });
    });

    if (motionToggle) {
      const motionLabel = motionToggle.querySelector("[data-motion-label]");
      motionToggle.hidden = motionQuery.matches;
      motionToggle.addEventListener("click", () => {
        paused = !paused;
        root.classList.toggle("motion-paused", paused);
        motionToggle.setAttribute("aria-pressed", String(paused));
        if (motionLabel) motionLabel.textContent = paused ? "Play motion" : "Pause motion";
        if (!paused) autoplay = true;
        sync();
      });
    }

    showScene(current);
    finishScene();

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          inView = entry.isIntersecting;
          sync();
        });
      }, { threshold: 0.35 }).observe(stage);
    }

    document.addEventListener("visibilitychange", sync);
  }

  const animatedTrack = document.querySelector(".ribbon-track");
  if (animatedTrack && !motionQuery.matches) {
    document.addEventListener("visibilitychange", () => {
      animatedTrack.style.animationPlayState = document.hidden ? "paused" : "running";
    });
  }
})();
