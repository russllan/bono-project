import { Img } from "../UI/img/Img";
import scss from "./Header.module.scss";

function Header() {
  return (
    <div className={scss.header}>
      <div className={scss.left}>
        <div className={scss.bodyLeft}>
          <Img src="/images/main/phone.svg" alt="phone" />
          <a>+996 501 06 55 05</a>
        </div>
        <div>
          <Img src="/images/main/email.svg" alt="email" />
          <a href="https://www.google.com/intl/ru/gmail/about/">
            bono51@gmail.com
          </a>
        </div>
      </div>
      <div className={scss.right}>
        <div>
          <Img src="/images/main/insta.svg" alt="insta" />
          <a href="https://www.instagram.com/">instagram</a>
        </div>
        <div>
          <Img src="/images/main/2gis.svg" alt="map" />
          <a href="https://2gis.kg/bishkek">2Gis</a>
        </div>
        <div>
          <button className={scss.btn}>Заказать</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
