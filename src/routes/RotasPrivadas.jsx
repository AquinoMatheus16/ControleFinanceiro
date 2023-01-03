import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from "react-native";
import { Home } from '../screens/Home';
import { CentroDeCusto } from '../screens/CentroDeCusto';
import { Titulos } from '../screens/Titulo';
import { Conta } from '../screens/Conta';
import { StatusBar } from 'expo-status-bar';
import { TitulosApagar } from '../screens/TitulosApagar';
import { TitulosAreceber } from '../screens/TitulosAreceber';
import { Periodo } from '../screens/Periodo';
import { Login } from '../screens/Login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeTab' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosApagar' component={TitulosApagar} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosAreceber' component={TitulosAreceber} options={{ headerShown: false }} />
            <Stack.Screen name='Periodo' component={Periodo} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};

export const RotasPrivadas = () => {

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{ headerShown: false }}
                />

                <Tab.Screen
                    name="CentroDeCusto"
                    component={CentroDeCusto}
                    options={{ headerShown: false }}
                />

                <Tab.Screen
                    name="Titulos"
                    component={Titulos}
                    options={{ headerShown: false }}
                />

                <Tab.Screen
                    name="Conta"
                    component={Conta}
                    options={{ headerShown: false }}
                />
                
            </Tab.Navigator>

            <StatusBar
                barStyle='light-content'
                backgroundColor='#5d5e5f'
                translucent={false}
                networkActivityIndicatorVisible={true}
            />
        </>
    );
};