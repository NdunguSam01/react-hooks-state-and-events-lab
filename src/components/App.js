import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [appBackground, setAppBackground]=useState(false)

  const [buttonText, setButtonText]=useState("Dark Mode")

  const handleBackground = (e) =>
  {
    let buttonText=e.target.textContent
    setAppBackground(!appBackground)
    
    if(appBackground === true)
    {
      setButtonText("Dark Mode")
    }
    else
    {
      setButtonText("Light Mode")
    }
    return buttonText
  }

  const appClass = appBackground ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleBackground}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
