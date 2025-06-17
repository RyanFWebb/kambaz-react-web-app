import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function CourseNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    let links;
    if (currentUser && currentUser.role === "ADMIN") {
        links = ["Profile", "Users"];
    } else if (currentUser) {
        links = ["Profile"];
    } else {
        links = ["Signin", "Signup"];
    }
    // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();
    // const active = (path: string) => (pathname.includes(path) ? "active" : "");

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <ListGroup id="wd-courses-navigation" style={{width: 120}}
                className="list-group fs-5 rounded-0">
                {links.map((label) => {
                    const path = `/Kambaz/Account/${label}`;
                    const isActive = pathname === path;
                    return (
                        <ListGroup.Item
                            key={path}
                            as={Link}
                            to={path}
                            className={`bg-black text-left border-0
                                ${isActive
                                    ? "text-black bg-white border-start border-3 border-black"
                                    : "text-danger bg-white"}`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingLeft: '1px',
                                paddingRight: '15px',
                                marginBottom: '4px',
                            }}
                        >
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
                            {label}
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
            {/* {currentUser && currentUser.role === "ADMIN" && (
                <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )} */}
        </div>
    );
}