import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {  Container, Form, Button, Card } from "react-bootstrap";
import brandLogo from '..//../assets/images/Brand_Logo.svg';
import UnregisteredEmailModal from "../../components/UnregisteredEmailModal";
import handleBlurUsernameInput from "../utils/HandleBlurUsernameInput";
import "../styles/LoginStyle.css";
import "../styles/index.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [inputBorderEmail, setInputBorderEmail] = useState("");
  const [inputBorderPassword, setInputBorderPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailNotFound, setIsEmailNotFound] = useState(true);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const handleLogin = () => {
    console.log(`Login with username: ${username} and password: ${password}`);
  };

  return (
    <div className="wrapper">
      <Container>
        <Card className="card-box">
          <Card.Body className="p-0">
            <div className="row">
              <div className="col firstColumnCardLogin">
                <img
                  src="https://i.ibb.co/xMPCMJZ/Frame-427320746.png"
                  alt=""
                  className="imageLoginFirstColumn img-fluid"
                  style={{ backgroundSize: "cover", width: "100%" }}
                />
              </div>
              <div className="col secondColumnCardLogin">
                  <div className="row">
                    <div className="col-12 pb-3 text-end logoContainer" >
                    <img src={brandLogo} alt="Logo" />
                    </div>
                    <div className="col-12 py-2 align-self-end">
                    <Card.Title className="fw-semibold fs-2">Sign In</Card.Title>
                      <Form className="form">
                        <Form.Group controlId="formUsername">
                          <Form.Label>
                            Email
                          </Form.Label>
                          <Form.Control
                            className={`my-1 ${username ? inputBorderEmail : ''}`}
                            type="email"
                            placeholder="Enter Your Email"
                            onBlur={(e) => handleBlurUsernameInput(e.target.value, setUsername, setInputBorderEmail, setIsEmailValid)}
                          />
                        </Form.Group>
                          <p style={(username === '' || isEmailValid) ? { visibility: 'hidden' } : { display: 'block' }} className="text-danger fw-normal lh-1 mb-2">Please enter a valid email address.</p>
                        <Form.Group controlId="formPassword" className="passwordInput">
                          <Form.Label>Password</Form.Label>
                          <div className="input-group">
                            <Form.Control
                              className={isPasswordValid ? inputBorderPassword : ''}
                              type={isPasswordVisible ? 'text' : 'password'}
                              placeholder="Enter Your Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                             <div className={`input-group-append ${isPasswordValid ? inputBorderPassword : ''}`}>
                              <span onClick={togglePasswordVisibility}>
                                {isPasswordVisible ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                              </span>
                            </div>
                          </div>
                        </Form.Group>
                        <p style={!isPasswordValid ? { display: 'block' } : { visibility: 'hidden' }} className="text-danger fw-normal lh-1 mb-2">Whoops! Incorrect password. Please try again.</p>
                        <div className="forgetPassword pt-2 pb-4"><Link to="/forgot-password">Forgot Password?</Link></div>
                        <Button
                          variant="primary"
                          type="button"
                          onClick={handleLogin}
                          className="btn btn success"
                          disabled={!isEmailValid}
                        >
                          Sign In
                        </Button>
                      </Form>
                    </div>
                  </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <UnregisteredEmailModal
        show={isEmailNotFound}
        onHide={() => setIsEmailNotFound(false)}
      />
    </div>
  );
}

export default Login;