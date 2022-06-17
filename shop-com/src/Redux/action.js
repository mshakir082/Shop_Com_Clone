import {FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST,FETCH_DATA_FAILURE} from "./actionType"

import Axios from "axios"

const fetchDataRequest =() =>{
    return{
        type: FETCH_DATA_REQUEST,
       }
}

const fetchDataSuccess =(payload) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure =(payload) =>{
    return{
        type: FETCH_DATA_FAILURE,
        payload
    }
}

export const fetchData=(payload) =>{

    return (dispatch) =>{
        dispatch(fetchDataRequest())
   Axios.get("http://localhost:8080/products",
       {
        params:{
            ...payload
        }
       }
    )
    .then((r)=>dispatch(fetchDataSuccess(r.data)))
    .catch((e)=>dispatch(fetchDataFailure(e.data)))
};
}