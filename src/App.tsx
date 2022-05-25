import { Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./components/about/About";
import Books from "./components/books/books";
import Favourites from "./components/favourites/Favourites";
import Homepage from "./components/homepage/Homepage";
import Navigation from "./components/navigation/Navigation";

function App() {
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
