import Product from "../components/Product";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="titulo">
        <h1>Fone's Store</h1>
      </div>
      <div className="produtos">
        <Product nome="Kaidi KD-779" valor={80} categoria="De Entrada" imagem='/kaidiKD-779.jpg'/>
        <Product nome="JBL Wave Beam 2" valor={265.95} categoria="Intermediário" imagem='/jblWaveBeam2.jpg'/>
        <Product nome="SoundCore A40" valor={395} categoria="Intermediário" imagem='/soundCoreA40.jpg'/>
        <Product nome="Kaidi KD-779" valor={80} categoria="De Entrada" imagem='/kaidiKD-779.jpg'/>
        <Product nome="JBL Wave Beam 2" valor={265.95} categoria="Intermediário" imagem='/jblWaveBeam2.jpg'/>
        <Product nome="SoundCore A40" valor={395} categoria="Intermediário" imagem='/soundCoreA40.jpg'/>
        <Product nome="Kaidi KD-779" valor={80} categoria="De Entrada" imagem='/kaidiKD-779.jpg'/>
        <Product nome="JBL Wave Beam 2" valor={265.95} categoria="Intermediário" imagem='/jblWaveBeam2.jpg'/>
        <Product nome="SoundCore A40" valor={395} categoria="Intermediário" imagem='/soundCoreA40.jpg'/>
      </div>
    </div>
  );
}

export default Home;
