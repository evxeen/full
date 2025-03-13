import css from './index.module.scss'

type MenuData = {
  name: string
  color: string
  path: string
}

export const MainMenuElement = ({ menuData }: { menuData: MenuData }) => {
  return (
    <div className={css.container}>
      <div className={css.block} style={{ background: menuData.color }}>
        <img className={css.icon} src={menuData.path} alt="icon" />
      </div>
      <span className={css.text}>{menuData.name}</span>
    </div>
  )
}
