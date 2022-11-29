import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import Wrapper from '../assets/wrappers/ProductModel'
import { useAppContext } from '../context/appContext'

const ProductModel = ({ isAdding, setIsAdding, product, setProduct }) => {
  const { categories, toggleModel, addProduct, updateProduct, deleteProduct } =
    useAppContext()
  const [data, setData] = useState({
    id: product._id,
    name: product.name || '',
    price: product.price || '',
    detail: product.detail || '',
    category: product.category || '',
  })
  const reset = () => {
    setIsAdding(false)
    setProduct({ name: '', price: 0, category: '', detail: '' })
    toggleModel()
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const createNewProduct = () => {
    delete data['id']
    addProduct(data)
    reset()
  }
  const modifyProduct = () => {
    updateProduct(data)
    reset()
  }
  const removeProduct = () => {
    deleteProduct(data)
    reset()
  }
  return (
    <Wrapper>
      <div className='product-model'>
        <div className='model-head'>
          <h3>Product detail</h3>
          <span className='close_btn' onClick={() => reset()}>
            <MdClose />
          </span>
        </div>
        <div className={'form-row'}>
          <label>Product:</label>
          <input
            type='text'
            name='name'
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className={'form-row'}>
          <label>Price:</label>
          <input
            type='number'
            name='price'
            value={data.price}
            onChange={handleChange}
          />
        </div>
        <div className={'form-row'}>
          <label>Category:</label>
          <select
            name='category'
            value={data.category}
            onChange={handleChange}
            id='category'
            required
          >
            <option value=''>Category</option>
            {categories.map((x, index) => {
              return (
                <option key={index} value={x}>
                  {x}
                </option>
              )
            })}
          </select>
        </div>
        <div className={'form-row'}>
          <label>Product detail:</label>
          <br />
          <textarea
            name='detail'
            value={data.detail}
            onChange={handleChange}
            cols='80'
            rows='8'
          ></textarea>
        </div>
        <div className='buttons'>
          {isAdding ? (
            <button
              id='btn-add'
              className='btn'
              onClick={() => createNewProduct()}
            >
              Add new product
            </button>
          ) : (
            <>
              <button
                id='btn-update'
                className='btn'
                onClick={() => modifyProduct()}
              >
                Update product
              </button>
              <button
                id='btn-delete'
                className='btn'
                onClick={() => removeProduct()}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductModel
