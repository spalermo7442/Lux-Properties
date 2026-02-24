"use client";

import { useState } from "react";
import Image from "next/image";

export type FloorPlanTab = "main" | "second";

const tabs: { id: FloorPlanTab; label: string }[] = [
  { id: "main", label: "Main floor" },
  { id: "second", label: "Second floor" },
];

type FloorPlanTabsProps = {
  mainFloorSrc: string;
  secondFloorSrc: string;
};

export default function FloorPlanTabs({ mainFloorSrc, secondFloorSrc }: FloorPlanTabsProps) {
  const [active, setActive] = useState<FloorPlanTab>("main");

  return (
    <div className="flex flex-col">
      <div className="flex border-b border-[var(--color-gray-light)] mb-4">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActive(id)}
            className={`px-5 py-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${
              active === id
                ? "text-[var(--color-dark)] border-b-2 border-[var(--color-dark)] -mb-[2px]"
                : "text-[var(--color-gray)] hover:text-[var(--color-gray-dark)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="relative aspect-[4/3] bg-[var(--color-gray-bg)] overflow-hidden">
        <Image
          src={active === "main" ? mainFloorSrc : secondFloorSrc}
          alt={active === "main" ? "Main floor plan" : "Second floor plan"}
          fill
          className="object-contain object-center p-2"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
