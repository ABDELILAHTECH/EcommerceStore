import { Link } from "react-router-dom"
import "./Styles/CategoriesMenu.css"

export default function CategoriesMenu() {
  return (
<nav className="categories-menu">
  <ul className="categories-menu__list">
    <li className="categories-menu__item categories-menu__item--men">
      <Link to="/men" className="categories-menu__link">Men</Link>
    </li>
    <li className="categories-menu__item categories-menu__item--women">
      <Link to="/women" className="categories-menu__link">Women</Link>
    </li>
    <li className="categories-menu__item categories-menu__item--kids">
      <Link to="/kids" className="categories-menu__link">Kids</Link>
    </li>
    <li className="categories-menu__item categories-menu__item--sports">
      <Link to="/sports" className="categories-menu__link">Sports</Link>
    </li>
  </ul>
</nav>

  )
}
