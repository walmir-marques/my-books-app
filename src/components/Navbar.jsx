import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";
import { Menu } from "lucide-react";
import ResponsiveNavbar from "./ResponsiveNavbar";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const handleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav>
      <div>
        <div className="p-10 flex gap-2 justify-between items-center">
          <Link to="/" className="flex gap-2 items-center">
            <img src={logoImg} alt="logo" className="h-20 w-28" />
            <span className="font-bold text-4xl uppercase">BookHub</span>
          </Link>
          {toggleMenu ? (
            <button type="button" onClick={handleNavbar}>
              <Menu
                size={35}
                className={`md:hidden block ${toggleMenu} ? "text-black" : text-black`}
              />
            </button>
          ) : (
            <div onClick={handleNavbar}>
              <ResponsiveNavbar />
            </div>
          )}

          <ul className="hidden gap-10 font-bold text-4xl md:flex ">
            <li>
              <Link to="/" className="hover:text-purple-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-500">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
