import { useEffect, useState } from "react";
import Tile, { Book } from "../Tile.tsx/Tile";
import "./Favourites.scss";

function Favourites() {
  const [localStorageItems, setLocalStorageItems] = useState<Book[]>([]);

  useEffect(() => {
    if (localStorage.getItem("favourites") !== null) {
      const parsed = JSON.parse(localStorage.getItem("favourites") || "{}");
      return setLocalStorageItems(parsed);
    }
  }, [localStorageItems]);

  const handleClear = () => {
    localStorage.clear();
    setLocalStorageItems([]);
  };

  console.log(localStorageItems);

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
                  console.log(book);
                  if (books.length === index + 1) {
                    return (
                      <li className="book" key={book.workKey}>
                        <Tile book={book} />
                      </li>
                    );
                  } else {
                    return (
                      <li className="book">
                        <Tile book={book} key={book.workKey} />
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
