import scss from "./Kitchen.module.scss";
import { Img } from "../UI/img/Img";

const Kitchen = ({ data, isLeft }) => {
  return (
    <div className={isLeft ? scss.kitchen : scss.kitchen2}>
      <div className={scss.left}>
        {isLeft ? (
          <Img src="/images/kitchen/img1.svg" alt="cook" />
        ) : (
          data?.map((item) => (
            <div className={scss.content} key={item.id}>
              <div>
                <Img src={item.icon} />
                <span>{item.title}</span>
              </div>
              <p>{item.text}</p>
            </div>
          ))
        )}
      </div>
      <div className={scss.right}>
        {isLeft ? (
          data?.map((item) => (
            <div className={scss.content} key={item.id}>
              <div>
                <Img src={item.icon} />
                <span>{item.title}</span>
              </div>
              <p>{item.text}</p>
            </div>
          ))
        ) : (
          <Img src="/images/kitchen/img2.svg" alt="group" />
        )}
      </div>
    </div>
  );
}

export default Kitchen;
