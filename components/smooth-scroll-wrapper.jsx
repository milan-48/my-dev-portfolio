"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("./smooth-scroll"), { ssr: false });

export default function SmoothScrollWrapper() {
  return <SmoothScroll />;
}
