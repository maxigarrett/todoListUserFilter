import { useState } from "react";
import { Todos } from "./component/Todos";
import {
  FiltersValues,
  TodoTitle,
  type TodoId,
  type Todo as TodoTypes,
} from "./types";
import { Footer } from "./component/Footer";
import { TODO_FILTERS } from "./const";
import { HeaderForm } from "./component/HeaderForm";

const mockTodos = [
  {
    id: "1",
    title: "hacer compras",
    completed: false,
  },
  {
    id: "2",
    title: "lavar auto",
    completed: false,
  },
  {
    id: "3",
    title: "estudiar react",
    completed: false,
  },
];
const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FiltersValues>(
    TODO_FILTERS.ALL
  );

  const hadleCheckInput = ({
    id,
    completed,
  }: Pick<TodoTypes, "id" | "completed">): void => {
    const newTodoitemChecked = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: completed,
        };
      }
      return todo;
    });
    setTodos(newTodoitemChecked);
  };

  // dos formas de pasarle los parametro a la funcion "({ id }: TodoId)" o "(id: TypeId['id'])"
  //tendriamos que pasarlos de esas dos formas en todos los lugares donde utilicemos la funcion para no dar error
  //"({ id }: TodoId)" se denomina parametros nombrados
  const handleRemove = ({ id }: TodoId): void => {
    const newTodoFiltered = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoFiltered);
  };

  //---------------------FILTRADO
  const handleFilterChange = (filter: FiltersValues): void => {
    // console.log(filter);
    setFilterSelected(filter);
  };

  //sacar los ya completados
  const removeCompleteTodo = (): void => {
    const filteredComplete = todos.filter((todo) => todo.completed === false);
    setTodos(filteredComplete);
  };

  const activeCount = todos.filter((todo) => todo.completed === false).length;
  const completedCount = todos.length - activeCount;

  const filtersTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ALL) return todo;
    if (filterSelected === TODO_FILTERS.ACTIVE) return todo.completed === false;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
  });

  //AGREGAMOS NUEVOS TODO
  const addTodo = (todo: TodoTitle) => {
    const ramdomID = crypto.randomUUID().split("-").slice(-1).toString();
    const newTodo = {
      id: ramdomID,
      title: `${todo.title}`,
      completed: false,
    };
    const newListTodo = [...todos, newTodo];
    setTodos(newListTodo);
  };

  return (
    <div className="todoapp">
      <HeaderForm addTodo={addTodo} />
      <Todos
        todos={filtersTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleted={hadleCheckInput}
      />
      <Footer
        completedCount={completedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={removeCompleteTodo}
      />
    </div>
  );
};

export default App;
