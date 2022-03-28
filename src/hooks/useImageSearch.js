import { useEffect, useState } from "react";
import axios from "axios";

export default function useImageSearch(search, page) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setPost([]);
  }, [search]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "get",
      url: "http://localhost:3100/images",
      params: { search, page },
    })
      .then(res => {
        setPost(prevPost => {
          return [
            ...prevPost,
            ...res.data.filter(
              post =>
                post.author.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
            ),
          ];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch(e => {
        setError(true);
      });
  }, [search, page]);

  return { post, loading, error, hasMore };
}
