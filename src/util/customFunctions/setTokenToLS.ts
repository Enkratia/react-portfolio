export const setTokenToLS = (token: string) => {
  localStorage.setItem("token", JSON.stringify(token));
};
