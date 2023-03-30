
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
     <Nav />
     <Banner url={requests.fetchNetflixOriginals} />
      
      <Row title="Trending now" url={requests.fetchTrending} isLargeRow  />
      <Row title="Orignals" url={requests.fetchNetflixOriginals}  />
      <Row title="Top Rated" url={requests.fetchTopRated}  />
      <Row title="Comedy Movies" url={requests.fetchComedyMovies}  />
      <Row title="Horror Movies" url={requests.fetchHorrorMovies}  />
      <Row title="Action Movies" url={requests.fetchActionMovies}  />
      <Row title="Romance Movies" url={requests.fetchRomanceMovies}  />
      <Row title="Documentries" url={requests.fetchDocumentries}  />
    </div>
  );
}

export default App;
