import './App.css'

export function App(){
    return(
        <div>
            <header className="hero">
                <h1>Cursos de Desenvolvimento de Sistemas</h1>
                <button onClick={() => window.location.href='https://google.com'} >Garanta sua vaga</button>
            </header>

            <section className="sobre">
                <h2>Venha Dominar HTML, CSS, JAVASCRIPT e React do Zero</h2>
                <p>Largue na frente e venha aprender com o mestre dos magos: Wallace</p>
            </section>

            <footer>
                <p>Escola WSTECH - Esc Tecnologia - 2026 © </p>
            </footer>
        </div>
    )
}