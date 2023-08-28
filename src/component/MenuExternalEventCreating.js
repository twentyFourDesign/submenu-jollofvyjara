import React, { useEffect, useLayoutEffect, useState } from "react";
import useWindowWidth from "./width";
import CardDetails from "./Product/CardDetails";


export default function MenuExternalEventCreating() {
  const [menu, setMenu] = useState([]);
  const [menu1, setMenu1] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState({});

  const [loading, setLoading] = useState(false);
  const currWidth = useWindowWidth();
  console.log(filteredMenu)
  const fixCard = (data) => {
    setMenu1(data);
    const arry = [...data];
    const firstElement = arry?.[0];
    const lastElement = arry?.[arry?.length - 4];
    arry?.pop();
    arry.splice(3, 0, firstElement);
    arry.splice(10, 0, lastElement);
    arry?.shift();
    setMenu(arry);
  };

  useLayoutEffect(() => {
    setLoading(true);
    fetch(`https://sabis.jollofbyjara.com/api/`)
      .then((response) => response.json())
      .then((data) => {
        fixCard(data.data);
      })
      .catch(() => setMenu([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (currWidth <= 1100) {
      const arry = [...menu1];
      const firstElement = menu1?.[0];
      arry.splice(2, 0, firstElement);
      setMenu(arry);
    } else {
      fixCard(menu1);
    }
  }, [currWidth, menu1]);

  useEffect(() => {
    if (menu1?.length) {
      let menuItem = menu1.find(
        (item) =>
          item.title.toUpperCase() ===
          "EXTERNAL EVENT CATERING (24HRS NOTICE REQUIRED)"
      );
      console.log(menuItem);
      setFilteredMenu(menuItem);
    }
  }, [menu1?.length]);

  if (loading) {
    return (
      <div className="testing">
        <h2 className="data-notfound">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="testing">
        {filteredMenu ? (
          <CardDetails title={filteredMenu?.title} items={filteredMenu?.data} />
        ) : (
          <h2 className="data-notfound">Menu Not Found</h2>
        )}
    </div>
  );
}
