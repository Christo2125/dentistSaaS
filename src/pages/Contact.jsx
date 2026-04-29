import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <Card className="border-0 shadow-lg p-md-5 p-4 bg-white overflow-hidden position-relative hover-elevate">
              <Card.Body className="position-relative z-1">
                <h2 className="display-5 fw-bold mb-4 display-title">Get in Touch</h2>
                <p className="lead text-muted-foreground mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                  Have questions about DentalDash? Our team is ready to help you streamline your practice operations.
                </p>

                <div className="row g-4 mb-5 text-start justify-content-center">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-4 bg-gray rounded-4 h-100 border border-white soft-shadow">
                      <div className="feature-icon-wrapper blue mb-0 me-3 flex-shrink-0">
                        <FiPhone />
                      </div>
                      <div>
                        <div className="text-muted small fw-bold text-uppercase mb-1">Call Us</div>
                        <a href="tel:+916369126439" className="h5 mb-0 fw-bold text-decoration-none text-dark">63691 26439</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-4 bg-gray rounded-4 h-100 border border-white soft-shadow">
                      <div className="feature-icon-wrapper teal mb-0 me-3 flex-shrink-0">
                        <FiMail />
                      </div>
                      <div>
                        <div className="text-muted small fw-bold text-uppercase mb-1">Email Us</div>
                        <a href="mailto:connect@forgeash.in" className="h5 mb-0 fw-bold text-decoration-none text-dark">connect@forgeash.in</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-success-soft p-4 rounded-4 mb-5 border border-success border-opacity-10">
                   <h4 className="fw-bold mb-3 d-flex align-items-center justify-content-center">
                     <FaWhatsapp className="text-success me-2" /> Book a Demo via WhatsApp
                   </h4>
                   <p className="text-muted mb-4">The fastest way to get a personalized walkthrough of the platform.</p>
                   <Button 
                    href="https://wa.me/916369126439?text=Hi%2C%20I'd%20like%20to%20book%20a%20demo%20for%20the%20dental%20software." 
                    target="_blank"
                    variant="success" 
                    size="lg" 
                    className="px-5 py-3 fw-bold shadow-sm d-inline-flex align-items-center"
                    style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                  >
                    Start Chat Now
                  </Button>
                </div>
                
                <div className="mt-5 pt-4 border-top">
                  <p className="text-muted-foreground mb-0 small">
                    Typically responds within a few hours.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      
      <style>{`
        .bg-success-soft {
          background-color: #f0fdf4;
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

export default Contact;

