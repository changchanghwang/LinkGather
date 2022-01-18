export const validateEmail = (email) => {
  const emailReg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!emailReg.test(email)) {
    return false;
  }
  return true;
};
