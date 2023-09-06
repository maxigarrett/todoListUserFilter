import { FILTERS_BUTTONS } from "../const";
import { FiltersValues } from "../types";

interface Props {
  filterSelected: FiltersValues;
  onfilterChange: (filters: FiltersValues) => void;
}

interface Props {}
export const Filters: React.FC<Props> = ({
  filterSelected,
  onfilterChange,
}) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault();
                onfilterChange(key as FiltersValues);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
