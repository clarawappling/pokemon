import { PokemonApp } from "./PokemonApp"
import "../styles/Layout.css"
import headerDark from "../assets/imgs/other/dark-mode-header.webp"
import headerLight from "../assets/imgs/other/light-mode-header.webp"
import footer from "../assets/imgs/other/footer.jpeg"

export const Layout = () => {
    return (<>

    <header>
        <div className="header-image-container">
  <picture>
    <source
      srcSet={headerLight}
      media="(prefers-color-scheme: light)"
    />
    <img
      src={headerDark}
      alt="pokemon logo"
    />
  </picture>
</div>

    </header>
    <main>
        <div className="app-container">
        <PokemonApp/>
        </div></main>
    <footer>
        <div className="footer">
            <div className="footer-img">
                <img src={footer} alt="pokemon gathering"/>

            </div>
        </div>
        <p className="franks-app">FRANKS APP 2025</p>
    </footer>
    </>)
}

