import React, { useEffect, useState } from "react";

const List = ({ addFood }) => {
  const [listFood, setListFood] = useState([]);

  useEffect(() => {
    if (addFood) {
      setListFood([...listFood, addFood]);
    } else {
      setListFood([]);
    }
  }, [addFood]); //Se ejecuta cada vez que listFood cambie

  useEffect(() => {
    console.log(listFood);
  }, [listFood]); //Se ejecuta cada vez que listFood cambie)

  return (
    <div className="list-table">
      <h2>Food List:</h2>
      {listFood.length > 0 ? ( // ¿Hay comidas en la lista?
        listFood.map(
          (
            foodItem,
            index // Recorre cada comida
          ) => (
            <div key={index} className="row-table">
              <p>Nombre: {foodItem.food}</p>
              <p>Cantidad: {foodItem.quantity}</p>
            </div>
          )
        )
      ) : (
        <p>No se ha agregado ninguna comida.</p> // Si no hay comidas, muestra este mensaje
      )}
    </div>
  );
};

export default List;
