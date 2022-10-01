import "./card.css";

const CardImage = ({src, alt}) => {
  return (
    <div className="imageBox">
      <img src={src} alt={alt} />
    </div>
  );
};

export default CardImage;
