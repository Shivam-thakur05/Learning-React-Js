import style from "./Display.module.css";

const Display = ({ DisplayVal }) => {
  return (
    <input className={style.Display} type="text" value={DisplayVal} readOnly />
  );
};
export default Display;
