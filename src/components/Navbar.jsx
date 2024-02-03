import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar(){
  return(
    <div className="nav">
      <Link className="logo" to="/">Products</Link>
      <ul className ="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}
export default Navbar;