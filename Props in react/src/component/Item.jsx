import styles from "./item.module.css";

const Item = ({foodItem}) => {
  return (
    <li className={`${styles["kg-items"]}`}>
      <span className={`${styles["kg-span"]}`}>
      {foodItem}</span></li>
  );
};
export default Item;
