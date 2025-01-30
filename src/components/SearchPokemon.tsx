import { FormEvent, useState } from "react"

export const SearchPokemon = () => {
    const[searchText, setSearchText] = useState("");
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        //Kör typ props.searchPokemon(searchText);
        //Sen setSearchText("") för att tömma fältet


    }
    return (<>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}/>
        <button>SÖK</button>
    </form>
    
    </>)
}