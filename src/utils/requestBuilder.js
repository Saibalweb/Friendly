const post = async (url, body, token, type) => {
  const method = 'POST';
  let headers;
  if (type == 'file') {
    headers = {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  }
  if (!type || type == 'json') {
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  }
  requestOption = {
    headers,
    method,
    body,
  };
  try {
    const response = await fetch(url, requestOption);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const get = async(url,token)=>{
  const method = 'GET';
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
  requestOption = {
    headers,
    method,
  };
  try {
    const response = await fetch(url,requestOption);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
const deleteReq = async(url,token)=>{
  const method = 'DELETE';
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
  const requestOption = {
    method,headers
  }
  try {
    const response = await fetch(url,requestOption);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
const patch = async(url,body,token)=>{
  const method = 'PATCH';
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
  const requestOption = {
    method,headers,body
  }
  try {
    const response = await fetch(url,requestOption);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export {post,get,deleteReq,patch};
