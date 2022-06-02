import "./books.scss";
import { useEffect, useState } from "react";
import useBookSearch from "../../useBookSearch";
import Tile, { Book } from "../Tile.tsx/Tile";

function Books() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, books, offset, setOffset } = useBookSearch(
    query,
    pageNumber
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => (
    setQuery(e.target.value), setPageNumber(1)
  );

  const handlePageAndOffset = () => {
    setPageNumber(pageNumber + 1);
    setOffset(offset + 10);
  };

  const handleScroll = (event: any) => {
    if (
      window.innerHeight + event.target.documentElement.scrollTop >=
      event.target.documentElement.scrollHeight
    ) {
      handlePageAndOffset();
    } else return;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [pageNumber, offset]);

  return (
    <>
      <div className="books">
        <div className="input">
          <label>
            Write a title or an author:
            <input type="text" onChange={handleSearch} value={query} />
          </label>
        </div>
        <ul className="list">
          {books.map((book: Book, index, books) => {
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
          })}
        </ul>
        <div className="loading">{loading && "loading..."}</div>
        <div className="error">{!loading && "nothing to see here..."}</div>
        <div className="error">{error && "error"}</div>
      </div>
    </>
  );
}

export default Books;
