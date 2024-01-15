import { Card, Button, Container } from "react-bootstrap";
import "../styles/CheckEmailStyle.css";
import SkyExploreLogo from "../../assets/images/Brand_Logo.svg";

export default function CheckEmail() {
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
                      Check Email
                    </Card.Title>
                    <Card.Subtitle className="subtitle-card">
                      Great! We've sent a password reset link to your email,
                      follow the step given.
                    </Card.Subtitle>
                    <div className="my-5 d-flex flex-column gap-2">
                      <Button
                        variant="primary"
                        type="button"
                        className="btn btn success"
                        id="btn-instruction"
                      >
                        Open Password
                      </Button>
                      <Button
                        variant="primary"
                        type="button"
                        className="btn btn success "
                        id="btn-instruction"
                      >
                        Request Again
                      </Button>
                    </div>
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
