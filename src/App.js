// import React from "react";

// function App() {
//   return <div>App</div>;
// }

// export default App;

import "./App.css";
import Navigation from "./Navigation";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h2>Hello World</h2>
        {/* <Navigation /> */}
      </Provider>
      {/* <h2>Hello World</h2> */}
    </div>
  );
}

export default App;
