import { useRef } from "react";
import "./styles.css";

export default function Searchbar(props) {
  const {
    Query: { query, setQuery },
  } = props;

  const ref = useRef();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      className="searchbar-wrapper"
      onClick={() => {
        ref.current.focus();
      }}
    >
      <input
        ref={ref}
        name="blog filter"
        value={query}
        onChange={handleChange}
        type="text"
        placeholder="Search for blogs ..."
        className="input-area"
      />
      <span className="material-symbols-outlined">search</span>
    </div>
  );
}
