import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";

interface Props {
  onClick(value: string): void;
}
const searchImg = <FontAwesomeIcon icon={faSearch} />;

export default function SearchBar(props: Props) {

  const [search, setSearch] = useState("");
  useEffect(() => {
    if (!isDesktop) props.onClick(search);
  }, [isDesktop, search]);

  return (
    <div className="searchBar">
      <label htmlFor="SearchBar">{searchImg}</label>
      <input
        className="search"
        id="SearchBar"
        name="SearchBar"
        type="text"
        placeholder="Search news"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      {isDesktop && (
        <button onClick={() => props.onClick(search)}>SEARCH</button>
      )}
    </div>
  );
}
