import { BrowserRouter } from "react-router";
import AppRouter from "./routes/AppRouter";
import { Bounce } from "react-toastify";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
