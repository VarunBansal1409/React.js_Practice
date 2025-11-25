import NavBar from "./components/NavBar"
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TvSeries from "./pages/TvSeries"
import MostPopular from "./pages/MostPopular"
import TopAiring from "./pages/TopAiring"
import Error from "./pages/Error"

let App = () => {
  return(
    <>
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/tv-series" element={<TvSeries />}/>
          <Route path="/most-popular" element={<MostPopular />}/>
          <Route path="/top-airing" element={<TopAiring />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App