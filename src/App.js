import { useCallback, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppDataStore from "./contexts/AppDataStore";
import Routers from "./common/Routers";
import 'react-toastify/dist/ReactToastify.css';
import { status } from "./api/auth";

function App() {
  const [user, setUser] = useState(null);

  const verifyToken = useCallback(async () => {
    try {
      const res = await status();
      setUser(res.data);
    }
    catch (err) {
      localStorage.removeItem("token");
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      verifyToken();
    }
  }, [verifyToken]);

  return (
    <AppDataStore.Provider value={{ user, setUser }}>
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
