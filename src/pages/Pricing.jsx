import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <>
      <section className="bg-light py-5">
        <Container className="text-center py-5">
          <h1 className="display-4 fw-bold mb-3">Simple, Transparent Pricing</h1>
          <p className="lead text-muted-foreground">No hidden fees, no surprise charges. Pay for what you need.</p>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <Row className="g-4 justify-content-center">
            {/* Starter */}
            <Col lg={4} md={6}>
              <Card className="h-100 shadow-sm border p-4">
                <Card.Body className="d-flex flex-column">
                  <h4 className="fw-bold text-primary mb-2">Starter</h4>
                  <p className="text-muted-foreground mb-4">For solo practitioners and new clinics.</p>
                  <h2 className="display-5 fw-bold mb-4">$199<span className="fs-5 text-muted fw-normal">/mo</span></h2>
                  
                  <ul className="list-unstyled mb-5 flex-grow-1">
                    <li className="mb-3 border-bottom pb-2">Up to 2 Users</li>
                    <li className="mb-3 border-bottom pb-2">1 Clinic Location</li>
                    <li className="mb-3 border-bottom pb-2">Standard Support</li>
                    <li className="mb-3 border-bottom pb-2">Online Booking</li>
                    <li className="mb-3 pb-2 text-muted">No Insurance Automations</li>
                  </ul>
                  <Button as={Link} to="/contact" variant="outline-primary" size="lg" className="w-100">Start Free Trial</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Professional */}
            <Col lg={4} md={6}>
               <Card className="h-100 shadow border-primary border-2 p-4 position-relative" style={{ transform: 'scale(1.05)' }}>
                  <div className="position-absolute top-0 start-50 translate-middle badge bg-primary rounded-pill px-3 py-2">Most Popular</div>
                <Card.Body className="d-flex flex-column pt-4">
                  <h4 className="fw-bold text-primary mb-2">Professional</h4>
                  <p className="text-muted-foreground mb-4">For growing practices that need automation.</p>
                  <h2 className="display-5 fw-bold mb-4">$399<span className="fs-5 text-muted fw-normal">/mo</span></h2>
                  
                  <ul className="list-unstyled mb-5 flex-grow-1">
                    <li className="mb-3 border-bottom pb-2">Up to 10 Users</li>
                    <li className="mb-3 border-bottom pb-2">Up to 3 Clinic Locations</li>
                    <li className="mb-3 border-bottom pb-2">Priority Support</li>
                    <li className="mb-3 border-bottom pb-2">Full Automation Workflows</li>
                    <li className="mb-3 pb-2 fw-bold">Full Insurance eClaims</li>
                  </ul>
                  <Button as={Link} to="/contact" variant="primary" size="lg" className="w-100">Start Free Trial</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Enterprise */}
            <Col lg={4} md={6}>
              <Card className="h-100 shadow-sm border p-4">
                <Card.Body className="d-flex flex-column">
                  <h4 className="fw-bold text-primary mb-2">Enterprise</h4>
                  <p className="text-muted-foreground mb-4">For multi-location networks & DSOs.</p>
                  <h2 className="display-5 fw-bold mb-4">Custom</h2>
                  
                  <ul className="list-unstyled mb-5 flex-grow-1">
                    <li className="mb-3 border-bottom pb-2">Unlimited Users</li>
                    <li className="mb-3 border-bottom pb-2">Unlimited Clinics</li>
                    <li className="mb-3 border-bottom pb-2">Dedicated Success Manager</li>
                    <li className="mb-3 border-bottom pb-2">Custom Integrations</li>
                    <li className="mb-3 pb-2 fw-bold">Advanced BI Access</li>
                  </ul>
                  <Button as={Link} to="/contact" variant="outline-primary" size="lg" className="w-100">Book Demo</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Pricing;
