import { Link } from "react-router-dom";
function Product(props) {
  const { product, showButton } = props;
  return (
    <div className="card">
      <img src={product.image} alt="product" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {showButton && <Link className="button" to={`/product/${product.id}`}>Detailes</Link>}
    </div>
  );
}
export default Product;
