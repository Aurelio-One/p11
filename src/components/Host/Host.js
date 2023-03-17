import './Host.css'

function Host({ host }) {
  const [firstName, lastName] = host.name.split(/\s+(?=\S*$)/)

  return (
    <div className='host'>
      <div className='host-name'>
        <p className='host-firstname'>{firstName}</p>
        <p className='host-lastname'>{lastName}</p>
      </div>

      <img
        src={host.picture}
        alt=''
        className='host-image'
      />
    </div>
  )
}

export default Host
