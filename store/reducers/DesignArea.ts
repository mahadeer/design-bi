import { AnyAction } from 'redux';
import { EDesignAreaAction, IDesignAreaState } from '../models';

const initialState: IDesignAreaState = {
  showFilterArea: false,
  showSettingsArea: true,
};

export default (state: IDesignAreaState = initialState, action: AnyAction) => {
  switch (action.type) {
    case EDesignAreaAction.TOGGLE_FILTER_AREA:
      return { ...state, showFilterArea: !state.showFilterArea };
    case EDesignAreaAction.TOGGLE_SETTINGS_AREA:
      return { ...state, showSettingsArea: !state.showSettingsArea };
    default:
      return state;
  }
};
