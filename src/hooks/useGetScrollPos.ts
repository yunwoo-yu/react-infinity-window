import { useEffect, useState } from "react";

const useGetScrollPos = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPos(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPos;
};

export default useGetScrollPos;
