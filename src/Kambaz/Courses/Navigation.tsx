import { Link, useLocation, useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllCourses } from "./client";
import { setCourses } from "./courseReducer";

export default function CourseNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const courses = useSelector((state: any) => state.coursesReducer.courses);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const course = courses.find((course: any) => course._id === cid);

    useEffect(() => {
        const loadCourses = async () => {
            if (courses.length === 0 || !courses.find((c: any) => c._id === cid)) {
                setLoading(true);
                try {
                    const remoteCourses = await fetchAllCourses();
                    dispatch(setCourses(remoteCourses));
                } catch (err) {
                    console.error("Failed to fetch courses", err);
                    setError("Could not load course.");
                } finally {
                    setLoading(false);
                }
            }
        };
        loadCourses();
    }, [cid, courses.length, dispatch]); 
    if (loading) return <div>Loading course...</div>;
    if (error) return <div>{error}</div>;
    if (!course) return <div>Course not found.</div>; 

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