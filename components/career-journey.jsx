"use client";

import { useEffect, useState } from "react";

export default function CareerJourney({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [activeItem]);

  return (
    <>
      <div className="grid gap-4">
        {items.map((item) => (
          <button
            type="button"
            key={`${item.company}-${item.period}`}
            onClick={() => setActiveItem(item)}
            className="card-soft group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="pointer-events-none absolute inset-y-6 left-0 w-1 rounded-r-full bg-gradient-to-b from-sky-400/90 via-sky-500/70 to-indigo-500/70 dark:from-sky-400 dark:via-sky-500 dark:to-indigo-400" />
            <div className="pointer-events-none absolute -right-16 top-0 h-32 w-32 rounded-full bg-sky-100/70 blur-2xl dark:bg-sky-900/20" />

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">{item.role}</p>
                <p className="text-sm font-medium text-sky-700 dark:text-sky-300">{item.company}</p>
              </div>
              <p className="rounded-full border border-slate-300/80 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                {item.period}
              </p>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-300/80 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold text-sky-700 transition group-hover:gap-2 dark:text-sky-300">
              <span>View details</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-3.5 w-3.5"
              >
                <path
                  d="M7.5 4.5L13 10l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/55 p-4"
          onClick={() => setActiveItem(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.role} at ${activeItem.company}`}
            className="my-auto w-full max-w-2xl rounded-2xl border border-slate-200/70 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{activeItem.role}</h3>
                <p className="text-sm font-medium text-sky-700 dark:text-sky-300">{activeItem.company}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{activeItem.period}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/90 bg-white/80 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-800"
                aria-label="Close dialog"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <ul className="mt-5 max-h-[65vh] list-none space-y-2 overflow-y-auto pr-1 pl-0 text-sm leading-7 text-slate-700 dark:text-slate-300">
              {activeItem.details.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-[0.68rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600 dark:bg-sky-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
