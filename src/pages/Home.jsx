import { useState, useCallback, useRef } from "react";

import styles from "./home.module.css";
import Header from "../components/header/Header";
import Post from "../components/post/Post";

import useImageSearch from "../hooks/useImageSearch";

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Custom Hook.
  const { post, loading, error, hasMore } = useImageSearch(search, page);

  const observer = useRef();
  const lastPostElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Last post is visible");
          setPage(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = e => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className={styles.home}>
      <Header handleSearch={handleSearch} />
      {/* Render posts */}

      {loading && "Loading..."}
      {error && "Error..."}
      {post &&
        post.map((posts, index) => {
          if (post.length === index + 1) {
            // This is the last post, gets the reference to it.
            return <Post xref={lastPostElementRef} key={index} post={posts} />;
          } else {
            return <Post key={index} post={posts} />;
          }
        })}
    </div>
  );
}
