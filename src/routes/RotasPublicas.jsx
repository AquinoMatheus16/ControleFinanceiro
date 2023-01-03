import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '../screens/Login';
import { RecuperarSenha } from "../screens/RecuperarSenha";
import { RotasPrivadas } from "./RotasPrivadas";

const Stack = createNativeStackNavigator();

export const RotasPublicas = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ title: "MEU LOGIN", headerShown: false }} />
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: "Esqueceu a senha?", headerShown: false }} />
        </Stack.Navigator>
    )
};