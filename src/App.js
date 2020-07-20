import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // ? a piece of code which runs based on a given condition
  // ! A useEffect HOOK
  // ! if second argument is left as empty, then it runs only once when the component loads

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // * user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // * user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      // ! any cleanup operations go in here
      unsubscribe();
    };
  }, []);
  console.log(user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* default path */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
