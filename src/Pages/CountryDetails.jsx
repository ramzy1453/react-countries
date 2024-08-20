import { Link, useParams } from "react-router-dom";
import "./CountryDetails.css";

function CountryDetails() {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>Name country is {params.name}</h1>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default CountryDetails;
