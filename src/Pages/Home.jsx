import Header from "../Components/Header"
import BrandBanner from "../Components/BrandBanner"
import ProductCard from "../Components/ProductCard"
import "./Styles/Home.css" 
import { useContext } from "react"
import { CartContext } from  "../App.jsx"



  let theBestOfProducts = [
    {
      img:"src/assets/BestOfProductsImgs/nike-air-force-1-'07.webp",
      heading:"AIR FORCE 1 '07",
      prix:1200,
      counter:0,

    },
    {
      img:"src/assets/BestOfProductsImgs/nike-air-max-muse.webp",
      heading:"Nike Air Max Muse",
      prix:2000,
      counter:0,

    },
    {
      img:"src/assets/BestOfProductsImgs/nb-580.webp",
      heading:"NB 580",
      prix:1100,
      counter:0,
    },
    {
      img:"src/assets/BestOfProductsImgs/nb-fresh-foam.webp",
      heading:"NB Fresh Foam",
      prix:1300,
      counter:0,
    },
     {
      img:"src/assets/BestOfProductsImgs/ua-charged-edge.webp",
      heading:"UA Charged Edge",
      prix:1100,
      counter:0,
    },
    {
      img:"src/assets/BestOfProductsImgs/ua-echo.webp",
      heading:"UA Echo",
      prix:1500,
      counter:0,
    },
     {
      img:"src/assets/BestOfProductsImgs/adidas-handball-spezial.webp",
      heading:"Adidas Handball Spezial",
      prix:"1300",
      counter:0,

    },
    {
      img:"src/assets/BestOfProductsImgs/adidas-stan-smith.webp",
      heading:"Adidas Stan Smith",
      prix:1200,
      counter:0,
    },
  ]

export default function Home() {

  const {cart,setCart} = useContext(CartContext)

  function addProductToCart(product){
       let existingProduct = cart.find(bestProduct => product.heading == bestProduct.heading)
       if (existingProduct) {
           let updateCart = cart.map((item)=>
             product.heading === item.heading ?
             {...item,counter: item.counter + 1 }
             : item
           );
           setCart(updateCart);
           console.log(cart);
           
           
       }else{
          const newProduct = {...product, counter: 1 }
          setCart([...cart,newProduct]);

       }
  }
  
  return (
    <>
      <Header />
      <main>
          <div className="brand-sections">
               <BrandBanner heading="NIKE" img="/nike-banner.jpg"/>
               <BrandBanner heading="ADIDAS" img="/adidas-banner.webp"/> 
               <BrandBanner heading="UNDER ARMOUR" img="/underarmour-banner.webp"/>
               <BrandBanner heading="NEW BALANCE" img="/newbalance-banner.jpg" />
          </div>
          <div className="best-of">
              <h2>The Best Of All</h2>
              <div className="best-of-products">
                   {
                    theBestOfProducts.map((product,index)=>
                   <ProductCard 
                     key={index}
                     img={product.img}
                     name={product.heading}
                     prix={product.prix}
                     onAdd={()=>addProductToCart(product)}
                   />
                     )
                    }  
              </div> 

          </div>
      </main>
     
    </>
  )
}
