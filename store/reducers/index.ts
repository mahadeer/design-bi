import { combineReducers } from 'redux';
import DesignArea from './DesignArea';

export const combinedReducers = combineReducers({
  designArea: DesignArea,
});

export type IRootState = ReturnType<typeof combinedReducers>;
