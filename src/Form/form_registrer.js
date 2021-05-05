import React, {useState} from 'react';
import {
    Button,
    View,
    StyleSheet, 
    SafeAreaView,
    ScrollView,
    TextInput,      
    Text,
    TouchableOpacity
} from 'react-native'
import Header from '../Header/header';
import CheckBox from '@react-native-community/checkbox';
import { formulario, config } from '../../utils/db.json';
import AwesomeAlert from 'react-native-awesome-alerts';

function Input(props) {
    const [complete, setComplete] = useState(true)
    let colores = config.colores
    return(
        <View style={{width: "95%", alignSelf: 'center', marginTop: '3%'}}>
            <Text style={{fontSize: 16}}>{props.title}</Text>
            {!props.height?
                <TextInput 
                    style={{borderColor: colores.botones, width: props.width? props.width: '100%', borderWidth: 2, borderRadius: 10, fontSize: 16}}
                    placeholder={props.placeholder}
                    keyboardType={props.type}
                    defaultValue={props.value? props.value: ''}
                    editable={props.edit? false: true}
                    onChangeText={(text) => {
                        console.log(text, props.title, 'texto========')
                        if(text.length >= 1) {
                            setComplete(true)
                            props.onChangeText(text, props.valor)
                        } else {
                            setComplete(false)
                        }
                    }}
                /> :
                <TextInput 
                    style={{borderColor: colores.botones, width: props.width? props.width: '100%', borderWidth: 2, borderRadius: 10, fontSize: 16}}
                    placeholder={props.placeholder}
                    keyboardType={props.type}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => {
                        if(text.length >= 1) {
                            props.onChangeText(text, props.valor)
                        } 
                    }}
                />
            }
            {!complete &&
                <Text style={{color: colores.alerta}}>El campo no puede estar vacio</Text>
            }
        </View>
    )
}


function RegistrerForm({navigation}) {
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [complete, setComplete] = useState(true);
    const [nombre, setNombre] = useState(null);
    const [nit, setNit] = useState(null);
    const [direccion, setDireccion] = useState(null);
    const [codigo, setCodigo] = useState(null);
    const [marca, setMarca] = useState(null);
    const [cantidad, setCantidad] = useState(null);
    const [precio, setPrecio] = useState(null);
    const [total, setTotal] = useState(null);
    const [comentario, setComentario] = useState(null);
    const [register, setRegister] = useState(null); 

    let tipo_transaccion = formulario.tipo_transaccion;
    let colores = config.colores;
    let moneda = config.moneda;
    let title = formulario.tite;
    let message = formulario.message_complete;

    const hideAlert = () => {
        setShowModal(false)
    }

    const showAlert = () => {
        setShowModal(true)
    }

    const setForm = (text, tipo) => {
        console.log(text, tipo, 'funcion seteo ===')
        if(tipo === 1) {
            setNombre(text)
        } 
        if(tipo == 2) {
            setNit(text)
        }
        if(tipo == 3) {
            setDireccion(text)
        }
        if(tipo == 4) {
            setCodigo(text)
        }
        if(tipo == 5) {
            setMarca(text)
        }
        if(tipo == 6) {
            setCantidad(text)
        }
        if(tipo == 7) {
            setPrecio(text)
        }
        if(tipo == 8) {
            setTotal(text)
        }
        if(tipo == 9) {
            setComentario(text)
        }
    }

    return (
      <SafeAreaView style={styles.container}>
        <Header 
            title="Formulario"
            icon="menu"
            drawer={() => navigation.openDrawer()}
            onPress={() => console.log('hola')}
            header={{
                right: {
                    type: 'entypo',
                    typeValue: true,
                    value: 'info'
                }
            }}
        />
        <View style={{flex: 1}}>
        <AwesomeAlert
                show={showModal}
                showProgress={false}
                title={message}
                titleStyle={{textAlign: 'center'}}
                contentStyle={{width: '100%'}}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                confirmButtonStyle={{backgroundColor: colores.principal, elevation: 5}}
                customView={
                    <View>
                        {register?
                            <View style={{flexDirection: 'row',}}>
                                <View style={{width: '60%'}}>
                                    <Text>Nombre: {register.nombre}</Text>
                                    <Text>NIT: {register.nit}</Text>
                                    <Text>Direccion: {register.direccion}</Text>
                                    <Text>Codigo: {register.codigo.toUpperCase()}</Text>
                                </View>
                                <View style={{width: '40%'}}>
                                    <Text>Marca: {register.marca}</Text>
                                    <Text>Cantidad: {register.cantidad}</Text>
                                    <Text>Precio: {register.precio}</Text>
                                    <Text>Total: {register.total}</Text>
                                </View>
                            </View>
                            : 
                            <Text>Ocurrio un error inesperado</Text>
                        }
                    </View>
                }
                confirmButtonTextStyle={{fontSize: 16, fontWeight: 'bold'}}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="Confirmar"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    hideAlert()
                }}
                onConfirmPressed={() => {
                    hideAlert()
                    navigation.navigate('Inventario')
                }}
            />
            <ScrollView>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.formCheck}>  
                    {tipo_transaccion && 
                        tipo_transaccion.map((item, index) => {
                            return(
                                <View style={styles.check}>
                                    <CheckBox
                                        disabled={false}
                                        value={item.valido === 1? toggleCheckBox1: toggleCheckBox2}
                                        onValueChange={(newValue) => {
                                            item.valido === 1? setToggleCheckBox1(newValue): setToggleCheckBox2(newValue)
                                            if(toggleCheckBox1 && !toggleCheckBox2){
                                                setToggleCheckBox1(false)
                                                console.log(toggleCheckBox1, 'selected compra')
                                                setComplete(true)
                                            } else if(!toggleCheckBox1 && toggleCheckBox2) {
                                                setToggleCheckBox2(false)
                                                console.log(toggleCheckBox2, 'selected venta')
                                                setComplete(true)
                                            }
                                        }}
                                    />
                                    <Text style={styles.text}>{item.tipo}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                {!complete &&
                    <Text style={{color: colores.alerta, textAlign: 'center'}}>Seleccione que transaccion desea efectuar</Text>
                }
                <View style={{width: '100%'}}>
                    <Input 
                        title={toggleCheckBox1? "Cliente": "Proveedor"}
                        placeholder="Nombre"
                        onChangeText={setForm}
                        valor={1}
                        type="default"
                    />
                    <Input 
                        title="NIT"
                        placeholder="Ej. 27434087-5"
                        onChangeText={setForm}
                        type="numeric"
                        valor={2}
                    />
                    <Input 
                        title="Dirección"
                        valor={3}
                        onChangeText={setForm}
                        placeholder="Direccion a.v. Zona"
                        type="default"
                    />
                </View>
                <Text style={styles.title}>{toggleCheckBox1? 'Detalle de los productos vendidos': "Detalle de los productos comprados"}</Text>
                <View style={{width: '100%', marginBottom: '5%'}}>
                    <Input 
                        title="Codigo de producto"
                        placeholder="Codigo"
                        onChangeText={setForm}
                        type="default"
                        valor={4}
                    />
                    <Input 
                        title="Marca"
                        placeholder="Marca"
                        onChangeText={setForm}
                        type="default"
                        valor={5}
                    />
                    <View style={{flexDirection: 'row', width: '100%', justifyContent:'center'}}>
                        <View style={{width: "48%", alignSelf: 'center'}}>
                            <Input 
                                title="Cantidad"
                                valor={6}
                                onChangeText={setForm}
                                value="0"
                                type="default"
                            />
                        </View>
                        <View style={{width: "48%", alignSelf: 'center'}}>
                            <Input 
                                title="Precio unitario"
                                valor={7}
                                onChangeText={setForm}
                                value="0"
                                type="default"
                            />
                        </View>
                    </View>
                    <Input 
                        title="Monto total a pagar"
                        valor={8}
                        onChangeText={setForm}
                        value={cantidad && precio? parseInt(cantidad) + parseInt(precio) :`${moneda} 0.00`}
                        type="default"
                        width="48%"
                    />
                    <Input 
                        title="Comentarios (opcional)"
                        valor={9}
                        onChangeText={setForm}
                        type="ascii-capable"
                        height={100}
                    />
                </View>
                <TouchableOpacity 
                    onPress={() => {
                        if(toggleCheckBox1 || toggleCheckBox2) {
                            if(nombre && nit && direccion && codigo && marca && cantidad && precio && total) {
                                let dataList = {
                                    nombre: nombre,
                                    nit: nit,
                                    direccion: direccion,
                                    codigo: codigo,
                                    marca: marca,
                                    cantidad: cantidad,
                                    precio: precio,
                                    total: total,
                                    comentario: comentario? comentario: ""
                                }
                                console.log(dataList,'transaccion realizada con exito ===')
                                setRegister(dataList)
                                showAlert()
                            } else {
                                console.log(nombre, nit, direccion, codigo, marca, cantidad, precio, total, 'completar el formulario')
                            }
                        } else {
                            setComplete(false)
                            console.log('seleccione una transaccion')
                        }
                    }}
                    style={{backgroundColor: colores.botones, borderRadius: 10, width: '80%', alignSelf: 'center', marginBottom: '5%'}}
                >
                    <Text style={{textAlign: 'center', marginVertical: '5%', fontWeight: 'bold', fontSize: 20, color: colores.lectura}}>Confirmar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '4%'
    },
    formCheck: {
        flexDirection: 'row',
        width: '100%',
        marginTop: '1%'
    },
    check: {
        flexDirection: 'row',
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default RegistrerForm;


