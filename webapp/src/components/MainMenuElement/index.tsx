import css from './index.module.scss'
import catalogIcon from '../../../../../../icons/catalogIcon.svg'

export const MainMenuElement = () => {
  return (
    <div className={css.container}>
      <div className={css.block}>
        <img className={css.icon} src={catalogIcon} alt="icon" />
      </div>
      <span className={css.text}>Каталог</span>
    </div>
  )
}
