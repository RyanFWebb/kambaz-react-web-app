import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroup.Item key={todo.id} className="d-flex align-items-center justify-content-between">
            <span className="ms-2 float-start" id="wd-todo-form-title">
                <FormControl value={todo.title}
                    onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
            </span>
            <span id="todo-item-buttons" className="float-end">
                <Button onClick={() => dispatch(updateTodo(todo))}
                    variant="warning"
                    id="wd-update-todo-click"> Update </Button>
                <Button onClick={() => dispatch(addTodo(todo))}
                    variant="success" className="ms-2"
                    id="wd-add-todo-click"> Add </Button>
            </span>
        </ListGroup.Item>
    );
}