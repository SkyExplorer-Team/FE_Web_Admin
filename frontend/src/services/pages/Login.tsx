import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import brandLogo from '..//../assets/images/Brand_Logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/LoginStyle.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
                    <div className="col-12 py-3 text-end logoContainer" >
                    <img
                        src={brandLogo}
                        alt="Logo"
                        className="img-fluid"
                        style={{ backgroundSize: "cover", width: "116px", height: "24px"}}
                      />
                    </div>
                    <div className="col-12 py-3">
                    <Card.Title className="signInLabel fw-semibold fs-3">Sign In</Card.Title>
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
                        <Form.Group controlId="formPassword" className="py-2">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            className="my-1"
                            type="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                        <div className="forgetPassword py-3"><Link to="/forgot-password">Forgot Password?</Link></div>
                        <Button
                          variant="primary"
                          type="button"
                          onClick={handleLogin}
                          className="btn btn success mt-3 my-3"
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
