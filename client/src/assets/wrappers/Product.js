import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  .product-nav {
    display: flex;
    justify-content: space-between;
    font-size: medium;
    margin-bottom: 1rem;
  }
  .btn-add-product {
    background-color: #2ea44f;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
  }

  .btn-add-product:hover {
    background-color: #2c974b;
  }
  .search-container {
    display: inline-block;
    margin-right: 16px;
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
  td {
    cursor: pointer;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    letter-spacing: 1.5px;
    background-color: #04aa6d;
    color: white;
  }
  /* .pagination {
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
  } */
`
export default Wrapper
