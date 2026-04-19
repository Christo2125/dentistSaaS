import { Container, Row, Col, Card } from 'react-bootstrap';

const Integrations = () => {
  return (
    <>
      <section className="hero-section text-center">
        <Container>
          <span className="badge-soft-primary mb-3 d-inline-block">Connect Everything</span>
          <h1 className="display-4 fw-bold mb-4">Plays Nice with Your Favorite Tools</h1>
          <p className="lead mx-auto text-muted-foreground" style={{ maxWidth: '800px' }}>
            DentalDash natively connects with the software you already use, eliminating double data entry.
          </p>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 hover-elevate p-4 border text-center">
                <Card.Body>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="Google Calendar" height="64" className="mb-4" />
                  <h4 className="fw-bold mb-3">Google Calendar</h4>
                  <p className="text-muted-foreground">
                    Instantly sync appointments with personal or clinic-wide Google Calendars. Changes update in real-time on both ends.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="h-100 hover-elevate p-4 border text-center">
                <Card.Body>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" height="64" className="mb-4" style={{ objectFit: 'contain', width: '120px' }} />
                  <h4 className="fw-bold mb-3">Stripe</h4>
                  <p className="text-muted-foreground">
                    Automate payment collections. Send simple text-to-pay links and securely save cards on file for future treatments.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="h-100 hover-elevate p-4 border text-center">
                <Card.Body>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" alt="Twilio" height="64" className="mb-4" style={{ objectFit: 'contain', width: '120px' }} />
                  <h4 className="fw-bold mb-3">Twilio</h4>
                  <p className="text-muted-foreground">
                    Power your SMS notification engine. Send automated appointment reminders, recalls, and two-way patient chats.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Integrations;
