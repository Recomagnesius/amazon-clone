import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={[<h1>LOGIN PAGE</h1>]} />
          <Route path="/checkout" element={[<Checkout />]} />
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
