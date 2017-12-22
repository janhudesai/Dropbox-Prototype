// import {UPDATE_FILES} from '../action/index';
// import {UPDATE_STAR} from '../action/index';
//
// const file ={}
//
// const filedisplay=(state=file,action)=>
// {
//     switch (action.type) {
//         case UPDATE_FILES :
//             state = action.data;
//             return state;
//
//          case UPDATE_STAR :
//         //     for (var i =0;i<state.length;i++){
//         //         if (state[i].name == action.data.name)
//         //         {
//         //             state[i].starred = 'yes';
//         //             break;
//         //         }
//         //     }
//         //     return state;
//
//              return state.map((item) => {
//                  if (item.name == action.data.name)
//                  {
//                      if (item.starred=='yes'){
//                      return Object.assign({}, item, {
//                          starred:null
//                      })
//                      }
//                      else{
//                          return Object.assign({}, item, {
//                              starred:'yes'
//                          })
//                      }
//                  }
//                  return item
//              });
//
//         default :
//             return state;
//     }
//
// }
//
// export default filedisplay;


import {combineReducers} from 'redux';
import Parent from './parent-reducer';
import View from './view-reducer';
import useractivity from './activity-reducer';

const allReducers = combineReducers({
    parent:Parent,
    view:View,
    useractivity:useractivity
})

export default allReducers;