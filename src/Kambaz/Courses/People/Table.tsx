// import { Table } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import PeopleDetails from "./Details";
// import * as courseClient from "../../Courses/client"; // Make sure path is correct

// export default function PeopleTable() {
//   const { cid } = useParams();
//   const [users, setUsers] = useState<any[]>([]);

//   useEffect(() => {
//     const loadUsers = async () => {
//       try {
//         if (cid) {
//           const enrolledUsers = await courseClient.findUsersForCourse(cid);
//           setUsers(enrolledUsers);
//         }
//       } catch (err) {
//         console.error("Failed to fetch users for course:", err);
//       }
//     };

//     loadUsers();
//   }, [cid]);

//   return (
//     <div id="wd-people-table">
//       <PeopleDetails />
//       <Table striped>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user: any) => (
//             <tr key={user._id}>
//               <td className="wd-full-name text-nowrap">
//                 <Link
//                   to={`/Kambaz/Account/Users/${user._id}`}
//                   className="text-decoration-none red-font"
//                 >
//                   <FaUserCircle className="me-2 fs-1 text-secondary" />
//                   <span className="wd-first-name">{user.firstName}</span>
//                   <span className="wd-last-name ms-1">{user.lastName}</span>
//                 </Link>
//               </td>
//               <td className="wd-login-id">{user.loginId}</td>
//               <td className="wd-section">{user.section}</td>
//               <td className="wd-role">{user.role}</td>
//               <td className="wd-last-activity">{user.lastActivity}</td>
//               <td className="wd-total-activity">{user.totalActivity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// import { Table } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import PeopleDetails from "./Details";
// import * as courseClient from "../../Courses/client";
// import * as accountClient from "../../Account/client";

// export default function PeopleTable() {
//   const { cid } = useParams();
//   const [users, setUsers] = useState<any[]>([]);

//   useEffect(() => {
//     const loadUsers = async () => {
//       try {
//         if (cid) {
//           // If given course ID, fetch users for that course
//           const enrolledUsers = await courseClient.findUsersForCourse(cid);
//           setUsers(enrolledUsers);
//         } else {
//           // If no course ID (admin view), fetch all users
//           const allUsers = await accountClient.findAllUsers();
//           setUsers(allUsers);
//         }
//       } catch (err) {
//         console.error("Failed to fetch users:", err);
//       }
//     };

//     loadUsers();
//   }, [cid]);

//   return (
//     <div id="wd-people-table">
//       <PeopleDetails />
//       <Table striped>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user: any) => (
//             <tr key={user._id}>
//               <td className="wd-full-name text-nowrap">
//                 <Link
//                   to={`/Kambaz/Account/Users/${user._id}`}
//                   className="text-decoration-none red-font"
//                 >
//                   <FaUserCircle className="me-2 fs-1 text-secondary" />
//                   <span className="wd-first-name">{user.firstName}</span>
//                   <span className="wd-last-name ms-1">{user.lastName}</span>
//                 </Link>
//               </td>
//               <td className="wd-login-id">{user.loginId}</td>
//               <td className="wd-section">{user.section}</td>
//               <td className="wd-role">{user.role}</td>
//               <td className="wd-last-activity">{user.lastActivity}</td>
//               <td className="wd-total-activity">{user.totalActivity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// import { Table } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import PeopleDetails from "./Details";
// import * as courseClient from "../../Courses/client";
// import * as accountClient from "../../Account/client"; // Add this import

// interface PeopleTableProps {
//   users?: any[];
// }

// export default function PeopleTable({ users: propUsers }: PeopleTableProps) {
//   const { cid } = useParams();
//   const [users, setUsers] = useState<any[]>([]);

//   useEffect(() => {
//     if (propUsers) {
//       // Use users passed as props (admin view with filtering)
//       setUsers(propUsers);
//     } else if (cid) {
//       // Fetch course-specific users
//       const loadUsers = async () => {
//         try {
//           const enrolledUsers = await courseClient.findUsersForCourse(cid);
//           setUsers(enrolledUsers);
//         } catch (err) {
//           console.error("Failed to fetch users for course:", err);
//         }
//       };
//       loadUsers();
//     } else {
//       // Fallback: fetch all users
//       const loadUsers = async () => {
//         try {
//           const allUsers = await accountClient.findAllUsers();
//           setUsers(allUsers);
//         } catch (err) {
//           console.error("Failed to fetch users:", err);
//         }
//       };
//       loadUsers();
//     }
//   }, [cid, propUsers]);

//   return (
//     <div id="wd-people-table">
//       <PeopleDetails />
//       <Table striped>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user: any) => (
//             <tr key={user._id}>
//               <td className="wd-full-name text-nowrap">
//                 <Link
//                   to={`/Kambaz/Account/Users/${user._id}`}
//                   className="text-decoration-none red-font"
//                 >
//                   <FaUserCircle className="me-2 fs-1 text-secondary" />
//                   <span className="wd-first-name">{user.firstName}</span>
//                   <span className="wd-last-name ms-1">{user.lastName}</span>
//                 </Link>
//               </td>
//               <td className="wd-login-id">{user.loginId}</td>
//               <td className="wd-section">{user.section}</td>
//               <td className="wd-role">{user.role}</td>
//               <td className="wd-last-activity">{user.lastActivity}</td>
//               <td className="wd-total-activity">{user.totalActivity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PeopleDetails from "./Details";
import * as courseClient from "../../Courses/client";
import * as accountClient from "../../Account/client"; // Add this import

interface PeopleTableProps {
  users?: any[];
  onUserUpdate?: (user: any) => void;
  onUserDelete?: (userId: string) => void;
}

export default function PeopleTable({ users: propUsers, onUserUpdate, onUserDelete }: PeopleTableProps) {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (propUsers) {
      // Use users passed as props (admin view with filtering)
      setUsers(propUsers);
    } else if (cid) {
      // Fetch course-specific users
      const loadUsers = async () => {
        try {
          const enrolledUsers = await courseClient.findUsersForCourse(cid);
          setUsers(enrolledUsers);
        } catch (err) {
          console.error("Failed to fetch users for course:", err);
        }
      };
      loadUsers();
    } else {
      // Fallback: fetch all users
      const loadUsers = async () => {
        try {
          const allUsers = await accountClient.findAllUsers();
          setUsers(allUsers);
        } catch (err) {
          console.error("Failed to fetch users:", err);
        }
      };
      loadUsers();
    }
  }, [cid, propUsers]);

  return (
    <div id="wd-people-table">
      <PeopleDetails onUserUpdate={onUserUpdate} onUserDelete={onUserDelete} />
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link
                  to={`/Kambaz/Account/Users/${user._id}`}
                  className="text-decoration-none red-font"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name ms-1">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}