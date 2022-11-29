import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  .inventory-nav {
    display: flex;
    justify-content: end;
    font-size: medium;
    margin-bottom: 1rem;
  }
  .sorting {
    display: inline-block;
    font-size: 1rem;
    margin-right: 1rem;
  }
  .select {
    display: inline-block;
    margin-right: 1rem;
  }

  .select::before {
    text-align: center;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }

  .select:hover::before {
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.2);
  }
  .select select {
    background-color: #0563af;
    color: white;
    padding: 6px 10px;
    width: 200px;
    border: none;
    font-size: 1.1rem;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    appearance: button;
    outline: none;
  }
  .search-container {
    display: inline-block;
    font-size: 1rem;
    border: none;
    cursor: pointer;
  }
  .search-container input {
    padding: 6px;
    font-size: 1rem;
  }
  .search-container button {
    padding: 8px 10px;
    font-size: 1rem;
    background: #ddd;
    border: none;
    cursor: pointer;
  }
  table {
    border: 1;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border: 1px solid #ddd;
    padding: 2px 8px;
    width: 25%;
  }

  th {
    text-transform: capitalize;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: dodgerblue;
    letter-spacing: 1.5px;
    color: white;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    background-color: grey;
  }

  .pagination a {
    color: black;
    float: left;
    font-weight: bolder;
    padding: 8px 16px;
    text-decoration: none;
  }

  .pagination a.active {
    background-color: #4caf50;
    color: white;
  }

  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }
`
export default Wrapper
