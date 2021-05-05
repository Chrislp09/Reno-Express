import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HeaderLeft(props) {
    let colores = props.colores;
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={props.drawer}
            >
                <Icon name="menu" style={styles.icon} color={colores.lectura} size={30}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '20%',
        marginVertical: '2%',
    }, 
    icon: {
        marginLeft: '15%'
    }
})

export default HeaderLeft;

