import {
  Row,
  Col,
  Form,
  FormSelect,
  InputGroup,
  Card,
} from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import assignments from "../../Database/assignments.json";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find(a => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found.</div>;
  }

  const formatDate = (iso: string) => iso?.split?.("T")?.[0] || "";

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <Form.Group className="mb-3" controlId="wd-assignment-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue={assignment.title} />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-3" controlId="wd-assignment-description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          value={assignment.description}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column sm="2" className="text-end">Points</Form.Label>
        <Col sm="10">
          <Form.Control type="number" defaultValue={assignment.points} />
        </Col>
      </Form.Group>

      {/* Assignment Group */}
      <Form.Group as={Row} className="mb-3" controlId="wd-assignment-group">
        <Form.Label column sm="2" className="text-end">Assignment Group</Form.Label>
        <Col sm="10">
          <FormSelect defaultValue={assignment.type}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECTS">PROJECTS</option>
          </FormSelect>
        </Col>
      </Form.Group>

      {/* Display Grade */}
      <Form.Group as={Row} className="mb-3" controlId="wd-display-grade">
        <Form.Label column sm="2" className="text-end">Display Grade as</Form.Label>
        <Col sm="10">
          <FormSelect defaultValue={assignment.displayGrade}>
            <option value="Percentage">Percentage</option>
            <option value="Decimal">Decimal</option>
            <option value="Number">Number</option>
          </FormSelect>
        </Col>
      </Form.Group>

      {/* Submission Type */}
      <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
        <Form.Label column sm="2" className="text-end">Submission Type</Form.Label>
        <Col sm="10">
          <Card className="mb-4">
            <Card.Body>
              <FormSelect defaultValue={assignment.type}>
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

      {/* Assign Section */}
      <Form.Group as={Row} className="mb-3" controlId="wd-assign">
        <Form.Label column sm="2" className="text-end">Assign</Form.Label>
        <Col sm="10">
          <Card className="mb-4">
            <Card.Body>
              <Form.Label><b>Assign to</b></Form.Label>
              <Form.Control type="text" defaultValue={assignment.assignTo} />
              <br />
              <Form.Label><b>Due</b></Form.Label>
              <InputGroup className="mb-3">
                <Form.Control type="date" defaultValue={formatDate(assignment.due)} />
                <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
              </InputGroup>
              <Form.Group as={Row} className="mb-3" controlId="wd-assign-availability">
                <Col sm="6">
                  <Form.Label><b>Available From</b></Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control type="date" defaultValue={formatDate(assignment.available)} />
                    <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col sm="6">
                  <Form.Label><b>Until</b></Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control type="date" defaultValue={formatDate(assignment.due)} />
                    <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Form.Group>

      {/* Buttons */}
      <hr />
      <div className="float-end">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger ms-2">Save</Link>
      </div>
    </div>
  );
}

