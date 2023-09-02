export const getTokenFromLS = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return JSON.parse(token);
  }

  return undefined;
};
