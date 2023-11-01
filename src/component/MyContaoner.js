import css from "../style/style2.module.css";

export function MyContaoner() {
  return (
    <div className={`${css.boxClass}  ${css.error} ${css.note}`}>
      <h1>Lorem ipsum dolor sit.</h1>
    </div>
  );
}
