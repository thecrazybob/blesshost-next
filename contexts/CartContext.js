import { createContext, useContext } from "react";
import createPersistedReducer from "use-persisted-reducer";
import { useCartContext } from "../contexts/CartOpenContext";

const usePersistedReducer = createPersistedReducer("state");

export const CartContext = createContext();

const initialState = {
  products: [],
};

export function CartContextProvider({ children }) {
  const { setIsCartOpen } = useCartContext();

  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "addtocart": {
        setIsCartOpen(true);
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

      case "clearcart": {
        return initialState;
      }
    }
    return state;
  }

  const [globalState, dispatch] = usePersistedReducer(
    cartReducer,
    initialState
  );

  const addProductToCart = (plan, billingInterval) => {
    dispatch({
      type: "addtocart",
      payload: {
        title: plan.title || plan.name,
        description: plan.description || null,
        pid: plan.pid,
        billingInterval,
      },
    });
  };

  return (
    <CartContext.Provider value={{ globalState, dispatch, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
