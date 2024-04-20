import scss from "./Video.module.scss";

function Video() {
  return (
    <div className={scss.video}>
      <div className={scss.wrapper}>
        <img src="/images/gallery/video.svg" alt="video" />
      </div>
      <div className={scss.section}>
        <div>
          <div className={scss.left}>
            <img src="/images/gallery/welcome.svg" alt="Welcome!" />
          </div>
          <div className={scss.right}>
            <div>
              <h1>Мы открыты с 10:00 до 02:00</h1>
              <p>
                Работаем в будни и выходные дни с 10:00 до <br /> 02:00.
                Бронируйте столики по телефону: <br /> +996 0220140866+996{" "}
                <br /> 0220140866
              </p>
            </div>
            <div>
              <h1>С нетерпением ждем вас</h1>
              <p>
                на улице Сухэ-Батора, 17 <br />
                6-й мк-р, Октябрьский район, столица Бишкек,
              </p>
            </div>
            <div style={{ display: 'flex' }}>
              <img src="/images/main/insta.svg" alt="insta" />
              <span>@bono.bar.bishkek</span>
              <img src="/images/main/2gis.svg" alt="map" />
              <span>ссылка на 2гис</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
