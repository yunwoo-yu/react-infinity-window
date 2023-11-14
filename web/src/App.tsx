function App() {
  // 옵저버를 item마다 붙이는 건 성능 상 문제가 있을까? 리스트가 100개면 옵저버가 100개.. 음..
  // 기존 react-window는 스크롤 높이를 계산해서 element를 생성한다. 그럼 이전 데이터는 어떻게 유지를 하지

  return (
    <>
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
      </div>
    </>
  );
}

export default App;
