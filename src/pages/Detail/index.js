import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/loader/Loader";

const Detail = () => {
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  const { starshipId } = useParams();

  // fetch from API again to avoid losing access to starship details when we refresh the page
  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_URL}/starships/${starshipId}`)
      .then((response) => response.data)
      .then((data) => setStarship(data))
      .finally(() => setLoading(false));
  }, [starshipId]);

  return (
    <>
      {loading && <Loader />}
      <h1>Detail</h1>
    </>
  );
};

export default Detail;
