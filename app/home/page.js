import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function HomePage() {
    return (
        <Container fluid className="mt-4">
            <Row>
                {/* Left column */}
                <Col md={3}>
                    {/* Left sidebar (empty for now) */}
                    left
                </Col>

                {/* Center column */}
                <Col md={6}>
                    {/* This will hold your paginated content */}
                    <div className="text-center">
                        <h4>Paginated Content Goes Here</h4>
                        {/* Later: Insert Pagination + Cards or List Items here */}
                    </div>
                </Col>

                {/* Right column */}
                <Col md={3}>
                    {/* Right sidebar (empty for now) */}
                    right
                </Col>
            </Row>
        </Container>
    );
}