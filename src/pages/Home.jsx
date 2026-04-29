import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCheckCircleFill, BsArrowRight, BsPeopleFill, BsCalendarCheckFill, BsCreditCardFill, BsShieldLockFill, BsFillBarChartFill } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center text-lg-start">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <span className="badge-soft-primary mb-3 d-inline-block">New 2.0 Release</span>
              <h1 className="display-title mb-4">
                Run Your <span className="text-primary">Entire Dental Clinic</span> on One Platform
              </h1>
              <p className="lead text-muted-foreground mb-5 pe-lg-4">
                Appointments, billing, patient records, insurance, and analytics — all in one powerful system built for modern dental practices.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button as={Link} to="/pricing" variant="primary" size="lg" className="px-4 py-3">
                  Book Demo
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="dashboard-mockup">
                <img src="mockup.png" alt="DentalDash Dashboard Interface" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-3">Dental Clinics Are Stuck with Fragmented Systems</h2>
            <p className="lead text-muted-foreground mx-auto" style={{ maxWidth: '700px' }}>
              Juggling multiple tools causes stress, mistakes, and lost revenue.
            </p>
          </div>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="text-center p-4">
                <Card.Body>
                  <div className="feature-icon-wrapper teal mx-auto">❌</div>
                  <h5 className="fw-bold">Multiple Tools</h5>
                  <p className="text-muted-foreground mb-0">Forcing staff to learn and switch between 5 different apps daily.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="text-center p-4">
                <Card.Body>
                  <div className="feature-icon-wrapper teal mx-auto">❌</div>
                  <h5 className="fw-bold">Manual Workflows</h5>
                  <p className="text-muted-foreground mb-0">Slowing down your team with repetitive data entry and calls.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="text-center p-4">
                <Card.Body>
                  <div className="feature-icon-wrapper teal mx-auto">❌</div>
                  <h5 className="fw-bold">Poor Communication</h5>
                  <p className="text-muted-foreground mb-0">Missed appointments and frustrated patients due to lack of portal.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="text-center p-4">
                <Card.Body>
                  <div className="feature-icon-wrapper teal mx-auto">❌</div>
                  <h5 className="fw-bold">No Analytics</h5>
                  <p className="text-muted-foreground mb-0">Flying blind without centralized dashboards to track revenue.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-gray">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0 order-2 order-lg-1">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-start mb-4">
                    <BsCheckCircleFill className="text-primary fs-3 me-3 flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold">Unified Platform</h5>
                      <p className="text-muted-foreground mb-0">Everything in one place, from scheduling to claims.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <BsCheckCircleFill className="text-primary fs-3 me-3 flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold">Automation-Driven</h5>
                      <p className="text-muted-foreground mb-0">Automate SMS reminders, billing, and follow-ups.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-start mb-4">
                    <BsCheckCircleFill className="text-primary fs-3 me-3 flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold">Real-time Insights</h5>
                      <p className="text-muted-foreground mb-0">Instantly see clinic performance, revenue, and tasks.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <BsCheckCircleFill className="text-primary fs-3 me-3 flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold">Patient Engagement</h5>
                      <p className="text-muted-foreground mb-0">Self-service portal for bookings and history.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className="offset-lg-1 order-1 order-lg-2 text-center text-lg-start mb-5 mb-lg-0">
              <span className="badge-teal-soft mb-3 d-inline-block">The Solution</span>
              <h2 className="mb-4">Meet DentalDash — Your All-in-One Dental OS</h2>
              <p className="lead text-muted-foreground mb-4">
                We replace your fragmented software stack with a single, elegant platform designed to automate operations and boost revenue.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Feature Highlights Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-3">Everything You Need to Succeed</h2>
            <p className="lead text-muted-foreground mx-auto" style={{ maxWidth: '700px' }}>
              Powerful tools designed specifically for modern dental clinics. Focus on patients, we'll handle the rest.
            </p>
          </div>
          <Row className="g-4 mb-5">
            <Col md={6} xl={4}>
              <Card className="hover-elevate p-3">
                <Card.Body>
                  <div className="feature-icon-wrapper blue">
                    <BsPeopleFill />
                  </div>
                  <h5 className="fw-bold mb-3">Patient Management</h5>
                  <p className="text-muted-foreground">Digital files, comprehensive history, 3D tooth charts, and a seamless portal experience for your patients.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xl={4}>
              <Card className="hover-elevate p-3">
                <Card.Body>
                  <div className="feature-icon-wrapper teal">
                    <BsCalendarCheckFill />
                  </div>
                  <h5 className="fw-bold mb-3">Smart Scheduling</h5>
                  <p className="text-muted-foreground">Online booking linked directly to your calendar, with automated reminders to drastically reduce no-shows.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xl={4}>
              <Card className="hover-elevate p-3">
                <Card.Body>
                  <div className="feature-icon-wrapper blue">
                    <BsCreditCardFill />
                  </div>
                  <h5 className="fw-bold mb-3">Automated Billing</h5>
                  <p className="text-muted-foreground">Get paid faster with automated invoicing, one-click payment links, and integrated insurance claims processing.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xl={6}>
              <Card className="hover-elevate p-3">
                <Card.Body>
                  <div className="feature-icon-wrapper teal">
                    <BsFillBarChartFill />
                  </div>
                  <h5 className="fw-bold mb-3">Analytics Dashboard</h5>
                  <p className="text-muted-foreground">Visual analytics help you track clinic growth, treatment conversion rates, and revenue streams in real-time.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xl={6}>
              <Card className="hover-elevate p-3">
                <Card.Body>
                  <div className="feature-icon-wrapper blue">
                    <BsShieldLockFill />
                  </div>
                  <h5 className="fw-bold mb-3">Enterprise Security</h5>
                  <p className="text-muted-foreground">Bank-level encryption and strict access controls ensure total healthcare compliance and data protection.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center">
            <Button as={Link} to="/features" variant="outline-primary" size="lg" className="px-5">Explore All Features</Button>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-3">Simple 3-Step Setup</h2>
            <p className="lead text-muted-foreground">Go live in minutes, not months.</p>
          </div>
          <Row className="g-4 text-center position-relative">
            <Col md={4} className="position-relative z-1">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '64px', height: '64px', fontSize: '24px', fontWeight: 'bold' }}>1</div>
              <h5 className="fw-bold">Set up your clinic</h5>
              <p className="text-muted-foreground px-3">Import data and invite your team.</p>
            </Col>
            <Col md={4} className="position-relative z-1">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '64px', height: '64px', fontSize: '24px', fontWeight: 'bold' }}>2</div>
              <h5 className="fw-bold">Manage in one dashboard</h5>
              <p className="text-muted-foreground px-3">Run schedules and billing natively.</p>
            </Col>
            <Col md={4} className="position-relative z-1">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '64px', height: '64px', fontSize: '24px', fontWeight: 'bold' }}>3</div>
              <h5 className="fw-bold">Automate & Scale</h5>
              <p className="text-muted-foreground px-3">Let the software do the heavy lifting.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col md={4} className="mb-4 mb-md-0">
              <h2 className="display-4 fw-bold text-primary mb-2">30%</h2>
              <p className="fw-medium text-muted-foreground">Admin Time Saved</p>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <h2 className="display-4 fw-bold text-primary mb-2">40%</h2>
              <p className="fw-medium text-muted-foreground">Reduction in No-Shows</p>
            </Col>
            <Col md={4}>
              <h2 className="display-4 fw-bold text-primary mb-2">2x</h2>
              <p className="fw-medium text-muted-foreground">Faster Claim Processing</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="soft-shadow p-4 p-md-5 text-center">
                <Card.Body>
                  <div className="text-warning mb-3" style={{ fontSize: '24px' }}>★★★★★</div>
                  <h4 className="fw-bold mb-4" style={{ lineHeight: '1.5' }}>
                    "Before DentalDash, we were using three different tools to run our practice. Now, everything is centralized. Our staff is happier, and our revenues are up."
                  </h4>
                  <div>
                    <h6 className="fw-bold mb-1">Dr. Sarah Jenkins</h6>
                    <p className="text-muted-foreground mb-0">Lead Dentist, SmileCare Clinic</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-5" style={{ backgroundColor: 'var(--primary-blue)' }}>
        <Container className="text-center py-5">
          <h2 className="text-white mb-4 display-6 fw-bold">Ready to Simplify Your Dental Practice?</h2>
          <p className="text-white-50 lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Join thousands of clinics upgrading to the modern dental OS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button 
              as={Link} 
              to="/pricing" 
              variant="light" 
              size="lg" 
              className="px-5 py-3 fw-bold text-primary"
            >
              Start Free Trial
            </Button>
            <Button 
              as={Link} 
              to="/pricing" 
              variant="outline-light" 
              size="lg" 
              className="px-5 py-3 fw-bold border-2"
            >
              Book Demo
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
