import { createContext, useContext, useReducer } from "react";
import createPersistedReducer from 'use-persisted-reducer';

const usePersistedReducer = createPersistedReducer('state');

export const CartContext = createContext();

const initialState = {
  products: [],
};

export function CartContextProvider({ children }) {
  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "addtocart": {
        let exists = state.products.some((e) => e.pid === action.payload.pid);
        if (exists) {
          return { ...state };
        } else {
          return { ...state, products: [...state.products, action.payload] };
        }
      }

      case "removefromcart": {
        return {
          ...state,
          products: [
            ...state.products.filter(
              (product) => product.pid !== action.payload.pid
            ),
          ],
        };
      }
    }
    return state;
  }

  const [globalState, dispatch] = usePersistedReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ globalState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
