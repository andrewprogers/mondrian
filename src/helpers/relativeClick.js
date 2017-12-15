const relativeCLick = (event, target) => {
  let rect = target.getBoundingClientRect();
  return {
    x: (event.clientX - rect.x) / rect.width,
    y: (event.clientY - rect.y) / rect.height
  }
}

export default relativeCLick;
