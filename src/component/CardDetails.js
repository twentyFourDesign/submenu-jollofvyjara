import React, { useEffect, useState } from "react";
import Masonry from "react-smart-masonry";
const breakpoints = { mobile: 600, tablet: 700, desktop: 1100 };

const List = ({ items, title }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  console.log(selectedData.image)
  const handleItemClick = (item) => {
    setOpenModal(!openModal);
    setSelectedData(item);
  };

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);
  console.log(selectedData)
  console.log(selectedData?.title,"title")
  console.log(selectedData?.image,"image")
  console.log(selectedData?.price,"price")
  console.log(selectedData?.description,"description")

  return (
    <div className="details-container">
      <h1 className="details-header">{title}</h1>
      <div className="menuItems">
        {
          items?.map((item)=>{
            return(
              <div className="childMenu" onClick={() => handleItemClick(item)}>
                <p className="food-name">{item?.title}</p>
                <div className="hr-parent">
                  <hr className="hrTag"/>
                </div>
                <p className="food-price">{item?.price?.toLocaleString()}</p>
              </div>
            )
          })
        }
      </div>
      {openModal && (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-header">
              <div className="selected-item-name">Title: {selectedData?.title}</div>
              <button className="popup-close" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="popup-content">
              <div className="popup-price">Price: {selectedData?.price?.toLocaleString()}</div>
              <div className="popup-description">
                <div className="selected-list-container">
                  <img
                    src={selectedData?.image}
                    className="select-item-image"
                    alt={selectedData?.title}
                  />
                  <p className="food-description">Description: {selectedData?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;


{/* <div className="list-container">
<Masonry
  autoArrange={true}
  breakpoints={breakpoints}
  columns={{ mobile: 1, tablet: 2, desktop: 3 }}
  gap={{ mobile: 20, tablet: 30, desktop: 40 }}
>
  {items?.map((item, index) => (
    <div
      key={index}
      className="list-item"
      onClick={() => handleItemClick(item)}
    >
      <div className="item-name">{item.title}</div>
      <div className="item-line">
        <hr></hr>
      </div>
      <div className="item-price">{item.price.toLocaleString()}</div>
    </div>
  ))}
  </Masonry>
</div> */}