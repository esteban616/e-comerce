import { Link } from "react-router-dom"
import "./styles/Header.css"

const Header = () => {
  return (
   <header className="header">
    <h1 className="header_title"><Link to="/">e-comerce</Link></h1>
        <nav>
            <ul className="header_options">
                <li className="header_option">
                    <Link to="/register">Register</Link>
                </li>
                <li className="header_option">
                    <Link to="/login">Login</Link>
                </li>
                <li className="header_option">
                    <Link to="/cart">Cart</Link>
                </li>
                <li className="header_option">
                    <Link to="/purchases">Purchases</Link>
                </li>
            </ul>
        </nav>
   </header>
  )
}

export default Header