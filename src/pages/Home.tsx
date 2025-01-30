import { SearchPokemon } from "../components/SearchPokemon"

export const Home = () => {
    return ( <>
    
    <div>
    <h1>Välkommen, Frank!</h1>
    <p>Det här är din alldeles egna sida. Här kan du skriva namnet på en pokemon och hitta den.</p>
    </div>
    <SearchPokemon/>
    </>)
}