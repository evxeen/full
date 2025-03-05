import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllProductsRoute, getViewProductRoute, viewProductRouteParams } from '../lib/routes.ts'
import { TrpcProvider } from '../lib/trpc'
import { Layout } from './components/Layout'
import { AllProducts } from './pages/AllProducts'
import { ViewProductPage } from './pages/ViewProductPage'
import './styles/global.scss'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllProductsRoute()} element={<AllProducts />} />
            <Route path={getViewProductRoute(viewProductRouteParams)} element={<ViewProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
