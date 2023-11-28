import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";
import SignUpContext from "./Pages/SignUp/SignUpContext";
import Login from "./Pages/Login/Login";
import Ad from "./Pages/Header/Ad";
import LogComp from "./Pages/Login/LogComp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SignUpContext />} />
          <Route path="login" element={<LogComp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
