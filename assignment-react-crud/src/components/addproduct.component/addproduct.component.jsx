import {useState} from "react";
import {nanoid} from 'nanoid';
import axios from "axios";
import Form from "../form.component/form.component";
import './adpr.style.css'

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
            <Form formFields={formFields} handleSubmit={handleSubmit} handleOnChange={handleOnChange}/>
        </div>
    )

}
export default AddProduct;