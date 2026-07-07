import "../styles/Product.css";

function Product({ nome, valor, categoria, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} width="200px" />
      <h4>{nome}</h4>
      <p>Categoria: {categoria}</p>
      <div className="compra">
        <p>R$ {valor.toFixed(2)}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Product;
