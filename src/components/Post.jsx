export default function Post({ post }) {
  return (
    <div style={{ margin: "200px" }}>
      <h2>{`Autor: ${post.author}`}</h2>
      <h2>{`id: ${post.id}`}</h2>
      <h2>{`liked: ${post.liked}`}</h2>
      <h2>{`Likes: ${post.likes_count}`}</h2>
      <h2>{`Price: ${post.price}`}</h2>
    </div>
  );
}
