import { PokemonApp } from "./PokemonApp"
import "../styles/Layout.css"

export const Layout = () => {
    return (<>

    <header>
        <div className="header-image-container">
            <img src="https://www.sketchappsources.com/resources/source-image/pokemon-vector-logo.png"></img>
        </div>
    </header>
    <main>
        <div className="app-container">
        <PokemonApp/>
        </div></main>
    <footer>
        <div className="footer"></div>
    </footer>
    </>)
}

