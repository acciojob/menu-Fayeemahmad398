import React from "react";
import { useState } from "react";

const MenuPage = (props) => {
  const [Details, setDetails] = useState(props.Details);

  return (
    <div>
      <main id="categories">
        <div
          onClick={() => {
            setDetails([...props.Details]);
          }}
        >
          All
        </div>
        <div
          id="filter-btn-1"
          onClick={() => {
            setDetails(
              props.Details.filter((dish) => dish.category == "breakfast")
            );
          }}
        >
          Breakfast
        </div>
        <div
          id="filter-btn-2"
          onClick={() => {
            setDetails(
              props.Details.filter((dish) => dish.category == "lunch")
            );
          }}
        >
          Lunch
        </div>
        <div
          id="filter-btn-3"
          onClick={() => {
            setDetails(
              props.Details.filter((dish) => dish.category === "shakes")
            );
          }}
        >
          Shakes
        </div>
      </main>
      <div id="menu-details">
        {Details &&
          Details.map((obj) => {
            return (
              <div className="food">
                {/* {console.log(obj.img)} */}
                <div className="food-details">
                  <img src={obj.img} alt="img" />
                  <div>
                    <h3>{obj.title}</h3>
                    <strong>{obj.price}</strong>
                  </div>
                  <p>{obj.desc}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default MenuPage;
