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

  const Box = () => {
    return <div className="box-contact"></div>;
  };

  return (
    <header className="header-component">
      <div className="logo">
        <h1>{"</>"}</h1>
      </div>
      <div className="buttons-list">
        <button>Inicio</button>
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
      <div className="contact-me">
        <button className="contactmebutton">Contatos</button>
        <Box></Box>
      </div>
    </header>
  );
}
