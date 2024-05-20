// import logo from "./logo.svg";
import Navbar from "./component/Navbar";
import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./component/Users";
import Orders from "./component/Orders";
import Form from "./component/Form";
import Loggers from "./component/LoggersPage";

function App() {
  const [toggle, setToggle] = useState(false);
  function Toggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className={toggle ? "d-none" : "w-auto position-fixed"}>
          <Sidebar />
        </div>

        <div className={toggle ? "d-none" : "invisible"}>
          <Sidebar />
        </div>

        <div className="col overflow-auto">
          <Navbar Toggle={Toggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/form" element={<Form />} />
            <Route path="/loggers" element={<Loggers />} />
          </Routes>

          {/* <Navbar />
        <Home /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
