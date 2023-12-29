import logo from './logo.svg';
import './App.css';
import Products from "./components/products.components";
function App() {
  const products=[
      {
          'id':'1',
          'productName':'Moto G 5',
          'quantity':'10',
          'price':'10000'
      },
      {
          'id':'2',
          'productName':'Lenovo Laptop',
          'quantity':'10',
          'price':'110000'
      },
      {
          'id':'3',
          'productName':'Samsung',
          'quantity':'10',
          'price':'20000'
      }
  ]
  return (
    <div className="App">
      <h1>Products List</h1>
        <Products products={products}/>
    </div>
  );
}

export default App;
