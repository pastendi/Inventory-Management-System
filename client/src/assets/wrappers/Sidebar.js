import styled from 'styled-components'

const Wrapper = styled.aside`
  display: block;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  background: #1f2833;
  color: white;
  min-height: 100vh;
  height: 100%;
  width: 250px;
  transition: var(--transition);

  .content {
    position: sticky;
    top: 0;
  }
  .show-sidebar {
    margin-left: 0;
  }
  header {
    height: 6rem;
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 0;
    padding-left: 2.5rem;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    background: green;
    padding-left: 3rem;
    color: white;
  }
  .nav-link:hover .icon {
    color: white;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: #00ff00;
  }
  .active .icon {
    color: #00ff00;
  }
`
export default Wrapper
