import { useCallback, useRef, useState } from "react";
import { MultipleList } from "react-infinity-window";

const TEST_DATA = [
  { title: "title1", content: "content1" },
  { title: "title2", content: "content2" },
  { title: "title3", content: "content3" },
  { title: "title4", content: "content4" },
  { title: "title5", content: "content5" },
  { title: "title6", content: "content6" },
];

function App() {
  const containerRef = useRef(null);
  const itemHeight = 50;
  const totalItems = 1000;
  const bufferSize = 5;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(bufferSize);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      const start = Math.floor(scrollTop / itemHeight);
      const end = start + Math.ceil(clientHeight / itemHeight) + bufferSize;

      setStartIndex(Math.max(0, start));
      setEndIndex(Math.min(totalItems, end));
    }
  }, []);

  return (
    <>
      {/* <MultipleList />
      <div style={{ height: "100vh", backgroundColor: "#bfc928" }}>
        꽉 차는 컨테이너
      </div>
      <div style={{ height: "300px", backgroundColor: "#8a4040" }}>
        리스트 1
      </div>
      <div style={{ height: "300px", backgroundColor: "#999999" }}>
        리스트 2
      </div>
      <div style={{ height: "300px", backgroundColor: "#8a7e26" }}>
        리스트 3
      </div>
      <div style={{ height: "300px", backgroundColor: "#999999" }}>
        리스트 4
      </div> */}
      <div
        ref={containerRef}
        style={{ maxHeight: "400px", overflowY: "auto" }}
        onScroll={handleScroll}
      >
        <div
          style={{
            height: `${itemHeight * totalItems}px`,
            position: "relative",
          }}
        >
          {Array.from({ length: endIndex - startIndex }, (_, index) => (
            <div
              key={startIndex + index}
              style={{
                position: "absolute",
                top: `${(startIndex + index) * itemHeight}px`,
                height: `${itemHeight}px`,
                width: "100%",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Item {startIndex + index}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
