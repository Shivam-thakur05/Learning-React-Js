import style from "./Button.module.css";

const ButtonInput = ({handleKeyDown}) => {
    // const HandlingonChange = (event) => {
    //     console.log(event.target.value)
    // }

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={style.ButtonInput}
      onKeyDown={handleKeyDown}
    />
  );
};
export default ButtonInput;
