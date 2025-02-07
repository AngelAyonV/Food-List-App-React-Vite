import React, { useEffect, useState } from "react";

const List = ({ addFood }) => {
  const [listFood, setListFood] = useState([]);

  useEffect(() => {
    if (addFood) {
      setListFood([...listFood, addFood]);
    }
  }, [addFood]); //Se ejecuta cada vez que listFood cambie

  useEffect(() => {
    console.log(listFood);
  }, [listFood]); //Se ejecuta cada vez que listFood cambie)

  return (
    <div className="list-table">
      <h2>Food List:</h2>
      {listFood ? (
        <div className="row-table">
          <p>Name: {listFood.food}</p>
          <p>Quantity = {listFood.quantity}</p>
          {/* Agrega más campos según la estructura de tu objeto */}
        </div>
      ) : (
        <p>No se ha agregado ninguna comida.</p>
      )}
    </div>
  );
};

export default List;
