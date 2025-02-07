import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import FoodListApp from "./FoodListApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FoodListApp />
  </StrictMode>
);
