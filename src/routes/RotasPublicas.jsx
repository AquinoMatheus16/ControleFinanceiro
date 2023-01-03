import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AtualizarSenha } from "../screens/AtualizarSenha";
import { Cadastrar } from "../screens/Cadastrar";
import { Login } from '../screens/Login';
import { RecuperarSenha } from "../screens/RecuperarSenha";
import { RotasPrivadas } from "./RotasPrivadas";

const Stack = createNativeStackNavigator();

export const RotasPublicas = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ title: "MEU LOGIN", headerShown: false }} />
            <Stack.Screen name='AtualizarSenha' component={AtualizarSenha} options={{ headerShown: false }} />
            <Stack.Screen name='Cadastrar' component={Cadastrar} options={{ headerShown: false }} />
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: "Esqueceu a senha?", headerShown: false }} />
        </Stack.Navigator>
    )
};