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
import HookUseCallBack from "./redux/Hooks/HookUseCallBack";
import HookUseMemo from "./redux/Hooks/HookUseMemo";
import HookUseRef from "./redux/Hooks/HookUseRef";
import ParentComponent from "./pages/HOC/ParentComponent";
import { HomeTemplate } from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Loading />
      <Switch> 
        {/* <Route exact path="/home" component={Home} /> */}

        <HomeTemplate exact path='/home' Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <AdminTemplate exact path="/login" Component={Login} />
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
        <Route exact path='/usecallback' component={HookUseCallBack} />
        <Route exact path='/usememo' component={HookUseMemo} />
        <Route exact path='/useref' component={HookUseRef} />
        <Route exact path='/details/:id' component={Details} />
        <Route exact path='/demoprops' component={ParentComponent} />
        <HomeTemplate exact path='/checkout/:id' Component={Checkout} />
         {/* // Route mặc định để dưới cùng của ứng dụng  */}
        <HomeTemplate exact path="/" Component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
