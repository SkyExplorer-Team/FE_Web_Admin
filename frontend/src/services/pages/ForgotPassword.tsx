import { useState } from "react";
import { Card, Button, Container, Form } from "react-bootstrap";
import "../styles/ForgotPasswordStyle.css";
import SkyExploreLogo from "../../assets/images/Brand_Logo.svg";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const handleLogin = () => {
    console.log(`username: ${username}`);
  };
  return (
    <div className="wrapper">
      <Container>
        <Card className="card-box">
          <div className="card-body">
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
                <div className="row">
                  <div className="col-12 pb-3 text-end logoContainer" >
                    <img src={SkyExploreLogo} alt="Logo" />
                  </div>
                  <div className="col-12 py-2 align-self-end">
                    <Card.Title className="fw-semibold fs-2 mb-4">Forgot Password</Card.Title>
                    <Card.Subtitle className="subtitle-card">
                      Enter your email address below, and we'll send you a link to
                      reset your password.
                    </Card.Subtitle>
                    <Form className="email-form">
                      <Form.Group controlId="formUsername" className="mb-5">
                        <label className="label-email">Email</label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Your Email"
                          className="input-email mb-5"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Form.Group>
                      <div className="my-5"></div>
                      <Button
                          variant="primary"
                          type="button"
                          onClick={handleLogin}
                          className="btn btn success mt-5"
                        >
                          Send Instruction
                        </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
