import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BsBuilding, BsBuildings, BsGlobe } from 'react-icons/bs';

const Solutions = () => {
  return (
    <>
      <section className="hero-section text-center">
        <Container>
          <span className="badge-soft-primary mb-3 d-inline-block">Tailored For You</span>
          <h1 className="display-4 fw-bold mb-4">Solutions for Every Scale</h1>
          <p className="lead mx-auto text-muted-foreground" style={{ maxWidth: '800px' }}>
            Whether you run a single chair or a nationwide network, DentalDash scales to meet your exact operational needs.
          </p>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <Row className="g-5">
            {/* Small Clinics */}
            <Col lg={4}>
              <Card className="h-100 hover-elevate border text-center p-4">
                <Card.Body>
                  <div className="feature-icon-wrapper blue mx-auto mb-4">
                    <BsBuilding />
                  </div>
                  <h3 className="fw-bold mb-3">For Small Clinics</h3>
                  <p className="text-muted-foreground mb-4">
                    Perfect for solo practitioners looking to digitize their practice without the overhead of enterprise software.
                  </p>
                  <ul className="text-start list-unstyled mb-4">
                    <li className="mb-2">✓ Simple setup in under 24 hours</li>
                    <li className="mb-2">✓ Affordable, transparent pricing</li>
                    <li className="mb-2">✓ Easy workflows that require zero training</li>
                  </ul>
                  <Button variant="outline-primary" className="w-100 mt-auto">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Multi-location */}
            <Col lg={4}>
              <Card className="h-100 hover-elevate border-primary border-2 text-center p-4 position-relative">
                <div className="position-absolute top-0 start-50 translate-middle badge bg-primary rounded-pill px-3 py-2">Most Popular</div>
                <Card.Body>
                  <div className="feature-icon-wrapper teal mx-auto mb-4 mt-3">
                    <BsBuildings />
                  </div>
                  <h3 className="fw-bold mb-3">Multi-location Clinics</h3>
                  <p className="text-muted-foreground mb-4">
                    Manage multiple branches, share resources, and view aggregate analytics across all your locations.
                  </p>
                  <ul className="text-start list-unstyled mb-4">
                    <li className="mb-2">✓ Centralized control & admin</li>
                    <li className="mb-2">✓ Multi-branch revenue analytics</li>
                    <li className="mb-2">✓ Cross-location staff coordination</li>
                  </ul>
                  <Button variant="primary" className="w-100 mt-auto">Book a Consultation</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Enterprise */}
            <Col lg={4}>
               <Card className="h-100 hover-elevate border text-center p-4">
                <Card.Body>
                  <div className="feature-icon-wrapper blue mx-auto mb-4">
                    <BsGlobe />
                  </div>
                  <h3 className="fw-bold mb-3">Enterprise DSOs</h3>
                  <p className="text-muted-foreground mb-4">
                    Custom built infrastructure for large Dental Support Organizations requiring deep integrations.
                  </p>
                  <ul className="text-start list-unstyled mb-4">
                    <li className="mb-2">✓ Custom operational workflows</li>
                    <li className="mb-2">✓ Advanced BI data integrations</li>
                    <li className="mb-2">✓ Dedicated account manager</li>
                  </ul>
                  <Button variant="outline-primary" className="w-100 mt-auto">Contact Sales</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Solutions;
