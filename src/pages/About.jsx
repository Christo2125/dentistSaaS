import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <section className="section-padding bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="display-4 fw-bold mb-4">We Built What We Needed.</h1>
              <p className="lead text-muted-foreground mb-5">
                DentalDash started because we were tired of seeing amazing dentists burn out dealing with terrible software.
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="mb-5">
                <h3 className="fw-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground fs-5" style={{ lineHeight: '1.7' }}>
                  Our mission is simple: eliminate the administrative burden of running a dental clinic. We believe providers should spend their time treating patients, not clicking through clunky interfaces, tracking down claims, or piecing together five different apps to make it through the day.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="fw-bold mb-3">Why We Built DentalDash</h3>
                <p className="text-muted-foreground fs-5" style={{ lineHeight: '1.7' }}>
                  A few years ago, my incredible wife (a lead dentist) came home every night exhausted—not from seeing patients, but from fighting her clinic's fragmented software. Scheduling was a mess, billing required double-entry, and staff turnover was high due to the sheer stress of managing the manual workflows. 
                  <br /><br />
                  I looked at the solutions out there. They were all built in the 2000s, looked like Excel spreadsheets, and required a server room to run. So we built DentalDash. A modern, all-in-one system designed specifically to handle the operations of modern practices.
                </p>
              </div>

              <div>
                <h3 className="fw-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground fs-5" style={{ lineHeight: '1.7' }}>
                  We are building the definitive operating system for dentistry. A future where software gets out of the way, insights flow automatically, and your clinic practically runs itself.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default About;
