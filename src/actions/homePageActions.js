import { APICALL } from './types';
import axios from 'axios';

export const apiCall = () => {
    return ((dispatch) => {
    axios.get('https://api.myjson.com/bins/1dj2y8')
    .then((response) =>{
        dispatch( { type : APICALL,  payload : response.data } )
        })
    })
}
