import Header from "../../components/header/header";
import "./styles.css";
import {FaLinkedin, FaGithub, FaFileDownload} from "react-icons/fa";
import {CircleText} from "circle-text-component/src";

export default function Home() {
  function hoverImgs(key: number) {
    const imgstags = document.querySelectorAll(".imgskill");
    imgstags[key]?.setAttribute(
      "title",
      imgstags[key]?.getAttribute("alt") || ""
    );
    imgstags[key]?.classList.add("skillsHover");
  }

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
                <CircleText
                  textColor="#fff"
                  text="Dowload cv - Download cv"
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
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 style={{color: "#fff", fontSize: 50}}>Minhas Skills</h1>
          </div>
          <div className="box-skills">
            <h2>Back-end</h2>
            <br />
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
              <img
                onMouseMove={() => hoverImgs(0)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[0]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=nodejs"
                alt="nodejs"
              />
              <img
                onMouseMove={() => hoverImgs(1)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[1]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=express"
                alt="express"
              />
              <img
                onMouseMove={() => hoverImgs(2)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[2]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=prisma"
                alt="prisma"
              />
              <img
                onMouseMove={() => hoverImgs(3)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[3]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=graphql"
                alt="graphql"
              />
              <img
                onMouseMove={() => hoverImgs(4)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[4]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=nest"
                alt="nestjs"
              />
              <img
                onMouseMove={() => hoverImgs(5)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[5]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=postgres"
                alt="postgreSql"
              />
              <img
                onMouseMove={() => hoverImgs(6)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[6]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=mysql"
                alt="MySql"
              />
              <img
                onMouseMove={() => hoverImgs(7)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[7]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=mongodb"
                alt="mongoDb"
              />
              <img
                onMouseMove={() => hoverImgs(8)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[8]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=firebase"
                alt="firebase"
              />
              <img
                onMouseMove={() => hoverImgs(9)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[9]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=docker"
                alt="docker"
              />
              <img
                onMouseMove={() => hoverImgs(10)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[10]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=azure"
                alt="azure"
              />
              <img
                onMouseMove={() => hoverImgs(11)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[11]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=aws"
                alt="Aws"
              />
              <img
                onMouseMove={() => hoverImgs(12)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[12]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=typescript"
                alt="typescript"
              />
            </div>
          </div>
          <div className="box-skills">
            <h2>Front-end</h2>
            <br />
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
              <img
                onMouseMove={() => hoverImgs(13)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[13]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=typescript"
                alt="typescript"
              />
              <img
                onMouseMove={() => hoverImgs(14)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[14]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=js"
                alt="js"
              />
              <img
                onMouseMove={() => hoverImgs(15)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[15]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=html"
                alt="html"
              />
              <img
                onMouseMove={() => hoverImgs(16)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[16]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=css"
                alt="css"
              />
              <img
                onMouseMove={() => hoverImgs(17)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[17]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=react"
                alt="reactjs / Native"
              />
              <img
                onMouseMove={() => hoverImgs(18)}
                onMouseLeave={() => {
                  document
                    .querySelectorAll(".imgskill")[18]
                    ?.classList.remove("skillsHover");
                }}
                className="imgskill"
                style={{width: "70px"}}
                src="https://skillicons.dev/icons?i=figma"
                alt="figma"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
