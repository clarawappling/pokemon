import { PokemonApp } from "./PokemonApp"
import "../styles/Layout.css"

export const Layout = () => {
    return (<>

    <header>
        <div className="header-image-container">
            <img src="https://www.sketchappsources.com/resources/source-image/pokemon-vector-logo.png" alt="pokemon logo"></img>
        </div>
    </header>
    <main>
        <div className="app-container">
        <PokemonApp/>
        </div></main>
    <footer>
        <div className="footer">
            <div className="footer-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6g2uyUTzImXttdEyHkvRk1dxatii_NMaQ-g&s" alt="pokemon gathering"/>

            </div>
        </div>
        <p className="franks-app">Franks app 2025</p>
    </footer>
    </>)
}

