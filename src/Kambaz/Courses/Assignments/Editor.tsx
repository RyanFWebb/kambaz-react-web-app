import {
  Row,
  Col,
  Form,
  FormSelect,
  InputGroup,
  Card,
  Button,
} from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import type { Assignment } from "./reducer";
import { useState, useEffect } from "react";
import * as assignmentClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const existingAssignment = assignments.find((a: Assignment) => a._id === aid);
  
  const isNewAssignment = aid === "new" || !existingAssignment;

  const [formData, setFormData] = useState<Partial<Assignment>>({
    title: "",
    description: "",
    points: 100,
    type: "ASSIGNMENTS",
    displayGrade: "Percentage",
    assignTo: "Everyone",
    due: "",
    available: "",
  });

  useEffect(() => {
    if (!isNewAssignment && existingAssignment) {
      setFormData({
        _id: existingAssignment._id,
        title: existingAssignment.title,
        description: existingAssignment.description,
        points: existingAssignment.points,
        type: existingAssignment.type,
        displayGrade: existingAssignment.displayGrade,
        assignTo: existingAssignment.assignTo,
        due: existingAssignment.due,
        available: existingAssignment.available,
        course: existingAssignment.course,
      });
    } else if (isNewAssignment) {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const nextWeek = new Date(now);
      nextWeek.setDate(nextWeek.getDate() + 7);

      setFormData({
        title: "",
        description: "",
        points: 100,
        type: "ASSIGNMENTS",
        displayGrade: "Percentage",
        assignTo: "Everyone",
        due: nextWeek.toISOString().split('T')[0],
        available: now.toISOString().split('T')[0],
        course: cid,
      });
    }
  }, [aid, existingAssignment, isNewAssignment, cid]);

  const formatDate = (iso: string) => iso?.split?.("T")?.[0] || "";

  const handleInputChange = (field: keyof Assignment, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // const handleSave = () => {
  //   if (!formData.title?.trim()) {
  //     alert("Assignment name is required");
  //     return;
  //   }

  //   const assignmentData: Assignment = {
  //     _id: isNewAssignment ? Date.now().toString() : formData._id!,
  //     title: formData.title!,
  //     description: formData.description || "",
  //     points: Number(formData.points) || 100,
  //     type: formData.type as Assignment["type"],
  //     displayGrade: formData.displayGrade || "Percentage",
  //     assignTo: formData.assignTo || "Everyone",
  //     due: formData.due || "",
  //     available: formData.available || "",
  //     course: cid!,
  //   };

  //   if (isNewAssignment) {
  //     dispatch(addAssignment(assignmentData));
  //   } else {
  //     dispatch(updateAssignment(assignmentData));
  //   }

  //   navigate(`/Kambaz/Courses/${cid}/Assignments`);
  // };
  const handleSave = async () => {
    if (!formData.title?.trim()) {
      alert("Assignment name is required");
      return;
    }

    const assignmentData: Assignment = {
      _id: isNewAssignment ? Date.now().toString() : formData._id!,
      title: formData.title!,
      description: formData.description || "",
      points: Number(formData.points) || 100,
      type: formData.type as Assignment["type"],
      displayGrade: formData.displayGrade || "Percentage",
      assignTo: formData.assignTo || "Everyone",
      due: formData.due || "",
      available: formData.available || "",
      course: cid!,
    };

    try {
      if (isNewAssignment) {
        const created = await assignmentClient.createAssignment(cid!, assignmentData);
        dispatch(addAssignment(created));
      } else {
        const updated = await assignmentClient.updateAssignment(formData._id!, assignmentData);
        dispatch(updateAssignment(updated));
      }

      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    } catch (err) {
      console.error("Error saving assignment:", err);
      alert("Failed to save assignment.");
    }
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  if (!isNewAssignment && !existingAssignment) {
    return <div>Assignment not found.</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <Form.Group className="mb-3" controlId="wd-assignment-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control 
          type="text" 
          value={formData.title || ""} 
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-3" controlId="wd-assignment-description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          value={formData.description || ""}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column sm="2" className="text-end">Points</Form.Label>
        <Col sm="10">
          <Form.Control 
            type="number" 
            value={formData.points || 100} 
            onChange={(e) => handleInputChange("points", Number(e.target.value))}
          />
        </Col>
      </Form.Group>

      {/* Assignment Group */}
      <Form.Group as={Row} className="mb-3" controlId="wd-assignment-group">
        <Form.Label column sm="2" className="text-end">Assignment Group</Form.Label>
        <Col sm="10">
          <FormSelect 
            value={formData.type || "ASSIGNMENTS"}
            onChange={(e) => handleInputChange("type", e.target.value)}
          >
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
          <FormSelect 
            value={formData.displayGrade || "Percentage"}
            onChange={(e) => handleInputChange("displayGrade", e.target.value)}
          >
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

      {/* Assign Section */}
      <Form.Group as={Row} className="mb-3" controlId="wd-assign">
        <Form.Label column sm="2" className="text-end">Assign</Form.Label>
        <Col sm="10">
          <Card className="mb-4">
            <Card.Body>
              <Form.Label><b>Assign to</b></Form.Label>
              <Form.Control 
                type="text" 
                value={formData.assignTo || "Everyone"} 
                onChange={(e) => handleInputChange("assignTo", e.target.value)}
              />
              <br />
              <Form.Label><b>Due</b></Form.Label>
              <InputGroup className="mb-3">
                <Form.Control 
                  type="date" 
                  value={formatDate(formData.due || "")} 
                  onChange={(e) => handleInputChange("due", e.target.value)}
                />
                <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
              </InputGroup>
              <Form.Group as={Row} className="mb-3" controlId="wd-assign-availability">
                <Col sm="6">
                  <Form.Label><b>Available From</b></Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control 
                      type="date" 
                      value={formatDate(formData.available || "")} 
                      onChange={(e) => handleInputChange("available", e.target.value)}
                    />
                    <InputGroup.Text><IoCalendarOutline /></InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col sm="6">
                  <Form.Label><b>Until</b></Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control 
                      type="date" 
                      value={formatDate(formData.due || "")} 
                      onChange={(e) => handleInputChange("due", e.target.value)}
                    />
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
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="danger" className="ms-2" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}