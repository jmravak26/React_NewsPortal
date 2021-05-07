import "./BreakingNews.scss";

interface Props {
  title: string;
  author?: string;
}

export default function BreakingNews(props: Props) {
  return (
    <div className="breakingNews">
      <div className="breaking">Breaking</div>
      <div className="titleBreaking">{props.title}</div>
      <div className="authorBreaking">{props.author}</div>
    </div>
  );
}
