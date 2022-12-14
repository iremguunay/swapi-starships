import axios from "axios";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// components
import DetailCard from "../../components/detailcard/DetailCard";
import DetailCardImage from "../../components/detailcard/DetailCardImage";
import DetailCardBody from "../../components/detailcard/DetailCardBody";
import DetailCardTitle from "../../components/detailcard/DetailCardTitle";
import DetailCardText from "../../components/detailcard/DetailCardText";

import Loader from "../../components/loader/Loader";
import GoBack from "../../components/button/GoBack";
import Error from "../../components/error/Error";

import starshipImages from "../../starshipImages.json";

const Detail = () => {
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { starshipId } = useParams();

  // fetch from API again to avoid losing access to starship details when we refresh the page
  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_URL}/starships/${starshipId}`)
      .then((response) => response.data)
      .then((data) => setStarship(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [starshipId]);

  const shipImage = starshipImages.find(
    (image) => image.name === starship?.name
  );

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <GoBack onClick={goBack} />
      {loading && <Loader />}
      {starship && (
        <DetailCard>
          <DetailCardImage src={`../${shipImage.image}`} alt={shipImage.name} />
          <DetailCardBody>
            <DetailCardTitle tag="FEATURES" title={starship.name} />
            <DetailCardText>
              <strong>Model:</strong> {starship.model}
              <br />
              <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
              <br />
              <strong>Passengers:</strong> {starship.passengers}
              <br />
              <strong>Max Atmosphering Speed:</strong>{" "}
              {starship.max_atmosphering_speed}
              <br />
              <strong>Manufacturer:</strong> {starship.manufacturer}
              <br />
              <strong>Crew:</strong> {starship.crew}
              <br />
              <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
            </DetailCardText>
          </DetailCardBody>
        </DetailCard>
      )}
      {error && (
        <Error>
          <div style={{marginTop: "-150px"}}>
          <h2>{error.code}</h2>
          <h4>{error.message}</h4>
          <p>It looks like one of the developers fell asleep :)</p>
          </div>
        </Error>
      )}
    </>
  );
};

export default Detail;
