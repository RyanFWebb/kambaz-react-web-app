// export default function AssignmentEditor() {
//     return (
//         <div id="wd-assignments-editor">
//             <label htmlFor="wd-name">Assignment Name</label><br /><br />
//             <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
//             <textarea id="wd-description"
//                 defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
//                 Your full name and section Links to each of the lab assignments Link to the Kambaz application Links to all relevant source code repositories
//                 The Kambaz application should include a link to navigate back to the landing page.">
//             </textarea>
//             <br />
//             <table>
//                 <tbody>
//                     <tr>
//                         <td align="right" valign="top">
//                             <label htmlFor="wd-points">Points</label>
//                         </td>
//                         <td>
//                             <input id="wd-points" defaultValue={100} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td align="right" valign="top">
//                             <label htmlFor="wd-group">Assignment Group</label>
//                         </td>
//                         <td>
//                             <select id="wd-group" defaultValue="ASSIGNMENTS">
//                                 <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//                                 <option value="QUIZZES">QUIZZES</option>
//                                 <option value="EXAMS">EXAMS</option>
//                                 <option value="PROJECTS">PROJECTS</option>
//                             </select>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td align="right" valign="top">
//                             <label htmlFor="wd-display-grade-as">Display Grade as</label>
//                         </td>
//                         <td>
//                             <select id="wd-display-grade-as" defaultValue="Percentage">
//                                 <option value="ASSIGNMENTS">Percentage</option>
//                                 <option value="QUIZZES">Decimal</option>
//                                 <option value="EXAMS">Number</option>
//                             </select>
//                         </td>
//                     </tr>
//                     <tr>
//                             <td align="right" valign="top">
//                                 <label htmlFor="wd-submission-type">Submission Type</label>
//                             </td>
//                             <td>
//                                 <select id="wd-submission-type" defaultValue="ASSIGNMENTS">
//                                     <option value="ASSIGNMENTS">Online</option>
//                                     <option value="QUIZZES">Hand-In</option>
//                                 </select>
//                             </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         Online Entry Options
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <input type="checkbox" id="wd-text-entry" />
//                             <label htmlFor="wd-text-entry">Text Entry</label>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <input type="checkbox" id="wd-website-url" />
//                             <label htmlFor="wd-website-url">Website URL</label>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <input type="checkbox" id="wd-media-recordings" />
//                             <label htmlFor="wd-media-recordings">Media Recordings</label>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <input type="checkbox" id="wd-student-annotation" />
//                             <label htmlFor="wd-student-annotation">Student Annotation</label>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <input type="checkbox" id="wd-file-upload" />
//                             <label htmlFor="wd-file-upload">File Upload</label>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td align="right" valign="top">Assign</td>
//                         <td align="left" valign="top">
//                                 <label htmlFor="wd-assign-to">Assign To</label>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <input id="wd-assign-to" defaultValue={"Everyone"} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td align="left" valign="top">
//                             <label htmlFor="wd-due-date">Due</label>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td align="left" valign="top">
//                             <input type="date"
//                                 defaultValue="2024-05-13"
//                                 id="wd-due-date"/><br/>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td align="left" valign="top">
//                                 <label htmlFor="wd-available-from">Available From</label>
//                         </td>
//                         <td align="left" valign="top">
//                                 <label htmlFor="wd-available-until">Until</label>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <input type="date"
//                                     defaultValue="2024-05-06"
//                                     id="wd-available-from"/><br/>
//                         </td>                    
//                         <td>
//                             <input type="date"
//                                 defaultValue="2024-05-20"
//                                 id="wd-available-until"/><br/>
//                         </td>
//                     </tr>
//                 </tbody>
//                 <br />
//                 <tfoot>
//                     <td></td>
//                     <td></td>
//                     <button id="wd-cancel">Cancel</button>
//                     <button id="wd-save">Save</button>
//                 </tfoot>
//             </table>
//         </div>
//     );
// }

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br /><br />
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description"
                defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
                Your full name and section Links to each of the lab assignments Link to the Kambaz application Links to all relevant source code repositories
                The Kambaz application should include a link to navigate back to the landing page.">
            </textarea>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" defaultValue={100} />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group" defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECTS">PROJECTS</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as" defaultValue="Percentage">
                                <option value="Percentage">Percentage</option>
                                <option value="Decimal">Decimal</option>
                                <option value="Number">Number</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type" defaultValue="Online">
                                <option value="Online">Online</option>
                                <option value="Hand-In">Hand-In</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Online Entry Options</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Upload</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">Assign</td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-assign-to">Assign To</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input id="wd-assign-to" defaultValue="Everyone" />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-due-date">Due</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="left" valign="top">
                            <input type="date"
                                defaultValue="2024-05-13"
                                id="wd-due-date"/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-available-from">Available From</label>
                        </td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-available-until">Until</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="date"
                                defaultValue="2024-05-06"
                                id="wd-available-from"/><br/>
                        </td>                    
                        <td>
                            <input type="date"
                                defaultValue="2024-05-20"
                                id="wd-available-until"/><br/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <div style={{ textAlign: 'right' }}>
                <button id="wd-cancel">Cancel</button>
                <button id="wd-save" style={{ marginLeft: '8px' }}>Save</button>
            </div>
        </div>
    );
}