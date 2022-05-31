import { ACTIONS } from "./Actions" 

const reducer = ( state, action ) =>{
  console.log('from reducer',action.payload)
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
        case ACTIONS.ADD_NUTRIENTS:
          return {
            ...state,
            nutrients:action.payload
          }
    }
    
} 

export default reducer