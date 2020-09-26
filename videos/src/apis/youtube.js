import axios from 'axios';

const KEY = 'AIzaSyDVgftTkNfyuk6hK9pk3UM4hUuxkKMvNsQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});