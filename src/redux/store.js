import { createStore, applyMiddleware } from "redux"
import { persistStore } from "redux-persist";
import thunk from "redux-thunk"
import rootReducer from "./root-reducer";

const middleWares = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleWares));
// for persisting state on reloads
export const persistor = persistStore(store);

export default { store, persistor };