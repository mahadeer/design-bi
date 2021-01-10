import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function FilterBar() {
  return (
    <div className="filter-bar bg-white border-r border-gray-400">
      <div className="filter-icon">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="cursor-default filter-text text-lg font-semibold tracking-widest">
        <span className="my-2">
          <FontAwesomeIcon icon={faFilter} />
        </span>
        <span>Filters</span>
      </div>
    </div>
  );
}
