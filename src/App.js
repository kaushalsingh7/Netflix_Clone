import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Rows from "./components/Rows";
import request from "./request";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rows title="NETFLIX original" fetchUrl={request.fetchNetflixOriginals} />
      <Rows title="Trending now" fetchUrl={request.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
    </div>
  );
}

export default App;
