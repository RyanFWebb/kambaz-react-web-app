import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";

export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const today = new Date().toISOString().split("T")[0];
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const weekFromToday = nextWeek.toISOString().split("T")[0];

    const course = {
        id: "RS500",
        name: "New Course",
        number: "RS2555",
        startDate: today,
        endDate: weekFromToday,
        department: "Trials and Tribulations",
        credits: 4,
        description: "New Course",
    }

    const fetchCourses = async () => { // I believe this is meant to be findAllCourses
        try {
            const courses = await userClient.findMyCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [currentUser]);
    
    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c.id === course.id) { return course; }
            else { return c; }
        })
    );};


    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([ ...courses, newCourse ]);
    };

    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        console.log(status);
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
                                <Dashboard />
                            // </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={
                            <ProtectedRoute>
                                <Courses />
                            </ProtectedRoute>
                        } />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}