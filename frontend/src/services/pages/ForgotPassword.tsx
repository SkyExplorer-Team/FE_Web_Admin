import { useState } from "react";
import { Card, Button, Container, Form } from "react-bootstrap";
import "../styles/ForgotPasswordStyle.css";
import UnregisteredEmailModal from "../../components/UnregisteredEmailModal";
import handleBlurUsernameInput from "../utils/HandleBlurUsernameInput";
import SkyExploreLogo from "../../assets/images/Brand_Logo.svg";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [inputBorderEmail, setInputBorderEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailNotFound, setIsEmailNotFound] = useState(true);
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
                  <div className="col-12 pb-3 text-end logoContainer">
                    <img src={SkyExploreLogo} alt="Logo" />
                  </div>
                  <div className="col-12 py-2 align-self-end">
                    <Card.Title className="fw-semibold fs-2 mb-4">
                      Forgot Password
                    </Card.Title>
                    <Card.Subtitle className="subtitle-card">
                      Enter your email address below, and we'll send you a link
                      to reset your password.
                    </Card.Subtitle>
                    <Form className="form">
                      <Form.Group controlId="formUsername" className="my-1">
                        <label className="label-email">Email</label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Your Email"
                          className={`input-email my-1 ${
                            username ? inputBorderEmail : ""
                          }`}
                          onBlur={(e) =>
                            handleBlurUsernameInput(
                              e.target.value,
                              setUsername,
                              setInputBorderEmail,
                              setIsEmailValid
                            )
                          }
                        />
                      </Form.Group>
                      <p
                        style={
                          username === "" || isEmailValid
                            ? { visibility: "hidden" }
                            : { display: "block" }
                        }
                        className="invalid-information fw-normal lh-1 mb-2"
                      >
                        Please enter a valid email address.
                      </p>
                      <div className="my-5"></div>
                      <Button
                        variant="success"
                        type="button"
                        onClick={handleLogin}
                        className="btn btn success mt-5"
                        disabled={!isEmailValid}
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
      <UnregisteredEmailModal
        show={isEmailNotFound}
        onHide={() => setIsEmailNotFound(false)}
      />
    </div>
  );
}
