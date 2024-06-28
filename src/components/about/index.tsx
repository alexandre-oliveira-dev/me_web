import Title from "antd/es/typography/Title";
import "./style.css";
import Paragraph from "antd/es/typography/Paragraph";

export default function About() {
  const meBrithdayYear = new Date().getFullYear() - 1999;
  return (
    <section className="container-about">
      <Title level={1}>Sobre mim</Title>
      <Paragraph className="paragraph">
        Olá 👋 sou o Alexandre, tenho {meBrithdayYear} anos, sou desenvolvedor
        de software pleno. <br />
        Minhas habilidades incluem o desenvolvimento de aplicações web
        utilizando React JS / Next Js + TypeScript, Redux, styled components,
        hooks, Context API, e AWS (S3, cognito, lambdas etc.). Além disso, tenho
        experiência na construção de APIs REST e Graphql utilizando Nest js,
        Node.js e TypeScript. Conhecimentos básicos em automação com Docker.
        Tenho conhecimento em desenvolvimento com diversos bancos de dados, como
        MySQL, PostgreSQL, MongoDB e Firebase, o que me permite lidar com
        diferentes necessidades de armazenamento e manipulação de dados.
      </Paragraph>
    </section>
  );
}
