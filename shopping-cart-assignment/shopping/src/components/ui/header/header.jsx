
import brandLogo from "../../../assets/images/logo.png";
import classes from "./header.module.css";
import cartLogo from '../../../assets/images/grocery-cart.png';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect,useState } from "react";

const Header = () => {
 const cartItems =  useSelector(state => state.cart.items);
 const [buttonHighLighted,setButtonHighlighted] = useState(false);

 useEffect( () => {
   if( cartItems.length > 0){
     setButtonHighlighted(true);
   }

   const timer = setTimeout( () => {
    setButtonHighlighted(false);
  }, 300);

  return () => {
    clearTimeout(timer);
  }
 }, [ cartItems]);

 const appliedClasses = `btn btn-secondary ${ classes['cart-btn']} ${ buttonHighLighted ? classes.bump : null}`;
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${classes["navbar-box"]}`}
    >
      <div className="container-fluid">
        <img src={brandLogo} alt="Sabka Bazaar" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className={ `navbar-nav ${ classes['navbar-text']} ${ classes.category}`}>
            <li className={ `nav-item ${ classes['category-text']}`}>
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <div className={ classes['auth-text']}>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sign-up">
                  Register
                </Link>
              </li>
            </div>
          </ul>
          <div>
          <button className={ appliedClasses } data-bs-toggle="modal" data-bs-target="#cartModal" >
            <img src={ cartLogo } alt="Shopping Cart" />
            <span className={ classes['items-text']}>{ cartItems.length } items</span>
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
