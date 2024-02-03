import { useParams } from "react-router-dom";
import Product from "./Product";
import product_json from "./json";
import './productList.css';
function ProductDetails(){
  const params=useParams();
  console.log(params);
  const product_js=product_json.map((product)=>{
    if(product.id==params.id){
    return(
      <div className="details" key={product.id} >
        <Product  product={product} showButton={false}/>
      </div>
    )}
  })




  return(
  <div>
    {product_js}
    {/* <h1>hello {params.id}</h1> */}
  </div>
  )
}
export default ProductDetails; 