import React from "react";
import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";
import MenuExternalEventCreating from "./component/MenuExternalEventCreating";
import Navbar from "./component/Navbar/Navbar";
import Header from './component/Header/Header'
function Main() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <MenuExternalEventCreating />
      <Card/>
      <Footer />
    </div>
  );
}

export default Main;
