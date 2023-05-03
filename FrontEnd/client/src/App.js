import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import router from "./routes";
import store from "./stores";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer theme="dark" autoClose={1500} />
      </Provider>
    </div>
  );
}

export default App;
