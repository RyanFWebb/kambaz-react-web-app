import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import * as accountClient from "../Account/client";
import * as courseClient from "../Courses/client";
// import { enrollUserInCourse, unenrollUserFromCourse } from "../Enrollments/reducer";
import * as enrollmentClient from "../Enrollments/client";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const dispatch = useDispatch();

  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);
  const isFaculty = currentUser.role === "FACULTY";

  // const fetchCourses = async () => {
  //   try {
  //     const data = showAllCourses
  //       ? await courseClient.findAllCourses()
  //       : await courseClient.findMyCourses(currentUser._id);

  //     setCourses(data);
  //   } catch (err) {
  //     console.error("Failed to fetch courses:", err);
  //   }
  // };

  // useEffect(() => {
  //   fetchCourses();
  // }, [showAllCourses, currentUser._id]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = showAllCourses
          ? await courseClient.fetchAllCourses()
          : await accountClient.findMyCourses();
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };

    fetchCourses();
  }, [showAllCourses, currentUser._id]);

  // const addNewCourse = () => {
  //   const newCourse = { ...course, _id: uuidv4() };
  //   setCourses([...courses, newCourse]);
  // };
  const addNewCourse = async () => {
    try {
      const newCourse = await accountClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (err) {
      console.error("Failed to create course:", err);
    }
  };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => (c._id === course._id ? course : c))
  //   );
  // };
  const updateCourse = async () => {
    try {
      await courseClient.updateCourse(course);
      setCourses(
        courses.map((c) => (c._id === course._id ? course : c))
      );
    } catch (err) {
      console.error("Failed to update course:", err);
    }
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    console.log(status);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const handleEnrollment = async (courseId: string, isEnrolled: boolean) => {
    try {
      if (isEnrolled) {
        await enrollmentClient.unenrollUserFromCourse(currentUser._id, courseId);
      } else {
        await enrollmentClient.enrollUserInCourse(currentUser._id, courseId);
      }

      const updatedCourses = showAllCourses
        ? await courseClient.fetchAllCourses()
        : await accountClient.findMyCourses();

      setCourses(updatedCourses);
    } catch (err) {
      console.error("Enrollment action failed:", err);
    }
  };

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
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            value={course.description}
            className="mb-2"
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses
          ? `All Courses (${courses.length})`
          : `My Enrolled Courses (${courses.length})`}
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => {
            const isEnrolled = course.enrolled === true;
            return (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img
                      src={course.image || "/images/reactjs.jpg"}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </Card.Text>

                      {/* Show Go button only if user is enrolled or is faculty */}
                      {(isEnrolled || isFaculty) && (
                        <Button variant="primary">Go</Button>
                      )}

                      {/* Enroll/Unenroll for students */}
                      {!isFaculty && (
                        // <Button
                        //   className={`float-end mb-3 ${
                        //     isEnrolled ? "btn-danger" : "btn-success"
                        //   }`}
                        //   onClick={(event) => {
                        //     event.preventDefault();
                        //     handleEnrollment(course._id, isEnrolled);
                        //   }}
                        // >
                        //   {isEnrolled ? "Unenroll" : "Enroll"}
                        // </Button>
                        <Button
                          variant={isEnrolled ? "danger" : "success"}
                          className="float-end mb-3"
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnrollment(course._id, isEnrolled);
                          }}
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      )}

                      {/* Faculty controls */}
                      {isFaculty && (
                        <>
                          <Button
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </Button>
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}