export const dateFormatter = (date) => {
  const datum = date || new Date(Date.now());
  return new Date(datum).toLocaleString().split(",")[0];
};

export const isDateHistorical = (date) => {
  const today = new Date(Date.now()).toLocaleString().split(",")[0];
  const selectedDate = new Date(date).toLocaleString().split(",")[0];
  return today !== selectedDate;
};
