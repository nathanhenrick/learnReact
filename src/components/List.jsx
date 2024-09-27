import style from './List.module.css'

function List(props) {
  return (
    <>
      <ul className={style.listContainer}>
          <li>{props.item1}</li>
          <li>{props.item2}</li>
          <li>{props.item3}</li>
      </ul>
    </>
  );
}

export default List;