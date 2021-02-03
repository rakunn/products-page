import { combineReducers, createStore } from 'redux';

import { formReducer } from './reducers/form';

const reducers = { form: formReducer };

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
