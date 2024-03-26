import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Signin from "./pages/Auth/Signin/Signin"
import Signup from "./pages/Auth/Signup/Signup"
import Profile from "./pages/Profile"


function App() {
  return (
    <Router>
      <div id="content">
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Products} />
          <Route path="/product/:product_id" Component={ProductDetail} />
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={Signup} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
