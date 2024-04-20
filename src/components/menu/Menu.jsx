import scss from "./Menu.module.scss";
import { dataMenu } from "./constant";

function Menu() {
  return (
    <div className={scss.menu}>
      <h1>Меню</h1>
      <div className={scss.wrapper}>
        {dataMenu?.map((item, index) => (
          <div key={index} className={scss.wrapperCard}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
