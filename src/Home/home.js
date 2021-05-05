import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    Button,
    Image,
    View,
    ScrollView,
    ActivityIndicator,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {config, detalle_producto} from '../../utils/db.json';
import Header from '../Header/header';
import ListProduct from './components/list_products';
import Search from './components/search';
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/Entypo';

function orderText(title, text) {
    return(
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>{title}: </Text>
            <Text>{text}</Text>
        </View>
    )
}



function Home(props) {
    const [load, setLoad] = useState(true);
    const [history, setHistory] = useState({});
    const [showModalFilter, setShowAlertFilter] = useState(false)
    const [showModalProduct, setShowModalProduct] = useState(false)
    const [info, setInfo] = useState(null)
    let title = config.title;
    let colores = config.colores;
    let moneda = config.moneda;
    let data = detalle_producto;
    let newList = []

    useEffect(() => {
        if(data) {
            setLoad(false)
        }
        if(!history) {
            data.map((item, index) => {
                newList.push(item.marca)
                setHistory(newList)
            })
        }
    })

    const showAlert = () => {
        setShowModalProduct(true)
      };
     
    const hideAlert = () => {
        setShowModalProduct(false)
    };

    const showInfo = (item) => {
        setInfo(item)
        console.log(item, 'show')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header 
                title={title}
                icon="menu"
                drawer={() => props.navigation.openDrawer()}
                onPress={() => console.log('filter')}
                header={{
                    right: {
                        type: 'entypo',
                        typeValue: true,
                        value: 'tune'
                    }
                }}
            />
            <AwesomeAlert
                show={showModalProduct}
                showProgress={true}
                contentContainerStyle={{width: '100%', borderRadius: 15}}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={false}
                customView={
                    <View style={{width: '100%'}}>
                        <TouchableOpacity
                            style={{alignSelf: 'flex-end', marginTop: '-10%'}}
                            onPress={() => hideAlert()}
                        >
                            <Icon name="circle-with-cross" size={30} color={colores.alerta} />
                        </TouchableOpacity>
                        {info && <View>
                            {orderText("Marca", info.marca)}
                            {orderText("Categoria", info.categoria_producto)}
                            {orderText("Codigo", info.codigo_producto)}
                            {orderText("Precio unitario", moneda + info.precio_unitario)}
                            {orderText("Fecha de abastecimiento", info.fecha_abastecimiento)}
                            {orderText("Cantidad adquirida", info.cantidad_adiquirida_ultimo_abastecimiento)}
                            {orderText("Total de existencias", info.existencia)}
                            {orderText("Promedio precio unitario", info.existencia)}
                        </View>}
                    </View>
                } 
            />
            {!load ?
                <View>
                    <Search 
                        history={history}
                    />
                    <ListProduct 
                        dataList={data}
                        data={colores}
                        onPress={showAlert}
                        getInfo={showInfo}
                    />
                </View> :
                <View style={styles.load}>
                    <ActivityIndicator size='large' color={colores.botones} />
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    load: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
})

export default Home;