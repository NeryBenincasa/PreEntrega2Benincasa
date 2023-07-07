import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1 className="titulo">NNN Indumentary</h1>
            </Link>
            <CartWidget />

            <nav>
                <ul>
                    <li>
                        <NavLink className="navLink" to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/categoria/2"}>Remeras</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/categoria/1"}>Pantalones</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/categoria/3"}>Zapatillas</NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default NavBar