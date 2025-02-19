import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllProductsRoute, getViewProductRoute } from '../lib/routes.ts'
import { TrpcProvider } from '../lib/trpc'
import { AllProducts } from '../pages/AllProducts'
import { ViewProductPage } from '../pages/ViewProductPage'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllProductsRoute()} element={<AllProducts />} />
          <Route path={getViewProductRoute({ itemNumber: ':itemNumber' })} element={<ViewProductPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
