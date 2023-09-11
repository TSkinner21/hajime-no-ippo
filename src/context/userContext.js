import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({children}) => {
    const [slide, setSlide] = useState(false)

    return (
        <UserContext.Provider value={{slide, setSlide}}>
            {children}
        </UserContext.Provider>
    )
}