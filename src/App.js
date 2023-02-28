import "./App.css";
import { UseAxios } from "./hooks";

const App = () => {
  const { loading, data, error, refetch } = UseAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  // console.log(`Loading:${loading}\nError:${error}\nData:${JSON.stringify(data)}`);

  return (
    <div style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
