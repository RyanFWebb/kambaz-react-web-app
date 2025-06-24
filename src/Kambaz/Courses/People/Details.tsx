// import { useEffect, useState } from "react";
// import { FaCheck, FaUserCircle } from "react-icons/fa";
// import { FaPencil } from "react-icons/fa6";
// import { IoCloseSharp } from "react-icons/io5";
// import { useParams, useNavigate } from "react-router";
// // import { Link } from "react-router-dom";
// import * as client from "../../Account/client";
// import { FormControl } from "react-bootstrap";
// import { deleteUser } from "../../Account/client";

// export default function PeopleDetails() {

//     const [name, setName] = useState("");
//     const [role, setRole] = useState("");
//     const [email, setEmail] = useState("");
//     const [editing, setEditing] = useState(false);
//     const saveUser = async () => {
//         const [firstName, lastName] = name.split(" ");
//         const updatedUser = { ...user, firstName, lastName, role, email };
//         await client.updateUser(updatedUser);
//         setUser(updatedUser);
//         setEditing(false);
//         navigate(-1);
//     };
//     const { uid} = useParams();
//     const [user, setUser] = useState<any>({});
//     const navigate = useNavigate();
//     const fetchUser = async () => {
//         if (!uid) return;
//         const user = await client.findUserById(uid);
//         setUser(user);
//         setName(`${user.firstName} ${user.lastName}`);
//         setEmail(user.email || "");
//         setRole(user.role || "");
//     };
//     useEffect(() => {
//         if (uid) fetchUser();
//         }, [uid]);
//     if (!uid) return null;
//     return (
//         <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
//             <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
//                 <IoCloseSharp className="fs-1" /> </button>
//             <div className="text-center mt-2"> 
//                 <FaUserCircle className="text-secondary me-2 fs-1" /> 
//             </div><hr />
//             <div className="text-danger fs-4 wd-name"> 
//                 {!editing && (
//                     <FaPencil onClick={() => setEditing(true)}
//                         className="float-end fs-5 mt-2 wd-edit" /> )}
//                 {editing && (
//                     <FaCheck onClick={() => saveUser()}
//                         className="float-end fs-5 mt-2 me-2 wd-save" /> )}
//                 {!editing && (
//                     <div className="wd-name"
//                             onClick={() => setEditing(true)}>
//                         {user.firstName} {user.lastName}
//                     </div>
//                 )}
//                 {user && editing && (
//                     <FormControl className="w-50 wd-edit-name"
//                         defaultValue={`${user.firstName} ${user.lastName}`}
//                         onChange={(e) => setName(e.target.value)}
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") { saveUser(); }}}/>)}
//             </div>
//             <div>
//                 <b>Roles:</b> 
//                 <br />
//                 {!editing && (
//                     <div className="wd-role"
//                             onClick={() => setEditing(true)}>
//                         {user.role}
//                     </div>
//                 )}
//                 {user && editing && (
//                     <select value={role} onChange={(e) => setRole(e.target.value)}
//                         className="w-50 wd-edit-role">
//                         <option value="ADMIN">Administrator</option>
//                         <option value="FACULTY">Faculty</option>
//                         <option value="TA">Assistant</option>
//                         <option value="STUDENT">Student</option>
//                     </select>)}
//             </div>
//             <div>
//                 <b>Email:</b> 
//                 {!editing && (
//                     <div className="wd-name"
//                             onClick={() => setEditing(true)}>
//                         {user.email}
//                     </div>
//                 )}
//                 {user && editing && (
//                     <input type="email" className="w-50 wd-edit-name"
//                         defaultValue={`${user.email}`}
//                         onChange={(e) => setEmail(e.target.value)}
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") { saveUser(); }}}/>)}
//             </div>
//             <br />
//             <b>Login ID:</b> <span className="wd-login-id"> {user.loginId} </span> <br />
//             <b>Section:</b> <span className="wd-section"> {user.section} </span> <br />
//             <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span> 
//             <hr />
//             <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
//             <button onClick={() => navigate(-1)} className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
//         </div> 
//     ); 
// }

import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FormControl } from "react-bootstrap";
import { deleteUser } from "../../Account/client";

interface PeopleDetailsProps {
    onUserUpdate?: (user: any) => void;
    onUserDelete?: (userId: string) => void;
}

export default function PeopleDetails({ onUserUpdate, onUserDelete }: PeopleDetailsProps) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [editing, setEditing] = useState(false);
    
    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName, role, email };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        
        // Notify parent component of the update
        if (onUserUpdate) {
            onUserUpdate(updatedUser);
        }
        
        navigate(-1);
    };
    
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                if (!uid) throw new Error("User ID is undefined");
                await deleteUser(uid);
                
                // Notify parent component of the deletion
                if (onUserDelete) {
                    onUserDelete(uid);
                }
                
                navigate(-1);
            } catch (error) {
                console.error("Failed to delete user:", error);
                alert("Failed to delete user. Please try again.");
            }
        }
    };
    
    const { uid } = useParams();
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    
    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
        setName(`${user.firstName} ${user.lastName}`);
        setEmail(user.email || "");
        setRole(user.role || "");
    };
    
    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);
    
    if (!uid) return null;
    
    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" />
            </button>
            <div className="text-center mt-2"> 
                <FaUserCircle className="text-secondary me-2 fs-1" /> 
            </div>
            <hr />
            <div className="text-danger fs-4 wd-name"> 
                {!editing && (
                    <FaPencil onClick={() => setEditing(true)}
                        className="float-end fs-5 mt-2 wd-edit" />
                )}
                {editing && (
                    <FaCheck onClick={() => saveUser()}
                        className="float-end fs-5 mt-2 me-2 wd-save" />
                )}
                {!editing && (
                    <div className="wd-name"
                         onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}
                    </div>
                )}
                {user && editing && (
                    <FormControl className="w-50 wd-edit-name"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { saveUser(); }
                        }}
                    />
                )}
            </div>
            <div>
                <b>Roles:</b> 
                <br />
                {!editing && (
                    <div className="wd-role"
                         onClick={() => setEditing(true)}>
                        {user.role}
                    </div>
                )}
                {user && editing && (
                    <select value={role} onChange={(e) => setRole(e.target.value)}
                        className="w-50 wd-edit-role">
                        <option value="ADMIN">Administrator</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="TA">Assistant</option>
                        <option value="STUDENT">Student</option>
                    </select>
                )}
            </div>
            <div>
                <b>Email:</b> 
                {!editing && (
                    <div className="wd-name"
                         onClick={() => setEditing(true)}>
                        {user.email}
                    </div>
                )}
                {user && editing && (
                    <input type="email" className="w-50 wd-edit-name"
                        defaultValue={`${user.email}`}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { saveUser(); }
                        }}
                    />
                )}
            </div>
            <br />
            <b>Login ID:</b> <span className="wd-login-id"> {user.loginId} </span> <br />
            <b>Section:</b> <span className="wd-section"> {user.section} </span> <br />
            <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span> 
            <hr />
            <button onClick={handleDelete} className="btn btn-danger float-end wd-delete">
                Delete
            </button>
            <button onClick={() => navigate(-1)} className="btn btn-secondary float-start me-2 wd-cancel">
                Cancel
            </button>
        </div> 
    );
}