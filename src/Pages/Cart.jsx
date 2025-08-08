import { useContext } from "react"
import CartProductCard from "../Components/CartProductCard"
import { CartContext } from "../App"
import "./Styles/Cart.css"

export default function Cart(  ) {
      const {cart,setCart} = useContext(CartContext)
      
      if (cart.length === 0) {
        console.log(cart.length);
         return <h1>The Cart Is Empty</h1>;
      }else{
           return (
             <div className="cartContainer">
              <h1>fhgg</h1>
                  {cart.map((produit, index) => (
                  <CartProductCard
                    key={index}
                    img={produit.img}
                    heading={produit.heading}
                    prix={produit.prix}
                    counter={produit.counter}
                  />
              ))}
            </div>
             )  
      }
}
