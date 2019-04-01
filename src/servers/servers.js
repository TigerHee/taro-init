/* eslint-disable import/prefer-default-export */
import API from "./api";

export function getResultData(postData) {
  return API.post('/api/white-screen/search', postData)
}