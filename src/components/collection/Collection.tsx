import "./Collection.scss";
//funkcija koja mi sluzi samo kao moj custom <div></div>
interface Props {
  children: React.ReactNode;
}
export default function Collection(props: Props) {
  return <div className="collection">{props.children}</div>;
}
