import "../styles/TypeFilter.css";
import { ALL_TYPES, TYPE_ICON_MAP, TYPE_NAME_SV } from "../constants/typeIcons";

type TypeFilterProps = {
  selectedTypes: string[];
  onToggleType: (type: string) => void;
  onClear: () => void;
  totalCount?: number;
  showingCount?: number;
};

export const TypeFilter = (props: TypeFilterProps) => {
  const hasSelection = props.selectedTypes.length > 0;

  return (
    <div className="type-filter">
      <div className="type-filter-header">
        <div className="type-filter-actions">
          <button
            type="button"
            className="type-filter-clear"
            onClick={props.onClear}
            disabled={!hasSelection}
          >
            Visa alla
          </button>
        </div>
      </div>

      <div className="type-filter-grid" role="group" aria-label="Pokemon type filter">
        {ALL_TYPES.map((type) => {
          const isSelected = props.selectedTypes.includes(type);
          const icon = TYPE_ICON_MAP[type];
          const label = TYPE_NAME_SV[type] ?? type;

          return (
            <button
              key={type}
              type="button"
              className={`type-filter-chip ${isSelected ? "is-selected" : ""}`}
              onClick={() => props.onToggleType(type)}
              aria-pressed={isSelected}
              title={label}
            >
              <img className="type-filter-icon" src={icon} alt={label} />
              <span className="type-filter-label">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

