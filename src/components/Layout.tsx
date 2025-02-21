import { PokemonApp } from "./PokemonApp"
import "../styles/Layout.css"
import headerImg from "../imgs/pokemon-vector-logo.png"
import footerImg from "../imgs/20161101_pokemon_mobile_2x_0e5e6082-2584-43d3-aba2-6f51082fee6a.webp"

export const Layout = () => {
    return (<>

    <header>
        <div className="header-image-container">
            <img src={headerImg} alt="pokemon logo"></img>
        </div>
    </header>
    <main>
        <div className="app-container">
        <PokemonApp/>
        </div></main>
    <footer>
        <div className="footer">
            <div className="footer-img">
                <img src={footerImg} alt="pokemon gathering"/>

            </div>
        </div>
        <p className="franks-app">FRANKS APP 2025</p>
    </footer>
    </>)
}

