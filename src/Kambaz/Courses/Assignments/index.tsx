// import { ListGroup, Button, Row, Col, Form, InputGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import GreenCheckmark from "./GreenCheckmark";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { FaPlus, FaEdit, FaSearch } from "react-icons/fa";
// import { Link, useParams } from "react-router-dom";
// import assignments from "../../Database/assignments.json";
// import { useSelector } from "react-redux";

// const typeOrder = [
//   { key: "ASSIGNMENTS", label: "ASSIGNMENTS", weight: "40%" },
//   { key: "QUIZZES", label: "QUIZZES", weight: "10%" },
//   { key: "EXAMS", label: "EXAMS", weight: "20%" },
//   { key: "PROJECTS", label: "PROJECTS", weight: "30%" },
// ];

// export default function Assignments() {
//   const { cid } = useParams();

//   // Filter assignments for the selected course
//   const courseAssignments = assignments.filter((a) => a.course === cid);

//   // Group by type
//   const groupedByType = courseAssignments.reduce<Record<string, typeof courseAssignments>>((acc, assignment) => {
//     const type = assignment.type || "ASSIGNMENTS"; // fallback if no type
//     if (!acc[type]) acc[type] = [];
//     acc[type].push(assignment);
//     return acc;
//   }, {});

//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const isFaculty = currentUser.role === "FACULTY";

//   return (
//     <div className="assignments-wrapper">
//       <div className="assignments-content">
//         <div className="assignments-header mb-3">
//           <Row className="align-items-center">
//             <Col>
//               <InputGroup className="mb--3">
//                 <InputGroup.Text id="magnifying-glass">
//                   <FaSearch />
//                 </InputGroup.Text>
//                 <Form.Control type="text" placeholder="Search..." className="search-input" />
//               </InputGroup>
//             </Col>
//             <Col className="d-flex justify-content-end">
//               {isFaculty && (
//                 <>
//                   <Button variant="secondary" className="me-2 header-button">
//                     <FaPlus className="me-2 fs-5" /> Group
//                   </Button>
//                   <Button variant="danger" className="header-button">
//                     <FaPlus className="me-2 fs-5" /> Assignment
//                   </Button>
//                 </>
//               )}
//             </Col>
//           </Row>
//         </div>
//       </div>

//       <ListGroup className="rounded-0 modules-list">
//         {typeOrder.map(({ key, label, weight }) => (
//           <ListGroup.Item key={key} className="module-item p-0 mb-5 fs-5 border-gray">
//             <div className="module-title p-3 ps-2 bg-secondary text-black">
//               <BsGripVertical className="me-2 fs-3" /> {label}
//               <div className="float-end">
//                 {isFaculty && (
//                   <>
//                     <span className="border border-dark rounded-pill px-3 py-1 fs-6 me-2">{weight} of Total</span>
//                     <FaPlus className="me-2 fs-5" />
//                     <IoEllipsisVertical className="fs-5" />
//                   </>
//                 )}
//               </div>
//             </div>

//             <ListGroup className="assignments-list rounded-0 left-green-border">
//               {(groupedByType[key]?.length ?? 0) > 0 ? (
//                 groupedByType[key].map((assignment) => (
//                   <ListGroup.Item key={assignment._id} className="assignment-item p-3">
//                     <div className="d-flex w-100 justify-content-between align-items-center">
//                       {/* Left Icons */}
//                       <div className="d-flex align-items-center flex-shrink-0 me-3">
//                         <BsGripVertical className="me-2 fs-3 grip-icon" />
//                         {isFaculty && (
//                           <>
//                             <FaEdit className="fs-3" />
//                           </>
//                         )}
//                       </div>

//                       {/* Center Content */}
//                       <div className="flex-grow-1 pe-3">
//                         <div className="assignment-header text-black fs-4 mb-1">
//                           {isFaculty ? (
//                             <>
//                               <Link
//                                 to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
//                                 id="wd-assignment-link"
//                                 className="text-danger text-decoration-none"
//                               >
//                                 {assignment.title}
//                               </Link>
//                             </>
//                           ) : (
//                             <span className="text-danger text-decoration-none">
//                               {assignment.title}
//                             </span>
//                           )}
//                         </div>
//                         <div>
//                           <span className="module-info red-font fs-6">Multiple Modules</span>
//                           <span className="text-black fs-6 mx-2">|</span>
//                           <span className="availability-info text-black fs-6">
//                             <b>Not available until</b>{" "}
//                             {new Date(assignment.available).toLocaleString("en-US", {
//                               month: "short",
//                               day: "numeric",
//                               hour: "numeric",
//                               minute: "numeric",
//                               hour12: true,
//                             })}
//                           </span>
//                           <span className="text-black fs-6 mx-2">|</span>
//                           <span className="due-date-info text-black fs-6">
//                             <b>Due</b>{" "}
//                             {new Date(assignment.due).toLocaleString("en-US", {
//                               month: "short",
//                               day: "numeric",
//                               hour: "numeric",
//                               minute: "numeric",
//                               hour12: true,
//                             })}
//                           </span>
//                           <span className="text-black fs-6 mx-2">|</span>
//                           <span className="points text-black fs-6">{assignment.points} pts</span>
//                         </div>
//                       </div>

//                       {/* Right Icons */}
//                       <div className="d-flex align-items-center flex-shrink-0">
//                         {isFaculty && (
//                           <>
//                             <GreenCheckmark />
//                             <IoEllipsisVertical className="fs-4 options-icon" />
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </ListGroup.Item>
//                 ))
//               ) : (
//                 <ListGroup.Item className="p-3 text-muted fst-italic">
//                   No {label.toLowerCase()} available.
//                 </ListGroup.Item>
//               )}
//             </ListGroup>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </div>
//   );
// }

import { ListGroup, Button, Row, Col, Form, InputGroup, Modal } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import type { Assignment } from "./reducer";
import { useState } from "react";

const typeOrder = [
  { key: "ASSIGNMENTS", label: "ASSIGNMENTS", weight: "40%" },
  { key: "QUIZZES", label: "QUIZZES", weight: "10%" },
  { key: "EXAMS", label: "EXAMS", weight: "20%" },
  { key: "PROJECTS", label: "PROJECTS", weight: "30%" },
];

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  
  // Filter assignments for the selected course
  const courseAssignments = assignments.filter((a: Assignment) => a.course === cid);

  // Group by type
  const groupedByType = courseAssignments.reduce(
    (acc: Record<string, Assignment[]>, assignment: Assignment) => {
      const type = assignment.type || "ASSIGNMENTS"; // fallback if no type
      if (!acc[type]) acc[type] = [];
      acc[type].push(assignment);
      return acc;
    },
    {} as Record<string, Assignment[]>
  );

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  const handleAddAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/new`);
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    dispatch(deleteAssignment(assignmentId));
  };

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<string | null>(null);

  const openDeleteConfirmation = (assignmentId: string) => {
  setSelectedAssignmentId(assignmentId);
  setShowConfirmModal(true);
  };

  const closeDeleteConfirmation = () => {
    setSelectedAssignmentId(null);
    setShowConfirmModal(false);
  };

  const confirmDelete = () => {
    if (selectedAssignmentId) {
      dispatch(deleteAssignment(selectedAssignmentId));
      closeDeleteConfirmation();
    }
  };

  return (
    <div className="assignments-wrapper">
      <div className="assignments-content">
        <div className="assignments-header mb-3">
          <Row className="align-items-center">
            <Col>
              <InputGroup className="mb--3">
                <InputGroup.Text id="magnifying-glass">
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Search..." className="search-input" />
              </InputGroup>
            </Col>
            <Col className="d-flex justify-content-end">
              {isFaculty && (
                <>
                  <Button variant="secondary" className="me-2 header-button">
                    <FaPlus className="me-2 fs-5" /> Group
                  </Button>
                  <Button 
                    variant="danger" 
                    className="header-button"
                    onClick={handleAddAssignment}
                  >
                    <FaPlus className="me-2 fs-5" /> Assignment
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </div>
      </div>

      <ListGroup className="rounded-0 modules-list">
        {typeOrder.map(({ key, label, weight }) => (
          <ListGroup.Item key={key} className="module-item p-0 mb-5 fs-5 border-gray">
            <div className="module-title p-3 ps-2 bg-secondary text-black">
              <BsGripVertical className="me-2 fs-3" /> {label}
              <div className="float-end">
                {isFaculty && (
                  <>
                    <span className="border border-dark rounded-pill px-3 py-1 fs-6 me-2">{weight} of Total</span>
                    <FaPlus className="me-2 fs-5" />
                    <IoEllipsisVertical className="fs-5" />
                  </>
                )}
              </div>
            </div>

            <ListGroup className="assignments-list rounded-0 left-green-border">
              {(groupedByType[key]?.length ?? 0) > 0 ? (
                groupedByType[key].map((assignment: Assignment) => (
                  <ListGroup.Item key={assignment._id} className="assignment-item p-3">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      {/* Left Icons */}
                      <div className="d-flex align-items-center flex-shrink-0 me-3">
                        <BsGripVertical className="me-2 fs-3 grip-icon" />
                        {isFaculty && (
                          <>
                            <FaEdit className="fs-3" 
                              onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`)}
                            />
                          </>
                        )}
                      </div>

                      {/* Center Content */}
                      <div className="flex-grow-1 pe-3">
                        <div className="assignment-header text-black fs-4 mb-1">
                          {isFaculty ? (
                            <>
                              <Link
                                to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                id="wd-assignment-link"
                                className="text-danger text-decoration-none"
                              >
                                {assignment.title}
                              </Link>
                            </>
                          ) : (
                            <span className="text-danger text-decoration-none">
                              {assignment.title}
                            </span>
                          )}
                        </div>
                        <div>
                          <span className="module-info red-font fs-6">Multiple Modules</span>
                          <span className="text-black fs-6 mx-2">|</span>
                          <span className="availability-info text-black fs-6">
                            <b>Not available until</b>{" "}
                            {new Date(assignment.available).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            })}
                          </span>
                          <span className="text-black fs-6 mx-2">|</span>
                          <span className="due-date-info text-black fs-6">
                            <b>Due</b>{" "}
                            {new Date(assignment.due).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            })}
                          </span>
                          <span className="text-black fs-6 mx-2">|</span>
                          <span className="points text-black fs-6">{assignment.points} pts</span>
                        </div>
                      </div>

                      {/* Right Icons */}
                      <div className="d-flex align-items-center flex-shrink-0">
                        {isFaculty && (
                          <>
                            <FaTrash 
                              className="text-danger me-2 mb-1"
                              onClick={() => openDeleteConfirmation(assignment._id)}
                            />
                            <GreenCheckmark />
                            <IoEllipsisVertical className="fs-4 options-icon" />
                          </>
                        )}
                      </div>
                    </div>
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item className="p-3 text-muted fst-italic">
                  No {label.toLowerCase()} available.
                </ListGroup.Item>
              )}
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Modal show={showConfirmModal} onHide={closeDeleteConfirmation} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeleteConfirmation}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
