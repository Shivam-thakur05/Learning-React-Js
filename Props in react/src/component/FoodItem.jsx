import Item from "./Item";
const FoodItem = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item 
        key={item}
        foodItem={item}
        handleBuyButton={() => console.log("clicked")}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItem;
