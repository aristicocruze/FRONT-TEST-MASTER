import { useEffect, useState } from "react";
import axios from "axios";

export default function useImageSearch(search, page) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;
    axios({
      method: "GET",
      url: "http://localhost:3100/images",
      params: { search, page },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setPost(prevPost => {
          //return [...prevPost, res.data];
          return res.data.filter(
            post =>
              post.author.toLowerCase().includes(search.toLowerCase()) ||
              post.title.toLowerCase().includes(search.toLowerCase())
          );
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [search, page]);

  return { post, loading, error, hasMore };
}
