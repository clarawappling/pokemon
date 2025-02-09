import { FormEvent, useState } from "react"
type SearchPokemonProps = {
    findPokemon: (searchText: string) => void;
}


export const SearchPokemon = (props: SearchPokemonProps) => {
    const[searchText, setSearchText] = useState("");
 
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(searchText) {
            props.findPokemon(searchText);
            setSearchText("");
        } else {
            alert("SKRIV NAMNET PÅ EN POKEMON INNAN DU TRYCKER PÅ KNAPPEN");
        }
       
      
    }
    return (<>
    <p>Här kan du skriva namnet på en pokemon och hitta den.</p>
    <form onSubmit={handleSubmit}>
        <input
        placeholder="SKRIV HÄR"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}/>
        <button>HITTA</button>
    </form>
    
    </>)
}