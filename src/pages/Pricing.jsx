import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <Card className="border-0 shadow-lg p-md-5 p-4 bg-white overflow-hidden position-relative hover-elevate">
              <Card.Body className="position-relative z-1">
                <h2 className="display-5 fw-bold mb-4 display-title">Pricing & Custom Solutions</h2>
                <p className="lead text-muted-foreground mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                  We're currently tailoring our plans to provide the best value for your practice. 
                  Please reach out to us for a custom demo and detailed information.
                </p>
                <div className="row g-4 mb-5 text-start justify-content-center">
                  <div className="col-md-4">
                    <div className="d-flex align-items-center p-4 bg-gray rounded-4 h-100 border border-white soft-shadow">
                      <div className="feature-icon-wrapper blue mb-0 me-3 flex-shrink-0">
                        <FiPhone />
                      </div>
                      <div>
                        <div className="text-muted small fw-bold text-uppercase mb-1">
                          Call Us
                        </div>
                        <a
                          href="tel:+916369126439"
                          className="h5 mb-0 fw-bold text-decoration-none text-dark"
                        >
                          63691 26439
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="d-flex align-items-center p-4 bg-gray rounded-4 h-100 border border-white soft-shadow">
                      <div className="feature-icon-wrapper teal mb-0 me-3 flex-shrink-0">
                        <FiMail />
                      </div>
                      <div>
                        <div className="text-muted small fw-bold text-uppercase mb-1">
                          Email Us
                        </div>
                        <a
                          href="mailto:connect@forgeash.in"
                          className="h5 mb-0 fw-bold text-decoration-none text-dark"
                        >
                          connect@forgeash.in
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="d-flex align-items-center p-4 bg-gray rounded-4 h-100 border border-white soft-shadow" style={{ borderLeft: '4px solid #25D366 !important' }}>
                      <div className="feature-icon-wrapper mb-0 me-3 flex-shrink-0" style={{ backgroundColor: '#e6f8ef', color: '#25D366' }}>
                        <FaWhatsapp />
                      </div>
                      <div>
                        <div className="text-muted small fw-bold text-uppercase mb-1">
                          WhatsApp
                        </div>
                        <a
                          href="https://wa.me/916369126439?text=Hi%2C%20I'd%20like%20to%20book%20a%20demo%20for%20the%20dental%20software."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h5 mb-0 fw-bold text-decoration-none text-dark"
                        >
                          Book Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Button
                    as={Link}
                    to="/"
                    variant="primary"
                    size="lg"
                    className="px-5"
                  >
                    Return Home
                  </Button>
                  <Button
                    as="a"
                    href="https://wa.me/916369126439?text=Hi%2C%20I'd%20like%20to%20book%20a%20demo%20for%20the%20dental%20software."
                    target="_blank"
                    variant="outline-primary"
                    size="lg"
                    className="px-5 d-flex align-items-center justify-content-center"
                  >
                    <FaWhatsapp className="me-2" /> Book a Demo
                  </Button>
                </div>

                <div className="mt-5 pt-4 border-top">
                  <p className="text-muted-foreground mb-0 small">
                    Thank you for your interest. We'll be launching our new
                    pricing structure very soon.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      <style>{`
        .bg-gray {
          background-color: #f9fafb;
        }
        .rounded-4 {
          border-radius: 1.25rem;
        }
        .z-1 {
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default Pricing;
