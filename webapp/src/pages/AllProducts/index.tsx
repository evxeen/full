import { Link } from 'react-router-dom'
import css from './index.module.scss'
import { getViewProductRoute } from '../../../lib/routes.ts'
import { trpc } from '../../../lib/trpc.tsx'

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
      <h1 className={css.title}>Вся продукция</h1>
      <div className={css.ideas}>
        {data.products.map((product) => (
          <div className={css.idea} key={product.nNumber}>
            <h2 className={css.ideaName}>
              <Link className={css.ideaLink} to={getViewProductRoute({ productName: product.name })}>
                {product.name}
              </Link>
            </h2>
            <p className={css.ideaDescription}>{product.groupName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
