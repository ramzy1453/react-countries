import "./App.css";
import CountryItem from "./Components/CountryItem";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

let countries = [
  {
    name: "Portugal",
    continent: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1024px-Flag_of_Portugal.svg.png",
  },
  {
    name: "Algeria",
    continent: "Africa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Algeria.png",
  },
  {
    name: "Japan",
    continent: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Japan_flag_-_variant.png/1200px-Japan_flag_-_variant.png",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Search />
        <div className="countries-container">
          {countries.map(function (country) {
            return (
              <CountryItem
                name={country.name}
                continent={country.continent}
                flag={country.flag}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
