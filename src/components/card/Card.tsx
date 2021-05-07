import "./Card.scss";

interface Props {
  category?: string;
  title: string;
  description?: string;
  img?: string;
  imgAlt?: string;
}
export default function Card(props: Props) {
  return (
    <div className="card">
      {props.img && <img alt={props.imgAlt || ""} src={props.img} />}
      <div className="cardInfo">
        {props.category && <div className="cardCategory">{props.category}</div>}
        <div className="cardTitle">{props.title}</div>
        {props.description && (
          <div className="cardDescription">{props.description}</div>
        )}
      </div>
    </div>
  );
}
