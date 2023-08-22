import React from "react";
import FoodDetails from "./component/FoodDetails";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MenuExternalEventCreating from "./component/MenuExternalEventCreating";

function Main() {
  return (
    <div>
      <Header />
      <MenuExternalEventCreating />
      <FoodDetails />
      <Footer />
    </div>
  );
}

export default Main;
