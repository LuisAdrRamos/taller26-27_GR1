import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Forbidden } from "../paginas/Forbidden";

export default function PrivateRouterWithRole({children}) {
    const {auth} = useContext(AuthContext)

    if ("paciente" === auth.rol) {
        return <Forbidden/>
    } else {
        return children
    }
}
