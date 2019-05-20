import { EPISODESAPICALL } from './types';
import axios from 'axios';

export const renderEpisodes = () => {
    return((dispatch)=> {
        axios.get('https://api.myjson.com/bins/qyhv4')
        .then((response)=>{
            dispatch({ type: EPISODESAPICALL, payload: response.data })
        })
    })
}