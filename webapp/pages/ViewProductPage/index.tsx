import { useParams } from 'react-router-dom'
import { type ViewProductRouteParams } from '../../lib/routes.ts'

export const ViewProductPage = () => {
  const { productName } = useParams() as ViewProductRouteParams
  return (
    <div>
      <h1>{productName}</h1>
      <p>Description of products 1...</p>
      <div>
        <p>Text paragrph 1 of idea 1...</p>
        <p>Text paragrph 2 of idea 1...</p>
        <p>Text paragrph 3 of idea 1...</p>
      </div>
    </div>
  )
}
