import styled from '@emotion/native'
import React from 'react'
import { Text } from 'react-native'
import IAlbums from '../../../models/IAlbums'



export interface AlbumListProps{
    album: IAlbums;
    index: number;
    setSelectedAlbum: React.Dispatch<React.SetStateAction<IAlbums | null>>;
}



const AlbumList: React.FC<AlbumListProps> = ({album, index, setSelectedAlbum}) => {

    const onPress = ()=>{
        setSelectedAlbum(album);
    }

    return (
        <ItemContainer onPress ={onPress}>

      <Text>
       {++index}.{album.title}
      </Text>
        </ItemContainer>
    )
}


const ItemContainer = styled.TouchableOpacity`
background-color: #f1f1f1;
border-radius: 15px;
padding: 8px 12px;
margin: 4px 0;
`;


export default AlbumList;
