import styles from "./item.module.css";

const Item = ({ foodItem, handleBuyButton}) => {
  // const handBuyButtonClicked = (event) => {
  //   console.log(event)
  //   console.log(`${foodItem} Buy Now`)
  // };

  return (
    <li className={`${styles["kg-items"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.Button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
