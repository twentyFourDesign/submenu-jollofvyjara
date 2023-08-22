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

  return (
    <div className="details-container">
      <h1 className="details-header">Ask our team if you'd like suggestions!</h1>
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