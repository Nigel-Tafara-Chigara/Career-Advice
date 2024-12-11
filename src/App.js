import Hello from "./components/register";
import Login from "./components/log";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainpg";
import LandingPage from "./components/LandingPage";
import ProgramDisplay from "./components/ProgramDisplay";
import Login1 from "./components/logi";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/logi" element={<Login1 />}></Route>
        <Route path="/log" element={<Login />}></Route>
        <Route path="/register" element={<Hello />}></Route>
        <Route path="/ProgramDisplay" element={<ProgramDisplay />}></Route>
        <Route path="/mainpg" element={<Mainpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
