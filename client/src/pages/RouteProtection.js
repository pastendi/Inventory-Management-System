import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'

const RouteProtection = ({ children }) => {
  const { user } = useAppContext()
  if (!user) {
    return <Navigate to='/landing' />
  }
  return children
}

export default RouteProtection
