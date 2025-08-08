import { Minus, Plus } from "lucide-react"
export default function CartProductCard({img,heading,prix,counter}) {
  return (
    <div className="cart-product-card">
         <img src={img} alt="" className="cart-product-card-img" />
         <div className="heading-prix">
            <h2>{heading}</h2>
            <p>{prix} DH</p>
         </div>
         <div className="cart-product-card-quantity">
            <button className="add-one"> <Plus /> </button>
             <p className="quantity-counter">quantité: {counter}</p>
             <button> <Minus /> </button>
         </div>
    </div>
  )
}
