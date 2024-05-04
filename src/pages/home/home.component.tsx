import Header from "../../components/header/header";
import "./styles.css";
import me from "../../assets/me.png";

export default function Home() {
  return (
    <>
      <div className="container-home">
        <Header></Header>
        <section className="section-home">
          <div className="box">
            <div style={{width: "min-content"}}>
              <h1>Olá, sou o</h1>
              <h1>Alexandre</h1>
              <br />
              <p style={{color: "#fff", fontSize: 20}}>
                Desenvolvedor web full-stack pleno, amante de tecnologia, com
                experiência no ramo de Bilhetagem eletrônica e E-commerces.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="box-image">
              <img className="me-img" src={me} alt="alexnadre developer image" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
