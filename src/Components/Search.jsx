import "./Search.css";
import Select from "react-select";

const options = [
  { value: "dz", label: "Dzayer" },
  { value: "pr", label: "Portugal" },
  { value: "jp", label: "Japan" },
];

function Search() {
  return (
    <div>
      <input type="text" />
      <Select options={options} />
    </div>
  );
}

export default Search;
