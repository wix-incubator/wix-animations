const getPaddingSize = padding => {
  const data = new RegExp(/(\d+)px/g).exec(padding);
  return data && data[1] ? parseInt(data[1]) : 0;
};


const getDimensionsByNode = node => {
  const {scrollHeight, scrollWidth, style: {paddingRight}} = node;
  return {
    height: scrollHeight,
    width: scrollWidth + getPaddingSize(paddingRight)
  };
};

const isNumber = prop => {
  return typeof prop === 'number';
};

const getDimensions = (node, {height, width}) => {

  const nodeDimensions = node ? getDimensionsByNode(node) : {height: 0, width: 0};

  return {
    height: isNumber(height) ? height : nodeDimensions.height,
    width: isNumber(width) ? width : nodeDimensions.width
  };
};

export default getDimensions;
