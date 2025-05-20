import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div className="d-flex" id="wd-home">
            <div className="flex-fill me-3">        
                <Modules />
            </div>
            <div className="d-flex d-x1-block">
                <CourseStatus />
            </div>
        </div>
    );
}
