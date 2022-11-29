import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, RouteProtection } from './pages'
import { Dashboard, Layout, Product, Inventory } from './pages/ValidUser'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <RouteProtection>
              <Layout />
            </RouteProtection>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Product />} />
          <Route path='/inventorys' element={<Inventory />} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
