const getProducts = async () => {
  const response = await fetch("https://api.restful-api.dev/objects");
  return await response.json();
};

export { getProducts };
