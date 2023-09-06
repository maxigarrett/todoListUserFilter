//le cambiamos el nombre porque colisiona con el nombre del componente 'Todo'
import { TodoId, type Todo as TodoTypes } from "../types";

interface Props extends TodoTypes {
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoTypes, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleted,
}) => {
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleted({ id, completed: e.target.checked });
  };
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleChecked}
      />
      <label htmlFor={id}>{title}</label>
      <button className="destroy" onClick={() => onRemoveTodo({ id })}></button>
    </div>
  );
};
