import "./productList.css";
import product_json from'./json'

import Product from "./Product";
function ProductList() {
const product_js=product_json.map((product)=>{
  return(
    <div key={product.id} >
      <Product  product={product }  showButton={true}/>
    </div>
  )
})
  return( 
    <>
      <h2 className="our-product">Our Product</h2>
      {/* <div className="button-list">
        <button >All</button>
        <button>Electronics</button>
        <button>jewelery</button>
        <button>men's clothing</button>
        <button>women's clothing</button>
      </div> */}
      <div className="row">
        <>{product_js}</>  
      </div>
    </>
  );
}
export default ProductList;
  