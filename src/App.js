import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Errorpage from "./Errorpage";
import { ThemeProvider } from "styled-components";
import {GlobalStyle} from "./GlobalStyle";

const App = () => {
  const theme={
    
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
