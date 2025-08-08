import { Search } from "lucide-react"
import "./Styles/SearchBar.css"

export default function SearchBar() {
  return (
   <form className="search-bar">
        <button className="search-bar__btn" type="submit">
            <Search className="search-bar__icon" size={24}/>
        </button>
        <input type="search" placeholder="Search" className="search-bar__input"/>
   </form>
  )
}
