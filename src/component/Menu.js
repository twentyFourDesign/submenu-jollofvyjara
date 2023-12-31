import React, { useEffect, useLayoutEffect, useState } from "react";
import CardDetails from "./Product/CardDetails";

import Masonry from "react-smart-masonry";
import useWindowWidth from "./width";
const breakpoints = { mobile: 600, tablet: 700, desktop: 1100 };

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [menu1, setMenu1] = useState([]);

  const [loading, setLoading] = useState(false);
  const currWidth = useWindowWidth();

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

  if (loading) {
    return (
      <div className="testing">
        <h2 className="data-notfound">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="testing">
        {menu?.length ? (
          menu?.map((item , idx) => (
            <CardDetails title={item.title} items={item.data} key={idx} />
          ))
        ) : (
          <h2 className="data-notfound">Menu Not Found</h2>
        )}
    </div>
  );
}
