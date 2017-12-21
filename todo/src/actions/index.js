import shortid from 'shortid';
import * as types from '../constants/actionTypes';

export function getInitialData(data) {
  return {
    type: types.RETRIEVE_INIT_DATA,
    data,
  };
}

// when the server does its thing it returns a result and json_data
const fetchSuccessed = (data) => ({ type: types.FETCH_SUCCESSED, data });
const fetchFailed = () => ({ type: types.FETCH_FAILED });

const updateSuccessed = (data) => ({ type: types.UPDATE_SUCCESSED, data });
const updateFailed = () => ({ type: types.UPDATE_FAILED });

const removeSuccessed = (data) => ({ type: types.REMOVE_SUCCESSED, data });
const removeFailed = () => ({ type: types.REMOVE_FAILED });

export function retrieve() {
  console.log('RETRIEVE from actions/index.js')
  return {
    types: [fetchSuccessed, fetchFailed],
    fetchAPI: {
      path: '/api/todos/',
      method: 'GET',
    },
  };
}

export function update(title) {
  console.log('PUT/ADD from actions/index.js')
  return {
    types: [updateSuccessed, updateFailed],
    fetchAPI: {
      path: '/api/todos/',
      method: 'PUT',
      body: {
        id: shortid.generate(),
        title,
      },
    },
  };
}

export function remove(id) {
  console.log('REMOVE from actions/index.js')
  return {
    types: [removeSuccessed, removeFailed],
    fetchAPI: {
      path: '/api/todos/',
      method: 'DELETE',
      body: {
        id,
      },
    },
  };
}
