import "./App.css";
import Detail from "./Components/Products/Detailes/Detail";
import Products from "./Pages/Products.js";
import ProductsSecondView from "./Pages/products-secondView/ProductsSecondView";
import Nav from "./Components/NavBar/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <ProductsSecondView />
      {/* <Products></Products>  */}
      {/* <Detail/> */}
    </div>
  );
}

export default App;
