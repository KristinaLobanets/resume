import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Routes from "./routes";
class App extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {Routes.map((item) => {
                return (
                  <Route
                    key={item.label}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
                  />
                );
              })}
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

export default App;
