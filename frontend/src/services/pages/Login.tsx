import { useState } from "react";
import {  Container, Form, Button, Card } from "react-bootstrap";
import brandLogo from '..//../assets/images/Brand_Logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/LoginStyle.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const handleLogin = () => {
    console.log(`Login with username: ${username} and password: ${password}`);
  };

  return (
    <div className="wrapper">
      <Container>
        <Card className="login-card">
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
                    <img
                        src={brandLogo}
                        alt="Logo"
                        className="img-fluid"
                        style={{ backgroundSize: "cover", width: "116px", height: "24px"}}
                      />
                    </div>
                    <div className="col-12 py-2 align-self-end">
                    <Card.Title className="fw-semibold fs-2">Sign In</Card.Title>
                      <Form className="login-form">
                        <Form.Group controlId="formUsername" className="py-2">
                          <Form.Label>
                            Email
                          </Form.Label>
                          <Form.Control
                            className="my-1"
                            type="email"
                            placeholder="Enter Your Email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="passwordInput py-2">
                          <Form.Label>Password</Form.Label>
                          <div className="input-group">
                            <Form.Control
                              className="my-1"
                              type={isPasswordVisible ? 'text' : 'password'}
                              placeholder="Enter Your Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                             <div className="input-group-append my-1">
                              <span onClick={togglePasswordVisibility}>
                                {isPasswordVisible ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                              </span>
                            </div>
                          </div>
                        </Form.Group>
                        <div className="forgetPassword pt-2 pb-4"><Link to="/forgot-password">Forgot Password?</Link></div>
                        <Button
                          variant="primary"
                          type="button"
                          onClick={handleLogin}
                          className="btn btn success"
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
    </div>
  );
}

export default Login;
