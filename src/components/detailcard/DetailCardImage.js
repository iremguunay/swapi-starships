import "./detailcard.css";

const DetailCardImage = ({ src, alt }) => {
  return (
    <div className="content-left">
      <img src={src} alt={alt} />
    </div>
  );
};

export default DetailCardImage;
