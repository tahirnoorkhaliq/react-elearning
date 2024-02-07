import {useSearchParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Form from "../form.component/form.component";
import {ProductsContext} from "../../contexts/products.context";
import FormComponent from "../form.component/form.component";
import {nanoid} from "nanoid";
import axios from "axios";
const defFormFields = {
    id: "",
    productName: "",
    quantity: "",
    price: ""
}
const ProductDetails=()=>{
    const [queryParameters]=useSearchParams();
    const {products}=useContext(ProductsContext)
    const productDetail=products.filter((product)=>{
        return product.id.includes(queryParameters.get("id"));
    })
    const [formFields, setFormFields] = useState(defFormFields);
    const {id, productName, quantity, price} = formFields;
    useEffect(() => {
        setFormFields({...productDetail});
    }, []);
    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
        console.log("FormFiled", formFields);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        formFields.id = nanoid();
        axios.post("http://localhost:8000/products",
            JSON.stringify(formFields),
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
            console.log(response.data);
        })
    }
    return(
        <div>
            <h1>Product Detail:</h1>
            <Form formFields={formFields} handleSubmit={handleSubmit} handleOnChange={handleOnChange}/>
            <p>Product Name:{productDetail[0].productName}</p>
            <p>Product Name:{productDetail[0].quantity}</p>
            <p>Product Name:{productDetail[0].price}</p>
        </div>
    )
}
export default ProductDetails;