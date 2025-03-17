import { Link } from 'react-router-dom'
import css from './index.module.scss'
import { getAllProductsRoute } from '../../../lib/routes.ts'

type MenuData = {
  name: string
  color: string
  path: string
}

export const MainMenuElement = ({ menuData }: { menuData: MenuData }) => {
  return (
    <div className={css.container}>
      <Link className={css.linkBlock} to={getAllProductsRoute()}>
        <div className={css.block} style={{ background: menuData.color }}>
          <img className={css.icon} src={menuData.path} alt="icon" />
        </div>
        <span className={css.text}>{menuData.name}</span>
      </Link>
    </div>
  )
}
