import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse } from "../Courses/courseReducer";
import { enrollUserInCourse, unenrollUserFromCourse } from "../Enrollments/reducer";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  
  const [course, setCourse] = useState<any>({
    _id: "1234", 
    name: "New Course", 
    number: "New Number", 
    startDate: "2023-09-10", 
    endDate: "2023-12-15", 
    description: "New Description", 
    image: "/images/reactjs.jpg"
  });

  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);

  const isFaculty = currentUser.role === "FACULTY";

  const addNewCourse = () => {
    dispatch(addCourse(course));
    // Reset form after adding
    setCourse({
      _id: "1234", 
      name: "New Course", 
      number: "New Number", 
      startDate: "2023-09-10", 
      endDate: "2023-12-15", 
      description: "New Description", 
      image: "/images/reactjs.jpg"
    });
  };

  const handleDeleteCourse = (courseId: any) => {
    dispatch(deleteCourse(courseId));
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
  };

  const isUserEnrolledInCourse = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const handleEnrollment = (courseId: string) => {
    if (isUserEnrolledInCourse(courseId)) {
      dispatch(unenrollUserFromCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollUserInCourse({ userId: currentUser._id, courseId }));
    }
  };

  const coursesToDisplay = showAllCourses 
    ? courses 
    : courses.filter((course: any) => isUserEnrolledInCourse(course._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard 
        <Button 
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </Button>
      </h1> 
      <hr />
        {isFaculty && (
          <>
            <h5>New Course
              <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse} > Add </button>
              <button className="btn btn-warning float-end me-2"
                onClick={handleUpdateCourse} id="wd-update-course-click">
                Update</button>
            </h5><br />
            <FormControl value={course.name} className="mb-2" 
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <FormControl as="textarea" value={course.description} className="mb-2" rows={3} 
              onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
          </>
        )}
      <h2 id="wd-dashboard-published">
        {showAllCourses ? `All Courses (${coursesToDisplay.length})` : `Published Courses (${coursesToDisplay.length})`}
      </h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {coursesToDisplay.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    
                    {/* Show Go button only if user is enrolled or is faculty */}
                    {(isUserEnrolledInCourse(course._id) || isFaculty) && (
                      <Button variant="primary"> Go </Button>
                    )}
                    
                    {/* Show Enroll/Unenroll button for students */}
                    {!isFaculty && (
                      <Button 
                        className={`float-end ${isUserEnrolledInCourse(course._id) ? 'btn-danger' : 'btn-success'}`}
                        onClick={(event) => {
                          event.preventDefault();
                          handleEnrollment(course._id);
                        }}
                      >
                        {isUserEnrolledInCourse(course._id) ? 'Unenroll' : 'Enroll'}
                      </Button>
                    )}
                    
                    {/* Faculty controls (Edit and Delete only) */}
                    {isFaculty && (
                      <>
                        <Button onClick={(event) => {
                            event.preventDefault();
                            handleDeleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </Button>
                        <Button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </Button>
                      </>
                    )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}