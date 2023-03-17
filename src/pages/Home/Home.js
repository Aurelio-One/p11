import Banner from '../../components/Banner/Banner'
import BannerImg from '../../assets/img/home_banner.png'

function Home() {
  return (
    <>
      <Banner
        image={BannerImg}
        text='Chez vous, partout et ailleurs'
      />
    </>
  )
}

export default Home
