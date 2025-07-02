import { createContext, useContext, useEffect } from "react";
import axios from "axios";
const API = "https://api.pujakaitem.com/api/products";

const AppContex = createContext();
const AppProvider = ({ children }) => {
  const FetchProduct = async (url) => {
    const resp = await axios.get(url);
    const products = await resp.data;
    console.log("fetch api data", products);
  };
  useEffect(() => {
    FetchProduct(API);
  }, []);
  return <AppContex.Provider>{children}</AppContex.Provider>;
};

// custom hook
const useProductContex = () => {
  return useContext(AppContex);
};
export { AppProvider, AppContex, useProductContex };
