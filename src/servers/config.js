const getBaseUrl = (url) => {
  let BASE_URL = '';
  if (process.env.NODE_ENV === "development") {
    //开发环境
    if(url.includes('/api/')){
      BASE_URL = ''
    }else{
      
    }
  } else {
    // 生产环境
  }
  return BASE_URL
}

export default getBaseUrl;
