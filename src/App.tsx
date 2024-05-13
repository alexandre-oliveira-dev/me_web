import {BrowserRouter} from "react-router-dom";
import RouterApp from "./routes/router";
import InitialComponent from "./components/initialComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <InitialComponent></InitialComponent>
        <RouterApp></RouterApp>
      </BrowserRouter>
    </>
  );
}

export default App;
