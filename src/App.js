import React, { useState } from "react";
import "./styles.css";
import ShoppingList from "./ShoppingList";
import AddItem from "./AddItem";
const App = () => {
  const [item, setItem] = useState({ name: "", quantity: "" });
  const handleChange = event =>
    setItem({ ...item, [event.target.name]: event.target.value });
  return (
    <div className="App">
      <h2>Shopping List</h2>
      <AddItem item={item} onItemChange={handleChange} />
      <ShoppingList item={item} />
    </div>
  );
};
export default App;
