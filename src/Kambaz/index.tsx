import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
// import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";


export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [enrolling, setEnrolling] = useState<boolean>(false);

    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }
        setCourses(
            courses.map((course) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        );
    };

    const findCoursesForUser = async () => {
        try {
            const courses = await userClient.findCoursesForUser(currentUser._id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchCourses = async () => {
        try {
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(
                currentUser._id
            );
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return course;
                }
            });
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const today = new Date().toISOString().split("T")[0];
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const weekFromToday = nextWeek.toISOString().split("T")[0];

    const [course] = useState<any>({
        _id: "RS500",
        name: "New Course",
        number: "RS2555",
        startDate: today,
        endDate: weekFromToday,
        department: "Trials and Tribulations",
        credits: 4,
        description: "New Course",
    });

    // const fetchCourses = async () => { 
    //     try {
    //         const courses = await courseClient.fetchAllCourses();
    //         setCourses(courses);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchCourses();
    // }, [currentUser]);

    useEffect(() => {
        if (enrolling) {
            fetchCourses();
        } else {
            findCoursesForUser();
        }
    }, [currentUser, enrolling]);
    
    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c.id === course.id) { return course; }
            else { return c; }
        })
    );};


    const addNewCourse = async () => {
        // const newCourse = await userClient.createCourse(course);
        const newCourse = await courseClient.createCourse(course);
        setCourses([ ...courses, newCourse ]);
    };

    // const deleteCourse = async (courseId: string) => {
    //     const status = await courseClient.deleteCourse(courseId);
    //     console.log(status);
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        console.log(status)
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    var unused = [ updateCourse, addNewCourse, deleteCourse]
    console.log(unused)

    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={
                            // <ProtectedRoute> The protected route here was hiding courses from non-faculty
                                <Dashboard enrolling={enrolling} setEnrolling={setEnrolling}
                                    updateEnrollment={updateEnrollment}/>
                            // </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={
                            // <ProtectedRoute>
                                <Courses />
                            // </ProtectedRoute>
                        } />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}