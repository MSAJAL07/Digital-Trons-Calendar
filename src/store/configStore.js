import {createStore} from "redux"
import {bookingReducer} from "./reducers"


const ConfigureStore = () => {
    return createStore(bookingReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  };
export default ConfigureStore;
  