import { FormEvent, useState } from "react"
type SearchPokemonProps = {
    findPokemon: (searchText: string) => void;
}


export const SearchPokemon = (props: SearchPokemonProps) => {
    const[searchText, setSearchText] = useState("");
 
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.findPokemon(searchText);
        setSearchText("");
      
    }
    return (<>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}/>
        <button>HITTA</button>
    </form>
    
    </>)
}