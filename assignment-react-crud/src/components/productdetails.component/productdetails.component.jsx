import {useSearchParams} from "react-router-dom";
import {useContext} from "react";
import {ProductsContext} from "../../contexts/products.context";
const ProductDetails=()=>{
    const [queryParameters]=useSearchParams();
    const {products}=useContext(ProductsContext)

    const productDetail=products.filter((product)=>{
        return product.id.includes(queryParameters.get("id"));
    });
    return(
        <div>
            <h1>Product Detail:</h1>
            <p>Product Name:{productDetail[0].productName}</p>
            <p>Product Name:{productDetail[0].quantity}</p>
            <p>Product Name:{productDetail[0].price}</p>
        </div>
    )
}
export default ProductDetails;