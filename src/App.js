import "./App.css";
import { UseFadeIn } from "./hooks";

const App = () => {
  const fadeInH1 = UseFadeIn(1, 2);
  const fadeInP = UseFadeIn(5, 6);

  return (
    <>
      <h1 {...fadeInH1}>hi!</h1>
      <p {...fadeInP}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
        voluptatem, assumenda explicabo dignissimos ea veniam facere voluptatum
        eaque inventore optio autem amet id repudiandae qui, in rem sed
        perferendis sunt!
      </p>
    </>
  );
};

export default App;
