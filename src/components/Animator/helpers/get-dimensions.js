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

const isFunction = prop => {
  return typeof prop === 'function';
};

const executeFunction = (callback, node) => {
  const response = callback(node);

  if (!isNumber(response)) {
    throw new Error('height/width function must return a number!');
  }

  return response;
};

const getDimensions = (node, {height, width}) => {

  const nodeDimensions = node ? getDimensionsByNode(node) : {height: 0, width: 0};

  return {
    height: isNumber(height) ? height : (isFunction(height) ? executeFunction(height, node) : nodeDimensions.height),
    width: isNumber(width) ? width : (isFunction(width) ? executeFunction(width, node) : nodeDimensions.width)
  };
};

export default getDimensions;
