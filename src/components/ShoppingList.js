import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) 
{
  const [selectedCategory, setSelectedCategory]=useState("All")

  //Evaluating the value of selectedCategory. If it is all, display all the items. If not filter the items whose category value is equal to selectedCategory state
  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)

   //Function that listens to the change in the select tag
   function handleFilterChange(event) 
   {
     //Updating the selectedCategory state to the value selected by the user
     setSelectedCategory(event.target.value);
   }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Mapping the result of the filteredItems variable and passing in the props to the Item component */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
