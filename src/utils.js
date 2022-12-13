export const isEmptyString = (string) => {
  return string.length === 0;
};

export const hasSpace = (string) => {
  return /\s/g.test(string);
};
