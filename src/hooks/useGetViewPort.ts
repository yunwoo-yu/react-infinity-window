import { useEffect, useState } from "react";

export const useGetViewPortHeight = () => {
  const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);

  const handleResize = () => {
    const height = window.innerHeight;
    setViewPortHeight(height);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewPortHeight;
};
