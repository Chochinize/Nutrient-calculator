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
        case ACTIONS.PRODUCTS:
          return{
            ...state,
            products:action.payload
          }
        case  ACTIONS.ADD_DAILIES:
          return{
            ...state,
            dailies:action.payload
          }
    }
    
} 

export default reducer