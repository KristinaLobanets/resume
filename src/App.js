import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/HomePage/HomePage";
class App extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Home />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

export default App;
