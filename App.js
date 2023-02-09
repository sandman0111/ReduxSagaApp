import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import StackScreen from "./components/StackScreen";

const App = () => {
  return (
    <Provider store={store}>
      <StackScreen />
    </Provider>
  );
};

export default App;
