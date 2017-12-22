import {UPDATE_PARENT} from '../action/index';

const file ={
    parent:{id:null}
}

// export default function () {
//     return(
//         {
//             1:{id:''}
//         }
//     );
// }

const updateparent =(state=file,action)=>
{
    switch (action.type) {
        case UPDATE_PARENT :
            // return state.map((item) => {

                //         return Object.assign({}, state, {
                //             id:action.data.id
                //         })
                //
                //
                //
                // return item
            // });
            state.parent.id= action.data;
            state= {parent:state.parent}
            return state;
        default :
            return state;
    }
}

export default updateparent;
