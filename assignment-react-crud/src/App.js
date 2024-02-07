import logo from './logo.svg';
import './App.css';
import {useContext, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import About from "./components/about.component/about.component";
import Products from "./components/products.component/products.components";
import Navigation from "./routes/navigation.component";
import {ProductsContext} from "./contexts/products.context";
import AddProduct from "./components/addproduct.component/addproduct.component";
import ProductDetails from "./components/productdetails.component/productdetails.component";
import AddProductFormik from './components/addproduct.component/addProductFormik.component';
import Update from './components/update.component/update.component';

function App() {
    const {addProducts} = useContext(ProductsContext);
    useEffect(() => {
        fetch(' http://localhost:8000/products')
            .then((response) => {
                    return response.json();
                }
            ).then((productRespnse) => {
                console.log("productRespnse ", productRespnse);
                addProducts(productRespnse);
            }
        )
    }, []);
    return (
        <div className="App">
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/add-product" element={<AddProductFormik/>}/>
                <Route path="/product-detail" element={<ProductDetails/>}/>
                <Route path="/update/:id" element={<Update/>}/>                
            </Routes>
        </div>
    );
}

export default App;
