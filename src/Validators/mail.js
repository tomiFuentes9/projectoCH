export const isValidEmail = (emailInput) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(emailInput);
};
