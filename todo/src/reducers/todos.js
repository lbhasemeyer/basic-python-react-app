import * as types from '../constants/actionTypes';

const initialState = [];

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case types.RETRIEVE_INIT_DATA:
      console.log('RETRIEVE INITIAL', action.data);
      return action.data;

    case types.FETCH_SUCCESSED:
      console.log('FETCH SUCCESS', action.data);
      return action.data;

    case types.UPDATE_SUCCESSED:
      console.log('UPDATE SUCCESS', action.data.todos);
      return action.data.todos;

    case types.REMOVE_SUCCESSED:
      console.log('REMOVE SUCCESS', action.data.todos);
      return action.data.todos;

    default:
      return state;
  }
}
