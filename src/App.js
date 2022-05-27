import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AddStation from "./pages/AddStation/AddStation";
import AllStation from "./pages/AllStation/AllStation";
import UpdateStation from "./pages/UpdateStation/UpdateStation";
import Signup from "./pages/SIgnup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/home*" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addstation" element={<AddStation />} />
          <Route path="/allstation" element={<AllStation />} />
          <Route path="/update/:id" element={<UpdateStation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
