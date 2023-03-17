import './HousingList.css'
import data from '../../data/data.json'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

function HousingList() {
  return (
    <section className="housing-list">
        {data.map((housing) => {
          return (
            <article key={housing.id}>
              <Link to={`/housing/${housing.id}`}>
                <Card image={housing.cover} text={housing.title} />
              </Link>
            </article>
          );
        })}
      </section>
  )
}

export default HousingList
