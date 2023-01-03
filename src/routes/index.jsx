import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Home } from "../screens/Home";
import { RotasPrivadas } from "./RotasPrivadas";
import { RotasPublicas } from "./RotasPublicas";

export const Routes = () => {

    const { logado, } = useContext(AuthContext)
    
    return logado ? <RotasPrivadas /> : <RotasPublicas />

}
