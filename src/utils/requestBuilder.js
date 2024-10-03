const post = async (url, body, token, type) => {
  const method = 'POST';
  if ((type = 'file')) {
    const headers = {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
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
  }
};
export {post};
