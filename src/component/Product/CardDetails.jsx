import React, { useEffect, useState } from "react";
import './style.css'
import Image from '../../image/deatil.png'
const List = ({ items, title }) => {
  console.log(items)
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
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
    <div className="productContainer">
      <div className="productItems">
        {
          items?.map((item) => {
            let splitTitle = item?.title?.split(" - ");
            let firstPart = splitTitle[1];

            if (!firstPart?.endsWith(')')) {
              firstPart += ')';
            }

            const formattedTitle = `${firstPart}`;
            return (
              <div className="singleProduct" onClick={() => handleItemClick(item)}>

                <div className="subsingle">
                  <p className="name" style={{ marginTop: "2rem" }}>{item?.title?.split(" - ")[0]}</p>
                  <hr className="hr" />

                  <div className="descprice">
                    <p className="name">{formattedTitle}</p>
                    <p className="price">{item?.price?.toLocaleString()}</p>
                  </div>

                </div>
              </div>
            )
          })
        }
      </div>


      {openModal

        && (
          <div className="popup">
            <div className="popup-inner">
              <div className="popup-header">
                <p className="deatils">Details</p>
                <button className="popup-close" onClick={handleClose}>
                  &times;
                </button>
              </div>
              <div className="popup-content">
                <div className="popup-description">
                  <div className="selected-list-container">
                    <img
                      src={Image}
                      className="select-item-image"
                      alt={selectedData?.title}
                    />
                    <p className="food-description">{selectedData?.description}</p>
                  </div>

                </div>
                <div className="singlepopupd">
                  <p className="menu-popup">Menu Food Item</p>
                  <h1 className="name-popup">{selectedData?.title?.split(" - ")[0]}</h1>
                  <hr />
                  <div className="dpp">
                    {(() => {
                      let splitTitle = selectedData?.title?.split(" - ");
                      let firstPart = splitTitle[1];

                      if (!firstPart.endsWith(')')) {
                        firstPart += ')';
                      }

                      const formattedTitle = `${firstPart}`;

                      return (
                        <h1 className="name-popup" style={{fontSize:"1rem"}}>
                          {formattedTitle}
                        </h1>
                      );
                    })()}
                    <div className="popup-price">Price: {selectedData?.price?.toLocaleString()}</div>
                  </div>
                  <hr />

                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default List;
