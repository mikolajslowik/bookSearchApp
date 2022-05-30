import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Tile, { Book } from "../Tile.tsx/Tile";
import "./Favourites.scss";

function Favourites() {
  const favourites = useSelector(
    (state: RootState) => state.favouritesSlice.favourites
  );

  return (
    <div className="favouritesContainer">
      <div className="favouritesFromLocalStorage">
        <ul className="list">
          {!favourites?.length
            ? "your list is empty"
            : favourites.map((book: Book, index: number, books: Book[]) => {
                if (books.length === index + 1) {
                  return (
                    <li className="book">
                      <Tile book={book} />
                    </li>
                  );
                } else {
                  return (
                    <li className="book">
                      <Tile book={book} key={book.authorKey} />
                    </li>
                  );
                }
              })}
        </ul>
      </div>
    </div>
  );
}

export default Favourites;
