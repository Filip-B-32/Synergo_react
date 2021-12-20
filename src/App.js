import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import Search from "./Pages/Search";
import Signup from "./Pages/Signup";

import About from "./Pages/About";
import BookRent from "./Pages/BookRent";
import BookRequest from "./Pages/BookRequest";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div class="main">
      <Router>
        <header>
          <img src="img_header.png" />
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
            <Link to="/signup"> SignUp </Link>
          </nav>
          <br />
          <Search />
        </header>
        <br />
        <hr></hr>
        <div class="sidebar">
          <Link to="/about">About</Link>
          <Link to="/rent-a-book">Rent a Book</Link>
          <Link to="/request-a-book">Request a Book</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/rent-a-book" element={<BookRent />} />
          <Route path="/request-a-book" element={<BookRequest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
