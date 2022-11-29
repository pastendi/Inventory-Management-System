import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: #000000a7;
  .product-model {
    position: fixed;
    left: 50%;
    top: 50%;
    padding: 1rem;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    width: 900px;
    height: 550px;
    background-color: #eae7dc;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
  .model-head {
    position: relative;
  }
  .close_btn {
    position: absolute;
    top: 0;
    right: 1rem;
    color: rgb(206, 18, 18);
    font-size: 2rem;
    font-weight: bolder;
    cursor: pointer;
  }
  .form-row {
    margin-bottom: 0.7rem;
  }
  input,
  select,
  option,
  textarea {
    font-size: 1rem;
    padding: 5px;
    letter-spacing: 1px;
  }
  label {
    font-size: 1.2rem;
    font-weight: 500;
    margin-right: 1rem;
  }
  .buttons {
    text-align: center;
  }
  .buttons button {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
  #btn-add {
    background-color: green;
  }
  #btn-delete {
    background-color: crimson;
  }
  #btn-update {
    background-color: dodgerblue;
  }
`
export default Wrapper
