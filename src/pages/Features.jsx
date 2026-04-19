import { Container, Row, Col, Card } from "react-bootstrap";
import {
  BsPersonVcard,
  BsCalendarEvent,
  BsHeartPulse,
  BsReceipt,
  BsGrid1X2,
  BsRobot,
} from "react-icons/bs";

const Features = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold mb-3" style={{ color: "white" }}>
            Powerful Features for Modern Clinics
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Everything you need to streamline operations, enhance patient care,
            and grow your practice.
          </p>
        </Container>
      </section>

      {/* Patient Management */}
      <section className="section-padding bg-white border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="feature-icon-wrapper blue mb-4">
                <BsPersonVcard />
              </div>
              <h2 className="mb-4">Patient Management</h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Profiles + history:</strong> Comprehensive digital
                    records.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Timeline tracking:</strong> Visual history of visits
                    and treatments.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Insurance info:</strong> Auto-verify eligibility
                    instantly.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Portal access:</strong> Patient self-service
                    documents and bookings.
                  </span>
                </li>
              </ul>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <Card
                className="soft-shadow border-0 bg-light p-5 text-center"
                style={{ minHeight: "300px" }}
              >
                <p className="text-muted">[Patient Management UI Mockup]</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Appointment Management */}
      <section className="section-padding bg-gray border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0 order-2 order-lg-1">
              <Card
                className="soft-shadow border-0 bg-white p-5 text-center"
                style={{ minHeight: "300px" }}
              >
                <p className="text-muted">[Calendar UI Mockup]</p>
              </Card>
            </Col>
            <Col lg={5} className="offset-lg-1 order-1 order-lg-2">
              <div className="feature-icon-wrapper teal mb-4">
                <BsCalendarEvent />
              </div>
              <h2 className="mb-4">Appointment Management</h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Smart scheduling:</strong> Drag-and-drop easy
                    calendar.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Calendar views:</strong> Daily, weekly, and provider
                    views.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Online booking:</strong> 24/7 self-scheduling for
                    patients.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Status workflows:</strong> Track from waiting room
                    to checkout.
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Treatment Management */}
      <section className="section-padding bg-white border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="feature-icon-wrapper blue mb-4">
                <BsHeartPulse />
              </div>
              <h2 className="mb-4">Treatment Management</h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Tooth charts (2D/3D):</strong> Interactive clinical
                    charting.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Procedure tracking:</strong> Standardized codes and
                    notes.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Cost estimation:</strong> Accurate treatment plans
                    for patients.
                  </span>
                </li>
              </ul>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <Card
                className="soft-shadow border-0 bg-light p-5 text-center"
                style={{ minHeight: "300px" }}
              >
                <p className="text-muted">[Tooth Chart Mockup]</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Billing & Invoicing */}
      <section className="section-padding bg-gray border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0 order-2 order-lg-1">
              <Card
                className="soft-shadow border-0 bg-white p-5 text-center"
                style={{ minHeight: "300px" }}
              >
                <p className="text-muted">[Billing Dashboard Mockup]</p>
              </Card>
            </Col>
            <Col lg={5} className="offset-lg-1 order-1 order-lg-2">
              <div className="feature-icon-wrapper teal mb-4">
                <BsReceipt />
              </div>
              <h2 className="mb-4">Billing & Invoicing</h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Automated invoices:</strong> Generated instantly
                    after treatment.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Payment tracking:</strong> Text-to-pay and online
                    portals.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Revenue insights:</strong> Track accounts receivable
                    in real-time.
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Advanced Features */}
      <section className="section-padding bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="feature-icon-wrapper blue mb-4">
                <BsGrid1X2 />
              </div>
              <h2 className="mb-4">Advanced Features</h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Imaging & documents:</strong> Built-in PACS and file
                    storage.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Inventory management:</strong> Track supplies
                    automatically.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Insurance & claims:</strong> Clearinghouse
                    integration (eClaims).
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-primary me-2 fw-bold">✓</span>
                  <span>
                    <strong>Automation workflows:</strong> Zapier-like internal
                    automations.
                  </span>
                </li>
              </ul>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <Card
                className="soft-shadow border-0 bg-light p-5 text-center"
                style={{ minHeight: "300px" }}
              >
                <p className="text-muted">[Automations Mockup]</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* AI & Smart Features */}
      <section className="section-padding bg-gray border-top">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0 order-2 order-lg-1">
              <Card
                className="soft-shadow border-0 bg-white p-5 text-center"
                style={{ minHeight: "300px" }}
              >
                <p className="text-muted">[AI Assistant UI Mockup]</p>
              </Card>
            </Col>
            <Col lg={5} className="offset-lg-1 order-1 order-lg-2">
              <div className="feature-icon-wrapper teal mb-4">
                <BsRobot />
              </div>
              <h2 className="mb-4">AI & Smart Features</h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Patient registration chatbot:</strong> 24/7
                    automated intake and triage.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>QR-based onboarding:</strong> Frictionless patient
                    check-ins.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Medical assistant integration:</strong> AI-powered
                    clinical notes and prompts.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-teal me-2 fw-bold">✓</span>
                  <span>
                    <strong>Automated analytics:</strong> Predictive revenue
                    forecasting and insights.
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Features;
