import styles from "./header.module.css";

export default function Header({ handleSearch }) {
  return (
    <div className={styles.header}>
      <input
        type="text"
        placeholder="You're looking for something?"
        onChange={handleSearch}
        className={styles.search}
      />
    </div>
  );
}
