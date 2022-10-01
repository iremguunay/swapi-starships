import "./style.css";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchStarships,
  getSearchResult,
} from "../../redux/starships/starshipsSlice";

// components
import Card from "../../components/card/Card";
import CardImage from "../../components/card/CardImage";
import CardBody from "../../components/card/CardBody";
import CardText from "../../components/card/CardText";
import CardTitle from "../../components/card/CardTitle";

import LoadMore from "../../components/button/LoadMore";

import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";

import SearchBar from "../../components/search/SearchBar";

// image json
import starshipsImages from "../../starshipImages.json";
import { Link } from "react-router-dom";

const Home = () => {
  const baseURL = useSelector((state) => state.starships.baseURL);
  const starships = useSelector((state) => state.starships.items);
  const status = useSelector((state) => state.starships.status);
  const hasNextPage = useSelector((state) => state.starships.hasNextPage);
  const nextPageURL = useSelector((state) => state.starships.nextURL);
  const error = useSelector((state) => state.starships.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStarships(baseURL));
    }
  }, [dispatch, baseURL, status]);

  const loadNextPage = () => {
    dispatch(fetchStarships(nextPageURL));
  };

  const handleSearch = (event) => {
    dispatch(getSearchResult(event.target.value));
  };

  // get id from starships url property to use in detail page
  const findUrlId = (url) => {
    const id = url.match(/\/(\d+)+[/]?/g);
    return id[0].replace(/\//g, "");
  };

  if (status === "failed") {
    return (
      <>
        <Error>
          <h2>{error.code}</h2>
          <h4>{error.message}</h4>
          <p>It looks like one of the developers fell asleep :)</p>
        </Error>
      </>
    );
  }

  return (
    <div className="Home">
      {/* searchBar component - start */}
      <SearchBar placeholder="Search for..." onChange={handleSearch} />
      {/* card component - start */}
      <div className="container">
        {starships.map((starship, index) => (
          <Link
            to={`/starships/${findUrlId(starship.url)}`}
            className="card-link"
            key={index}
          >
            <Card>
              {starshipsImages.map((item) =>
                item.name === starship.name ? (
                  <CardImage src={item.image} alt={item.name} key={item.id} />
                ) : null
              )}
              <CardBody>
                <CardTitle title={starship.name} />
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
          </Link>
        ))}
      </div>
      {/* loader - start */}
      {status === "loading" && <Loader />}
      {/* load more - start */}
      {hasNextPage && status !== "loading" && (
        <LoadMore onClick={loadNextPage} />
      )}
      {!hasNextPage && <div className="no-more">No more starships</div>}
    </div>
  );
};

export default Home;
