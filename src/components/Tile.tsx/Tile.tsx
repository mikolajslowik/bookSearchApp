import { useEffect, useState } from "react";
import "./tile.scss";
import { useDispatch, useSelector } from "react-redux";
import { setFavourites } from "../favourites/favourites/favouritesSlice";

// import { setFavourites } from "../../features/favourites/favouritesSlice";

export interface TileSummary {
  id: number | undefined;
  title: string;
  author: string[];
  publishDate: string[];
  book: BookSummary;
}

export interface BookSummary {
  id: number | undefined;
  title: string;
  author: string[];
  publishDate: string[];
  key: string;
  authorKey: string;
  workKey: string;
}

export default function Tile(props: any) {
  // const { favouritesHandler } = useSelector(state => state.favourites);
  const dispatch: any = useDispatch();

  return (
    <div className="tile">
      <div className="img">
        {props.book.id ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${props.book.id}-M.jpg`}
            alt="Cannot find image!"
          />
        ) : (
          `cannot find cover`
        )}
      </div>
      <div className="details">
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
        <div
          className="add"
          onClick={() => (
            console.log(props.book.isLocal), dispatch(setFavourites())
          )}
        >
          <p>+</p>
        </div>
      </div>
    </div>
  );
}
