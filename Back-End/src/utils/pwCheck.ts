export const checkPw = (password: string, passwordCheck: string) => {
  if (password !== passwordCheck) {
    return false;
  }
  return true;
};
