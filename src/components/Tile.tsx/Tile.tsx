import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import {
  setFavourites,
  removeFavourites,
} from "../favourites/favourites/favouritesSlice";
import "./tile.scss";

export interface TileProps {
  book: Book;
}

export interface Books {
  books: Book[];
}

export interface Book {
  id: number | undefined;
  title: string;
  author: string[];
  publishDate: string[];
  key: string;
  authorKey: string;
  workKey: string;
  isLocal: boolean;
}
export default function Tile(props: TileProps) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (props.book.isLocal) {
      dispatch(removeFavourites(props.book));
    } else {
      dispatch(setFavourites(props.book));
    }
  };
  return (
    <div className="tile">
      <div className="img">
        {props.book.id ? (
          <img
            className="cover"
            src={`https://covers.openlibrary.org/b/id/${props.book.id}-M.jpg`}
            alt="Cannot find image!"
          />
        ) : (
          <p className="cover">cannot find cover</p>
        )}
      </div>

      <div className="details">
        <div className="scroll">
          <ul>
            <li>
              <p>Author:</p>

              <a
                className="tooltip"
                href={`https://openlibrary.org/authors/${props.book.authorKey}`}
              >
                {props.book.author?.join(", ")}
                <span className="tooltiptext">Check this author!</span>
              </a>
            </li>
            <li>
              <p>Title:</p>

              <a
                className="tooltip"
                href={`https://openlibrary.org/${props.book.workKey}`}
              >
                {props.book.title}
                <span className="tooltiptext">Check this book!</span>
              </a>
            </li>
            <li>
              <p>First publication:</p>
              {props.book.publishDate?.[0]}
            </li>
          </ul>
          <div className="add" onClick={handleAdd}>
            {/* <p onClick={() => setToggle(!toggle)}> */}
            <p>
              {props.book.isLocal ? (
                <p style={{ color: "red" }}>-</p>
              ) : (
                <p style={{ color: "green" }}>+</p>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
