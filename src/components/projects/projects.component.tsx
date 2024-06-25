/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from "react";
import "./style.css";
import dash from "./imgs/dash.png";
import barber from "./imgs/barber.png";
import takeflix from "./imgs/takeflix.png";
import {FaGithub} from "react-icons/fa";
import {Image} from "antd";

type ReactProps = React.PropsWithoutRef<React.AllHTMLAttributes<any>>;

export default function ProjectsComponent({...props}: ReactProps) {
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      key: 1,
      github: "https://github.com/alexandre-oliveira-dev/takeFlix_web",
      width: "100%",
      title: "TakeFlix",
      subtitle:
        " Site de filmes e séries, consumindo uma api pública do TheMovieDb.",
      src: takeflix,
      bacColor: "#E23333",
    },
    {
      key: 2,
      github: "https://github.com/alexandre-oliveira-dev/energyBillReader_web",
      width: "100%",
      title: "Energi bill reader",
      subtitle: "Sistema de leitrura de fatura de energia, com dashboard.",
      src: dash,
      bacColor: "#001529",
    },
    {
      key: 3,
      github: "https://github.com/alexandre-oliveira-dev/BarberApp_web",
      width: "100%",
      title: "Barber app",
      subtitle:
        "Web app de agendamento de clientes para salões de cabelereiro.",
      src: barber,
      bacColor: "#1B1C29",
    },
  ];

  function handleCarrosel(key: string) {
    const element = document.querySelector("#scroll");
    const scrollWidthBySlide = (element?.scrollWidth || 1) / projects.length;

    if (key === "right" && element) {
      if (current >= projects.length - 1) return;
      const n = current + 1;
      setCurrent(n);

      element.scrollTo({
        left: scrollWidthBySlide * n,
        behavior: "smooth",
      });
    }
    if (key === "left" && element) {
      if (current === 0) return;

      const n = current === projects.length ? current - 2 : current - 1;
      setCurrent(n);

      element.scrollTo({
        left: scrollWidthBySlide * n,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="container-carrossel">
      <button onClick={() => handleCarrosel("left")} className="btn-arrow-left">
        {"<"}
      </button>
      <div {...props} id="scroll">
        {projects.map(item => {
          return (
            <div
              className="scrollItem"
              style={{backgroundColor: item.bacColor}}
            >
              <h2 className="titleProject">{item.title}</h2>
              <p className="subtitleProject">{item.subtitle}</p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <a target="_blank" className="githubicon" href={item.github}>
                  <FaGithub size={50} color="#fff"></FaGithub>
                </a>
                <p className="github-text">Visualizar repositório</p>
              </div>
              <Image key={item.key} src={item.src} className="iframe"></Image>{" "}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => handleCarrosel("right")}
        className="btn-arrow-right"
      >
        {">"}
      </button>
    </div>
  );
}
