import { Heart , ShoppingCart, User } from "lucide-react"
import CategoriesMenu from "./CategoriesMenu";
import SearchBar from "./SearchBar";
import "./Styles/Header.css";

export default function Header() {
  return (
    <header>
        <div className="header__part1">
              <div className="header__logo">
                  STORE
              </div>
               <div className="header__icons">
                <Heart />
                <User />
                <ShoppingCart />
              </div>  
        </div>
       
        <CategoriesMenu />
        <SearchBar />
        

    </header>
    
  )
}
