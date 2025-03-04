import { Link, Outlet } from 'react-router-dom'
import { getAllProductsRoute } from '../../../lib/routes.ts'

export const Layout = () => {
  return (
    <div>
      <p>
        <b>Верхнее меню</b>
      </p>
      <ul>
        <li>
          <Link to={getAllProductsRoute()}>Вся продукция</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
