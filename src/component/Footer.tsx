import { FiltersValues } from "../types";
import { Filters } from "./Filters";

interface Props {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
  filterSelected: FiltersValues;
  handleFilterChange: (filter: FiltersValues) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}) => {
  return (
    <>
      <div>
        <span className="footer">
          <strong>{completedCount}</strong> tareas completadas
        </span>

        <button
          onClick={() => onClearCompleted()}
          style={{
            cursor: "pointer",
            width: "100%",
            height: "40px",
            backgroundColor: "#FF085F",
            fontWeight: "700",
          }}
        >
          borrar completados
        </button>
      </div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong> tareas pendientes
        </span>
        <Filters
          filterSelected={filterSelected}
          onfilterChange={handleFilterChange}
        />
      </footer>
    </>
  );
};
