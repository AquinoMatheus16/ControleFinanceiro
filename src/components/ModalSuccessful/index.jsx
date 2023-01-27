import { View, Text } from 'react-native';
import { styles } from './styles';
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';

export const ModalSuccessful = ({ isVisible, textoModal }) => {

    return (

        <Modal
            isVisible={isVisible}
            hasBackdrop={true}
            deviceHeight={0.1}
            style={styles.modal}
        >
            <View style={styles.modalMain}>
                <AntDesign name="checkcircleo" size={50} color="#ffffff" />
                <Text style={styles.textoModal}>{textoModal}</Text>
            </View>
        </Modal>
    );
};