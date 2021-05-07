import "./ExtraBar.scss";

interface Props {
  title1: string;
  title2: string;
  txt1: string;
}

export default function ExtraBar(props: Props) {
  return (
    <div className="extrabar">
      <div className="makeMN">{props.title1}</div>
      <div className="everyday">{props.title2}</div>
      <button>GET</button>
      <div className="nothx">{props.txt1}</div>
    </div>
  );
}
