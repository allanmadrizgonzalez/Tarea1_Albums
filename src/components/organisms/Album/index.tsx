import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import IAlbums from '../../../models/IAlbums';
import IFoto from '../../../models/IFoto';
import AlbumList from '../AlbumList';



export interface AlbumProps{
    setSelectedAlbum: React.Dispatch<React.SetStateAction<IAlbums | null>>;
}

const Album : React.FC<AlbumProps> = ({setSelectedAlbum}) => {

    const [album, setAlbum] = useState<IAlbums[]>([]);
    const fetchData = async()=>{
        try{
            const AlbumResponse = await axios.get(
                'https://jsonplaceholder.typicode.com/albums',
            ); 

            const FotoResponse = await axios.get(
                'https://jsonplaceholder.typicode.com/photos',
            ); 

            const albums = (AlbumResponse.data as IAlbums[]).map((albums) => ({
                ...albums,
                fotos: (FotoResponse.data as IFoto[]).filter((album)=> album.id === albums.id)
            }))



            setAlbum(albums);

        }catch (error){
            console.error(error);
        }

    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <View>
            {album.length > 0 ? (
            <FlatList
             data= {album} 
             renderItem={({item, index})=> <AlbumList key={item.id} album={item} index={index} setSelectedAlbum = {setSelectedAlbum}/>}
             />) : ( 
             <ActivityIndicator color="#000"/>
             )}
        </View>
    )
}

export default Album
