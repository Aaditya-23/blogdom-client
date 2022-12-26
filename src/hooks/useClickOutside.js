import { useEffect, useRef } from "react";

export default function useClickOutside(callback) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      const { target } = e;

      if (ref.current && !ref.current.contains(target)) {
        callback(target);
      }
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return ref;
}
