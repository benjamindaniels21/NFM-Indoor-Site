import React from "react";
import Header from "./components/Header";
import "./App.css";
import "./index.css";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import History from "./components/History";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

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
                {/* <Instagram /> */}
              </>
            )}
          />
          <Route path="/staff" component={Staff} />
          <Route path="/about" component={History} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
