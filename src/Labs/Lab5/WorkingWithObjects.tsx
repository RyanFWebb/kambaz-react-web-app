import { useState } from "react";
import { FormCheck, FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "mod_001", name: "NodeJS Module",
        description: "Make requests to server for results",
        course: "CS5610", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <FormControl className="w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })}/>
            <hr />
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />
            <h4>Get Module</h4>
            <a id="wd-get-module" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />
            <h4>Get Module Name</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a><hr />

            <h4>Modifying Module</h4>
            <h5>Module Name</h5>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <FormControl className="w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })}/>
            <br />
            <h5>Module Description</h5>
            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Description
            </a>
            <FormControl className="w-75" id="wd-module-description"
                defaultValue={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })}/>
            <br />
            <h5>Module Score</h5>
            <a id="wd-update-module-score"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/score/${module.score}`}>
                Update Score
            </a>
            <FormControl className="w-75" id="wd-module-score"
                type="number" defaultValue={module.score} onChange={(e) =>
                    setModule({ ...module, score: Number(e.target.value) })}/>
            <br />
            <h5>Module Complete</h5>
            <a id="wd-update-module-completed"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/completed/${module.completed}`}>
                Update Completion Status
            </a>
            <FormCheck id="wd-module-completed" label="Completed"
                type="checkbox" checked={module.completed} onChange={(e) =>
                    setModule({ ...module, completed: e.target.checked })}/>
            <hr />
        </div>
    );
}