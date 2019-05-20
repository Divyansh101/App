import { EPISODESAPICALL } from '../actions/types'

const INITIAL_STATE = {
    data: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case EPISODESAPICALL: 

            return{ ...state, data: action.payload }

        default: 

            return state;

    }

}