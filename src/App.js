import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import Search from "./Pages/Search";
import Sidebar from "./Pages/Sidebar";

function App() {
  return (
    <div class="main">
      <Router>
        <header>
          <img src="img_header.png" />
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
          </nav>
          <br />
          <Search />
        </header>
        <br />
        <hr></hr>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
