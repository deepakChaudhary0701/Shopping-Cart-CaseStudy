import classes from "./products.module.css";

import SideBar from "../../ui/side-nav/side-bar";
import ProductsList from "./products-list/products-list";

const Products = () => {
  return (
    <div className={`row ${classes["products-container"]}`}>
      <div className={`col-lg-3 ${classes["sidebar"]}`}>
        <SideBar />
      </div>
      <div className={`col-lg-9 ${classes.list}`}>
        <ProductsList />
      </div>
    </div>
  );
};

export default Products;
