import React, { useState } from 'react';
import { View, Text } from 'react-native';
import IAlbums from '../../../models/IAlbums';
import IFoto from '../../../models/IFoto';
import AlbumsDetails from '../../molecules/AlbumsDetails';
import Album from '../../organisms/Album';


const HomeScreen: React.FC = () => {


    const [selectedAlbum, setSelectedAlbum] = useState<IAlbums | null>(null);

    return (
        <View>
            <Text>
                {selectedAlbum ? (
                <AlbumsDetails
                 selectedAlbum = {selectedAlbum}
                 setSelectedAlbum = {setSelectedAlbum}
                />
            ) : (
                <Album setSelectedAlbum = {setSelectedAlbum}/>
            )}
            </Text>
        </View>

        
    );
};

export default HomeScreen
