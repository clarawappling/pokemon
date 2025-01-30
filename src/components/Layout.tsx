import { PokemonApp } from "./PokemonApp"
import "../styles/Layout.css"

export const Layout = () => {
    return (<>

    <header>
        <div className="header-image-container">
            <img src="src\imgs\pokemon-vector-logo.png"></img>
        </div>
    </header>
    <main>
        <div className="app-container">
        <PokemonApp/>
        </div></main>
    <footer></footer>
    </>)
}

