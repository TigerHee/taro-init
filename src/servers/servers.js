/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http";

export function getResultData(postData) {
  return AHTTPREQUESTPI.post('/api/white-screen/search', postData)
}