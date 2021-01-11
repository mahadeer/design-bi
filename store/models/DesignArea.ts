import { AnyAction, Dispatch } from 'redux';

export interface IDesignAreaState {
  showFilterArea: boolean;
  showSettingsArea: boolean;
}

export enum EDesignAreaAction {
  TOGGLE_FILTER_AREA = 'toggleFilterArea',
  TOGGLE_SETTINGS_AREA = 'toggleSettingsArea',
}

export function getDesignAreaActions(dispatch: Dispatch) {
  return {
    toggleFilterArea(payload: AnyAction) {
      return dispatch({
        type: EDesignAreaAction.TOGGLE_FILTER_AREA,
        payload,
      });
    },
  };
}
