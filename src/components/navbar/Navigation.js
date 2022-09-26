import './navigation.css'

const Navigation = ({logo}) => {
  return (
    <>
      <header className='navbar'>
        <img src={logo} className='logo' alt='Star Wars'/>
      </header>
    </>
  )
}

export default Navigation
