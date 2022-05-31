import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { getPersistedBooks } from "./components/favourites/favourites/favouritesSlice";
import About from "./components/about/About";
import Books from "./components/books/books";
import Favourites from "./components/favourites/Favourites";
import Homepage from "./components/homepage/Homepage";
import Navigation from "./components/navigation/Navigation";

function App() {
  console.clear();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersistedBooks());
  }, []);

  console.log(
    'localStorage.getItem("favourites"): ',
    localStorage.getItem("favourites")
  );

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
