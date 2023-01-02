import { Navigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"



export function VisitorsRoute({children}) {
    const { user } = useAuthContext()
    if (user) {
        return <Navigate to={'/'}/>
    } else {
        return children
    }
}