import React from "react";
import "./styles.css";

const AddItem = props => {
  return (
    <form>
      <input
        value={props.item.name}
        placeholder="ürün ismi girin"
        onChange={props.onItemChange}
        name="name"
      />

      <input
        type="number"
        value={props.item.quantity}
        placeholder="miktar"
        onChange={props.onItemChange}
        name="quantity"
      />
      <button
        onClick={e => {
          e.preventDefault();
          console.log(props.item.quantity);

          fetch("url", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: props.item.name,
              quantity: +props.item.quantity
            })
          });
        }}
      >
        Ekle
      </button>
    </form>
  );
};
export default AddItem;
