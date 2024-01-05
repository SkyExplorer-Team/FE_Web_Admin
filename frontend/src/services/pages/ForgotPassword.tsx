import { Card, CardBody, Container, Form } from "react-bootstrap";
import "../styles/ForgotPasswordStyle.css";
import SkyExploreLogo from "../../assets/sky-explre-logo.svg";

export default function ForgotPassword() {
  return (
    <div className="wrapper">
      <Container>
        <Card className="card-box">
          <CardBody>
            <div className="row">
              <div className="col img-col">
                <img
                  src="https://i.ibb.co/xMPCMJZ/Frame-427320746.png"
                  alt=""
                  className="imageLoginFirstColumn img-fluid"
                  style={{ backgroundSize: "cover", width: "100%" }}
                />
              </div>
              <div className="col body-col">
                <div className="wrapper-logo">
                  <img src={SkyExploreLogo} alt="" />
                </div>
                <hr className="dashed" />
                <Card.Title className="title-card">Forgot Password</Card.Title>
                <Card.Subtitle className="subtitle-card">
                  Enter your email address below, and we'll send you a link to
                  reset your password.
                </Card.Subtitle>
                <Form className="email-form">
                  <Form.Group controlId="formUsername">
                    <label className="label-email">Email</label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Email"
                      className="input-email"
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
