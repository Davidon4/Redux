import React from 'react';
import Notes from './Notes';

export default function Index(props) {
    const {navigation} = props

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            description: 'First Item Description'
        },
        {
            id: '3ac68afc-c605-48d3-a4d8-fbd91aa97f63',
            title: 'Second Item',
            description: 'Second Item Description'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            description: 'Third Item Description'
        }
    ];

    const onAddANewNotePress = () => {
        navigation.navigate('AddNote')
    }

    const onItemPress = note => {
        navigation.navigate('AddNote', {note: note})
    }
    return  <Notes
            {...props}
            onAddANewNotePress = {onAddANewNotePress}
            onItemPress={onItemPress}
            DATA = {DATA}
    />
}
