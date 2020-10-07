const shouldFlipAnimation = (sequence, { enter, exit }) => {
  let isFlip = !!sequence;
  if (enter) {
    if (sequence === 'default' || sequence === 'flip') {
      isFlip = false;
    }
  } else if (exit) {
    if (sequence === 'default' || sequence === 'reverse-flip') {
      isFlip = false;
    }
  }
  return isFlip;
};

export default shouldFlipAnimation;
