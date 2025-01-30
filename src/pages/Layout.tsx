import { Outlet } from "react-router"

export const Layout = () => {
    return (
        <>
        <header>
            <h1>FRANKS POKÉMONS</h1>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer></footer>
        </>
    )
}