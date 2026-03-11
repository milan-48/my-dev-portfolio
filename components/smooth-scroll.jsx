"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let lenis = null;
    let frameId = null;
    let cancelled = false;

    const initLenis = async () => {
      if (cancelled) return;
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        smoothTouch: false,
        anchors: true,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });

      const raf = (time) => {
        if (cancelled || !lenis) return;
        lenis.raf(time);
        frameId = window.requestAnimationFrame(raf);
      };
      frameId = window.requestAnimationFrame(raf);
    };

    const scheduleInit = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => initLenis(), { timeout: 2000 });
      } else {
        setTimeout(initLenis, 1);
      }
    };

    scheduleInit();

    return () => {
      cancelled = true;
      if (frameId) window.cancelAnimationFrame(frameId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
