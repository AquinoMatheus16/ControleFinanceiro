import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Modal from "react-native-modal";
import { AntDesign, Feather } from '@expo/vector-icons';

export const ModalFailed = ({ isVisible, textoModal, onPress }) => {

    return (

        <Modal
            isVisible={isVisible}
            hasBackdrop={true}
            deviceHeight={0.1}
            style={styles.modal}
        >
            <View style={styles.modalMain}>
                <TouchableOpacity onPress={onPress}>
                    <Feather name="x-circle" size={50} color="#ffffff" />
                </TouchableOpacity>
                <Text style={styles.textoModal}>{textoModal}</Text>
            </View>
        </Modal>
    );
};