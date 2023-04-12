import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    updateViewContainer:{
        position: 'absolute',
        width:'100%',
        height:'16%',
        bottom:0
    },
    notesDetailContainer:{
        height: '92%'
    },
    titleInput:{
        height: '7%',
        margin: 12,
        padding: 10,
        backgroundColor: '#eeeeee',
        borderRadius: 5
    },
    descriptionInput:{
        height: '75%',
        margin: 12,
        padding: 10,
        backgroundColor: '#eeeeee',
        borderRadius: 5
    },
    updateButtonStyle:{
       backgroundColor:'#358856' 
    },
    deleteButtonStyle:{
        backgroundColor: '#A72F2F'
    },
    addButtonStyle:{

    },
    buttonContainer:{},
    buttonTitleStyle:{
        paddingVertical: '5%',
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
})