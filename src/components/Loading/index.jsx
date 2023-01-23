import { ActivityIndicator, Modal, View } from 'react-native';

export const Loading = ({ isLoading }) => {
    return (
        <Modal transparent visible={isLoading}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#000000' />
            </View>
        </Modal>
    )
};
