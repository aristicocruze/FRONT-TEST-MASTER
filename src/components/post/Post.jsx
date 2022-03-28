import { useState, useEffect } from "react";
import styles from "./post.module.css";
import { AiTwotoneLike } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import axios from "axios";

export default function Post({ post, xref }) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [error, setError] = useState(false);

  // initial state of post
  useEffect(() => {
    setLike(post.liked);
    setLikeCount(post.likes_count);
  }, []);

  const handleLikes = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3100/images/${post.id}/likes`
      );
      if (res.status === 204) {
        console.log(res.status);
        setLike(!like);
        setLikeCount(like ? likeCount - 1 : likeCount + 1);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

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
      <div className={styles.postBottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <h1 className={styles.author}>by {post.author}</h1>
        <div className={styles.likesContainer}>
          <div className={styles.likes} onClick={handleLikes}>
            {likeCount}
            <div
              className={`${styles.iconContainer} ${like && styles.likedPost}`}
            >
              <AiTwotoneLike />
            </div>
          </div>
          <div className={styles.likes}>
            {error && <span>Error when liking post</span>}
            <div className={styles.iconContainer}>
              <MdRefresh />
            </div>
            000
          </div>
        </div>
      </div>
    </div>
  );
}
