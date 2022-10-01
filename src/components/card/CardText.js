import './card.css'

const CardText = ({title, model, rate}) => {
  return (
    <div className="contentBox">
          <h3>{title}</h3>
          <hr />
          <p>
            <span>
              <strong>Model:</strong> {model}
            </span>
            <br />
            <span>
              <strong>Hyperdrive Rating:</strong> {rate}
            </span>
          </p>
        </div>
  )
}

export default CardText
