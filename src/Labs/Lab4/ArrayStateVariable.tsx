import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((_item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <Button variant="success" className="mb-2" onClick={addElement}>Add Element</Button>
            <ListGroup>
                {array.map((item, index) => (
                    <ListGroup.Item className="fs-2" key={index}> {item} 
                        <Button className="float-end" variant="danger" onClick={() => deleteElement(index)}>Delete</Button>
                    </ListGroup.Item>))}
            </ListGroup><hr/>
        </div>
    );
}