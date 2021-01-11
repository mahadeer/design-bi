// import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { combinedReducers, IRootState } from './reducers';

const initialState: IRootState = {
  designArea: {
    showFilterArea: false,
    showSettingsArea: true,
  },
};

// const makeStore: MakeStore<IRootState> = () => createStore(combinedReducers, initialState);

// export default createWrapper<IRootState>(makeStore, { debug: true });

export default createStore(combinedReducers, initialState);
