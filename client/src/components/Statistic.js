import Wrapper from '../assets/wrappers/Statistic'

const Statistic = () => {
  return (
    <Wrapper>
      <h1>Popular products</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>shoe</td>
            <td>250</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  )
}

export default Statistic
