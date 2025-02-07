import React, { useState } from "react";
import List from "./components/List";

const FoodListApp = () => {
  const [food, setfood] = useState("");
  const [quantityFood, setquantityFood] = useState("");
  const [addFood, setaddFood] = useState();

  // Función que maneja los cambios en el input
  const handleInputChangeFood = (event) => {
    // Actualiza el estado con lo que el usuario escribe
    setfood(event.target.value);
  };

  // Función que maneja los cambios en el input
  const handleInputChangeQuantity = (event) => {
    // Actualiza el estado con lo que el usuario escribe
    setquantityFood(event.target.value);
  };

  const btnAddFood = () => {
    // Añade el nuevo alimento al estado
    let addFoodNew = { food: food, quantity: quantityFood };
    // console.log(addFoodNew);
    setaddFood(addFoodNew);
    // Limpia los input para el próximo alimento
    setfood("");
    setquantityFood("");
    console.log(addFood);
  };

  return (
    <div>
      <h1>This is an app for make a Food-List</h1>
      <h2>It be created with React + Vite</h2>
      <div className="input-text-search">
        <input
          type="text"
          placeholder="New food"
          value={food}
          onChange={handleInputChangeFood}
          // onKeyDown={handleKeyDown}
        />
        <input
          type="number"
          placeholder="Quantity of food"
          value={quantityFood}
          onChange={handleInputChangeQuantity}
          // onKeyDown={handleKeyDown}
        />
        <button
          onClick={btnAddFood}
          className="btn btn-success rounded-pill px-3"
        >
          Add
        </button>
      </div>
      <div>
        <List addFood={addFood} />
      </div>
    </div>
  );
};

export default FoodListApp;
