// import { NavLink } from "react-router-dom";
// export default function CourseNavigation() {
//     return (
//         <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//             <NavLink to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
//                 className={({ isActive }) =>
//           `list-group-item border-0 ${isActive ? "active-link" : "inactive-link"}`
//         }>Home</NavLink>
//             <NavLink to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
//                 className={({ isActive }) =>
//           `list-group-item border-0 ${isActive ? "active-link" : "inactive-link"}`
//         }>Modules</NavLink>
//             <NavLink to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
//                 className={({ isActive }) =>
//           `list-group-item border-0 ${isActive ? "active-link" : "inactive-link"}`
//         }>Piazza</NavLink>
//             <NavLink to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
//                 className={({ isActive }) =>
//           `list-group-item border-0 ${isActive ? "active-link" : "inactive-link"}`
//         }>Zoom</NavLink>
//             <NavLink to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
//                 className={({ isActive }) =>
//           `list-group-item border-0 ${isActive ? "active-link" : "inactive-link"}`
//         }>Assignments</NavLink>
//             <NavLink to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
//                 className={({ isActive }) =>
//           `list-group-item border-0 ${isActive ? "active-link" : "inactive-link"}`
//         }>Quizzes</NavLink>
//             <NavLink to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link"
//                 className={({ isActive }) =>
//           `list-group-item border-0 ${isActive ? "active-link" : "inactive-link"}`
//         }>Grades</NavLink>
//             <NavLink to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
//                 className={({ isActive }) =>
//           `list-group-item border-0 ${isActive ? "active-link" : "inactive-link"}`
//         }>People</NavLink>
//         </div>
//     );
// }

// import { NavLink } from "react-router-dom";

// export default function CourseNavigation() {
//   const links = [
//     { path: "/Kambaz/Courses/1234/Home", label: "Home", id: "wd-course-home-link" },
//     { path: "/Kambaz/Courses/1234/Modules", label: "Modules", id: "wd-course-modules-link" },
//     { path: "/Kambaz/Courses/1234/Piazza", label: "Piazza", id: "wd-course-piazza-link" },
//     { path: "/Kambaz/Courses/1234/Zoom", label: "Zoom", id: "wd-course-zoom-link" },
//     { path: "/Kambaz/Courses/1234/Assignments", label: "Assignments", id: "wd-course-assignments-link" },
//     { path: "/Kambaz/Courses/1234/Quizzes", label: "Quizzes", id: "wd-course-quizzes-link" },
//     { path: "/Kambaz/Courses/1234/Grades", label: "Grades", id: "wd-course-grades-link" },
//     { path: "/Kambaz/Courses/1234/People", label: "People", id: "wd-course-people-link" },
//   ];

//   return (
//     <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
//       {links.map(({ path, label, id }) => (
//         <NavLink
//           key={path}
//           to={path}
//           id={id}
//           className={({ isActive }) =>
//             `list-group-item border-0 ${
//               isActive
//                 ? "text-black border-start border-4 border-black fw-bold"
//                 : "text-danger"
//             }`
//           }
//         >
//           {label}
//         </NavLink>
//       ))}
//     </div>
//   );
// }

import { NavLink } from "react-router-dom";

export default function CourseNavigation() {
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            <NavLink
                to="/Kambaz/Courses/1234/Home"
                id="wd-course-home-link"
                className={({ isActive }) =>
                `list-group-item border-0 ${
                    isActive
                    ? "text-black border-start border-1 border-black"
                    : "text-danger"
                }`}>Home
            </NavLink>

            <NavLink
                to="/Kambaz/Courses/1234/Modules"
                id="wd-course-modules-link"
                className={({ isActive }) =>
                `list-group-item border-0 ${isActive
                    ? "text-black border-start border-1 border-black"
                    : "text-danger"
                }`}>Modules
            </NavLink>

            <NavLink
                to="/Kambaz/Courses/1234/Piazza"
                id="wd-course-piazza-link"
                className={({ isActive }) =>
                `list-group-item border-0 ${
                    isActive
                    ? "text-black border-start border-1 border-black"
                    : "text-danger"
                }`}>Piazza
            </NavLink>

            <NavLink
                to="/Kambaz/Courses/1234/Zoom"
                id="wd-course-zoom-link"
                className={({ isActive }) =>
                `list-group-item border-0 ${
                    isActive
                    ? "text-black border-start border-1 border-black"
                    : "text-danger"
                }`}>Zoom
            </NavLink>

            <NavLink
                to="/Kambaz/Courses/1234/Assignments"
                id="wd-course-assignments-link"
                className={({ isActive }) =>
                `list-group-item border-0 ${
                    isActive
                    ? "text-black border-start border-1 border-black"
                    : "text-danger"
                }`}>Assignments
            </NavLink>

            <NavLink
                to="/Kambaz/Courses/1234/Quizzes"
                id="wd-course-quizzes-link"
                className={({ isActive }) =>
                `list-group-item border-0 ${
                    isActive
                    ? "text-black border-start border-1 border-black"
                    : "text-danger"
                }`}>Quizzes
            </NavLink>

            <NavLink
                to="/Kambaz/Courses/1234/Grades"
                id="wd-course-grades-link"
                className={({ isActive }) =>
                `list-group-item border-0 ${
                    isActive
                    ? "text-black border-start border-1 border-black"
                    : "text-danger"
                }`}>Grades
            </NavLink>

      <NavLink
        to="/Kambaz/Courses/1234/People"
        id="wd-course-people-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive
              ? "text-black border-start border-1 border-black"
              : "text-danger"
          }`}>People
      </NavLink>
    </div>
  );
}