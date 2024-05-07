import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
