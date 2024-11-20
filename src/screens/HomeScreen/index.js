import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Icons } from '../../assets'

const HomeScreen = ({ route }) => {

    const [quest, setQuest] = useState('')
    const [ans, setAns] = useState(0)
    const [flag, setFlag] = useState(0)
    const [options, setOptions] = useState([])
    const [score, setScore] = useState(0)
    const [disable, setDisable] = useState(false)
    const [btnDisable, setBtnDisable] = useState(false)
    const [isCorrect, setIsCorrect] = useState()

    useEffect(() => {
        handleEasyQuest()

    }, [])
    route = useRoute()
    const { category, name } = route.params
    const navigation = useNavigation()

    const arrOperator = ['+', '-', '*', '/']

    const shuffle = () => {
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        return options;
    };

    const shuffledArray = shuffle()




    const handleEasyQuest = () => {
        let max = 0
        let min = 0
        category === 'easy' ? max = 100 : category === 'medium' ? max = 1000 : max = 100000
        category === 'easy' ? min = 0 : category === 'medium' ? min = 100 : min = 1000
        let arr = []
        let answer = 0
        const num1 = Math.floor(Math.random() * (max - min + 1)) + min
        const num2 = Math.floor(Math.random() * (max - min + 1)) + min
        const opr = Math.floor(Math.random() * arrOperator.length)
        const operator = arrOperator[opr]
        setQuest(`${num1} ${operator} ${num2}`)

        if (operator == '+') {
            answer = num1 + num2


        }
        else if (operator == '-') {
            answer = num1 - num2


        }
        else if (operator == '*') {
            answer = num1 * num2

        }
        else {
            answer = Math.floor(num1 / num2)

        }
        setAns(answer)

        setFlag(flag + 1)
        arr.push(Math.random(5, 100))
        arr.push(answer)
        arr.push(Math.random(5, 100))
        arr.push(Math.random(5, 100))

        setOptions(arr)
        setDisable(false)
        setBtnDisable(true)
        setIsCorrect(false)


    }

    const handleSelection = (item, index) => {
        if (item === ans) {
            console.log('correct');
            setScore(score + 1)
            setIsCorrect(ans)
            Alert.alert('Correct')

        }
        else {
            console.log('incorrect');
            setIsCorrect(item)
            Alert.alert('Incorrect')
        }
        setDisable(true)
        setBtnDisable(false)
    }

    console.log(score, 'asdfghjk');

    console.log('newcalyes', isCorrect === ans, isCorrect, ans)





    return (
        <ScrollView style={styles.container}>
            <Timer recall={(value) => {
                // Alert.alert('')
                // navigation.navigate('')
            }} />
            {flag > 11 ? navigation.navigate('score', {
                score: score,
                name: name
            }) : (<>
                <View style={styles.quesView}>

                    <Text style={styles.textQues2}>Question {flag}</Text>
                    <Text style={styles.txtQues}> {quest}</Text>
                </View>
                <Image source={Icons.pencil} style={styles.pencil} />
                {options.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleSelection(item, index)} disabled={disable} style={styles.inputOpt}>
                        <Text style={styles.txt}>{item}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={handleEasyQuest} disabled={btnDisable} style={styles.btn}>
                    <Text style={{ color: btnDisable ? 'gray' : 'white', textAlign: 'center', fontWeight: 700 }}>Next</Text>
                </TouchableOpacity></>)
            }
        </ScrollView>
    )
}

export const Timer = (props) => {
    const [timer, setTimer] = useState(10)

    useEffect(() => {
        const _timer = setInterval(() => {
            setTimer(prev => {
                if (timer < 1) {
                    timer == 1 && props?.recall?.(0)
                    return prev * 0;
                }
                return prev - 1
            })
        }, 1000)

        return () => {
            clearInterval(_timer);
        };
    }, [timer])

    return (
        <View style={{ position: 'absolute', top: '10%', right: '10%' }}>
            <Text style={{ fontSize: 40, color: 'white' }}>{`${timer}`}</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9976ff'
    },
    quesView: {
        marginTop: 180,
        padding: 60,
        backgroundColor: 'white',
        marginHorizontal: 50,
        borderRadius: 40,
        position: 'relative',
        marginBottom: 20
    },
    txtQues: {
        color: '#290982',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 30,
        marginTop: 10
    },
    textQues2: {
        color: '#290982',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 15,
        marginTop: 10
    },

    pencil: {
        position: 'absolute',
        top: 120,
        alignSelf: 'center'
    },
    inputOpt: {
        padding: 20,
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#ab9ffe',
        borderRadius: 20,
        marginHorizontal: 20
    },
    btn: {

        borderRadius: '100%',
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 15,
        backgroundColor: '#ff9051',
        justifyContent: 'center'
    },
    txt: {
        color: 'white',
        fontWeight: 700
    }
})