import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getDesignAreaActions } from '../store/models';
import { IRootState } from '../store/reducers';
import FilterBar from './Panels/FilterBar';
import TabBar from './Panels/TabBar';
import ReportArea from './ReportArea';

function DesignArea(
  props: ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>,
) {
  const { showFilterArea, showSettingsArea, toggleFilterArea } = props;
  return (
    <div
      className={`design-area filter-${
        showFilterArea ? 'on' : 'off'
      } settings-${showSettingsArea ? 'on' : 'off'}`}
    >
      <div className="filter-area bg-white border-r border-gray-400" />
      <FilterBar onToggleFilterArea={toggleFilterArea} />
      <ReportArea />
      <div className="settings-area bg-white border-l border-gray-400" />
      <TabBar />
    </div>
  );
}

function mapStateToProps(state: IRootState) {
  return { ...state.designArea };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return getDesignAreaActions(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignArea);
