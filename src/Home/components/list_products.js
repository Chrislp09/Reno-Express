import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Text,
    FlatList,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

function ListProduct(props) {
    let data = props.dataList
    let colores = props.data
    return(
        <View style={styles.container}>
            <FlatList 
                data={data}
                numColumns={1}
                renderItem={({item}) =>
                    <View style={styles.item}>
                        <TouchableOpacity 
                            style={{alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: "10%"}}
                            onPress={() => {
                                props.onPress()
                                props.getInfo(item)
                            }}
                        >
                            <Icon name="info" color={colores.botones} style={{marginLeft: '25%'}} size={30} />
                        </TouchableOpacity>
                        <View style={styles.detail}>
                            <Text style={styles.title}>{item.marca}</Text>
                            <Text style={styles.description}>{item.descripccion_producto}</Text>
                        </View>
                        <View style={styles.image}>
                            <Image 
                                style={styles.img}
                                source={require('../../../assets/product/mattel-logo.jpg')} 
                            />
                        </View>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: '45%'
    },
    item: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginVertical: '3%',
        borderRadius: 10,
        elevation: 5
    },
    detail: {
        width: '60%',
        marginVertical: '5%'
    },
    image: {
        width: '30%',
        marginVertical: '5%',
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: '8%'
    },
    description: {
        fontSize: 14,
        marginLeft: '8%'
    }
})

export default ListProduct;