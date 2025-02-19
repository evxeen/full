import { Link } from 'react-router-dom'
import { getViewProductRoute } from '../../lib/routes.ts'
import { trpc } from '../../lib/trpc'

export const AllProducts = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getAllProducts.useQuery()
  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div>
      <h1>IdeaNick</h1>
      {data.products.map((product) => {
        return (
          <div key={product.nomenclatureNumber}>
            <p>{product.groupName}</p>
            <p>{product.nomenclatureNumber}</p>
            <p>
              <Link to={getViewProductRoute({ itemNumber: product.nomenclatureNumber })}>{product.name}</Link>
            </p>
            <p>{product.constructionMark}</p>
            <p>{product.diameter}</p>
            <p>{product.length}</p>
            <p>{product.strengthClass}</p>
            <p>{product.coating}</p>
            <p>{product.coatingColor}</p>
            <p>{product.coatingThickness}</p>
            <p>{product.threadLength}</p>
            <p>{product.threadTolerance}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}
