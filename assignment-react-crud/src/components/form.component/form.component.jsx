import './addproduct.styles.css'
const Form = (props) => {
    const{formFields,handleSubmit,handleOnChange}=props;
    const {id, productName, quantity, price} = formFields;
    console.log("formFields",formFields);
    console.log("productName",productName);
    return (
        <form onSubmit={handleSubmit} className="form-inline">
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
    )
}
export default Form;