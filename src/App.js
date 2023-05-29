import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import Saved from "./pages/Saved";
import Pay from "./pages/Pay";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Sale from "./pages/Sale";

function App() {
  const { isLoaded } = useContext(AuthContext)
  if (!isLoaded) return <div></div>
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/for-sale" element={<Sale />}></Route>
        <Route element={<ProtectedRoute />} >
          <Route element={<Account />} path="/account" />
          <Route element={<Saved />} path="/saved" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
