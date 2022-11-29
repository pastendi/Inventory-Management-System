import React, { useState, useEffect } from 'react'
import Wrapper from '../../assets/wrappers/Product'
import {
  ProductModel,
  FormRowSelect,
  FormRow,
  Pagination,
} from '../../components'
import { FaSearch } from 'react-icons/fa'
import { useAppContext } from '../../context/appContext'
import Loading from '../../components/Loading'

const Product = () => {
  const {
    getProducts,
    isLoading,
    toggleModel,
    displayModel,
    category,
    categories,
    numOfPages,
    search,
    sort,
    sortOptions,
    products,
    handleChange,
    clearFilters,
  } = useAppContext()
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    detail: '',
    category: '',
  })
  const [isAdding, setIsAdding] = useState(false)
  const addingProduct = () => {
    setIsAdding(true)
    toggleModel()
  }
  const selectProduct = (x) => {
    setProduct((product) => ({
      ...product,
      ...x,
    }))
    toggleModel()
  }
  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value })
  }
  useEffect(() => {
    clearFilters()
  })
  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, displayModel])
  if (isLoading) {
    return <Loading center />
  }

  return (
    <Wrapper>
      {displayModel && (
        <ProductModel
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          product={product}
          setProduct={setProduct}
        />
      )}
      <div>
        <h1>Manage products</h1>
      </div>
      <div className='product-nav'>
        <div>
          <button className='btn-add-product' onClick={() => addingProduct()}>
            Add product
          </button>
        </div>
        <div>
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
            <button
              className='btn-search-product'
              onClick={() => getProducts()}
            >
              <FaSearch />
              <span> Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className='product-lists'>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>category</th>
              <th>detail</th>
            </tr>
          </thead>
          <tbody>
            {products.map((x, index) => {
              return (
                <tr key={index} onClick={() => selectProduct({ ...x })}>
                  <td>{x.name}</td>
                  <td>{x.price}</td>
                  <td>{x.category}</td>
                  <td>{x.detail}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {numOfPages > 1 && <Pagination />}
    </Wrapper>
  )
}

export default Product
