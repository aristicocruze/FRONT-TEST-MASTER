import { useState, useEffect } from "react";

import axios from "axios";

import Header from "../components/Header";
import Post from "../components/Post";

export default function Home() {
  const [post, setPost] = useState(null);

  // This will be in a custom hook
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3100/images");
      setPost(res.data);
    };
    fetchPosts();
  }, []);

  console.log(post);
  return (
    <div>
      <Header />
      {/* Render posts */}
      {post && post.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
}
