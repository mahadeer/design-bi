import FilterBar from './Panels/FilterBar';
import TabBar from './Panels/TabBar';

export default function DesignArea() {
  return (
    <div className="design-area filter-off settings-on">
      <div className="filter-area bg-white border-r border-gray-400" />
      <FilterBar />
      <div className="report-area mx-5 my-10 bg-white" />
      <div className="settings-area bg-white border-l border-gray-400" />
      <TabBar />
    </div>
  );
}
