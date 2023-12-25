import { todotype } from "@/types/todotype";
import ChangeTodo from "./ChangeTodo";
import './todolist.css';
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const TodoList = ({ todo }: {todo:todotype}) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.3 : 1,
  };

  return (
    
    <div className="table-responsive overflow-x-auto" style={todoStyle}>
      <table className="table table-zebra w-full">
        <tbody>
          <tr>
            <td className="py-3 px-20">
              <div className="changeicon">
                <ChangeTodo todo={todo} />
                
              </div>
            </td>

            <td className="py-3 px-20">
              <p className="font-semibold">{todo.title}</p>
            </td>

            <td className="py-3 px-20">
              <div className="flex justify-end space-x-2">
                <EditTodo todo={todo} />
                <DeleteTodo todo={todo} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
