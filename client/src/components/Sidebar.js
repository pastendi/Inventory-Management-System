import NavLinks from './NavLinks'
import Wrapper from '../assets/wrappers/Sidebar'

const Sidebar = () => {
  return (
    <Wrapper>
      <div>
        <div className='content'>
          <header>Hello</header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default Sidebar
