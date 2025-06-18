// import { ListGroup, Button, Row, Col, Form, InputGroup, Modal } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import GreenCheckmark from "../Assignments/GreenCheckmark";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { FaPlus, FaEdit, FaSearch, FaTrash } from "react-icons/fa";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteQuiz, setQuizzes, type Quiz } from "./reducer.ts";
// import { useEffect, useState } from "react";
// import * as quizClient from "./client";


// const typeOrder = [
//   { key: "QUIZZES", label: "QUIZZES", weight: "10%" },
// ];

// export default function Quizzes() {
//     const { cid } = useParams();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
    
//     // Filter quizzes for the selected course
//     // const courseQuizzes = quizzes.filter((a: Quiz) => a.course === cid);

//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const isFaculty = currentUser.role === "FACULTY";

//     const handleAddQuiz = () => {
//         navigate(`/Kambaz/Courses/${cid}/Quizzes/new`);
//     };

//     const [showConfirmModal, setShowConfirmModal] = useState(false);
//     const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);

//     const openDeleteConfirmation = (quizId: string) => {
//         setSelectedQuizId(quizId);
//         setShowConfirmModal(true);
//     };

//     const closeDeleteConfirmation = () => {
//         setSelectedQuizId(null);
//         setShowConfirmModal(false);
//     };

//     const confirmDelete = async () => {
//         if (selectedQuizId) {
//         try {
//             const success = await quizClient.deleteQuiz(selectedQuizId);
//             if (success) {
//             dispatch(deleteQuiz(selectedQuizId));
//             } else {
//             alert("Failed to delete quiz");
//             }
//         } catch (error) {
//             console.error("Delete failed", error);
//             alert("An error occurred");
//         } finally {
//             closeDeleteConfirmation();
//         }
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//         try {
//             const quizzes = await quizClient.fetchQuizzesForCourse(cid!);
//             dispatch(setQuizzes(quizzes));
//         } catch (error) {
//             console.error("Error loading quizzes:", error);
//         }
//         };

//         if (cid) fetchData();
//     }, [cid, dispatch]);

//     return (
//         <div className="quizzes-wrapper">
//         <div className="quizzes-content">
//             <div className="quizzes-header mb-3">
//             <Row className="align-items-center">
//                 <Col>
//                 <InputGroup className="mb--3">
//                     <InputGroup.Text id="magnifying-glass">
//                     <FaSearch />
//                     </InputGroup.Text>
//                     <Form.Control type="text" placeholder="Search..." className="search-input" />
//                 </InputGroup>
//                 </Col>
//                 <Col className="d-flex justify-content-end">
//                 {isFaculty && (
//                     <>
//                     {/* <Button variant="secondary" className="me-2 header-button">
//                         <FaPlus className="me-2 fs-5" /> Group
//                     </Button> */}
//                     <Button 
//                         variant="danger" 
//                         className="header-button"
//                         onClick={handleAddQuiz}
//                     >
//                         <FaPlus className="me-2 fs-5" /> Quiz
//                     </Button>
//                     </>
//                 )}
//                 </Col>
//             </Row>
//             </div>
//         </div>

//         <ListGroup className="rounded-0 modules-list">
//             {typeOrder.map(({ key, label, weight }) => (
//             <ListGroup.Item key={key} className="module-item p-0 mb-5 fs-5 border-gray">
//                 <div className="module-title p-3 ps-2 bg-secondary text-black">
//                 <BsGripVertical className="me-2 fs-3" /> {label}
//                 <div className="float-end">
//                     {isFaculty && (
//                     <>
//                         <span className="border border-dark rounded-pill px-3 py-1 fs-6 me-2">{weight} of Total</span>
//                         <FaPlus className="me-2 fs-5" />
//                         <IoEllipsisVertical className="fs-5" />
//                     </>
//                     )}
//                 </div>
//                 </div>

//                 <ListGroup className="quizzes-list rounded-0 left-green-border">
//                 {(groupedByType[key]?.length ?? 0) > 0 ? (
//                     groupedByType[key].map((quiz: Quiz) => (
//                     <ListGroup.Item key={quiz._id} className="quiz-item p-3">
//                         <div className="d-flex w-100 justify-content-between align-items-center">
//                         {/* Left Icons */}
//                         <div className="d-flex align-items-center flex-shrink-0 me-3">
//                             <BsGripVertical className="me-2 fs-3 grip-icon" />
//                             {isFaculty && (
//                             <>
//                                 <FaEdit className="fs-3" 
//                                 onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`)}
//                                 />
//                             </>
//                             )}
//                         </div>

//                         {/* Center Content */}
//                         <div className="flex-grow-1 pe-3">
//                             <div className="quiz-header text-black fs-4 mb-1">
//                             {isFaculty ? (
//                                 <>
//                                 <Link
//                                     to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}
//                                     id="wd-quiz-link"
//                                     className="text-danger text-decoration-none"
//                                 >
//                                     {quiz.title}
//                                 </Link>
//                                 </>
//                             ) : (
//                                 <span className="text-danger text-decoration-none">
//                                 {quiz.title}
//                                 </span>
//                             )}
//                             </div>
//                             <div>
//                             <span className="module-info red-font fs-6">Multiple Modules</span>
//                             <span className="text-black fs-6 mx-2">|</span>
//                             <span className="availability-info text-black fs-6">
//                                 <b>Not available until</b>{" "}
//                                 {new Date(quiz.available).toLocaleString("en-US", {
//                                 month: "short",
//                                 day: "numeric",
//                                 hour: "numeric",
//                                 minute: "numeric",
//                                 hour12: true,
//                                 })}
//                             </span>
//                             <span className="text-black fs-6 mx-2">|</span>
//                             <span className="due-date-info text-black fs-6">
//                                 <b>Due</b>{" "}
//                                 {new Date(quiz.due).toLocaleString("en-US", {
//                                 month: "short",
//                                 day: "numeric",
//                                 hour: "numeric",
//                                 minute: "numeric",
//                                 hour12: true,
//                                 })}
//                             </span>
//                             <span className="text-black fs-6 mx-2">|</span>
//                             <span className="points text-black fs-6">{quiz.points} pts</span>
//                             </div>
//                         </div>

//                         {/* Right Icons */}
//                         <div className="d-flex align-items-center flex-shrink-0">
//                             {isFaculty && (
//                             <>
//                                 <FaTrash 
//                                 className="text-danger me-2 mb-1"
//                                 onClick={() => openDeleteConfirmation(quiz._id)}
//                                 />
//                                 <GreenCheckmark />
//                                 <IoEllipsisVertical className="fs-4 options-icon" />
//                             </>
//                             )}
//                         </div>
//                         </div>
//                     </ListGroup.Item>
//                     ))
//                 ) : (
//                     <ListGroup.Item className="p-3 text-muted fst-italic">
//                     No {label.toLowerCase()} available.
//                     </ListGroup.Item>
//                 )}
//                 </ListGroup>
//             </ListGroup.Item>
//             ))}
//         </ListGroup>
//         <Modal show={showConfirmModal} onHide={closeDeleteConfirmation} centered>
//             <Modal.Header closeButton>
//             <Modal.Title>Confirm Deletion</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//             Are you sure you want to delete this quiz?
//             </Modal.Body>
//             <Modal.Footer>
//             <Button variant="secondary" onClick={closeDeleteConfirmation}>
//                 Cancel
//             </Button>
//             <Button variant="danger" onClick={confirmDelete}>
//                 Yes
//             </Button>
//             </Modal.Footer>
//         </Modal>
//         </div>
//     );
//     }

import {
  ListGroup,
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Assignments/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteQuiz, setQuizzes, type Quiz } from "./reducer.ts";
import { useEffect, useState } from "react";
import * as quizClient from "./client";

export default function Quizzes() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes)
    .filter((quiz: Quiz) => quiz.course === cid)
    .sort((a: Quiz, b: Quiz) => new Date(a.available).getTime() - new Date(b.available).getTime());

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const handleAddQuiz = () => {
    navigate(`/Kambaz/Courses/${cid}/Quizzes/new`);
  };

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);

  const openDeleteConfirmation = (quizId: string) => {
    setSelectedQuizId(quizId);
    setShowConfirmModal(true);
  };

  const closeDeleteConfirmation = () => {
    setSelectedQuizId(null);
    setShowConfirmModal(false);
  };

  const confirmDelete = async () => {
    if (selectedQuizId) {
      try {
        const success = await quizClient.deleteQuiz(selectedQuizId);
        if (success) {
          dispatch(deleteQuiz(selectedQuizId));
        } else {
          alert("Failed to delete quiz");
        }
      } catch (error) {
        console.error("Delete failed", error);
        alert("An error occurred");
      } finally {
        closeDeleteConfirmation();
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizzes = await quizClient.fetchQuizzesForCourse(cid!);
        dispatch(setQuizzes(quizzes));
      } catch (error) {
        console.error("Error loading quizzes:", error);
      }
    };

    if (cid) fetchData();
  }, [cid, dispatch]);

  return (
    <div className="quizzes-wrapper">
      <div className="quizzes-content">
        <div className="quizzes-header mb-3">
          <Row className="align-items-center">
            <Col>
              <InputGroup className="mb--3">
                <InputGroup.Text id="magnifying-glass">
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
              </InputGroup>
            </Col>
            <Col className="d-flex justify-content-end">
              {isFaculty && (
                <Button
                  variant="danger"
                  className="header-button"
                  onClick={handleAddQuiz}
                >
                  <FaPlus className="me-2 fs-5" /> Quiz
                </Button>
              )}
            </Col>
          </Row>
        </div>
      </div>

      <ListGroup className="rounded-0 modules-list">
        {quizzes.length === 0 ? (
          <ListGroup.Item className="p-3 text-muted fst-italic">
            No quizzes available.
          </ListGroup.Item>
        ) : (
          quizzes.map((quiz: Quiz) => (
            <ListGroup.Item key={quiz._id} className="quiz-item p-3 mb-3">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="d-flex align-items-center flex-shrink-0 me-3">
                  <BsGripVertical className="me-2 fs-3 grip-icon" />
                  {isFaculty && (
                    <FaEdit
                      className="fs-3"
                      onClick={() =>
                        navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`)
                      }
                    />
                  )}
                </div>

                <div className="flex-grow-1 pe-3">
                  <div className="quiz-header text-black fs-4 mb-1">
                    {isFaculty ? (
                      <Link
                        to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}
                        className="text-danger text-decoration-none"
                      >
                        {quiz.title}
                      </Link>
                    ) : (
                      <span className="text-danger text-decoration-none">
                        {quiz.title}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="module-info red-font fs-6">
                      Multiple Modules
                    </span>
                    <span className="text-black fs-6 mx-2">|</span>
                    <span className="availability-info text-black fs-6">
                      <b>Not available until</b>{" "}
                      {new Date(quiz.available).toLocaleString("en-US", {
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
                      {new Date(quiz.due).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </span>
                    <span className="text-black fs-6 mx-2">|</span>
                    <span className="points text-black fs-6">
                      {quiz.points} pts
                    </span>
                  </div>
                </div>

                <div className="d-flex align-items-center flex-shrink-0">
                  {isFaculty && (
                    <>
                      <FaTrash
                        className="text-danger me-2 mb-1"
                        onClick={() => openDeleteConfirmation(quiz._id)}
                      />
                      <GreenCheckmark />
                      <IoEllipsisVertical className="fs-4 options-icon" />
                    </>
                  )}
                </div>
              </div>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>

      <Modal show={showConfirmModal} onHide={closeDeleteConfirmation} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this quiz?</Modal.Body>
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