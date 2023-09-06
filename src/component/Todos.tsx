//le cambiamos el nombre porque colisiona con el nombre del componente 'Todo'
import { type TodoId, type Todo as TodoTypes } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: Array<TodoTypes>;
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoTypes, "id" | "completed">) => void;
}
//forma de pasarle Tipos a una funcion e indicarle las props que va a recibir con typescript
export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleted,
}) => {
  return (
    <ul className="todo-list" style={{ minHeight: "200px" }}>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
            <Todo
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
              onRemoveTodo={onRemoveTodo}
              onToggleCompleted={onToggleCompleted}
            />
          </li>
        );
      })}
    </ul>
  );
};
