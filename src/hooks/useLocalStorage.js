import { useCallback, useEffect, useState } from "react";

function readStored(key, initialValue) {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return initialValue;
    const parsed = JSON.parse(raw);
    if (Array.isArray(initialValue) && !Array.isArray(parsed)) {
      return initialValue;
    }
    return parsed;
  } catch {
    return initialValue;
  }
}

export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => readStored(key, initialValue));

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [key, state]);

  const setStored = useCallback((next) => {
    setState((prev) => (typeof next === "function" ? next(prev) : next));
  }, []);

  return [state, setStored];
}
