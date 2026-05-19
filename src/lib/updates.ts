import { useEffect, useState } from "react";

export type UpdateCategory = "Marketing Digital" | "Production Vidéo" | "Data & Stratégie";

export interface Update {
  id: string;
  text: string;
  category: UpdateCategory;
  createdAt: number;
}

const KEY = "poule:updates";
const EVT = "poule:updates:changed";

function read(): Update[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Update[]) : [];
  } catch {
    return [];
  }
}

function write(list: Update[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVT));
}

export function addUpdate(text: string, category: UpdateCategory): Update {
  const u: Update = {
    id: crypto.randomUUID(),
    text: text.trim(),
    category,
    createdAt: Date.now(),
  };
  const list = [u, ...read()];
  write(list);
  return u;
}

export function useUpdates(): Update[] {
  const [list, setList] = useState<Update[]>([]);
  useEffect(() => {
    setList(read());
    const refresh = () => setList(read());
    window.addEventListener(EVT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(EVT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);
  return list;
}
