import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsShieldLock, BsKey, BsClipboardCheck, BsPhoneVibrate } from 'react-icons/bs';

const Security = () => {
  return (
    <>
      <section className="bg-primary text-white py-5 text-center">
        <Container>
          <div className="mb-3">
            <BsShieldLock size={48} />
          </div>
          <h1 className="display-4 fw-bold mb-3">Bank-Level Security & Compliance</h1>
          <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
            We protect your patient data with the most advanced security infrastructure available. Healthcare compliance is built-in.
          </p>
        </Container>
      </section>

      <section className="section-padding bg-gray">
        <Container>
          <Row className="g-4 justify-content-center">
            <Col lg={6}>
              <Card className="h-100 border-0 soft-shadow p-4">
                <Card.Body className="d-flex align-items-start">
                   <div className="feature-icon-wrapper blue me-4 flex-shrink-0">
                    <BsShieldLock />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2">End-to-End Data Encryption</h4>
                    <p className="text-muted-foreground">
                      All patient health information (PHI) is encrypted both in transit (TLS 1.3) and at rest (AES-256) across our distributed databases.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 border-0 soft-shadow p-4">
                <Card.Body className="d-flex align-items-start">
                   <div className="feature-icon-wrapper teal me-4 flex-shrink-0">
                    <BsKey />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2">Role-Based Access (RBAC)</h4>
                    <p className="text-muted-foreground">
                      Granular permissions mean front desk staff, hygienists, and doctors only see the exact data they need to perform their jobs.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

             <Col lg={6}>
              <Card className="h-100 border-0 soft-shadow p-4">
                <Card.Body className="d-flex align-items-start">
                   <div className="feature-icon-wrapper blue me-4 flex-shrink-0">
                    <BsClipboardCheck />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2">Immutable Audit Logs</h4>
                    <p className="text-muted-foreground">
                      Every action within DentalDash is tracked. You can instantly generate reports on who accessed which record, and when.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 border-0 soft-shadow p-4">
                <Card.Body className="d-flex align-items-start">
                   <div className="feature-icon-wrapper teal me-4 flex-shrink-0">
                    <BsPhoneVibrate />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2">Multi-Factor Authentication (MFA)</h4>
                    <p className="text-muted-foreground">
                      Require all staff to log in using secure authenticators or SMS verification, preventing unauthorized access even if passwords are leaked.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="mt-5 text-center px-lg-5">
            <h3 className="fw-bold mb-3">HIPAA Compliance Readiness</h3>
            <p className="text-muted-foreground mx-auto" style={{ maxWidth: '800px' }}>
              We've designed our architecture to fully align with HIPAA and HITECH requirements. We sign Business Associate Agreements (BAAs) with our Professional and Enterprise clinics to guarantee compliance obligations.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Security;
