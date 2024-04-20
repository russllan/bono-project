import MainSlider from "../UI/mainSlider/MainSlider";
import scss from "./Main.module.scss";
import { Img } from "../UI/img/Img";

function Main() {
  return (
    <div className={scss.main}>
      <div>
        <MainSlider />
        <div className={scss.wrapperBtn}>
          <button className={scss.btn}>Забронировать стол</button>
        </div>
        <div className={scss.wrapperCircle}>
          <div className={scss.circle}>
            <Img src="/images/main/bell.svg" alt="bell" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
