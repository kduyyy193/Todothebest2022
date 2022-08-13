import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import LogIn from "./pages/Auth/LogIn";
import Register from "./pages/Auth/Register";
import Setting from "./components/Setting/Setting";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-HO8vDHv3U9K2ANP4ufEbzg04ioD_eDU",
  authDomain: "tododeri.firebaseapp.com",
  projectId: "tododeri",
  storageBucket: "tododeri.appspot.com",
  messagingSenderId: "946732645162",
  appId: "1:946732645162:web:9d30a7c9a824df6a3a7c53",
  measurementId: "G-PT2E8187GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
