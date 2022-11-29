const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <div className='form-row'>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  )
}

export default FormRow
