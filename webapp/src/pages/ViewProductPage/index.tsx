import { useParams } from 'react-router-dom'
import css from './index.module.scss'
import { type ViewProductRouteParams } from '../../../lib/routes.ts'
import { trpc } from '../../../lib/trpc.tsx'

export const ViewProductPage = () => {
  const { productName } = useParams() as ViewProductRouteParams

  const { data, error, isLoading, isFetching, isError } = trpc.getProduct.useQuery({ productName })

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
      <h1 className={css.title}>{data.product.name}</h1>
      <p className={css.description}>{data.product.groupName}</p>
      <div className={css.text}>{data.product.nNumber}</div>
      <div className={css.text}>{data.product.diameter}</div>
      <div className={css.text}>{data.product.length}</div>
      <div className={css.text}>{data.product.constructionMark}</div>
      <div className={css.text}>{data.product.coating}</div>
    </div>
  )
}
