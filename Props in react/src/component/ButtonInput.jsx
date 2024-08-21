import style from "./Button.module.css";

const ButtonInput = ({HandlingonChange}) => {
    // const HandlingonChange = (event) => {
    //     console.log(event.target.value)
    // }

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={style.ButtonInput}
      onChange={HandlingonChange}
    />
  );
};
export default ButtonInput;
