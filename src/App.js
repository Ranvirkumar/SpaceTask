import React from "react";
import { Provider } from "react-redux";
import Data from "./container/Screen/Data";
import Store from "./container/Redux/Store";

const App = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Provider store={Store}>
        <Data />
      </Provider>
    </div>

  );
};
export default App;