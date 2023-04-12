import React from 'react';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default  function AddNotes(props) {
    const {
        note,
        title,
        description,
        onChangeTitle,
        onChangeDescription,
        onAddANewNotePress,
        onUpdateANotePress,
        onDeleteANotePress
        } = props;

        const renderNoteDetailView = () => {
            return(
            <View style={styles.notesDetailContainer}>
                <TextInput
                    style={styles.titleInput}
                    onChangeText={onChangeTitle}
                    placeholder={'Enter Notes Title Here....'}
                    value={title}
                />
                <TextInput
                    style={styles.descriptionInput}
                    onChangeText={onChangeDescription}
                    placeholder={'Enter Notes Description Here....'}
                    value={description}
                    multiline
                />
            </View>
            )
        }
        const renderUpdateNoteButton = () => {
            return(
            <TouchableOpacity onPress={onUpdateANotePress}>
                <View style={styles.updateButtonStyle}>
                <Text style={styles.buttonTitleStyle}>Update A Note</Text>
                </View>
            </TouchableOpacity>
            )
        }
        const renderDeleteNoteButton = () => {
            return(
            <TouchableOpacity onPress={onDeleteANotePress}>
                <View style={styles.deleteButtonStyle}>
                <Text style={styles.buttonTitleStyle}>Delete A Note</Text>
                </View>
            </TouchableOpacity>
            )
        }
        const renderAddNoteButton = () => {
            return(
            <TouchableOpacity style={styles.buttonContainer} onPress={onAddANewNotePress}>
                <View style={styles.addButtonStyle}>
                <Text style={styles.buttonTitleStyle}>Add A New Note</Text>
                </View>
            </TouchableOpacity>
            )
        }

        const renderUpdateNoteView = () => {
            return (
                 <View style={styles.updateViewContainer}> 
                    {renderUpdateNoteButton()}
                    {renderDeleteNoteButton()}
                </View>
            )
        }

    return (
        <View style={styles.container}>
            {renderNoteDetailView()}
            {note != null && note != undefined
             ? renderUpdateNoteView() 
             : renderAddNoteButton()}
        </View>
    )
} 