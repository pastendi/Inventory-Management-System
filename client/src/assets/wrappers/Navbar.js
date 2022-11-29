import styled from 'styled-components'

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  background: #1f2833;
  color: white;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  .nav-center {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    background: #45a29e;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    background: #45a29e;
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: white;
    font-size: 1rem;
    font-weight: 300;
    padding-left: 1.5rem;
    text-align: left;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    cursor: pointer;
  }
  .dropdown-btn:hover {
    color: #0b0c10;
    background: #66fcf1;
  }
  .logo-text {
    display: block;
  }
`
export default Wrapper
