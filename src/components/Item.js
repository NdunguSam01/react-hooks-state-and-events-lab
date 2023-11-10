import React, { useState } from "react";

function Item({ name, category }) 
{
  const [cartClass, setCartClass]=useState('')
  // const [buttonText, setButtonText]=useState("Add to cart")
  const addToCart= ()=>
  {
    setCartClass('in-cart')
    // setButtonText("Remove from cart")
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
