import { Container, Row, Col, Card } from 'react-bootstrap';

const Resources = () => {
  return (
    <>
      <section className="hero-section text-center">
        <Container>
          <span className="badge-soft-primary mb-3 d-inline-block">Learn & Grow</span>
          <h1 className="display-4 fw-bold mb-4">Dental Practice Resources</h1>
          <p className="lead mx-auto text-muted-foreground" style={{ maxWidth: '800px' }}>
            Insights, strategies, and case studies to help you run a more profitable and efficient clinic.
          </p>
        </Container>
      </section>

      <section className="section-padding bg-gray border-bottom">
        <Container>
          <h2 className="fw-bold mb-5 text-center">Transformational Case Studies</h2>
          <Row className="g-4">
             <Col lg={6}>
              <Card className="h-100 hover-elevate border-0 soft-shadow">
                <Card.Body className="p-5">
                  <span className="badge-teal-soft mb-3">Case Study</span>
                  <h3 className="fw-bold mb-3">How BrightSmiles Reduced No-Shows by 42%</h3>
                  <p className="text-muted-foreground mb-4">
                    See how a 4-chair clinic automated their patient communication and saved 15 hours of admin work per week.
                  </p>
                  <a href="#" className="fw-bold text-primary text-decoration-none">Read the Case Study &rarr;</a>
                </Card.Body>
              </Card>
             </Col>
             <Col lg={6}>
              <Card className="h-100 hover-elevate border-0 soft-shadow bg-primary text-white">
                <Card.Body className="p-5">
                  <span className="badge bg-white text-primary mb-3">Case Study</span>
                  <h3 className="fw-bold mb-3 text-white">Scaling to 5 Locations with DentalDash OS</h3>
                  <p className="text-white-50 mb-4">
                    Learn the operational system Elite Dental used to centralize billing and reporting across multiple states.
                  </p>
                  <a href="#" className="fw-bold text-white text-decoration-underline">Read the Case Study &rarr;</a>
                </Card.Body>
              </Card>
             </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding bg-white">
         <Container>
           <h2 className="fw-bold mb-5">Latest Blog Posts</h2>
            <Row className="g-4">
              <Col md={4}>
                <Card className="h-100 border-0">
                  <div className="bg-light rounded p-4 mb-3" style={{ height: '200px' }}>
                    {/* Placeholder for blog image */}
                  </div>
                  <h5 className="fw-bold">How to Reduce Patient No-Shows in 2024</h5>
                  <p className="text-muted-foreground">Tactics for automated reminders and cancellation policies.</p>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100 border-0">
                  <div className="bg-light rounded p-4 mb-3" style={{ height: '200px' }}></div>
                  <h5 className="fw-bold">5 Dental Clinic Growth Strategies</h5>
                  <p className="text-muted-foreground">How to attract and retain high-value cases.</p>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100 border-0">
                  <div className="bg-light rounded p-4 mb-3" style={{ height: '200px' }}></div>
                  <h5 className="fw-bold">Insurance Claim Optimization</h5>
                  <p className="text-muted-foreground">Stop leaving revenue on the table. A guide to cleaner claims.</p>
                </Card>
              </Col>
            </Row>
         </Container>
      </section>
    </>
  );
};
export default Resources;
