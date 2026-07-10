"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import personalInfo from "@/lib/content";

const BOOT_LINES = [
  "INIT PORTFOLIO.SYS...",
  "LOADING ASSETS... OK",
  "CALIBRATING CRT DISPLAY...",
  `WELCOME, ${personalInfo.name.split(" ")[0].toUpperCase()}.SYS READY`,
];

const BOOT_DURATION = 1600;

const IntroLoader = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    // robust scroll lock: overflow alone doesn't stop iOS Safari's
    // touch-scroll / rubber-band bounce, so we also pin the body in
    // place and block touch gestures for the duration of the boot.
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    const prevTouchAction = body.style.touchAction;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.touchAction = "none";

    const unlockScroll = () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      body.style.touchAction = prevTouchAction;
      window.scrollTo(0, scrollY);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      unlockScroll();
      setVisible(false);
      return;
    }

    const start = performance.now();
    let frame: number;
    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, Math.round((elapsed / BOOT_DURATION) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          unlockScroll();
        }, 300);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      unlockScroll();
    };
  }, []);

  const lineIndex = Math.min(
    BOOT_LINES.length - 1,
    Math.floor((progress / 100) * BOOT_LINES.length)
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 overscroll-none bg-background"
          initial={{ opacity: 1 }}
          exit={{
            scaleY: 0.006,
            opacity: 0,
          }}
          transition={{ duration: 0.4, ease: [0.7, 0, 0.84, 0] }}
          style={{ transformOrigin: "center", touchAction: "none" }}
        >
          <div className="bg-retro-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

          <div className="relative flex w-full max-w-xs flex-col items-center gap-4 px-6 text-center sm:max-w-sm sm:gap-5">
            <span className="eyebrow animate-flicker text-[10px] sm:text-xs">
              System Boot
            </span>

            <p className="min-h-[2.25rem] break-words font-mono text-[11px] leading-snug tracking-[0.1em] text-foreground/80 sm:min-h-[1.5rem] sm:text-sm sm:tracking-[0.15em]">
              {BOOT_LINES[lineIndex]}
              <motion.span
                className="ml-1 inline-block"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                _
              </motion.span>
            </p>

            <div className="h-1.5 w-full max-w-56 overflow-hidden rounded-sm border-[1.5px] border-border bg-secondary/40">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground sm:text-[11px]">
              {String(progress).padStart(3, "0")}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
