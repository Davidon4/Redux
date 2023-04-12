import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    itemContainer:{
        width: '100%',
        marginBottom: '1%',
        backgroundColor: 'white',
        paddingHorizontal:'5%',
        paddingVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonStyle:{
        backgroundColor: '#6503a9',
    },
    buttonTitleStyle:{
        paddingVertical: '5%',
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },
    titleStyle:{
        color: '#737373',
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionStyle:{
        color: '#828282',
        fontSize: 14
    },
    buttonContainer:{
        position: 'absolute',
        bottom:0,
        width: '100%'
    },
    icon:{
        height: 35,
        width: 35
    }
})