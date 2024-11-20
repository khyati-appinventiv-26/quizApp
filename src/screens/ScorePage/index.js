import { StyleSheet, Text, Touchable, TouchableOpacity, View , Image } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Icons } from '../../assets'

const ScorePage = ({route}) => {

    route = useRoute()
    const {score , name} = route.params

    const navigation = useNavigation()
  return (
    <View style={styles.container}> 
    <Image source={Icons.check} />
    <Text style={styles.txt}>Congratulations {name} </Text>
      <Text style={styles.txt}>You Scored {score}/10 </Text>
      <TouchableOpacity onPress={() => navigation.navigate('entry') } style= {styles.btn}>
        <Text style={{textAlign: 'center' ,fontWeight: 700 , color : 'white'}}> Play Again</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9976ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt : {
        fontSize: 24,
        fontWeight: 700,
        color : 'white'
    },
    btn : {
       
        borderRadius: 30,
        alignSelf : 'center',
        marginTop : 25,
        backgroundColor: '#ff9051',
        justifyContent: 'center',
        padding : 20
    },
})
export default ScorePage

