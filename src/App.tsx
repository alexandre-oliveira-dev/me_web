import {BrowserRouter} from "react-router-dom";
import RouterApp from "./routes/router";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterApp></RouterApp>
      </BrowserRouter>
    </>
  );
}

export default App;
