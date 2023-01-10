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
import { FontAwesome, FontAwesome5, AntDesign, Feather, Ionicons } from '@expo/vector-icons';


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
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        let iconColor;

                        if (route.name === 'Conta') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                            iconColor = focused ? 'red' : 'black';
                            return <FontAwesome name="user-circle-o" size={24} color={iconColor} />;

                        } else if (route.name === 'Titulo') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            iconColor = focused ? 'red' : 'black';
                            return <FontAwesome5 name="list-alt" size={24} color={iconColor} />;

                        } else if (route.name === 'CentroDeCusto') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            iconColor = focused ? 'red' : 'black';
                            return <Feather name="list" size={24} color={iconColor} />;

                        } else if (route.name === 'Home') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            iconColor = focused ? 'red' : 'black';
                            return <Ionicons name="home" size={24} color={iconColor} />;
                        }
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
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