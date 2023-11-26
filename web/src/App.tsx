import { MultipleList } from "react-infinity-window";

// create dummy data arry with 50 items
const data = Array.from({ length: 50 }, (_, index) => `데이터${index}`);

function App() {
  return (
    <>
      <MultipleList
        height={400}
        itemHeight={50}
        data={data}
        scroll={2}
        bufferSize={5}
        content={(data) => <div>Item {data}</div>}
      />
    </>
  );
}

export default App;
