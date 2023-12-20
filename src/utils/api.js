const get = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error en la solicitud GET:', error);
    throw error;
  }
};

const post = async (endpoint, body) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
    throw error;
  }
};



export { get, post };
