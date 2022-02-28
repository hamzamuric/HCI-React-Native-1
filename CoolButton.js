import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const CoolButton = ({ text, onPress, color, backgroundColor }) => (
    <TouchableOpacity style={{...styles.button,
        backgroundColor: backgroundColor || 'palegreen',
        borderColor: color || 'green'
    }} onPress={onPress}>
        <Text style={{...styles.text,
            color: color || 'green'
        }}>{text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'palegreen',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
        borderColor: 'green',
        borderWidth: 2,
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        color: 'green',
        alignSelf: 'center'
    },
})

export default CoolButton