import './products.styles.css'
import {useContext, useState} from "react";
import {ProductsContext} from "../../contexts/products.context";
import {Link, useNavigate} from "react-router-dom";
import Modal from "../modal.component/modal.component";
function Products(){
    const {products}=useContext(ProductsContext);
    const [open,setOpen]=useState(false);
    const[productId,setProductId]=useState('');
    const navigate=useNavigate();
    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=(id)=>{
        setProductId(id);
        setOpen(true);
    }

    const handleContinue=()=>{
        console.log("handleContinue")
        let path =`/product-detail`+'?id='+productId;
        navigate(path);
    }
    return(
        <div className="table-conatiner">
            <table>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product)=>{
                        return(
                            <tr key={product.id}>
                                <td><a href="#" onClick={()=>handleOpen(product.id)}>{product.productName}</a></td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <div className="float-container">
                <div className="float-child">
                    <Link to="/add-product">Add Product</Link>
                </div>
            </div>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                <h1>conformation</h1>
                    <h3>Are u sure u want to view details?</h3>
                    <div className="btn">
                        <button type="button" onClick={handleClose}>Close</button>
                        <button type="button" onClick={handleContinue}>Continue</button>
                    </div>
                </>
            </Modal>

        </div>
    );
}
export default Products;
