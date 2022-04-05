import { Fragment } from "react";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import API_END_POINTS from "../../../config/api-integration";
import useFetch from "../../hooks/useFetch";
import classes from "./category.module.css";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/category-slice";

const Category = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useFetch(`${API_END_POINTS.categories}`, "GET");
  const sortedCategories = data.sort((a, b) => a.order - b.order);
  const categories = sortedCategories.map((prod) => prod.name);
  dispatch(categoryActions.addCategories(categories));

  const navigateToCategory = () => {
    navigate("/products");
  };
  return (
    <Fragment>
      {sortedCategories.map(
        ({ id, description, enabled, imageUrl, key, name, order }) => {
          return enabled ? (
            <div
              className={
                order % 2 !== 0
                  ? ` row ${classes["category-container"]} ${classes["image-position"]}`
                  : `row ${classes["category-container"]}`
              }
              key={key}
            >
              <div className={`col-lg-4 ${classes["category-images"]}`}>
                <Image fluid src={imageUrl} className="cat-img" alt={name} />
              </div>
              <div className="col-lg-8">
                <div>
                  <span className={classes["category-name"]}>{name}</span>
                  <p className={classes["category-description"]}>
                    {description}
                  </p>
                  <button
                    className={`btn btn-danger ${classes["category-btn"]}`}
                    onClick={navigateToCategory}
                  >{`Explore ${name.toLowerCase()}`}</button>
                </div>
              </div>
            </div>
          ) : null;
        }
      )}
    </Fragment>
  );
};

export default Category;
