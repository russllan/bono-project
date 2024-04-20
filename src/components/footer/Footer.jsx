import scss from "./Footer.module.scss";
import { footerData, footerIconData } from "./constants";

function Footer() {
  return (
    <div className={scss.footer}>
      <div className={scss.left}>
        <img src="/images/main/bono.svg" alt="Bono" />
      </div>
      <div className={scss.right}>
        {footerData.map((item, index) => (
          <div className={scss.wrapperLink} key={item.title}>
            <h2>{item.title}</h2>
            <a>{item.link1}</a>
            <a>{item.link2}</a>
            <a>{item.link3}</a>
          </div>
        ))}
      </div>
      <div className={scss.bottom}>
        <div>
          <span>2024 год. Bono bar. Все права защищены.</span>
          <div className={scss.viewImg}>
            {footerIconData.map((item) => (
                <img src={item.img} alt="icon" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
