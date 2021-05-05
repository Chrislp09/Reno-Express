import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HeaderRight(props) {
    let colores = props.colores;
    return(
        <SafeAreaView style={styles.container}>
            {props.right &&
                <TouchableOpacity
                    onPress={props.onPress}
                >
                    <Icon name={props.right.value} style={styles.icon} color={colores.lectura} size={30}/>
                </TouchableOpacity>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '20%',
        marginVertical: '2%',
        alignItems: 'flex-end'
    }, 
    icon: {
        marginRight: '15%'
    }
})

export default HeaderRight;

