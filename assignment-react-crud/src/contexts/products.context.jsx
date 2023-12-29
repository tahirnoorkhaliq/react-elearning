import {useState,createContext} from 'react';
export const ProductsContext=createContext({
    products:[],
    addProducts:()=>{}
});
export const ProductsProvider=({children})=>{
    const [products,setProducts]=useState([])
    const addProducts=(productsToAdd)=>{
        setProducts(productsToAdd);
    }
    const value={products,addProducts};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}