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
    const element = document.querySelector(".iframe");
    if (key === "right") {
      if (current < projects.length - 1) {
        element?.setAttribute(
          "style",
          "transform: translateX(-100%); transition: 0.7s ease;"
        );
        setTimeout(() => {
          setCurrent(current + 1);
        }, 500);
      }
      return;
    }
    if (key === "left") {
      if (current !== 0) {
        element?.setAttribute(
          "style",
          "transform: translateX(100%); transition: 0.7s ease;"
        );
        setTimeout(() => {
          return setCurrent(current - 1);
        }, 500);
      }
      return;
    }
  }

  return (
    <div className="container-carrossel">
      <button onClick={() => handleCarrosel("left")} className="btn-arrow-left">
        {"<"}
      </button>
      <div
        className="scroll"
        {...props}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            cursor: "pointer",
            width: "100%",
          }}
        >
          <h2 className="titleProject">{projects[current].title}</h2>
          <p className="subtitleProject">{projects[current].subtitle}</p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <a target="_blank" href={projects[current].github}>
              <FaGithub size={50} color="#8A7BF1"></FaGithub>
            </a>
          </div>
          <img
            key={projects[current].key}
            src={projects[current].src}
            className="iframe"
          ></img>
        </div>
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
