import Banner from '../../components/Banner/Banner'
import BannerImg from '../../assets/img/home_banner.png'
import HousingList from '../../components/HousingList/HousingList'

function Home() {
  return (
    <>
      <Banner
        image={BannerImg}
        text='Chez vous, partout et ailleurs'
      />

      <HousingList />
    </>
  )
}

export default Home
