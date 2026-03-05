"use client";

import { useRef } from "react";

export default function ImpactCarousel({ items }) {
  const scrollerRef = useRef(null);

  const scrollByCards = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const card = scroller.querySelector("[data-impact-card]");
    if (!card) {
      return;
    }

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 16;
    const cardsPerStep = window.innerWidth >= 1280 ? 3 : 2;
    const amount = (cardWidth + gap) * cardsPerStep * direction;
    scroller.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Previous impact cards"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="M12.5 4.5L7 10l5.5 5.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Next impact cards"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="M7.5 4.5L13 10l-5.5 5.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article
            key={`${item.company}-${item.label}`}
            data-impact-card
            className="card-soft relative w-[88%] shrink-0 snap-start rounded-2xl border border-slate-200/70 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/70 sm:w-[72%] md:w-[48%] xl:w-[31.6%]"
          >
            <div className="absolute left-6 top-0 h-0.5 w-16 -translate-y-px rounded-full bg-sky-500/80 dark:bg-sky-400/80" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              {item.company}
            </p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-sky-700 dark:text-sky-300">{item.value}</p>
            <p className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">{item.label}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
