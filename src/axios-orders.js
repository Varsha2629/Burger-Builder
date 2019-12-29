import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://my-burger-7f8cc.firebaseio.com/'
});

export default instance;