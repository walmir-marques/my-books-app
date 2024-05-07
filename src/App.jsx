import AppRoutes from "./routes/routes";
import BookProvider from "./context/BookContext";

function App() {
  return (
    <BookProvider>
      <AppRoutes />
    </BookProvider>
  );
}
export default App;
