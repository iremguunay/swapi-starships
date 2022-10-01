import "./style.css";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchStarships } from "../../redux/starships/starshipsSlice";

// components
import Card from "../../components/card/Card";
import CardImage from "../../components/card/CardImage";
import CardText from "../../components/card/CardText";

// image json
import starshipsImages from "../../starshipImages.json";

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
            {starshipsImages.map((item) => 
              item.name === starship.name ? (
                <CardImage src={item.image} alt={item.name} key={item.id}/>
              ) : null
            )}  
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
