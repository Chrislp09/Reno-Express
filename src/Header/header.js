import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import HeaderCenter from './header-center';
import HeaderLeft from './header-left';
import HeaderRight from './header-right';
import { config } from '../../utils/db.json';

function Header(props) {
    let colores = config.colores 
    return(
        <SafeAreaView style={[styles.container, {backgroundColor: colores.principal}]}>
            <HeaderLeft 
                colores={colores} 
                drawer={typeof props.drawer === 'undefined'? () => {}: props.drawer}
            />
            <HeaderCenter 
                title={props.title}
                colores={colores}
            />
            <HeaderRight 
                colores={colores}
                right={props.header?props.header.right: null}
                onPress={typeof props.onPress=== 'undefined'? () => {}: props.onPress}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
    }
})

export default Header;

