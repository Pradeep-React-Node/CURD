import changeTheNumber from "./updown";
import todoReducers from "./todoreducers";
import { combineReducers } from "redux";
import usersReducers from "./userReducer";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber,
        todoReducers,
       data: usersReducers

    }
);

export default reducers;