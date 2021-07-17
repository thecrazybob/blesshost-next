import { createContext, useContext } from "react";
import createPersistedState from "use-persisted-state";

const allCurrencies = [{ name: "AED" }, { name: "USD" }];

export const CurrencyContext = createContext();

export function CurrencyContextProvider({ children }) {
  const useSelectedState = createPersistedState("currency");
  const [currency, setCurrency] = useSelectedState(allCurrencies[0]);

  return (
    <CurrencyContext.Provider value={{currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
