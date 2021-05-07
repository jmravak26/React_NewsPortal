import "./LatestNews.scss";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
  data: Models.Article[];
}

const dotImg = <FontAwesomeIcon icon={faDotCircle} />;

export default function LatestNews(props: Props) {
  const [maxItems, setMaxItems] = useState(10);

  return (
    <div className="latestNews">
      <div className="latesInfo">
        {" "}
        <span>{dotImg}</span> Latest news
      </div>
      <div
        className="rows"
        onScroll={(event) => {
          const target = event.target as HTMLDivElement;
          const amountScrolled = target.scrollHeight - target.scrollTop;
          const heightWithOffset = target.clientHeight + 20;
          if (
            amountScrolled < heightWithOffset &&
            maxItems !== props.data.length
          ) {
            setMaxItems(props.data.length);
          }
        }}
        children={props.data.slice(0, maxItems).map((it, index) => (
          <div
            key={index}
            className="row"
            children={
              <>
                <div className="timestamp">{it.publishedAt}</div>
                <div className="content">{it.title}</div>
              </>
            }
          />
        ))}
      />
      <div className="allNews">See all news</div>
    </div>
  );
}
