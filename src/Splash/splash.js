import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView
} from 'react-native';
import { config } from '../../utils/db.json'


function Splash({navigation}) {
    setTimeout(() => {
        navigation.replace('Home')
    }, 2000)
    let colores = config.colores
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={[styles.container, {backgroundColor: colores.lectura}]}>
                <Image 
                    source={
                        require('../../assets/image.png')
                    }
                    style={styles.logo}
                />
            </View>    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 10, 
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Splash;