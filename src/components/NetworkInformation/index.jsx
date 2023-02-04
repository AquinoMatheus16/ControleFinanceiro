import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNetInfo } from '@react-native-community/netinfo';
import Modal from "react-native-modal";

export const NetworkInformation = () => {

    const netInfo = useNetInfo();
    const [conectado, setConectado] = useState(null);

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleUnconnected, setIsVisibleUnconnected] = useState(false);

    const Network = () => {
        if (netInfo.isConnected) {
            setConectado(true);
            setIsVisibleUnconnected(false);
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 2000);
            return;
        } else {
            setConectado(false);
            setIsVisibleUnconnected(true);
        }
    }

    useEffect(() => {
        Network();
    }, [netInfo]);

    return (
        <>
            {conectado ?
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
                    <View style={styles.containerComponent}>
                        <Feather name="wifi" size={24} color="#FFFFFF" />
                        <Text style={styles.textMessageConnection}>Conectado!</Text>
                    </View>
                </Modal >
                :
                <Modal
                    isVisible={isVisibleUnconnected}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutRight'}
                    backdropOpacity={0.5}
                    useNativeDriver={true}
                    swipeDirection={'left'}
                    style={styles.modalUnconnected}
                >
                    <View style={styles.containerComponentUnconnected}>
                        <View style={styles.containerReconecte}>
                            <Feather name="wifi-off" size={24} color="#FFFFFF" />
                            <Text style={styles.textMessageConnection}>Desconectado</Text>
                        </View>
                        <Text style={styles.textMessageConnection}>Conecte-se para continuar</Text>
                    </View>
                </Modal >
            }
        </>
    );
}