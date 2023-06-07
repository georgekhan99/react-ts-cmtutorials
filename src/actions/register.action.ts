import { REGISTER_FAILED, REGISTER_FETCHING, REGISTER_SUCCESS, server } from "../Constant";
import { User } from "../types/user.type";
import { httpClient } from "../utils/httpClient";

export const setRegisterFetchingToState = () => ({
    type: REGISTER_FETCHING,
});

export const setRegisterSuccessToState = (payload : any) => ({
    type: REGISTER_SUCCESS,
    payload
});

export const setRegisterFailedToState = () => ({
  type: REGISTER_FAILED,
})

export const register = (user: User) => {
    return async (dispatch: any)=>{
        try{
        //Call A Code To Reducer
        dispatch(setRegisterFetchingToState);
        const result = await httpClient.post(
            server.REGISTER_URL,
            user
          );
          dispatch(setRegisterSuccessToState(result.data))
        }catch(error){
            dispatch(setRegisterFailedToState())
            console.log(error);
            
        }
    }

}