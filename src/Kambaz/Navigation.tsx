// import { Link } from "react-router-dom";
// export default function KambazNavigation() {
//     return (
//         <div id="wd-kambaz-navigation">
//             <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
//             <Link to="/Kambaz/Account" id="wd-account-link">Account</Link><br/>
//             <Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
//             <Link to="/Kambaz/Dashboard" id="wd-course-link">Courses</Link><br/>
//             <Link to="/Kambaz/Calendar" id="wd-calendar-link">Calendar</Link><br/>
//             <Link to="/Kambaz/Inbox" id="wd-inbox-link">Inbox</Link><br/>
//             <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
//         </div>
//     );
// }


import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function KambazNavigation() {
    const [activeItem, setActiveItem] = useState("Account");
    const isActive = (itemName: string): boolean => activeItem === itemName;
    const handleItemClick = (itemName: string): void => {
        setActiveItem(itemName);
    };
    return (
        <ListGroup id="wd-kambaz-navigation" style={{ width: 110 }}
            className="rounded-0 position-fixed 
            bottom-0 top-0 d-none d-md-block bg-black z-2">
            <ListGroup.Item id="wd-neu-link" target="_blank" action 
                href="https://www.northeastern.edu/"
                className="bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" />
            </ListGroup.Item>
            
            <ListGroup.Item 
                to="/Kambaz/Account" 
                as={Link}
                onClick={() => handleItemClick("Account")}
                className={`text-center border-0 ${isActive("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaRegCircleUser className={`fs-1 ${isActive("Account") ? "text-danger" : "text-white"}`} /><br />
                Account 
            </ListGroup.Item>
            
            <ListGroup.Item 
                to="/Kambaz/Dashboard" 
                as={Link}
                onClick={() => handleItemClick("Dashboard")}
                className={`text-center border-0 ${isActive("Dashboard") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <AiOutlineDashboard className={`fs-1 text-danger`} /><br />
                Dashboard 
            </ListGroup.Item>
            
            <ListGroup.Item 
                to="/Kambaz/Dashboard" 
                as={Link}
                onClick={() => handleItemClick("Courses")}
                className={`text-center border-0 ${isActive("Courses") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <LiaBookSolid className={`fs-1 text-danger`} /><br />
                Courses 
            </ListGroup.Item>
            
            <ListGroup.Item 
                to="/Kambaz/Calendar" 
                as={Link}
                onClick={() => handleItemClick("Calendar")}
                className={`text-center border-0 ${isActive("Calendar") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <IoCalendarOutline className={`fs-1 text-danger`} /><br />
                Calendar 
            </ListGroup.Item>
            
            <ListGroup.Item 
                to="/Kambaz/Inbox" 
                as={Link}
                onClick={() => handleItemClick("Inbox")}
                className={`text-center border-0 ${isActive("Inbox") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaInbox className={`fs-1 text-danger`} /><br />
                Inbox 
            </ListGroup.Item>
            
            <ListGroup.Item 
                to="/Labs" 
                as={Link}
                onClick={() => handleItemClick("Labs")}
                className={`text-center border-0 ${isActive("Labs") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <LiaCogSolid className={`fs-1 text-danger`} /><br />
                Labs 
            </ListGroup.Item>
        </ListGroup>
    );
}