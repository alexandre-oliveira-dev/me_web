import {Col, Row, Typography} from "antd";
import "./style.css";
import {MdEmail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import Title from "antd/es/typography/Title";

export default function Footer() {
  return (
    <footer className="footer">
      <Col>
        <Row style={{alignItems: "center", gap: 10}}>
          <Title style={{color: "#fff"}} level={3}>
            Contatos
          </Title>
        </Row>
        <Row style={{alignItems: "center", gap: 10}}>
          <BsLinkedin
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/")
            }
            className="linkedin"
            color="silver"
            size={30}
          ></BsLinkedin>
          <p
            style={{
              color: "silver",
            }}
          >
            <a
              target="_blank"
              style={{color: "silver"}}
              href="https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/"
            >
              Linkedin
            </a>
          </p>
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
    </footer>
  );
}
