import Header from '../components/header/Header'
import scss from './HomePage.module.scss'

function HomePage() {
  return (
    <div className={scss.home}>
        <div><Header /></div>
    </div>
  )
}

export default HomePage