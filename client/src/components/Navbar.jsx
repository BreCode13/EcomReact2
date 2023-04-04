import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import {ShoppingCart} from "phosphor-react";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Kicks Galore
      </Link>
      <ul>
      <CustomLink to="/">Home</CustomLink>
        
        <CustomLink to="/product">Product</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        {/* <CustomLink to="/shop">Shop</CustomLink> */}
        {/* <CustomLink to="/product">
        <ShoppingCart size ={32}/>
        </CustomLink> */}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}