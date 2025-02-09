import { createContext } from "react";

type FranksListContext = {
    franksList: string[],
}
export const FranksListContext = createContext<FranksListContext>({
    franksList: [],
})