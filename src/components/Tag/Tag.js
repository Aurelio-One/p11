import './Tag.css'

function Tags({ tagName }) {
  return (
    <div className='tag'>
      <p className='tag-name'>{tagName}</p>
    </div>
  )
}

export default Tags
