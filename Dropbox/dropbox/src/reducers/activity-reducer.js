import {ACTIVITES} from '../action/index';

const activity ={}

const useractivity=(state=activity,action)=>
{
    switch (action.type) {
        case ACTIVITES :
            state = action.data;
            return state;
        default :
            return state;
    }

}

export default useractivity;