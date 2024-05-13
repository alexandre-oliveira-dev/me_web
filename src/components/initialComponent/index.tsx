import {useEffect} from "react";
import "./style.css";

export default function InitialComponent() {
  useEffect(() => {
    document.querySelector(".initialComponent")?.classList.add("show");
  }, []);
  return (
    <div className="initialComponent">
      <h1>Alexandre Developer</h1>
    </div>
  );
}
