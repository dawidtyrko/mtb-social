import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RepairsList from "@/components/Repairs";
import UpcomingRepairsList from "@/components/UpcomingRepairs";
import ClientsList from "@/components/Clients";
export default function HomePage() {
    return (
        <Container fluid className="mt-4">
            <Row>
                {/* Left column */}
                <Col md={3}>
                    <div className="text-center">
                        <h4>Paginated Content Goes Here</h4>
                        <ClientsList/>
                    </div>
                </Col>

                {/* Center column */}
                <Col md={6}>
                    {/* This will hold your paginated content */}
                    <div className="text-center">
                        <h4>Paginated Content Goes Here</h4>
                       <RepairsList/>
                    </div>
                </Col>

                {/* Right column */}
                <Col md={3}>
                    <div className="text-center">
                        <h4>Upcoming repairs</h4>
                        <UpcomingRepairsList/>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}