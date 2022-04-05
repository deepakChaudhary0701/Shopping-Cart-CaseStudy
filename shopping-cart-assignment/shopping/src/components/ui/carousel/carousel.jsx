import Carousel from "react-bootstrap/Carousel";
import classes from "./carousel.module.css";
import useFetch from "../../hooks/useFetch";
import API_END_POINTS from "../../../config/api-integration";

const OffersCarousel = () => {
  const { data } = useFetch(`${API_END_POINTS.banners}`, "GET");
  const OfferImages = [...data];

  const sortedOfferImages = OfferImages.sort((a, b) => a.order > b.order);

  return (
    <div className={classes["carousel-box"]}>
      <Carousel fade className={`${classes.slides} ${classes.carousel}`}>
        {sortedOfferImages.map(
          ({ bannerImageAlt, bannerImageUrl, id, isActive }) => {
            return isActive ? (
              <Carousel.Item key={id}>
                <img src={bannerImageUrl} alt={bannerImageAlt} />
              </Carousel.Item>
            ) : null;
          }
        )}
      </Carousel>
    </div>
  );
};

export default OffersCarousel;
