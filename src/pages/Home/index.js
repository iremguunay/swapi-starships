import "./style.css";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchStarships } from "../../redux/starships/starshipsSlice";
import Card from "../../components/card/Card";
import CardImage from "../../components/card/CardImage";
import CardText from "../../components/card/CardText";

const Home = () => {
  const baseURL = useSelector((state) => state.starships.baseURL);
  const starships = useSelector((state) => state.starships.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStarships(baseURL));
  }, [dispatch, baseURL]);

  return (
    <div className="Home">
      <div className="container">
        {starships.map((starship, index) => (
          <Card key={index}>
            <CardImage scr={starship.url} alt={starship.name} />
            <CardText
              title={starship.name}
              model={starship.model}
              rate={starship.hyperdrive_rating}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
