import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';





const SplashScreen= () => {
   const navigation = useNavigation()

    useEffect(() => {


        setTimeout(() => {
            navigation.navigate('entry')
        }, 2000);



    },);

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image source={Icons.mark}/>
                <Text style={styles.txt}>Quizzoooo</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9976ff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    txt : {
        color: 'white',
        fontSize : 30,
        fontWeight : 700,
        paddingTop: 20
    },
    subContainer : {
        paddingTop: 60
    }
    
});

export default SplashScreen;
