import { createContext } from "react"

export const AccountContext = createContext({
    isSignedIn : false,
    currentProfile : {}
})