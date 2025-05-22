import { useContext } from "react"
import AuthContext from "../context/authcontext/AuthContext"

const useAuth = () =>{
    const context = useContext(AuthContext);
    return context;
}

export default useAuth;