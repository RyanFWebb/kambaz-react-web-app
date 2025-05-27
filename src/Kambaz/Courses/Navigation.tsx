import { Link, useLocation, useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import * as db from "../Database";

export default function CourseNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = db.courses.find((course) => course._id === cid);
    if (!course) {
        return <div>Course not found</div>;
    }
    const links = [
        { label: "Home", path: `/Kambaz/Courses/${course._id}/Home` },
        { label: "Modules", path: `/Kambaz/Courses/${course._id}/Modules` },
        { label: "Piazza", path: `/Kambaz/Courses/${course._id}/Piazza` },
        { label: "Zoom", path: `/Kambaz/Courses/${course._id}/Zoom` },
        { label: "Assignments", path: `/Kambaz/Courses/${course._id}/Assignments` },
        { label: "Quizzes", path: `/Kambaz/Courses/${course._id}/Quizzes` },
        { label: "Grades", path: `/Kambaz/Courses/${course._id}/Grades` },
        { label: "People", path: `/Kambaz/Courses/${course._id}/People` }
    ];
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            <ListGroup id="wd-courses-navigation" style={{width: 120}}
                className="list-group fs-5 rounded-0">
                {links.map((link) => (
                    <ListGroup.Item key={link.path} as={Link} to={link.path} className={`bg-black text-left border-0
                        ${pathname.includes(link.label) 
                        ? "text-black bg-white border-start border-3 border-black" 
                        : "text-danger bg-white"}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '1px',
                            paddingRight: '15px',
                            marginBottom: '4px',
                        }}>
                        <br />
                        <div
                            style={{
                                position: 'absolute',
                                left: '0',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                height: '100%',
                            }}
                        />
                        {link.label}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}