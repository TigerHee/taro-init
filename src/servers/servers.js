/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http";

/* 获取IP信息 */
export function getIpInfo() {
  return HTTP.get('https://ipinfo.tianbaows.com');
}

export function getResultData(postData) {
  return HTTPREQUEST.post('/api/white-screen/search', postData)
}