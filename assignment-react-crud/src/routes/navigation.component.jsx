import {Fragment} from 'react';
import {Link, Outlet} from "react-router-dom";
import './navigation.styles.css'
function Navigation(){
    return(
        <Fragment>
            <div className="float-container">
                <div className="float-child">
                    <Link to="/">About Us</Link>
                </div>
                <div className="float-child">
                    <Link to="/products">Products</Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}
export default Navigation;