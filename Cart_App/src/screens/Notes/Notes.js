import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

 export default function Notes(props) {
    const {onAddANewNotePress, onItemPress, DATA} = props;
    console.log('PROPS=>', props)

    const renderNotesList = () => {
        console.log('DATA=>', DATA)
        return(
            <FlatList
                data={DATA}
                renderItem={renderNotesItem}
                keyExtractor={item => item.id}
            />
        )
    }

    const renderNotesItem = ({item}) => {
        console.log('ITEM=>', item)
        return(
        <TouchableOpacity onPress={() => {
        onItemPress(item)}
        }>
            <View style={styles.itemContainer}>
                <View>
                   <Text numberOfLines={1} style={styles.titleStyle}>{item?.title}</Text>
                   <Text numberOfLines={2} style={styles.descriptionStyle}>{item?.description}</Text>
                </View>
                <View>
                    <Image style={styles.icon} source={require('../../../assets/images/Forward.png')}/>
                </View>
            </View>
        </TouchableOpacity>
                )
    }

    const renderAddNoteButton = () => {
        return(
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onAddANewNotePress}
          >
            <View style={styles.buttonStyle}>
            <Text style={styles.buttonTitleStyle}>Add a New Note</Text>
            </View>
          </TouchableOpacity>  
        )
    }

    return (
        <View style={styles.container}>
            {renderNotesList()}
            {renderAddNoteButton()}
        </View>
    )
}