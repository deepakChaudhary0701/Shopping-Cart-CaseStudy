import { Fragment } from "react";
import classes from "./cart.module.css";

import closeLogo from "../../assets/images/close-icon.png";
import CartItem from "./cart-item/cart-item";
import lowestPrice from "../../assets/images/lowest-price.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemAmount = useSelector((state) => state.cart.totalAmount);
  let appliedClasses = "";

  let cartContent = (
    <div className={classes["cart-body"]}>
      <span className={classes["cart-empty"]}>No items in your cart</span>
      <br />
      <p>Your favourite items are just a click away.</p>
    </div>
  );

  if (cartItems.length !== 0) {
    cartContent = (
      <div className={`modal-body ${classes["cart-item-list"]}`}>
        <CartItem items={cartItems} />

        <div className={classes["lowest-price"]}>
          <img src={lowestPrice} alt="lowest price" />
          <span>You won't find it cheaper anywhere</span>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    appliedClasses = ` ${classes["empty-cart"]}`;
  } else {
    appliedClasses = `${classes.checkout}`;
  }

  const logoutUser = () => {
    if (cartItems.length !== 0) {
      dispatch(cartActions.resetCart());
      navigate("/login");
    }
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id="cartModal"
        tabIndex="-1"
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className={`modal-header ${classes["modal-title"]}`}>
              <h5 className="modal-title" id="cartModalLabel">
                My Cart
              </h5>
              &nbsp;
              <span>( {cartItems.length} items)</span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  src={closeLogo}
                  className={classes.close}
                  alt="Close Logo"
                />
              </button>
            </div>

            {cartContent}

            <div className="modal-footer">
              <span className={classes.promo}>
                Promo code can be applied on payment page
              </span>
              <button
                type="button"
                className={` btn ${appliedClasses}`}
                data-bs-dismiss="modal"
                onClick={logoutUser}
              >
                <div>
                  {cartItems.length === 0 ? (
                    <span className={classes.shopping}>Start Shopping</span>
                  ) : (
                    <span>
                      Proceed to Checkout
                      <span className={classes.amount}>
                        Rs. {cartItemAmount}
                      </span>
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
