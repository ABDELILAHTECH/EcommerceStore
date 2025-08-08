import { Menu , Heart , ShoppingCart, User, } from "lucide-react"
import CategoriesMenu from "./CategoriesMenu";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom"
import "./Styles/Header.css";

export default function Header({ cart }) {
  return (
    <header>
        <div className="header__start">
            <div className="header__logo">
                  STORE
             </div>
             <CategoriesMenu />  
        </div>
       
        
        <div className="header__end">
          <SearchBar />
          <div className="header__icons">
               <Heart />
               <User />
               <Link to="/cart">
                   <ShoppingCart />
               </Link>
               
               <Menu className="menu-icon"/>
         </div> 
        </div>
         
        

    </header>
    
  )
}
