import "./goBack.css";

const GoBack = ({ onClick }) => {
  return (
    <>
      <button className="goback-button" onClick={onClick}></button>
    </>
  );
};

export default GoBack;
