import "./books.scss";
import { useState } from "react";
import useBookSearch from "../../useBookSearch";
import Tile, { BookSummary } from "../Tile.tsx/Tile";

function Books() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, books, setOffset } = useBookSearch(query, pageNumber);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => (
    setQuery(e.target.value), setPageNumber(1)
  );

  const handlePageAndOffset = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    setOffset((prevOffset) => prevOffset + 10);
  };

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop >=
      e.target.documentElement.scrollHeight
    ) {
      handlePageAndOffset();

      console.log("innerHeight", window.innerHeight);
      console.log("top", e.target.documentElement.scrollTop);
      console.log("scroll", e.target.documentElement.scrollHeight);
    } else return;
  };

  window.addEventListener("scroll", handleScroll);

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
          {books.map((book: BookSummary, index, books) => {
            console.log(book);
            if (books.length === index + 1) {
              return (
                <li className="book" key={Math.random()}>
                  <Tile book={book} />
                </li>
              );
            } else {
              return (
                <li className="book">
                  <Tile book={book} key={Math.random()} />
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
