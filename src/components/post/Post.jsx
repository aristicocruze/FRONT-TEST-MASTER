import { useState, useEffect } from "react";
import styles from "./post.module.css";

export default function Post({ post, xref }) {
  // saved if liked and likes_count in state to manipulate.
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const initialState = () => {
      // setLike(post.liked);
      // setLikeCount(post.likes_count);
    };
    initialState();
  }, []); // Verificar esto ya que ocaciona re-renderizados.

  const handleLikes = () => {};

  const converIntToCurrency = num => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className={styles.post} ref={xref && xref}>
      <div className={styles.postTop}>
        <div className={styles.priceContainer}>
          <span className={styles.price}>
            {converIntToCurrency(post.price)} <small>€</small>
          </span>
        </div>
        <img
          src={post.main_attachment.small}
          alt={post.title}
          className={styles.img}
        />
      </div>
      <div className={styles.postBottom}>bottom</div>
    </div>
  );
}

{
  /* <span>{`Price: ${post.price}`}</span>
<img className={styles.img} src={post.main_attachment.small} alt="" />
<h2>{`Titulo: ${post.title}`}</h2>
<h2>{`by ${post.author}`}</h2>
<h2>{`Likes: ${post.likes_count}`}</h2>
{/* <h2>{`id: ${post.id}`}</h2> */
}

{
  /* <h2>{`liked? ${like}`}</h2>

<button onClick={() => setLike(!like)}>{`${like}`}</button>

{/* Render big image in PC view */
}
{
  /* <img src={post.main_attachment.big} alt="" />  */
}
