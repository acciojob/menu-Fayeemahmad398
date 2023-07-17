import React from "react";
import { useState } from "react";

const MenuPage = (props) => {
  console.log(props.Details);

  const [Details, setDetails] = useState(props.Details);

  return (
    <div>
      <div id="categories">
        <div
          onClick={() => {
            setDetails([...Details]);
          }}
        >
          All
        </div>
        <div
          onClick={() => {
            setDetails(Details.filter((dish) => dish.category == "breakfast"));
          }}
        >
          Breakfast
        </div>
        <div
          onClick={() => {
            setDetails(Details.filter((dish) => dish.category == "lunch"));
          }}
        >
          Lunch
        </div>
        <div
          onClick={() => {
            setDetails(Details.filter((dish) => dish.category === "shakes"));
          }}
        >
          Shakes
        </div>
      </div>
      <div id="menu-details">
        {Details &&
          Details.map((obj) => {
            return (
              <div className="food">
                {console.log(obj.img)}
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
