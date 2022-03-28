import styles from "./header.module.css";
import { BiSearch } from "react-icons/bi";

export default function Header({ handleSearch }) {
  return (
    <div className={styles.header}>
      <div className={styles.searchContainer}>
        <BiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="You're looking for something?"
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}
