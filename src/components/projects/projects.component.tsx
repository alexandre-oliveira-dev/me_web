/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./style.css";
import dash from "./imgs/dash.png";
import lib from "./imgs/lib.png";

type ReactProps = React.PropsWithoutRef<React.AllHTMLAttributes<any>>;

export default function ProjectsComponent({...props}: ReactProps) {
  const projects = [
    {
      key: 1,
      width: "100%",
      title: "TakeFlix",
      subtitle:
        " Site de filmes e séries, consumindo uma api pública do TheMovieDb.",
      src: "https://takeflix-test.onrender.com/",
    },
    {
      key: 4,
      width: "100%",
      title: "Energi bill reader",
      subtitle: "Sistema de leitrura de fatura de energia, com dashboard.",
      src: dash,
    },
    {
      key: 2,
      width: "100%",
      title: "",
      subtitle: "",
      src: lib,
    },
    /*  {
      key: 2,
      width: "100%",
      title: "Receitas web",
      subtitle: " Site de receitas gastronômicas.",
      src: "https://receitas-web.onrender.com/receita/8",
    }, */
    {
      key: 3,
      width: "100%",
      title: "Barber app",
      subtitle:
        "Web app de agendamento de clientes para salões de cabelereiro.",
      src: "https://barberapp-web.onrender.com/",
    },
  ];

  return (
    <div {...props} style={{display: "flex", flexWrap: "wrap", width: "100%"}}>
      {projects.map(item => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "750px",
              marginTop: "4rem",
              alignItems: "center",
              width: item?.width,
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = item?.src)}
          >
            <h2 className="titleProject">{item.title}</h2>
            <p className="subtitleProject">{item.subtitle}</p>
            <iframe
              width={item?.width}
              height={750}
              allowFullScreen
              key={item.key}
              src={item.src}
              className="iframe"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}
