import { REGISTER_FAILED, REGISTER_FETCHING, REGISTER_SUCCESS } from "../Constant"

export interface registerState{
    isFetching: boolean,
    isError: boolean,
    result: any
}


const initialState:registerState = {
    isFetching: false,
    isError: false,
    result: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload } :any):registerState => {
  switch (type) {
  case REGISTER_FETCHING:
    return { ...state, isFetching: true, isError: false, result:null };
  case REGISTER_SUCCESS:
    return { ...state, isFetching: false, isError: false, result:null };
  case REGISTER_FAILED:
    return { ...state, isFetching: false, isError: true, result:null };

  default:
    return state
  }
}
