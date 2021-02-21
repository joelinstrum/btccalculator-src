export const dateFormatter = (date) => {
  if(!date) { return; }
  const datum = date || new Date(Date.now());
  return new Date(datum).toLocaleString().split(",")[0];
};

export const pause = milliseconds => {
  return new Promise( resolve => {
    setTimeout( () => {
      resolve();
    }, milliseconds)
  });
}

export const numberFormatter = n => {

}

export const toDollars = n => {
  const num = isNaN(n) ? parseInt(n) : n;
  // if num is still NaN, just return
  if(isNaN(num)){
    return n;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);
}

export const toTimestamp = date => {
  var datum = Date.parse(date);
  return datum/1000;
}