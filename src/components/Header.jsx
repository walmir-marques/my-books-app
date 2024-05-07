import SearchForm from "./SearchForm";
import Navbar from "./Navbar";
import heroImage from "../images/library-img.jpg";

function Header() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img
          src={heroImage}
          alt="library"
          className="w-full h-[85vh] opacity-70"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-10 ">
          <h2 className="md:text-8xl text-6xl font-bold mb-4  ">
            Find your book here.
          </h2>
          <p className="text-3xl  mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            delectus tempora obcaecati velit nihil asperiores, similique facere.
            Adipisci deserunt, molestiae ab dolor cum cupiditate saepe quod
            repellat sunt maiores placeat.
          </p>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default Header;
