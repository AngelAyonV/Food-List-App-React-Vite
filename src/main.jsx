import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import FoodListApp from "./FoodListApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FoodListApp />
  </StrictMode>
);
