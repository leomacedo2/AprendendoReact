import { Routes, Route, Link } from "react-router-dom";
import Livros from "./pages/Livros";
import Categoria from "./pages/Categoria";
import Perfil from "./pages/Perfil";

function App() {
  return (
  <div>
    <nav>
      <Link to='/'>Livros</Link> | {" "}
      <Link to='/categoria'>Categoria</Link> | {" "}
      <Link to='/perfil'>Perfil</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Livros/>}>Livros</Route>
      <Route path='/categoria' element={<Categoria/>}>Categoria</Route>
      <Route path='/perfil' element={<Perfil/>}>Perfil</Route>
    </Routes>

  </div>
)
}

export default App;
