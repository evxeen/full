import { Link, Outlet } from 'react-router-dom'
import css from './index.module.scss'
import { getAllProductsRoute } from '../../../lib/routes.ts'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>РМЗ</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllProductsRoute()}>
              Вся продукция
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}
