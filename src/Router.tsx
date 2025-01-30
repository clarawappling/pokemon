import { createBrowserRouter } from "react-router";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { ShowPokemon } from "./components/ShowPokemon";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home/>,
                children: [
                    {
                        path: "/pokemon/:id",
                        element: <ShowPokemon /> ,
                    }
                ]
            },
           
        ] 
    }
]) 
    
