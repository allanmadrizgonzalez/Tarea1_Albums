import { styled } from '@emotion/native/types/base'
import React from 'react'
import { Button, Image, Text, View, StyleSheet, FlatList } from 'react-native'
import { StyleSheetManager } from 'styled-components'
import IAlbums from '../../../models/IAlbums'
import IFoto from '../../../models/IFoto'

export interface AlbumsDetailsProps{
    selectedAlbum: IAlbums;
    setSelectedAlbum: React.Dispatch<React.SetStateAction<IAlbums[]| null>>;

}


const AlbumsDetails: React.FC <AlbumsDetailsProps>= ({
    selectedAlbum,
    setSelectedAlbum,
}) => {



const {userId, id, title, photo} = selectedAlbum
const onBackPress = () =>{
    setSelectedAlbum(null);
}

    return (
        <View>
            <Text>{userId}</Text>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Image style={styles.Image}
            source={{uri: 'https://via.placeholder.com/600/92c952'}}/>


            {photo && <FlatList data= {photo}
             renderItem={({item})=><Image
           style={styles.Image}
            source={{uri: item.url}}></Image>} />}

            <Button title = "Atras" onPress = {onBackPress}/>
        </View>
    )
}


const styles = StyleSheet.create({
    Image:{
        width:100,
        height:100,

    }
});


export default AlbumsDetails
