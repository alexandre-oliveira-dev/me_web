import "./styles.css";
export default function Header() {
  return (
    <header className="header-component">
      <div className="logo">
        <h1>{"</>"}</h1>
      </div>
      <div className="buttons-list">
        <a href="">Inicio</a>
        <a href="">Serviços</a>
        <a href="">Contate-me</a>
      </div>
      <div className="contact-me">
        <button className="contactmebutton">Contatos</button>
      </div>
    </header>
  );
}
