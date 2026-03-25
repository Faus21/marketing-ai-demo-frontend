"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "demo-usage";
const MAX_GENERATIONS = 2;

type DemoUsage = {
  count: number;
  firstUsedAt: string;
};

function getUsage(): DemoUsage {
  if (typeof window === "undefined") return { count: 0, firstUsedAt: "" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { count: 0, firstUsedAt: "" };
    return JSON.parse(raw) as DemoUsage;
  } catch {
    return { count: 0, firstUsedAt: "" };
  }
}

function saveUsage(usage: DemoUsage) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
}

export function useDemoLimit() {
  const [usage, setUsage] = useState<DemoUsage>({ count: 0, firstUsedAt: "" });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUsage(getUsage());
    setReady(true);
  }, []);

  const remaining = Math.max(0, MAX_GENERATIONS - usage.count);
  const limitReached = usage.count >= MAX_GENERATIONS;

  const recordUsage = useCallback(() => {
    const current = getUsage();
    const updated: DemoUsage = {
      count: current.count + 1,
      firstUsedAt: current.firstUsedAt || new Date().toISOString(),
    };
    saveUsage(updated);
    setUsage(updated);
  }, []);

  return { remaining, limitReached, recordUsage, ready };
}
