export const dateFormatter = (date) => {
  const datum = date || new Date(Date.now());
  return new Date(datum).toLocaleString().split(",")[0];
};
