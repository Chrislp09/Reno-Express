import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    Button,
    Image,
    View
} from 'react-native';
import {config} from '../utils/db.json';
import Header from './Header/header';

class Prueba extends Component {
    state = {
        title: config.title,
        Logo: config.logo
    }
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Header />
                <Text style={styles.title}>{this.state.title}</Text>
                <View>
                    {<Image 
                        style={{width: '90%', alignSelf: 'center', resizeMode: 'contain'}}
                        source={require('../assets/image.png')} />}
                </View>
                <Button 
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        width: '90%',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 24
    }
})

export default Prueba;