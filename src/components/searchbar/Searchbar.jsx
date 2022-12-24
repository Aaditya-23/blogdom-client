import "./styles.css";

export default function Searchbar() {
  return (
    <div className="searchbar-wrapper">
      <input type="text"  placeholder="Search for blogs ..." className="input-area" />
      <span class="material-symbols-outlined">search</span>
    </div>
  );
}
