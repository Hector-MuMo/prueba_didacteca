import logo from '../assets/title.png'

const Logo = () => {
  return (
    <div className='title_container'>
      <figure className='title_logo'>
        <img src={logo} alt='rick_n_morty_title' />
      </figure>
    </div>
  )
}

export default Logo