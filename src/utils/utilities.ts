export const formatPrice = (price: string | number) => {
  try {
    let _price = price.toString().replace(/$|\s/, "");
    let [_left, _right] = _price.split(".");
    if (!_left && !_right) {
      return price;
    }
    if (_left.length > 1) {
      if (_right && _right.length > 1) {
        _right = _right.slice(0, 2);
      }
    } else if (_right && _right.length > 3) {
      _right = _right.slice(0, 4);
    }
    _right = _right.padEnd(2, "0");
    _left = parseInt(_left).toLocaleString("en-US");
    return `$${_left}.${_right}`;
  } catch (e) {
    return price;
  }
};
