// Import des composants nécessaires
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
// import '/Users/gauthierpulcherie/pulchprodreact/src/style/App.css'
import TopSection from "./topSection";
import Container from "./container";
import Footer from "./footer";
import "./style/root.css";
// import './style/responsive.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <div className="title">useEffect(() => {(document.title = "Gauthier Pulcherie")}, []);</div>
    <TopSection />
    <Container />
    <Footer />
  </React.Fragment>
);
