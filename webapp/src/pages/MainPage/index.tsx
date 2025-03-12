import css from './index.module.scss'
import { MainMenuElement } from '../../components/MainMenuElement'

export const MainPage = () => {
  return (
    <div className={css.content}>
      <MainMenuElement />
      <MainMenuElement />
      <MainMenuElement />
      <MainMenuElement />
      <MainMenuElement />
      <MainMenuElement />
    </div>
  )
}
