import { Link } from "react-router-dom";

function ResponsiveNavbar() {
  return (
    <div className="fixed top-0 right-0 h-screen w-96 z-10 bg-black">
      <ul className=" relative h-full flex flex-col items-center justify-center gap-10 text-4xl font-bold">
        <li>
          <Link
            to="/"
            className="hover:text-purple-500 block text-center text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-purple-500 block text-center text-white"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ResponsiveNavbar;
