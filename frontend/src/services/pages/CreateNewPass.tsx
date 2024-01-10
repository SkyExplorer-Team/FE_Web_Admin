import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import SkyExploreLogo from "../../assets/images/Brand_Logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CreateNewPassStyle.css";

interface CreateNewPassProps {}

const CreateNewPass: React.FC<CreateNewPassProps> = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);
  const [passwordMismatchError, setPasswordMismatchError] = useState<boolean>(false);
  const [passwordLengthError, setPasswordLengthError] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordLengthError(newPassword.length < 8 && newPassword.length > 0);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (password !== newConfirmPassword) {
      setPasswordMismatchError(true);
    } else {
      setPasswordMismatchError(false);
    }
  };

  const handleSaveNewPass = () => {
    if (password !== confirmPassword || password.length < 8) {
      setPasswordMismatchError(password !== confirmPassword);
      setPasswordLengthError(password.length < 8);
    } else {
      setPasswordMismatchError(false);
      setPasswordLengthError(false);
      // Proceed with saving the new password or any other logic
      console.log("Password saved successfully!");
    }
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
                  <div className="col-12 pb-3 text-end logoContainer">
                    <img src={SkyExploreLogo} alt="Logo"/>
                  </div>
                  <div className="col-12 py-2 align-self-end">
                    <Card.Title className="fw-semibold fs-2">
                      Create New Password
                    </Card.Title>
                    <Card.Subtitle
                      className="my-2 fw-normal mt-2"
                      style={{
                        color: "var(--Neutral-500, #677084)",
                      }}
                    >
                      Create a strong password to keep your information safe.
                    </Card.Subtitle>
                    <Form className="form">
                      <Form.Group
                        controlId="formPassword"
                        className="passwordInput py-2"
                      >
                        <Form.Label>Password</Form.Label>
                        <div className="input-group">
                          <Form.Control
                            className={`my-1 ${
                               passwordLengthError
                                ? "is-invalid"
                                : ""
                            }`}
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={handlePasswordChange}
                          />
                          <div
                            className={`input-group-append my-1 ${
                               passwordLengthError
                                ? "wrong-input"
                                : ""
                            }`}
                          >
                            <span
                              onClick={togglePasswordVisibility}
                              style={{ cursor: "pointer" }}
                            >
                              {isPasswordVisible ? (
                                <FontAwesomeIcon icon={faEyeSlash} />
                              ) : (
                                <FontAwesomeIcon icon={faEye} />
                              )}
                            </span>
                          </div>
                        </div>
                        <p style={passwordLengthError ? { display: 'block' } : { visibility: 'hidden' }} className="invalid-information fw-normal mb-0">Password too short. Please use at least 8 characters.</p>
                      </Form.Group>
                      <Form.Group
                        controlId="formConfirmPassword"
                        className="passwordInput py-2"
                      >
                        <Form.Label>Confirm Your Password</Form.Label>
                        <div className="input-group">
                          <Form.Control
                            className={`my-1 ${
                              passwordMismatchError ? "is-invalid" : ""
                            }`}
                            type={
                              isConfirmPasswordVisible ? "text" : "password"
                            }
                            placeholder="Confirm Your Password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                          />
                          <div
                            className={`input-group-append my-1 ${
                              passwordMismatchError ? "wrong-input" : ""
                            }`}
                          >
                            <span
                              onClick={toggleConfirmPasswordVisibility}
                              style={{ cursor: "pointer" }}
                            >
                              {isConfirmPasswordVisible ? (
                                <FontAwesomeIcon icon={faEyeSlash} />
                              ) : (
                                <FontAwesomeIcon icon={faEye} />
                              )}
                            </span>
                          </div>
                        </div>
                        <p style={passwordMismatchError ? { display: 'block' } : { visibility: 'hidden' }} className="invalid-information fw-normal lh-1 mb-0">Please make sure your password match.</p>
                      </Form.Group>
                      <Button
                        variant="success"
                        type="button"
                        onClick={handleSaveNewPass}
                        className="btn btn-primary"
                        disabled={passwordMismatchError || passwordLengthError}
                      >
                        Save
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
};

export default CreateNewPass;