import "./CountryItem.css";
import { Link } from "react-router-dom";
function CountryItem(props) {
  return (
    <div className="country">
      <Link to={"/country/" + props.name}>
        <img src={props.flag} width={50} height={50} alt="" />
      </Link>
      <h1>{props.name}</h1>
      <h2>{props.continent}</h2>
    </div>
  );
}

export default CountryItem