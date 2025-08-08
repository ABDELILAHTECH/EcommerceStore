import { Heart, Plus } from "lucide-react"
import "./Styles/ProductCard.css"

export default function ProductCard({ img , name , prix , onAdd }) {

  return (
     <div className="product-card">
          <img src={img} alt={name} className="product-card-img" />
          <button  className="favoris-icon"> 
            <Heart size={16} color="black"/>
          </button>
          <h3 className="product-card-name">{name}</h3>
          <p className="product-card-prix">{prix}</p>
          <button className="product-card__add-to-basket-btn" onClick={onAdd}> 
            <p>Add to basket</p> 
            <Plus className="add-to-basket-btn__icon" size={18} />
          </button>
      </div>
  )
}
