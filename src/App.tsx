import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import LogIn from "./pages/Auth/LogIn";
import Register from "./pages/Auth/Register";
import Setting from "./components/Setting/Setting";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage children={<Dashboard />} />} />
        <Route
          path="/dashboard"
          element={<MainPage children={<Dashboard />} />}
        />
        <Route path="/setting" element={<MainPage children={<Setting />} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
