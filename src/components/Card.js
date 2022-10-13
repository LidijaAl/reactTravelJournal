export default function Card(props) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className="card-info">
        <div className="card-location">
          <img src="./images/location-tag.png" />
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="title">{props.title}</h2>
        <h5 className="date">
          {props.startDate} - {props.endDate}
        </h5>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
