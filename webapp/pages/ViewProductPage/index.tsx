import { useParams } from 'react-router-dom'
import { type ViewProductRouteParams } from '../../lib/routes.ts'
import { trpc } from '../../lib/trpc.tsx'

export const ViewProductPage = () => {
  const { productName } = useParams() as ViewProductRouteParams

  const { data, error, isLoading, isFetching, isError } = trpc.getProduct.useQuery({ productName })

  console.log(data)

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error: {error.message}</div>
  }

  if (!data.product) {
    return <span>product not found</span>
  }
  return (
    <div>
      <h1>{data.product.name}</h1>
      <p>{data.product.groupName}</p>
      <div>
        <p>{data.product.nNumber}</p>
        <p>{data.product.diameter}</p>
        <p>{data.product.length}</p>
      </div>
    </div>
  )
}
