import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from "./components/home"
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import ConfigureStore from "./store/configStore"
import Book from "./components/book"
import Details from "./components/details"
const store = ConfigureStore();
function App() {
  return (
    <div className="main" >
      <h1 className = "heading">Digital Trons Calendar</h1>
      <Provider store = {store}>
     <Router>
       <Switch>
        <Route path ="/details/:id" exact><Details/></Route>
        <Route path ="/book/:id" exact><Book/></Route>
        <Route path ="/" ><Home/></Route>
       </Switch>
     </Router>
     </Provider>
    </div>
  );
}

export default App;
