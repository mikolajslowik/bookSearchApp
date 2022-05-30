import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Tile, { Book } from "../Tile.tsx/Tile";
import "./Favourites.scss";

function Favourites() {
  const [localStorageItems, setLocalStorageItems] = useState<Book[]>([]);

  const count = useSelector((state: RootState) => state.favouritesSlice);

  useEffect(() => {
    if (localStorage.getItem("favourites") !== null) {
      const parsed = JSON.parse(localStorage.getItem("favourites") || "{}");
      return setLocalStorageItems(parsed);
    }
  }, [count]);

  const handleClear = () => {
    localStorage.clear();
    setLocalStorageItems([]);
  };

  return (
    <div className="favouritesContainer">
      <div className="clear" onClick={handleClear}>
        clear
      </div>
      <div className="favouritesFromLocalStorage">
        <ul className="list">
          {!localStorageItems
            ? "your list is empty"
            : localStorageItems.map(
                (book: Book, index: number, books: Book[]) => {
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
                }
              )}
        </ul>
      </div>
    </div>
  );
}

export default Favourites;
