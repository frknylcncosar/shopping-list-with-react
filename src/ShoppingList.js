import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
function ShopppingList(props) {
  const [item, setItem] = useState([]);
  console.log("FORM", item);

  useEffect(() => {
    axios
      .get("")
      .then(response => setItem(response.data))
      .catch(error => console.log({ error }));
  }, [item]);

  return item.map((data, index) => {
    return (
      <div key={index} className="list">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.shoppingList.name}</h5>
            <p className="card-text">Miktar:{data.shoppingList.quantity}</p>
          </div>
        </div>
      </div>
    );
  });
}
export default ShopppingList;
