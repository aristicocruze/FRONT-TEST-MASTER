import { useState, useEffect } from "react";

export default function Post({ post }) {
  // saved if liked and likes_count in state to manipulate.
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const initialState = () => {
      setLike(post.liked);
      setLikeCount(post.likes_count);
    };
    initialState();
  }, [post]); // Verificar esto ya que ocaciona re-renderizados.

  const handleLikes = () => {};

  return (
    <div style={{ margin: "20px" }}>
      <h2>{`Autor: ${post.author}`}</h2>
      <h2>{`Titulo: ${post.title}`}</h2>
      <h2>{`id: ${post.id}`}</h2>

      <h2>{`liked? ${like}`}</h2>
      <h2>{`Likes: ${post.likes_count}`}</h2>
      <h2>{`Price: ${post.price}`}</h2>

      <button onClick={() => setLike(!like)}>{`${like}`}</button>

      <img src={post.main_attachment.small} alt="" />
      {/* Render big image in PC view */}
      {/* <img src={post.main_attachment.big} alt="" /> */}
    </div>
  );
}
