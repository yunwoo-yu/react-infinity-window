import { useEffect, useRef, useState } from "react";

function App() {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  console.log(window.scrollY);

  useEffect(() => {
    const top = containerRef.current?.getBoundingClientRect().top;

    if (top && top <= 0) {
      setStartIndex((prev) => prev + 1);
    }

    console.log(top);
  }, [window.]);

  console.log(startIndex);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#c9c9c9",
        }}
      >
        보여지는 높이
      </div>
      <div ref={containerRef}>
        <div style={{ height: "300px" }}>리스트1</div>
        <div style={{ height: "300px" }}>리스트2</div>
        <div style={{ height: "300px" }}>리스트3</div>
        <div style={{ height: "300px" }}>리스트4</div>
      </div>
    </>
  );
}

export default App;
