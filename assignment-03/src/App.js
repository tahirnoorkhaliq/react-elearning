import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import About from "./components/about.component/about.component";
import Products from "./components/products.component/products.components";
import Navigation from "./routes/navigation.component";

function App() {
  const [products, setProducts]=useState([])
  useEffect(() => {
    fetch(' http://localhost:8000/products')
        .then((response)=>{
      return response.json();
    }
    ).then((productRespnse)=>{
      console.log("productRespnse ",productRespnse);
      setProducts(productRespnse);
        }
    )
  }, []);
  return (
    <div className="App">
      <Navigation></Navigation>
<Routes>
  <Route path="/" element={<About/>}/>
    <Route path="/products" element={<Products products={products}/>}/>
</Routes>
    </div>
  );
}

export default App;
