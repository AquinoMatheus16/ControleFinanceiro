import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Modal from "react-native-modal";
import { AntDesign, Feather } from '@expo/vector-icons';

export const ModalConfirm = ({ isVisible, textoModal, onPressCancel, onPressConfirm }) => {

    return (

        <Modal
            isVisible={isVisible}
            hasBackdrop={true}
            deviceHeight={1}
            style={styles.modal}
        >
            <View style={styles.modalMain}>

                <Text style={styles.textoModal}>{textoModal}</Text>

                <View style={styles.viewTouchableOpacity}>
                    <TouchableOpacity onPress={onPressConfirm}>
                        <AntDesign name="checkcircleo" size={45} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressCancel}>
                        <Feather name="x-circle" size={50} color="#ffffff" />
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );
};