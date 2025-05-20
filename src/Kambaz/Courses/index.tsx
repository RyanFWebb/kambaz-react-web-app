import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import Grades from "./Grades";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Quizzes from "./Quizzes";
import { Routes, Route, Navigate } from "react-router-dom";
import { FaAlignJustify } from 'react-icons/fa';
export default function Courses() {
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                Course 1234</h2> <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="Piazza" element={<Piazza />} />
                        <Route path="Zoom" element={<Zoom />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}