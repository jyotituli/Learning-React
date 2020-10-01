import {combineReducers} from 'redux'; 

const songsReducer = () => {
    return [
        {title: 'Just the way you are', duration: '4:05'},
        {title: 'Apologize', duration: '3:34'},
        {title: 'I\'m yours', duration: '3:53'},
        {title: 'Macarena', duration: '2:59'}
    ];
};

const SelectedSongReducer = (selectedSong=null, action) => {
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: SelectedSongReducer,  
});