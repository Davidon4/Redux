import React,{useState, useEffect} from 'react';
import AddNotes from './AddNotes';

 export default function Index(props) {
    const note = props?.route?.params?.note
    const [title, onChangeTitle] = useState('')
    const [description, onChangeDescription] = useState('')

    useEffect(() => {
        if(note != null && note != undefined) {
            onChangeTitle(note?.title);
            onChangeDescription(note?.description);
        }
    }, [])

    const onAddANewNotePress = () => {}
    const onUpdateANotePress = () => {}
    const onDeleteANotePress = () => {}

    return <AddNotes
        note={note}
        title={title}
        description={description}
        onChangeTitle={onChangeTitle}
        onChangeDescription = {onChangeDescription}
        onAddANewNotePress={onAddANewNotePress}
        onUpdateANotePress={onUpdateANotePress}
        onDeleteANotePress={onDeleteANotePress}
        {...props}
        />
}