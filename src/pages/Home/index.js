import "./style.css";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchStarships } from "../../redux/starships/starshipsSlice";

const Home = () => {
  const baseURL = useSelector((state) => state.starships.baseURL);
  const starships = useSelector((state) => state.starships.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStarships(baseURL));
  }, [dispatch, baseURL]);

  return (<div className="Home">
    {starships.map((starship, index) => (
        <div key={starship.index}>
            <h3>{starship.name}</h3>
            <p>{starship.model}</p>
        </div>
    ))}
  </div>);
};

export default Home;
