export const isAtLeastSixCharacters = (input) => {
  const regex = /.{6,}/;
  return regex.test(input);
};
