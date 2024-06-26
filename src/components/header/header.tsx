import "./styles.css";
import {useState} from "react";
import {BiMenu} from "react-icons/bi";

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const MenuMobile = ({open}: {open: boolean}) => {
    return (
      <nav
        style={{display: "none"}}
        className={` ${open ? "menuMobile animateMenu" : "animateMenuReverse"}`}
      >
        <button
          className="menuItem"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Inicio
        </button>
        <button
          className="menuItem"
          onClick={() => {
            window.scrollTo({
              top: 1600,
              behavior: "smooth",
            });
          }}
        >
          Projetos
        </button>
      </nav>
    );
  };
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition !== 0) {
      document
        .querySelector(".header-component")
        ?.classList.add("header-fixed");
    } else {
      document
        .querySelector(".header-component")
        ?.classList.remove("header-fixed");
    }
  });

  return (
    <header className="header-component">
      <div className="logo">
        <h1>{"</>"}</h1>
      </div>
      <div className="buttons-list">
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Inicio
        </button>
        <button
          onClick={() => {
            window.scrollTo({
              top: 1600,
              behavior: "smooth",
            });
          }}
        >
          Projetos
        </button>
      </div>
      <MenuMobile open={collapsed}></MenuMobile>

      <button className="menuBtnMobile" onClick={() => toggleCollapsed()}>
        <BiMenu size={30} />
      </button>
    </header>
  );
}
