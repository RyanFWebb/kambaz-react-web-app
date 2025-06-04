import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo, }: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <ListGroup.Item key={todo.id} className="d-flex align-items-center justify-content-between">
            <span className="ms-2" id="wd-todo-item-title">
                {todo.title}
            </span>
            <span id="todo-item-buttons" className="float-end">
                <Button onClick={() => dispatch(setTodo(todo))}
                    variant = "primary"
                    id="wd-set-todo-click"> Edit </Button>
                <Button onClick={() => dispatch(deleteTodo(todo.id))}
                    variant="danger" className="ms-2"
                    id="wd-delete-todo-click"> Delete </Button>
            </span>
        </ListGroup.Item>
    );
}