import { createContext, useContext, useState } from "react";



export const CartOpenContext = createContext();

export function CartOpenContextProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)


  return (
    <CartOpenContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartOpenContext.Provider>
  );
}

export const useCartContext = () => useContext(CartOpenContext);
