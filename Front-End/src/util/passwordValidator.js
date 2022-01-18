export const validatePassword = (password, passwordCheck) => {
  if (password !== passwordCheck) return false;
  return true;
};
