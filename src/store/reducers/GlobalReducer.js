import Snack from '../../util/Snackbar'
import { types } from '../ActionTypes'

const INITIAL_STATE = {
    loader: false,
    scheduleList:[],
   
}

const GlobalReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.TOGGLE_LOADING: {
            return { ...state, loader: payload }
        }
        case types.ADD_TO_SCHEDULE: {
      console.log('payloadbody',payload)
      const schedule =[...state.scheduleList];

      index =schedule.findIndex(item => (item?.day && item?.time)  == ( payload?.day && payload?.time))
console.log('index',index)
if(index> -1){
    Snack('This Schedule Has already added');
}else
           schedule.push(payload);           
            return {...state,scheduleList:schedule}
            
        }

            case types.DELETE_SCHEDULE: {

                console.log('payload body',payload)
             
                let data = [...state.scheduleList]
                index =data.findIndex(item => item?.id == payload)

                data.splice(index,1)
                
                console.log('arr??', data);
                return {
                  ...state,
                  scheduleList:data,
                };
              }

              case types.EDIT_SCHEDULE :{
                const updatedTodos = state.scheduleList.map((schedule) =>{
                    if(schedule.id === payload.id){
                        return {...schedule,day:payload.day,time:payload.time}
                    }
                    return schedule
                })
                return{
                    ...state,scheduleList:updatedTodos
                }
              }


            //   case types.EDIT_SCHEDULE:

            //   console.log('payload',payload)
            
            //     return {
            //       ...state,
            //       scheduleList: state.scheduleList.map(item => {
            //         if (item.scheduleId == payload.id) {
            //           return {
            //             ...item,
            //             id:payload?.id,
            //             day: payload?.day,
            //             time:payload?.time,
            //           };
            //         } else {
            //           return item;
            //         }
            //       })
            //     };


//                 case UPDATE_POSTING:
//    return state.map(post => {
//      if(post.id === action.payload.id){
//         post = action.payload;
//      }
//    }
//   )

            

       
      
   
        default:
            return state;
    }
}

export default GlobalReducer

