import Header from "../components/header/Header";
import HeaderMain from "../components/headerMain/HeaderMain";
import Kitchen from "../components/kitchen/Kitchen";
import { dataKitchen } from "../components/kitchen/constant";
import Main from "../components/main/Main";
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
      <div>
        <Kitchen data={dataKitchen} isLeft={true}/>
      </div>
      <div>
        <Kitchen data={dataKitchen} isLeft={false}/>
      </div>
    </div>
  );
}

export default HomePage;
