import { TodoTitle } from "../types";
import { useState } from "react";
interface Props {
  addTodo: ({ title }: TodoTitle) => void;
}

export const HeaderForm: React.FC<Props> = ({ addTodo }) => {
  const [inputValues, setInputValues] = useState({ title: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = { ...inputValues, [e.target.name]: e.target.value };
    setInputValues(newTodo);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValues);
  };

  return (
    <header className="header">
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          type="text"
          placeholder="que tarea necesitas recordar"
          value={inputValues.title}
          name="title"
          onChange={handleChange}
          autoFocus
        />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              width: "100%",
              height: "40px",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            agregar tarea
          </button>
        </div>
      </form>
    </header>
  );
};
