import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import UserProvider from "./contexts/UserContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <UserProvider>
      <CartProvider>
        <SidebarProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </SidebarProvider>
      </CartProvider>
    </UserProvider>
  </ProductProvider>
);
