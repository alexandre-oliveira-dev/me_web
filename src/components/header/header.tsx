import "./styles.css";
export default function Header() {
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
          Projejtos
        </button>
      </div>
    </header>
  );
}
