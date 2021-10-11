import css from "./Sort.module.css";
import * as Icon from "react-bootstrap-icons";

const Sort = (props) => {
  let dateClass = "";
  let likesClass = "";

  props.sortType === "created_at"
    ? (dateClass = css.Active)
    : (likesClass = css.Active);
  return (
    <div className={css.SortDiv}>
      <span>Sort by:</span>
      <ul className={css.SortList}>
        <li
          onClick={
            props.sortType === "created_at" && props.sortDir === "DESC"
              ? () => props.onSort(2)
              : () => props.onSort(1)
          }
          className={dateClass}
        >
          Date{" "}
          {dateClass !== "" ? (
            props.sortDir === "DESC" ? (
              <Icon.CaretUp />
            ) : (
              <Icon.CaretDown />
            )
          ) : null}
        </li>
        <li
          onClick={
            props.sortType === "rating" && props.sortDir === "DESC"
              ? () => props.onSort(4)
              : () => props.onSort(3)
          }
          className={likesClass}
        >
          Likes{" "}
          {likesClass !== "" ? (
            props.sortDir === "DESC" ? (
              <Icon.CaretUp />
            ) : (
              <Icon.CaretDown />
            )
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Sort;