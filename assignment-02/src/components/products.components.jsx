import './products.styles.css'
function Products(props){
    const {products}=props;
    return(
        <div className="table-conatiner">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {
                    products.map((product)=>{
                        return(
                            <tr key={product.id}>
                               <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    })
                }
            </table>

        </div>
    );
}
export default Products;
