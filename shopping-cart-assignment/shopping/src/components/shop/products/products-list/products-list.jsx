import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import classes from "./products-list.module.css";
import Button from "react-bootstrap/Button";
import API_END_POINTS from "../../../../config/api-integration";
import useFetch from "../../../hooks/useFetch";
import { useDispatch} from 'react-redux';
import { cartActions } from "../../../store/cart-slice";

const ProductsList = () => {
  const { data } = useFetch(`${API_END_POINTS.products}`, "GET");
 
  
  const dispatch = useDispatch();

  const productsArray = [...data];

  const addItemToCart = (product) => {
     const addedItem = {
       id: product.id,
       price: product.price,
       quantity: 1,
       imageURL: product.imageURL,
       name: product.name
     }

     dispatch(cartActions.addItemsToCart(addedItem));
  }

  return (
    <Row xs={1} md={2} lg={4} className="g-4 mb-4">
      {productsArray.map((product) => (
        <Col className={classes["card-col"]} key={ product.id }>
          <Card className={classes.card} >
            <Card.Body>
              <Card.Title className={ classes['product-title']}>{product.name}</Card.Title>
              <Card.Img variant="top" src={product.imageURL} alt="" />
              <Card.Text className={classes["desc-text"]}>
                { product.description }
              </Card.Text>
            </Card.Body>
            <div className={classes["btn-container"]}>
              <span className={classes.mrp}>MRP Rs. { product.price }</span>
              <Button variant="light" className={classes["buy-btn"]} onClick={() =>  addItemToCart(product) }>
                Buy Now
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
