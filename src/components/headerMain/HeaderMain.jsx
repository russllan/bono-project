import { Img } from "../UI/img/Img";
import { data } from "./constant";
import scss from "./HeaderMain.module.scss";
import { Link } from "react-router-dom";

function HeaderMain() {
  return (
    <div className={scss.headerMain}>
      <div className={scss.Left}>
        <Img src="/images/main/bono.svg" alt="Bono" />
      </div>
      <div className={scss.Right}>
        {data?.map((item) => (
          <div key={item.title}>
            <Link className={scss.link} to={item.link}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderMain;
