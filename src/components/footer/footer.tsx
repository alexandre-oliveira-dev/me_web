import {Col, Row, Typography} from "antd";
import "./style.css";
import {MdEmail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import Title from "antd/es/typography/Title";

export default function Footer() {
  return (
    <footer className="footer">
      <Col>
        <Row style={{alignItems: "center", gap: 10, justifyContent: "center"}}>
          <Title style={{color: "#fff"}} level={3}>
            Contatos
          </Title>
        </Row>
        <Col className="box-contacts-footer">
          <Row style={{alignItems: "center", gap: 10}}>
            <a
              className="linkedin"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "silver",
              }}
              href="https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/"
            >
              <BsLinkedin
                className="iconLinkedin"
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/")
                }
                size={30}
              ></BsLinkedin>{" "}
              Linkedin
            </a>
          </Row>
          <br />
          <Row style={{alignItems: "center", gap: 10}}>
            <MdEmail color="silver" size={30}></MdEmail>
            <Typography.Text
              copyable
              style={{
                color: "silver",
              }}
            >
              alexandredev.frontend@gmail.com
            </Typography.Text>
          </Row>
        </Col>
        <br />
        <Row style={{alignItems: "center", gap: 10, justifyContent: "center"}}>
          <p
            style={{
              color: "silver",
            }}
          >
            {" "}
            ©️copyright - Todos direitos reservados à{" "}
            <a
              target="_blank"
              style={{color: "silver", textDecoration: "underline"}}
              href="https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/"
            >
              Alexandre
            </a>
            .
          </p>
        </Row>
      </Col>
    </footer>
  );
}
