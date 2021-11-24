import React from "react";
import Header from "./components/Header";
import "./App.css";
import "./index.css";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";
import Staff from "./components/Staff";
import History from "./components/History";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* <Route path="/" exact component={MainBody} /> */}
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <MainBody />
                <Instagram />
              </>
            )}
          />
          <Route path="/staff" component={Staff} />
          <Route path="/about" component={History} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
