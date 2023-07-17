import React from "react";
import FoodDetails from "./component/FoodDetails";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MachineInfoComponent from "./component/MachineInfoComponent";
import TakeOutDeliveryComponent from "./component/TakeOutDeliveryComponent";
import MenuExternalEventCreating from "./component/MenuExternalEventCreating";
import Menu from "./component/Menu";

function Main() {
  return (
    <div>
      <Header />
      <MenuExternalEventCreating />
      {/* <Menu /> */}
      <FoodDetails />
      <Footer />
    </div>
  );
}

export default Main;
