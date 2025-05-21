import { 
    Row,
    Col, 
    Form, 
    FormSelect, 
    InputGroup, 
    Button,
    Card 
} from 'react-bootstrap';
import { IoCalendarOutline } from 'react-icons/io5';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <div id="wd-assignments-editor">
                {/* Assignment Name */}
                <div id="wd-assignment-name">
                    <Form.Group className="mb-3" controlId="wd-assignment-name">
                        <Form.Label className="text-end">Assignment Name</Form.Label>
                        <Row>
                            <Col sm="12">
                                <Form.Control type="text" defaultValue={"A1"} />
                            </Col>
                        </Row>
                    </Form.Group>
                </div>

                {/* Assignment Description */}
                <div id="wd-assignment-description">
                    <Form.Group className="mb-3" controlId="wd-assignment-description">
                        <Row>
                            {/* <Col sm="4">
                                <Form.Label className="text-end">Description</Form.Label>
                            </Col> */}
                            <Col sm="12">
                                <Form.Control as="textarea" rows={12} 
                                defaultValue={
                            `The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify. 

The landing page should include the following:

- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`
                                } />
                            </Col>
                        </Row>
                    </Form.Group>
                </div>

                {/* Points */}
                <div id="wd-points">
                    <Form.Group as={Row} className="mb-3" controlId="wd-points">
                        <Form.Label column sm="2" className="text-end">
                            Points
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" defaultValue={100} rows={1} />
                        </Col>
                    </Form.Group>
                </div>

                {/* Assignment Group */}
                <div id="wd-assignment-group">
                    <Form.Group as={Row} className="mb-3" controlId="wd-assignment-group">
                        <Form.Label column sm="2" className="text-end">
                            Assignment Group
                        </Form.Label>
                        <Col sm="10">
                            <FormSelect defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECTS">PROJECTS</option>
                            </FormSelect>
                        </Col>
                    </Form.Group>
                </div>

                {/* Display Grade */}
                <div id="wd-display-grade">
                    <Form.Group as={Row} className="mb-3" controlId="wd-display-grade">
                        <Form.Label column sm="2" className="text-end">
                            Display Grade as
                        </Form.Label>
                        <Col sm="10">
                            <FormSelect defaultValue="Percentage">
                                <option value="Percentage">Percentage</option>
                                <option value="Decimal">Decimal</option>
                                <option value="Number">Number</option>
                            </FormSelect>
                        </Col>
                    </Form.Group>
                </div>

                {/* Submission Type */}
                <div id="wd-submission-type">
                    <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
                        <Form.Label column sm="2" className="text-end">
                            Submission Type
                        </Form.Label>
                        <Col sm="10">
                            <Card className="mb-4">
                                <Card.Body>
                                    <FormSelect defaultValue="Online">
                                        <option value="Online">Online</option>
                                        <option value="Hand-In">Hand-In</option>
                                    </FormSelect>
                                    <br />
                                    <Form.Label><b>Online Entry Options</b></Form.Label>
                                    <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
                                    <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
                                    <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                                    <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                                    <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Form.Group>
                </div>

                {/* Assign */}
                <div id="wd-assign">
                    <Form.Group as={Row} className="mb-3" controlId="wd-assign">
                        <Form.Label column sm="2" className="text-end">
                            Assign
                        </Form.Label>
                        <Col sm="10">
                            <Card className="mb-4">
                                <Card.Body>
                                    <Form.Label><b>Assign to</b></Form.Label>
                                    <Form.Control type="text" defaultValue="Everyone" />
                                    <br />
                                    <Form.Label><b>Due</b></Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control type="date" defaultValue="2024-05-13" />
                                        <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                                    </InputGroup>
                                    <Form.Group as={Row} className="mb-3" controlId="wd-assign-availability">
                                        <Col sm="6">
                                            <Form.Label><b>Available From</b></Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control type="date" defaultValue="2024-05-06" />
                                                <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                                            </InputGroup>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Label><b>Until</b></Form.Label>
                                            <InputGroup className="mb-3">                                    
                                                <Form.Control type="date" defaultValue="2024-05-20" />
                                                <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                                            </InputGroup>
                                        </Col>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Form.Group>
                </div>
            </div>
            <hr />
            <div className="float-end">
                <Button variant="secondary" id="wd-cancel">Cancel</Button>
                <Button variant="danger" id="wd-save" className="ms-2">Save</Button>
            </div>
        </div>
    );
}
