import { Fragment } from "react";
import classes from "./cart-item.module.css";
import { useDispatch } from 'react-redux';
import  { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const itemsArray = props.items;
  const dispatch =  useDispatch();

  const addItem = (product) => {
     dispatch(cartActions.addItemsToCart(product))
  };

  const removeItem = (id, item) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <Fragment>
      {itemsArray.map(({ id, price, name, quantity, imageUrl }) => {
        return (
          <div className={classes["cart-item-box"]} key={id}>
            <div className="row">
              <div className="col-md-2">
                <img
                  src={imageUrl}
                  alt="Product"
                  className={classes["cart-product-image"]}
                />
              </div>
              <div className="col-md-8">
                <h6>{name}</h6>
                <button
                  type="button"
                  className={` btn ${classes["action-btn"]}`}
                  onClick={ () => removeItem(id, { id, price, name, quantity, imageUrl })}
                >
                  <span className={classes["action-icon"]}>-</span>
                </button>
                <span className={classes.quantity}>{quantity}</span>
                <button
                  type="button"
                  className={`btn ${classes["action-btn"]}`}
                  onClick={ () => addItem({ id, price, name, quantity, imageUrl })}
                >
                  <span className={classes["action-icon"]}> + </span>
                </button>

                <span className={classes.quantity}> &times;</span>
                <span
                  className={`${classes.quantity} ${classes["item-amount"]}`}
                >
                  Rs. {price}
                </span>

                <span className={classes["total-amount"]}>Rs. {`${ price * quantity}`}</span>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default CartItem;
