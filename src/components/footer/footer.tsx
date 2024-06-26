import {Col, Row} from "antd";
import "./style.css";
import {MdEmail} from "react-icons/md";
import {BsLinkedin, BsWhatsapp} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <Col>
        <Row style={{alignItems: "center", gap: 10}}>
          <BsWhatsapp
            onClick={() =>
              (window.location.href = "https://wa.me/5511994076414")
            }
            className="whats"
            color="silver"
            size={30}
          ></BsWhatsapp>
          <p
            style={{
              color: "silver",
            }}
          >
            Whatsapp
          </p>
        </Row>
        <br />
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
            Dev by{" "}
            <a
              target="_blank"
              style={{color: "silver"}}
              href="https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/"
            >
              Alexandre web developer full-stack
            </a>
          </p>
        </Row>
        <br />
        <Row style={{alignItems: "center", gap: 10}}>
          <MdEmail color="silver" size={30}></MdEmail>
          <p
            style={{
              color: "silver",
            }}
          >
            alexandredev.frontend@gmail.com
          </p>
        </Row>
      </Col>
    </footer>
  );
}
