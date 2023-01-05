import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { CentroDeCusto } from '../screens/CentroDeCusto';
import { Titulos } from '../screens/Titulo';
import { Conta } from '../screens/Conta';
import { StatusBar } from 'expo-status-bar';
import { TitulosApagar } from '../screens/TitulosApagar';
import { TitulosAreceber } from '../screens/TitulosAreceber';
import { Periodo } from '../screens/Periodo';
import { TitulosDetalhe } from '../screens/TituloDetalhe';
import { TituloCadastra } from '../screens/TituloCadastra';
import { HeaderBackButton } from '@react-navigation/elements';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeTab' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosApagar' component={TitulosApagar} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosAreceber' component={TitulosAreceber} options={{ headerShown: false }} />
            <Stack.Screen name='Periodo' component={Periodo} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosDetalhe' component={TitulosDetalhe} options={({ navigation }) => ({
                headerLeft: (props) => (
                    <HeaderBackButton
                        {...props}
                        onPress={() => {
                            navigation.navigate('TitulosApagar');
                        }}
                    />
                ),
            })} />
        </Stack.Navigator>
    )
};

const TituloStake = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Titulos' component={Titulos} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosDetalhe' component={TitulosDetalhe} options={({ navigation }) => ({
                headerLeft: (props) => (
                    <HeaderBackButton
                        {...props}
                        onPress={() => {
                            navigation.navigate('Titulos');
                        }}
                    />
                ),
            })} />
            <Stack.Screen name='Titulos Cadastra' component={TituloCadastra} options={{ headerShown: true }} />
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
                    name="Titulo"
                    component={TituloStake}
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