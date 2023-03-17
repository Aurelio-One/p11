import Banner from '../../components/Banner/Banner'
import Dropdown from '../../components/Dropdown/Dropdown'
import imageBanner from '../../assets/img/about_banner.png'
import './About.css'

function About() {
  return (
    <div className='about'>
      <Banner image={imageBanner} />
      <div className='about-dropdowns'>
        <Dropdown
          title='fiabilité'
          content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        />
        <Dropdown
          title='respect'
          content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <Dropdown
          title='service'
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Dropdown
          title='sécurité'
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  )
}

export default About
