const relativeCLick = (event, size) => {
  let rect = event.currentTarget.getBoundingClientRect();
  return {
    x: (event.clientX - rect.x) / size.width,
    y: (event.clientY - rect.y) / size.height
  }
}

export default relativeCLick;
