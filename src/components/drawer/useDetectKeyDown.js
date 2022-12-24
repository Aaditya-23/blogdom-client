import { useEffect } from "react";

export default function useDetectKeyDown(keys, callback) {
  useEffect(() => {
    const detectKey = (e) => {
      const { key } = e;

      if (keys.includes(key)) callback();
    };

    window.addEventListener("keydown", detectKey);

    return () => window.removeEventListener("keydown", detectKey);
  }, []);
}
