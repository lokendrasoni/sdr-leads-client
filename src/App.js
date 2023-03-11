import AppDataStore from "./contexts/AppDataStore";
import { BrowserRouter } from "react-router-dom";
import Routers from "./common/Routers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppDataStore.Provider value={{}}>
      <BrowserRouter>

        <Routers />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </AppDataStore.Provider>
  );
}

export default App;
