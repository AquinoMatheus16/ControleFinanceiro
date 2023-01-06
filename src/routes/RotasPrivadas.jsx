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
import { TituloCadastra } from '../screens/TituloCadastra';
import { HeaderBackButton } from '@react-navigation/elements';
import { TitulosAtualizar } from '../screens/TitulosAtualizar';
import { TituloDetalheHome } from '../screens/TituloDetalheHome';
import { TitulosDetalhe } from '../screens/TituloDatalhe';
import { CentroDeCustoAtualizar } from '../screens/CentroDeCustoAtualizar';
import { CentroDeCustoCadastrar } from '../screens/CentroDeCustoCadastrar';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeTab' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosApagar' component={TitulosApagar} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosAreceber' component={TitulosAreceber} options={{ headerShown: false }} />
            <Stack.Screen name='Periodo' component={Periodo} options={{ headerShown: false }} />
            <Stack.Screen name='Titulos ' component={TituloDetalheHome} options={({ navigation }) => ({
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
            <Stack.Screen name='Titulos ' component={TitulosDetalhe} options={({ navigation }) => ({
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
            <Stack.Screen name='Titulos Atualizar' component={TitulosAtualizar} options={{ headerShown: true }} />
        </Stack.Navigator>
    )
};

const CentroDecUstoStake = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='CentroDeCustoStake' component={CentroDeCusto} options={{ headerShown: false }} />
            <Stack.Screen name='Centro De Custo Atualizar' component={CentroDeCustoAtualizar} options={({ navigation }) => ({
                headerLeft: (props) => (
                    <HeaderBackButton
                        {...props}
                        onPress={() => {
                            navigation.navigate('CentroDeCustoStake');
                        }}
                    />
                ),
            })} />
            <Stack.Screen name='Centro De Custo Cadastrar' component={CentroDeCustoCadastrar} options={{ headerShown: true }} />
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
                    component={CentroDecUstoStake}
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