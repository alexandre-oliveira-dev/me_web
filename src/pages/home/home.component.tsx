import Header from "../../components/header/header";
import "./styles.css";
import {FaLinkedin, FaGithub, FaFileDownload} from "react-icons/fa";

export default function Home() {
  /*   let deg = 0;
  for (let i = 1; i <= 10; i++) {
    const div = document.getElementById("text-circle p:nth-child(" + i + ")");
    if (div) div.style.transform = `rodate(${90}deg)`;
    deg = deg + 6;
  } */
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
              <button
                style={{
                  border: 0,
                  backgroundColor: "transparent",
                  position: "relative",
                  display: "grid",
                  placeContent: "center",
                }}
              >
                <div
                  id="text-circle"
                  style={{
                    margin: "auto",
                    position: "absolute",
                    height: "200px",
                    width: "200px",
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  <p>d</p>
                  <p>o</p>
                  <p>w</p>
                  <p>n</p>
                  <p>l</p>
                  <p>o</p>
                  <p>a</p>
                  <p>d</p>
                  <p>c</p>
                  <p>v</p>
                </div>
                <div className="dowload-cv"></div>
                <div
                  style={{
                    display: "grid",
                    placeContent: "center",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "#8873F0",
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    top: "50%",
                  }}
                >
                  <FaFileDownload size={30} color="#fff"></FaFileDownload>
                </div>
              </button>
            </div>
            <div style={{display: "grid"}}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/"
              >
                <FaLinkedin size={50} color="#8A7BF1"></FaLinkedin>
              </a>
              <br />
              <a
                target="_blank"
                href="https://github.com/alexandre-oliveira-dev"
              >
                <FaGithub size={50} color="#8A7BF1"></FaGithub>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
