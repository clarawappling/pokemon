import { PokemonApp } from "./PokemonApp"
import "../styles/Layout.css"

export const Layout = () => {
    return (<>

    <header>
        <div className="header-image-container">
  <picture>
    <source
      srcSet="https://www.sketchappsources.com/resources/source-image/pokemon-vector-logo.png"
      media="(prefers-color-scheme: light)"
    />
    <img
      src="https://images.ctfassets.net/w5r1fvmogo3f/4VN7t0SD1XbEyy3KnJrHTy/7c4ebf24c325bf2f75fa07ab3b41f400/pokemon-banner_b40d63371a1542f8849329421436a7bf.jpeg?fm=webp&q=90&fit=scale&w=1920"
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6g2uyUTzImXttdEyHkvRk1dxatii_NMaQ-g&s" alt="pokemon gathering"/>

            </div>
        </div>
        <p className="franks-app">FRANKS APP 2025</p>
    </footer>
    </>)
}

