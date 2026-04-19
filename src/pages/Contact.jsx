import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <section className="section-padding bg-gray">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <Card className="border-0 soft-shadow p-4 p-md-5">
                <Card.Body>
                  <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3">Book Your Personalized Demo</h2>
                    <p className="text-muted-foreground mx-auto" style={{ maxWidth: '500px' }}>
                      See how DentalDash can save your team hours of admin work and boost your revenue.
                    </p>
                  </div>
                  
                  <Form>
                    <Row className="g-4 mb-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium">Full Name</Form.Label>
                          <Form.Control type="text" placeholder="Dr. Jane Smith" size="lg" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium">Clinic Name</Form.Label>
                          <Form.Control type="text" placeholder="SmileCare Dental" size="lg" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium">Work Email</Form.Label>
                          <Form.Control type="email" placeholder="jane@smilecare.com" size="lg" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium">Phone Number</Form.Label>
                          <Form.Control type="tel" placeholder="(555) 123-4567" size="lg" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="fw-medium">Clinic Size</Form.Label>
                          <Form.Select size="lg">
                            <option>1-3 Chairs (Small)</option>
                            <option>4-10 Chairs (Medium)</option>
                            <option>Multi-location (Large)</option>
                            <option>Enterprise / DSO</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Button variant="primary" size="lg" className="w-100 py-3 fw-bold mt-2">
                      Book a Demo
                    </Button>
                    <p className="text-center text-muted mt-3 small">
                      No credit card required. A dedicated specialist will walk you through the platform.
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Contact;
