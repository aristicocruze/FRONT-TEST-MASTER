import { useState } from "react";

//import axios from "axios";

import Header from "../components/Header";
import Post from "../components/Post";

import useImageSearch from "../hooks/useImageSearch";

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { post, loading, error, hasMore } = useImageSearch(search, page);

  const handleSearch = e => {
    setSearch(e.target.value);
    setPage(1);
  };
  // Custom Hook.

  return (
    <div>
      <Header />
      {/* Render posts */}
      <input
        type="text"
        placeholder="Search by Autor or Title"
        onChange={handleSearch}
      />
      {loading && "Loading..."}
      {error && "Error..."}
      {post && post.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
}
