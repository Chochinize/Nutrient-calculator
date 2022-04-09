import { ACTIONS } from "./Actions" 

const reducer = ( state, action ) =>{
    switch( action.type ){
        case ACTIONS.ADD_USERS:
            return {
              ...state,
              users: action.payload,
            };
        case ACTIONS.AUTH:
          return{
            ...state,
            auth: action.payload,
          };
    }
    
} 

export default reducer