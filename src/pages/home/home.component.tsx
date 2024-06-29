import Header from "../../components/header/header";
import "./styles.css";
import {FaLinkedin, FaGithub, FaFileDownload} from "react-icons/fa";
import {CircleText} from "circle-text-component/src";
import {skilsBackEnd, skilsFrontEnd} from "./skils";
import ProjectsComponent from "../../components/projects/projects.component";
import Footer from "../../components/footer/footer";
import About from "../../components/about";

export default function Home() {
  return (
    <>
      <div className="container-home">
        <Header></Header>
        <section className="section-home">
          <div className="box">
            <div style={{width: "min-content"}} className="box-text-me">
              <h1>Olá, sou o</h1>
              <h1>Alexandre</h1>
              <br />
              <p style={{color: "#fff", fontSize: 20}}>
                Desenvolvedor de software pleno. <br /> Amante de tecnologia, com
                experiência no ramo de Bilhetagem eletrônica e E-commerces.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="box-image">
              <button
                id="animationSvg"
                style={{
                  border: 0,
                  backgroundColor: "transparent",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  const donwload = document.createElement("a");
                  donwload.href = "/Cv_Alexandre.pdf";
                  donwload.download = "Cv_Alexandre.pdf";
                  donwload.click();
                }}
              >
                <CircleText
                  textColor="#fff"
                  text="Dowload cv - Download cv -"
                ></CircleText>
                <div className="dowload-cv"></div>
                <div
                  style={{
                    display: "grid",
                    placeContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#8873F0",
                    position: "absolute",
                  }}
                >
                  <FaFileDownload size={30} color="#fff"></FaFileDownload>
                </div>
              </button>
            </div>
            <div style={{display: "grid"}} className="social-icons">
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
        <About></About>
        <section className="section-2">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h1 style={{color: "#fff", fontSize: 50}}>Técnologias</h1>
          </div>
          <div className="box-skills">
            <h2>Back-end</h2>
            <br />
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 40,
              }}
            >
              {skilsBackEnd.map(item => {
                return (
                  <img
                    key={item.key}
                    className="imgskill"
                    style={{width: "70px"}}
                    src={item.url}
                    alt={item.key}
                  />
                );
              })}
            </div>
          </div>
          <div className="box-skills">
            <h2>Front-end</h2>
            <br />
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 40,
              }}
            >
              {skilsFrontEnd.map(item => {
                return (
                  <img
                    key={item.key}
                    className="imgskillFrontend"
                    style={{width: "70px"}}
                    src={item.url}
                    alt={item.key}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section className="section-2">
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "80px",
              justifyContent: "center",
            }}
          >
            <h1 style={{color: "#fff", fontSize: 50}}>Projetos</h1>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProjectsComponent className="skils-container"></ProjectsComponent>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}
