import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import Lifecycle from "./pages/Lifecycle/Lifecycle";
import UseStateHook from "./redux/Hooks/UseStateHook";
import BTChonXe from "./redux/Hooks/BTChonXe";
import UseEffectHome from "./redux/Hooks/UseEffectHome";
import ReduxHook from "./redux/Hooks/ReduxHook";
import Details from "./pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Loading />
      <Header />
      <Switch> 
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/lifecycle" render={(propsRoute) => { // tham số chứa các props của thẻ route
          return <div>
            <h3>Component lifecycle</h3>
           <Lifecycle {...propsRoute} /> 
          </div>
        }} />
        <Route exact path='/usestatedemo' component={UseStateHook} />
        <Route exact path='/chonmauxe' component={BTChonXe} />
        <Route exact path='/useeffectdemo' component={UseEffectHome} />
        <Route exact path='/reduxhook' component={ReduxHook} />
        <Route exact path='/details/:id' component={Details} />
         {/* // Route mặc định để dưới cùng của ứng dụng  */}
        <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
