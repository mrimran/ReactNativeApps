import React, {Component} from 'react';
import {View} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };

    //lifecycle methods
    componentDidMount() {
        this.fetchAlbumData();
    }

    async fetchAlbumData() {
        const apiData = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
        const jsonData = await apiData.json();
        this.setState({albums: jsonData});
    }

    renderAlbums() {
        return this.state.albums.map((album) => {
            return <AlbumDetail key={album.title} album={album} />
        });
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;