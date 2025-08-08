import "./Styles/BrandBanner.css"
export default function BrandBanner({ heading , img }) {
  return (
     <section className="brand-banner" style={{backgroundImage: `url(${img})`}} >
         <h2>{heading}</h2>
         <button>Explore</button>
     </section>
  )
}
