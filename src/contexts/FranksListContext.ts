import { createContext } from "react";

type FranksListContext = {
    franksList: string[],
    // dispatch: Dispatch
}
export const FranksListContext = createContext<FranksListContext>({
    franksList: [],
    // dispatch: () => {return;}
})