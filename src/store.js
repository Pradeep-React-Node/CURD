import { createStore, applyMiddleware } from "redux";
import reducers  from "./reducers/index";
import logger from "redux-logger";
import reduxThunk from 'redux-thunk';

const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()