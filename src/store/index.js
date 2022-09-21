import { createStore, combineReducers } from "redux";

import BaskerReducer from "./reducers/basket";

const reducers = combineReducers({
  basket: BaskerReducer,
});

const store = createStore(reducers);

export default store;