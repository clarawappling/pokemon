import { PokemonApp } from "./PokemonApp"


export const Layout = () => {
    return (<>

    <header>
        <div className="header-image-container">
            <img src="src\imgs\pokemon-vector-logo.png"></img>
        </div>
    </header>
    <main><PokemonApp/></main>
    <footer></footer>
    </>)
}

