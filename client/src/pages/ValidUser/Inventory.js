import React, { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/Inventory'
import { FormRowSelect, FormRow } from '../../components'
import { useAppContext } from '../../context/appContext'
const Inventory = () => {
  const {
    isLoading,
    categories,
    sort,
    handleChange,
    sortOptions,
    category,
    search,
    clearFilters,
  } = useAppContext()
  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value })
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    clearFilters()
  }, [])
  return (
    <Wrapper>
      <div>
        <h1>Manage inventory</h1>
      </div>
      <div className='inventory-nav'>
        <label className='form-label'>Sort:</label>
        <FormRowSelect
          name='sort'
          value={sort}
          handleChange={handleSearch}
          list={sortOptions}
        />
        <label className='form-label'>Category:</label>
        <FormRowSelect
          name='category'
          value={category}
          handleChange={handleSearch}
          list={['all', ...categories]}
        />
        <div className='search-container'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          <button>Search</button>
        </div>
      </div>
      <div className='product-lists'>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>stock</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>shoe</td>
              <td>250</td>
              <td>45</td>
              <td>
                <button className='btn'>Add stock</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class='pagination'>
        <a href='#'>&laquo;</a>
        <a href='#'>1</a>
        <a class='active' href='#'>
          2
        </a>
        <a href='#'>3</a>
        <a href='#'>4</a>
        <a href='#'>5</a>
        <a href='#'>6</a>
        <a href='#'>&raquo;</a>
      </div>
    </Wrapper>
  )
}

export default Inventory
