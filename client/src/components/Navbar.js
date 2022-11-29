import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import { useState } from 'react'
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { logoutUser, user, nav } = useAppContext()
  document.onclick = function (e) {
    if (e.target.id !== 'dropdown-open') {
      if (showLogout) setShowLogout(!showLogout)
    }
  }
  return (
    <Wrapper>
      <div className='nav-center'>
        <div>
          <h3 className='logo-text'>{nav}</h3>
        </div>
        <div id='dropdown-open' className='btn-container'>
          <button
            id='dropdown-open'
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user || 'Admin'}
            <FaCaretDown />
          </button>
          <div
            id='dropdown-open'
            className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}
          >
            <div className='dropdown-btn'>profile</div>
            <div className='dropdown-btn' onClick={logoutUser}>
              logout
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
