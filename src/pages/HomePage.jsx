import GallerySlider from "../components/UI/photoGallerySlider/GallerySlider";
import BookForm from "../components/bookForm/BookForm";
import Header from "../components/header/Header";
import HeaderMain from "../components/headerMain/HeaderMain";
import Kitchen from "../components/kitchen/Kitchen";
import { dataKitchen } from "../components/kitchen/constant";
import Main from "../components/main/Main";
import Menu from "../components/menu/Menu";
import Video from "../components/video/Video";
import scss from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={scss.home}>
      <div>
        <Header />
      </div>
      <div className={scss.headerMain}>
        <HeaderMain />
      </div>
      <div>
        <Main />
      </div>
      <div style={{ background: "#111111" }}>
        <div>
          <Kitchen data={dataKitchen} isLeft={true} />
        </div>
        <div>
          <Kitchen data={dataKitchen} isLeft={false} />
        </div>
        <div>
          <Menu />
        </div>
      </div>
      <div className={scss.gallerySection}>
        <div>
          <GallerySlider />
        </div>
      </div>
      <div className={scss.videoSection}>
        <div>
          <Video />
        </div>
      </div>
      <div className={scss.bookTable}>
        <BookForm />
      </div>
    </div>
  );
}

export default HomePage;
