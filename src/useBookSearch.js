import { useEffect, useState } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    localStorage.getItem("artificalId");
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: {
        q: query,
        page: 1,
        limit: 10,
        offset,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then(
        (res) => (
          setBooks((prevBooks) => {
            return [
              ...new Set([
                ...prevBooks,
                ...res.data.docs.map((b) => ({
                  id: b.cover_i || generatedId(),
                  title: b.title,
                  workKey: b.key,
                  author: b.author_name,
                  publishDate: b.publish_date,
                  authorKey: b.author_key,
                  isLocal: false,
                })),
              ]),
            ];
          }),
          setOffset(res.data.docs.length > 0),
          setLoading(false)
        )
      )
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [query, pageNumber]);
  return {
    loading,
    error,
    books,
    offset,
    setOffset,
  };
}

function generatedId() {
  let generatedId = localStorage.getItem("generatedId") || 0;
  localStorage.setItem("generatedId", ++generatedId);
  return generatedId;
}
