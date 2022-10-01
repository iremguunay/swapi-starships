import "./card.css";

const CardBody = (props) => {
  return <div className="contentBox">{props.children}</div>;
};

export default CardBody;
