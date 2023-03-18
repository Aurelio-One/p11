import { useParams, Navigate } from 'react-router-dom'
import data from '../../data/data.json'
import Rating from '../../components/Rating/Rating'
import Slider from '../../components/Slider/Slider'
import Tag from '../../components/Tag/Tag'
import Dropdown from '../../components/Dropdown/Dropdown'
import Host from '../../components/Host/Host'

import './Housing.css'

function Housing() {
  const { housingId } = useParams()
  const housing = data.find((housing) => housing.id === housingId)

  if (!housing) {
    return <Navigate to='/not-found' />
  }

  const { title, location, rating, host, equipments, description, pictures } =
    housing

  return (
    <div className='housing'>
      <Slider slides={pictures} />
      <div className='housing-content'>
        <div className='housing-left-infos'>
          <h1 className='housing-title'>{title}</h1>
          <p className='housing-location'>{location}</p>
          <div className='housing-tags'>
            {housing.tags.map((tag, i) => (
              <Tag
                key={i}
                tagName={tag}
              />
            ))}
          </div>
        </div>
        <div className='housing-right-infos'>
          <Rating rating={rating} />
          <Host host={host} />
        </div>
      </div>
      <div className='housing-dropdowns'>
        <Dropdown
          title='description'
          content={description}
        />
        <Dropdown
          title='équipement'
          content={equipments}
        />
      </div>
    </div>
  )
}

export default Housing
