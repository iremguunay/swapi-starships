import "./card.css";

const Card = (props) => {
  return (
    <article className="card">
      <div className="content">
        {props.children}
      </div>
    </article>
  );
};

export default Card;
