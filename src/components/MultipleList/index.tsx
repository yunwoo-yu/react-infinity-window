import { useCallback, useEffect, useRef, useState } from "react";

interface MultipleListProps<T> {
  data: T[];
  height: number;
  scroll: number;
  itemHeight: number;
  bufferSize: number;
  content: (contentData: T, index: number) => JSX.Element;
}

export const MultipleList = <T extends unknown>({
  height,
  itemHeight,
  bufferSize,
  data,
  content,
}: MultipleListProps<T>) => {
  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(
    Math.ceil(height / itemHeight) + bufferSize
  );

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      const start = Math.floor(scrollTop / itemHeight);
      const end = start + Math.ceil(clientHeight / itemHeight) + bufferSize;

      setStartIndex(Math.max(0, start));
      setEndIndex(Math.min(data.length, end));
      console.log(start, end, scrollTop, clientHeight);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ maxHeight: height, width: "100%", overflowY: "auto" }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: `${itemHeight * data.length}px`,
          position: "relative",
        }}
      >
        {data.slice(startIndex, endIndex).map((contentData, index) => (
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
            {content(contentData, startIndex + index)}
          </div>
        ))}
      </div>
    </div>
  );
};
