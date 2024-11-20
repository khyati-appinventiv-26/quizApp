import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React  , {useState}from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icons } from '../../assets'

const EntryPage= () => {
    const [name,setName] = useState('')
    const navigation = useNavigation()
  return (
    <View style={styles.container}> 
        <Image source={Icons.multi} style={styles.img} />
        <TextInput placeholder='Enter your name' style={styles.input} value={name} onChangeText={(value) => setName(value)}/>
      <TouchableOpacity style= {styles.btn} onPress={() => navigation.navigate('home', {
            category : 'easy',
            name : name
          })}>
        <Text style={styles.txt}>Easy</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.btn} onPress={() => navigation.navigate('home', {
            category : 'medium',
            name : name
          })}>
        <Text style={styles.txt}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.btn} onPress={() => navigation.navigate('home', {
            category : 'hard',
            name : name
          })}>
        <Text style={styles.txt}>Hard</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EntryPage


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#9976ff',
        paddingHorizontal: 20
    },
    img : {
        marginTop: 30,
        alignSelf: 'center',
        marginBottom : 50
    },
    input : {
        paddingHorizontal : 20,
        paddingVertical: 15,
        borderRadius: 30,
        width : '100%',
        backgroundColor: 'white',
        borderWidth : 1,
        borderColor : '#e5e5e3'
    },
    btn : {
        padding : 20,
        alignItems: 'center',
        marginTop : 20,
       borderWidth :2,
       borderColor: '#ab9ffe',
       borderRadius: 20
       
    },
    txt : {
        color : 'white',
        fontWeight : 700
    }
})