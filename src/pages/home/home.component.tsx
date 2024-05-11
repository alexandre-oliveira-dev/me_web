import Header from "../../components/header/header";
import "./styles.css";
import {FaLinkedin, FaGithub, FaFileDownload} from "react-icons/fa";
import CircleText from "../../components/circleText";

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
                  donwload.href = "src/assets/cv - alexandre.pdf";
                  donwload.download = "Cv_Alexandre.pdf";
                  donwload.click();
                }}
              >
                <CircleText></CircleText>
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
        <section className="section-2">
          <div
            style={{
              width: "100%",
              height: "auto",
              padding: "40px 0 0 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{color: "#fff", fontSize: 50}}>Minhas Skills</h1>
          </div>
          <div className="box-skills">
            <h2>Back-end</h2>
            <br />
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=nodejs"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=express"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=prisma"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=graphql"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=nest"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=postgres"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=mysql"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=mongodb"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=firebase"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=docker"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=azure"
                alt="skills"
              />
              <img
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=aws"
                alt="skills"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
