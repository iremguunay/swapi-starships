import "./style.css";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchStarships } from "../../redux/starships/starshipsSlice";

// components
import Card from "../../components/card/Card";
import CardImage from "../../components/card/CardImage";
import CardBody from "../../components/card/CardBody";
import CardText from "../../components/card/CardText";
import CardTitle from "../../components/card/CardTitle";

import LoadMore from "../../components/button/LoadMore";

import Loader from "../../components/loader/Loader";

// image json
import starshipsImages from "../../starshipImages.json";

const Home = () => {
  const baseURL = useSelector((state) => state.starships.baseURL);
  const starships = useSelector((state) => state.starships.items);
  const status = useSelector((state) => state.starships.status);
  const hasNextPage = useSelector((state) => state.starships.hasNextPage);
  const nextPageURL = useSelector((state) => state.starships.nextURL);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStarships(baseURL));
  }, [dispatch, baseURL]);

  const loadNextPage = () => {
    dispatch(fetchStarships(nextPageURL));
  }

  return (
    <div className="Home">
      {/* card componenet - start */}
      <div className="container">
        {starships.map((starship, index) => (
          <Card key={index}>
            {starshipsImages.map((item) =>
              item.name === starship.name ? (
                <CardImage src={item.image} alt={item.name} key={item.id} />
              ) : null
            )}
            <CardBody>
              <CardTitle title={starship.name}/>
              <CardText>
                <span>
                  <strong>Model:</strong> {starship.model}
                </span>
                <br />
                <span>
                  <strong>Hyperdrive Rating:</strong>{" "}
                  {starship.hyperdrive_rating}
                </span>
              </CardText>
            </CardBody>
          </Card>
        ))}
      </div>
      {/* loader - start */}
      {status === "loading" && <Loader />}
      {/* load more - start */}
      {hasNextPage && status !== "loading" && (
        <LoadMore onClick={loadNextPage} />
      )}
      {!hasNextPage && (
        <div className="no-more">No more starships</div>
      )}
    </div>
  );
};

export default Home;
