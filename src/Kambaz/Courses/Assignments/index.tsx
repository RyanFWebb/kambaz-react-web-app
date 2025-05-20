import { ListGroup, Button, Row, Col, Form } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Assignments() {
    return (
        <div className="assignments-wrapper">
            <div className="assignments-content">
                <div className="assignments-header mb-3">
                    <Row className="align-items-center">
                        <Col>
                            <Form.Control 
                                type="text" 
                                placeholder="Search..." 
                                className="search-input"
                            />
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button variant="secondary" className="me-2 header-button">
                                <FaPlus className="me-2 fs-5" /> Group
                            </Button>
                            <Button variant="danger" className="header-button">
                                <FaPlus className="me-2 fs-5" /> Assignment
                            </Button>
                        </Col>
                    </Row>
                </div>
                </div>
                <ListGroup className="rounded-0 modules-list">
                    <ListGroup.Item className="module-item p-0 mb-5 fs-5 border-gray">
                        <div className="module-title p-3 ps-2 bg-secondary text-black">
                            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
                            <div className="float-end">
                                <span className="border border-dark rounded-pill px-3 py-1 fs-6 me-2">40% of Total</span>
                                <FaPlus className="me-2 fs-5"/>
                                <IoEllipsisVertical className="fs-5"/>
                            </div>
                        </div>
                        <ListGroup className="assignments-list rounded-0">

                            <ListGroup.Item className="assignment-item p-3">
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    {/* Left Icons */}
                                    <div className="d-flex align-items-center flex-shrink-0 me-3">
                                        <BsGripVertical className="me-2 fs-3 grip-icon" />
                                        <FaEdit className="fs-3" />
                                    </div>

                                    {/* Center Content */}
                                    <div className="flex-grow-1 pe-3">
                                        <div className="assignment-header text-black fs-4 mb-1">
                                            <Link
                                            to="/Kambaz/Courses/1234/Assignments/123"
                                            id="wd-assignment-link"
                                            className="text-danger text-decoration-none"
                                            >
                                            A1
                                            </Link>
                                        </div>
                                        <div>
                                            <span className="module-info red-font fs-6">Multiple Modules</span>
                                            <span className="text-black fs-6 mx-2">|</span>
                                            <span className="availability-info text-black fs-6">
                                            <b>Not available until</b> May 6 at 12:00 AM
                                            </span>
                                            <span className="text-black fs-6 mx-2">|</span>
                                            <span className="due-date-info text-black fs-6">
                                            <b>Due</b> May 13 at 11:59 PM
                                            </span>
                                            <span className="text-black fs-6 mx-2">|</span>
                                            <span className="points text-black fs-6">100 pts</span>
                                        </div>
                                    </div>

                                    {/* Right Icons */}
                                    <div className="d-flex align-items-center flex-shrink-0">
                                        <GreenCheckmark />
                                        <IoEllipsisVertical className="fs-4 options-icon" />
                                    </div>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item className="assignment-item p-3">
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    {/* Left Icons */}
                                    <div className="d-flex align-items-center flex-shrink-0 me-3">
                                        <BsGripVertical className="me-2 fs-3 grip-icon" />
                                        <FaEdit className="fs-3" />
                                    </div>

                                    {/* Center Content */}
                                    <div className="flex-grow-1 pe-3">
                                        <div className="assignment-header text-black fs-4 mb-1">
                                            <Link
                                            to="/Kambaz/Courses/1234/Assignments/123"
                                            id="wd-assignment-link"
                                            className="text-danger text-decoration-none"
                                            >
                                            A2
                                            </Link>
                                        </div>
                                        <div>
                                            <span className="module-info red-font fs-6">Multiple Modules</span>
                                            <span className="text-black fs-6 mx-2">|</span>
                                            <span className="availability-info text-black fs-6">
                                            <b>Not available until</b> May 13 at 12:00 AM
                                            </span>
                                            <span className="text-black fs-6 mx-2">|</span>
                                            <span className="due-date-info text-black fs-6">
                                            <b>Due</b> May 20 at 11:59 PM
                                            </span>
                                            <span className="text-black fs-6 mx-2">|</span>
                                            <span className="points text-black fs-6">100 pts</span>
                                        </div>
                                    </div>

                                    {/* Right Icons */}
                                    <div className="d-flex align-items-center flex-shrink-0">
                                        <GreenCheckmark />
                                        <IoEllipsisVertical className="fs-4 options-icon" />
                                    </div>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item className="assignment-item p-3">
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    {/* Left Icons */}
                                    <div className="d-flex align-items-center flex-shrink-0 me-3">
                                        <BsGripVertical className="me-2 fs-3 grip-icon" />
                                        <FaEdit className="fs-3" />
                                    </div>

                                    {/* Center Content */}
                                    <div className="flex-grow-1 pe-3">
                                        <div className="assignment-header text-black fs-4 mb-1">
                                            <Link
                                            to="/Kambaz/Courses/1234/Assignments/123"
                                            id="wd-assignment-link"
                                            className="text-danger text-decoration-none"
                                            >
                                            A3
                                            </Link>
                                        </div>
                                        <div>
                                            <span className="module-info red-font fs-6">Multiple Modules</span>
                                            <span className="text-black fs-6 mx-2">|</span>
                                            <span className="availability-info text-black fs-6">
                                            <b>Not available until</b> May 20 at 12:00 AM
                                            </span>
                                            <span className="text-black fs-6 mx-2">|</span>
                                            <span className="due-date-info text-black fs-6">
                                            <b>Due</b> May 27 at 11:59 PM
                                            </span>
                                            <span className="text-black fs-6 mx-2">|</span>
                                            <span className="points text-black fs-6">100 pts</span>
                                        </div>
                                    </div>

                                    {/* Right Icons */}
                                    <div className="d-flex align-items-center flex-shrink-0">
                                        <GreenCheckmark />
                                        <IoEllipsisVertical className="fs-4 options-icon" />
                                    </div>
                                </div>
                            </ListGroup.Item>

                    </ListGroup>
                </ListGroup.Item>

                <ListGroup>
                    <ListGroup.Item className="module-item p-0 mb-5 fs-5 border-gray">
                        <div className="module-title p-3 ps-2 bg-secondary text-black">
                            <BsGripVertical className="me-2 fs-3" /> QUIZZES
                            <div className="float-end">
                                <span className="border border-dark rounded-pill px-3 py-1 fs-6 me-2">10% of Total</span>
                                <FaPlus className="me-2 fs-5"/>
                                <IoEllipsisVertical className="fs-5"/>
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item className="module-item p-0 mb-5 fs-5 border-gray">
                        <div className="module-title p-3 ps-2 bg-secondary text-black">
                            <BsGripVertical className="me-2 fs-3" /> EXAMS
                            <div className="float-end">
                                <span className="border border-dark rounded-pill px-3 py-1 fs-6 me-2">20% of Total</span>
                                <FaPlus className="me-2 fs-5"/>
                                <IoEllipsisVertical className="fs-5"/>
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item className="module-item p-0 mb-5 fs-5 border-gray">
                        <div className="module-title p-3 ps-2 bg-secondary text-black">
                            <BsGripVertical className="me-2 fs-3" /> PROJECT
                            <div className="float-end">
                                <span className="border border-dark rounded-pill px-3 py-1 fs-6 me-2">30% of Total</span>
                                <FaPlus className="me-2 fs-5"/>
                                <IoEllipsisVertical className="fs-5"/>
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>

            </ListGroup>
        </div>
    );
}