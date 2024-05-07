import { Search } from "lucide-react";
import { useContext, useRef } from "react";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const { setSearchTerm, setResultTitle } = useContext(BookContext);
  const searchText = useRef("");
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="bg-white flex justify-between items-center p-10 rounded-full
      "
        >
          <input
            type="text"
            placeholder="Search for a book"
            className="text-purple-500 font-bold text-3xl"
            ref={searchText}
          />
          <button onClick={handleSubmit}>
            <Search size={32} className="text-purple-500" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default SearchForm;
