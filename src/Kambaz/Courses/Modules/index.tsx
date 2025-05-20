// export default function Modules() {
//     return (
//         <div>
//             {/* Implement Collapse All button, View Progress button, etc. */}
//             <div id="wd-modules-header">
//                 <button id="wd-collapse-all-btn">Collapse All</button>
//                 <button id="wd-view-progress-btn">View Progress</button>
//                 <select id="wd-publish-btn" name="wd-publish-btn">
//                     <option value="wd-publish-btn">Publish All</option>
//                 </select>
//                 <button id="wd-mark-complete-btn">+ Module</button>
//             </div>
//             <ul id="wd-modules">
//                 <li className="wd-module">
//                     <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to the course</li>
//                                 <li className="wd-content-item">Learn what is Web Development</li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">READING</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
//                                 <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML</li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">SLIDES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to Web Development</li>
//                                 <li className="wd-content-item">Creating an HTTP server with Node.js</li>
//                                 <li className="wd-content-item">Creating a React Application</li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="wd-module">
//                     <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
//                                 <li className="wd-content-item">Deploy the assignment to Netlify</li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">SLIDES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to HTML and the DOM</li>
//                                 <li className="wd-content-item">Formatting Web content with Headings and Paragraphs</li>
//                                 <li className="wd-content-item">Formatting content with Lists and Tables</li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="wd-module">
//                     <div className="wd-title">Week 2</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to CSS</li>
//                                 <li className="wd-content-item">Selectors by tag ID, classes, and document structure</li>
//                                 <li className="wd-content-item">Styling color and background color</li>
//                                 <li className="wd-content-item">Styling dimensions and positions</li>
//                                 <li className="wd-content-item">The box model - styling margins, borders, and paddings</li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">READING</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Developing Full Stack MERN Web Applications - Chapter 2 - Styling Web Pages with CSS</li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">SLIDES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">MDN Learn CSS</li>
//                                 <li className="wd-content-item">MDN CSS guidelines</li>
//                                 <li className="wd-content-item">MDN The Box Model</li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="wd-module">
//                     <div className="wd-title">Week 3</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">Pending Publication</span>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }

import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> 
                        <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
                    </div>
                        <ListGroup className="wd-lessons rounded-0">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
                            </ListGroup.Item>
                        </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}