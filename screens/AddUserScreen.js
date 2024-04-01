import React, { useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { Button, Text, Input, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import { firebase } from '../database/firebaseDb';
import { CheckBox } from 'react-native-elements';

const AddUserScreen = ({ navigation }) => {
    const [brand, setBrand] = useState('');
    const [btu, setBtu] = useState('');
    const [type_ai, setTypeAi] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [shippingPrice, setShippingPrice] = useState('');
    const [area, setArea] = useState(["", ""]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [isSelected3, setIsSelected3] = useState(false);
    const [isSelected4, setIsSelected4] = useState(false);
    const [isSelected5, setIsSelected5] = useState(false);
    const [isSelected6, setIsSelected6] = useState(false);
    const [isSelected7, setIsSelected7] = useState(false);
    const [isSelected8, setIsSelected8] = useState(false);

    const inputValueUpdate = (val, prop) => {
        switch (prop) {
            case 'brand':
                setBrand(val);
                break;
            case 'btu':
                setBtu(val);
                break;
            case 'type_ai':
                setTypeAi(val);
                break;
            case 'image':
                setImage(val);
                break;
            case 'price':
                setPrice(val);
                break;
            case 'shipping_price':
                setShippingPrice(val);
                break;
            case 'area':
                setArea(val);
                break;
            default:
                break;
        }
    }

    const handleCheck1 = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(false);
        setIsSelected7(false);
        setIsSelected8(false);
        setTypeAi('แอร์ติดผนัง');
    };

    const handleCheck2 = () => {
        setIsSelected1(false);
        setIsSelected2(true);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(false);
        setIsSelected7(false);
        setIsSelected8(false);
        setTypeAi('แอร์ติดฝ้า');
    };
    const handleCheck3 = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(true);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(false);
        setIsSelected7(false);
        setIsSelected8(false);
        setTypeAi('แอร์สำนักงาน');
    };
    const handleCheck4 = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(true);
        setIsSelected5(false);
        setIsSelected6(false);
        setIsSelected7(false);
        setIsSelected8(false);
        setTypeAi('แอร์พกพา');
    };
    const handleCheck5 = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(true);
        setIsSelected6(false);
        setIsSelected7(false);
        setIsSelected8(false);
        setTypeAi('แอร์ห้องเดี่ยว');
    };
    const handleCheck6 = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(true);
        setIsSelected7(false);
        setIsSelected8(false);
        setTypeAi('แอร์เซ็นทรัล');
    };
    const handleCheck7 = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(false);
        setIsSelected7(true);
        setIsSelected8(false);
        setTypeAi('แอร์แบบฝังฝ้า');
    };
    const handleCheck8 = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setIsSelected3(false);
        setIsSelected4(false);
        setIsSelected5(false);
        setIsSelected6(false);
        setIsSelected7(false);
        setIsSelected8(true);
        setTypeAi('แอร์ระบบ VRV/VRF');
    };

    const storeUser = () => {
        if (price === '') {
            alert('Fill at least the brand!');
        } else {
            setIsLoading(true);
            firebase.firestore().collection('air-conditioner').add({
                brand:selectedValue,
                btu,
                type_ai,
                image,
                price,
                shipping_price: shippingPrice,
                area,
            }).then((res) => {
                setBrand('');
                setBtu('');
                setTypeAi('');
                setImage('');
                setPrice('');
                setShippingPrice('');
                setArea(["", ""]);
                setIsSelected1(false);
                setIsSelected2(false);
                setIsSelected3(false);
                setIsSelected4(false);
                setIsSelected5(false);
                setIsSelected6(false);
                setIsSelected7(false);
                setIsSelected8(false);
                setSelectedValue(null);
                setIsLoading(false);
                navigation.navigate('UserScreen');
            }).catch((err) => {
                console.log('Error found: ', err);
                setIsLoading(false);
            })
        }
    }

    if (isLoading) {
        return (
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        )
    }

    const placeholder = {
        label: 'เลือกยี่ห่อแอร์',
        value: null,
    };

    const options = [
        { label: 'Daikin', value: 'Daikin' },
        { label: 'Mitsubishi Electric', value: 'Mitsubishi Electric' },
        { label: 'Panasonic ', value: 'Panasonic ' },
        { label: 'LG  ', value: 'LG  ' },
        { label: 'Samsung  ', value: 'Samsung  ' },
        { label: 'Carrier  ', value: 'Carrier  ' },
        { label: 'Toshiba  ', value: 'Toshiba  ' },
        { label: 'Haier   ', value: 'Haier   ' },
        // Add more brands as needed
    ];

    return (
        <View style={styles.container}>
            <ScrollView >
                <Text>ยี่ห้อแอร์ :</Text>
                <RNPickerSelect
                    placeholder={placeholder}
                    items={options}
                    onValueChange={(value) => setSelectedValue(value)}
                    value={selectedValue}
                    style={pickerSelectStyles}
                />

                <Text>ชนิดแอร์ :</Text>
                <CheckBox
                    checked={isSelected1}
                    onPress={handleCheck1}
                    title={"แอร์ติดผนัง"}
                />
                <CheckBox
                    checked={isSelected2}
                    onPress={handleCheck2}
                    title={"แอร์ติดฝ้า"}
                />
                <CheckBox
                    checked={isSelected3}
                    onPress={handleCheck3}
                    title={"แอร์สำนักงาน"}
                />
                <CheckBox
                    checked={isSelected4}
                    onPress={handleCheck4}
                    title={"แอร์พกพา"}
                />
                <CheckBox
                    checked={isSelected5}
                    onPress={handleCheck5}
                    title={"แอร์ห้องเดี่ยว"}
                />
                <CheckBox
                    checked={isSelected6}
                    onPress={handleCheck6}
                    title={"แอร์เซ็นทรัล"}
                />
                <CheckBox
                    checked={isSelected7}
                    onPress={handleCheck7}
                    title={"แอร์แบบฝังฝ้า"}
                />
                <CheckBox
                    checked={isSelected8}
                    onPress={handleCheck8}
                    title={"แอร์ระบบ VRV/VRF "}
                />

                <Text>ขนาด BTU :</Text>
                <Input
                    leftIcon={
                        <Icon
                            name='user-o'
                            size={20}
                            color='#0085E6'
                        />
                    }
                    placeholder={'  ขนาด BTU'}
                    value={btu}
                    onChangeText={(val) => inputValueUpdate(val, 'btu')}
                />
                <Text>ขนาดห้อง :</Text>
                <Text>ความกว้าง(M) :</Text>
                <Input
                    leftIcon={
                        <Icon
                            name='mobile'
                            size={30}
                            color='#0085E6'
                        />
                    }
                    placeholder={'  ความกว้าง(M)'}
                    value={area[0]}
                    onChangeText={(val) => inputValueUpdate([val, area[1]], 'area')}
                />

                <Text>ความสูง(M) :</Text>
                <Input
                    leftIcon={
                        <Icon
                            name='mobile'
                            size={30}
                            color='#0085E6'
                        />
                    }
                    placeholder={'  ความสูง(M)'}
                    value={area[1]}
                    onChangeText={(val) => inputValueUpdate([area[0], val], 'area')}
                />
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    containerStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
                />
                <Text>รูปภาพ :</Text>
                <Input
                    leftIcon={
                        <Icon
                            name='mobile'
                            size={30}
                            color='#0085E6'
                        />
                    }
                    placeholder={'  รูปภาพ'}
                    value={image}
                    onChangeText={(val) => inputValueUpdate(val, 'image')}
                />
                <Text>ราคาแอร์ :</Text>
                <Input
                    leftIcon={
                        <Icon
                            name='envelope-o'
                            size={20}
                            color='#0085E6'
                        />
                    }
                    placeholder={'  ราคาแอร์'}
                    value={price}
                    onChangeText={(val) => inputValueUpdate(val, 'price')}
                />

                <Text>ราคาขนส่ง :</Text>
                <Input
                    leftIcon={
                        <Icon
                            name='envelope-o'
                            size={20}
                            color='#0085E6'
                        />
                    }
                    placeholder={'  ราคาขนส่ง'}
                    value={shippingPrice}
                    onChangeText={(val) => inputValueUpdate(val, 'shipping_price')}
                />
                <Button
                    icon={
                        <Icon
                            name='check'
                            size={15}
                            color='white'
                        />
                    }
                    title='  เพิ่มข้อมูลแอร์'
                    buttonStyle={{
                        backgroundColor: "green"
                    }}
                    onPress={storeUser}
                />
                <Button
                    icon={
                        <Icon
                            name='users'
                            size={15}
                            color='white'
                        />
                    }
                    title='  ข้อมูลแอร์ทั้งหมด'
                    onPress={() => navigation.navigate('UserScreen')}
                    containerStyle={{
                        marginTop: 10
                    }}
                />
            </ScrollView>
        </View>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        overflowY: 'scroll',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    selectedText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AddUserScreen;
