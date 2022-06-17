import * as types from './actionType'


const initialState ={
    products: [],
    loading: false,
    error: false
}

export const productReducer = (state = initialState,action)=>{

    const{type,payload} = action

    switch(type){

        case types.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading:true,
                error:false
            }
        case types.FETCH_DATA_SUCCESS:
        return {
            ...state,
            products:payload,
            loading:false,
            error:false
        } 
        case types.FETCH_DATA_FAILURE:
            return{
                ...state,
                error:true,
                loading:false
            }  
            default:
                return state
        }
        
    }
