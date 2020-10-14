import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Phonebook from "./components/phonebook/Phonebook";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Phonebook />
      </Provider>
    </div>
  );
};

export default App;
