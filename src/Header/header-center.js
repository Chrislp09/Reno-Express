import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

function HeaderCenter(props) {
    let title = props.title
    let colores = props.colores
    return(
        <SafeAreaView style={styles.container}>
            <Text style={[styles.title, {color: colores.lectura}]}>{title}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default HeaderCenter;

