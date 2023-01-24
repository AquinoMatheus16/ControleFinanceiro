import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNetInfo } from '@react-native-community/netinfo';
import Modal from "react-native-modal";

export const NetworkInformation = () => {

    const netInfo = useNetInfo();
    const [backgroundColor, setBackgroundCollor] = useState(true);
    const [messageConnection, setMessageConnection] = useState('Conectado');
    const [icon, setIcon] = useState(null);
    const [isVisible, setIsVisible] = useState(false)

    const Network = () => {
        if (netInfo.isConnected) {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false)
            }, 2000);
            setMessageConnection('Conectado!');
            setBackgroundCollor('#3846D4');
            setIcon(true);
        } else {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false)
            }, 2000);
            setMessageConnection('Desconectado!');
            setBackgroundCollor('#B6470D');
            setIcon(false);
        }
    }

    useEffect(() => {
        Network();
    }, [netInfo]);

    return (
        <Modal
            isVisible={isVisible}
            animationIn={'slideInLeft'}
            animationOut={'slideOutRight'}
            backdropOpacity={0.1}
            useNativeDriver={true}
            onBackdropPress={() => setIsVisible(false)}
            swipeDirection={'left'}
            style={styles.modal}
        >
            <View style={[styles.containerComponent, { backgroundColor }]}>
                {icon ? <Feather name="wifi" size={24} color="#FFFFFF" /> : <Feather name="wifi-off" size={24} color="#FFFFFF" />}
                <Text style={styles.textMessageConnection}>{messageConnection}</Text>
            </View>
        </Modal >
    );
}