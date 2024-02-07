
import axios from "axios";
import {useEffect,useState} from "react"
import {useNavigate,useParams} from "react-router-dom"
import Form from "../form.component/form.component";

const Update=()=>{

    const navigate=useNavigate();
    const {id} =useParams();
    const [values,setValues]=useState( {
        id: id,
        productName: "",
        quantity: "",
        price: ""
    });
    useEffect(()=>{
        axios.get('http://localhost:8000/products/'+id)
        .then(response=>{
            console.log("Response : ",response);
            setValues({...values,productName:response.data.productName,
                quantity:response.data.quantity,
                price:response.data.price})
        })
        .catch(error=>console.log("Error ",error))
    },[]);

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
        console.log("values ", values);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put("http://localhost:8000/products/"+id,
            JSON.stringify(values),
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
            console.log(response.data);
            let path=`/products`;
            navigate(path);
        }).catch(error=>console.log("Error ",error));
    }

    return (
        <div>
            <h1>Add Product</h1>
            <Form formFields={values} handleSubmit={handleSubmit} handleOnChange={handleOnChange}/>
        </div>
    )
}
export default Update;