import './detailcard.css'

const DetailCardTitle = ({tag, title}) => {
  return (
    <>
      <div className="tag">
        <h6>{tag}</h6>
      </div>
      <h2>{title}</h2>
      <hr />
    </>
  )
}

export default DetailCardTitle
