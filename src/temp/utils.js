let utils = {
  randomColor() {
    let digits = '0123456789ABCDEF'.split('');
    let color = '#'
    while (color.length < 7) {
      color += digits[Math.floor(Math.random() * 15)];
    }
    return color
  }
}

export default utils;
