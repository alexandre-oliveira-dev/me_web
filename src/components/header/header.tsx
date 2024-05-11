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
        <a href="">Inicio</a>
        <a href="">Projejtos</a>
      </div>
      <div className="contact-me">
        <button className="contactmebutton">Contatos</button>
      </div>
    </header>
  );
}
