import "./detailcard.css";

const DetailCard = (props) => {
  return (
    <div className="DetailCard">
      <div className="main">
        <div className="main-card">
          <div className="card-content">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
