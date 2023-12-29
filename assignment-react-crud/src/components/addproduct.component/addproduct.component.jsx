import {useState} from "react";
import {nanoid} from 'nanoid'
import './addproduct.styles.css'
import axios from "axios";
const defFormFields = {
    id: "",
    productName: "",
    quantity: "",
    price: ""
}

const AddProduct = () => {
    const [formFields, setFormFields] = useState(defFormFields);
    const {id, productName, quantity, price} = formFields;
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
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="productName">Product Name:</label>
                <input required={true} type="text" id="productName"
                       value={productName} name="productName" onChange={handleOnChange}/>
                <label htmlFor="quantity">Quantity:</label>
                <input required={true} type="text" id="quantity"
                       value={quantity} name="quantity" onChange={handleOnChange}/>
                <label htmlFor="price">Price:</label>
                <input required={true} type="text" id="price"
                       value={price} name="price" onChange={handleOnChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )

}
export default AddProduct;