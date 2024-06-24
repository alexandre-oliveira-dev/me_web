/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from "react";
import "./style.css";
import dash from "./imgs/dash.png";
import barber from "./imgs/barber.png";
import takeflix from "./imgs/takeflix.png";
import {FaGithub} from "react-icons/fa";

type ReactProps = React.PropsWithoutRef<React.AllHTMLAttributes<any>>;

export default function ProjectsComponent({...props}: ReactProps) {
  const [current, setCurrent] = useState(0);
  console.log("🚀 ~ ProjectsComponent ~ current:", current);

  const projects = [
    {
      key: 1,
      github: "https://github.com/alexandre-oliveira-dev/takeFlix_web",
      width: "100%",
      title: "TakeFlix",
      subtitle:
        " Site de filmes e séries, consumindo uma api pública do TheMovieDb.",
      src: takeflix,
    },
    {
      key: 4,
      github: "https://github.com/alexandre-oliveira-dev/energyBillReader_web",
      width: "100%",
      title: "Energi bill reader",
      subtitle: "Sistema de leitrura de fatura de energia, com dashboard.",
      src: dash,
    },

    /*  {
      key: 2,
      github:'',
      width: "100%",
      title: "Receitas web",
      subtitle: " Site de receitas gastronômicas.",
      src: "https://receitas-web.onrender.com/receita/8",
    }, */
    {
      key: 3,
      github: "https://github.com/alexandre-oliveira-dev/BarberApp_web",
      width: "100%",
      title: "Barber app",
      subtitle:
        "Web app de agendamento de clientes para salões de cabelereiro.",
      src: barber,
    },
  ];

  function handleCarrosel(key: string) {
    const element = document.querySelector("#scroll");
    const scrollWidthBySlide = (element?.scrollWidth || 1) / projects.length;

    if (key === "right" && element) {
      if (current >= projects.length -1) return;
      const n = current === 0 ? current + 1 : current + 1;
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
      <div
        {...props}
        id="scroll"
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 20,
        }}
      >
        {projects.map(item => {
          return (
            <div
              className="scroll"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <h2 className="titleProject">{item.title}</h2>
              <p className="subtitleProject">{item.subtitle}</p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <a target="_blank" href={item.github}>
                  <FaGithub size={50} color="#8A7BF1"></FaGithub>
                </a>
              </div>
              <img key={item.key} src={item.src} className="iframe"></img>
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
