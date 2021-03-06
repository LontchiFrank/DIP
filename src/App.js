// // import React from "react";

// // function App() {
// //   return <div>App</div>;
// // }

// // export default App;

// import "./App.css";
// import Navigation from "./Navigation";
// // import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="App">
//       <Provider store={store}>
//         <h2>Hello </h2>
//         {/* <Navigation /> */}
//       </Provider>
//       {/* <h2>Hello World</h2> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      {/* <h1>Hello</h1> */}
    </Provider>
  );
}

export default App;
